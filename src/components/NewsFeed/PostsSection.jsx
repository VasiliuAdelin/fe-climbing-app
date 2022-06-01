import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, cloneDeep } from 'lodash';
import { Button } from 'gpl-tailwind-theme';
import Icon from '@material-tailwind/react/Icon';
import FeedPostCard from './FeedPostCard';
import Modal from '../shared/Modals/Modal';
import ViewCardInfo from '../feed/ViewCardInfo';
import AddNewPost from './AddNewPost';
import { selectState } from '../../features/auth/authSlice';
import Title from '../landing/Title';
import {
  createPostAsync,
  updatePost,
} from '../../features/posts/posts.actions';
import { createCommentAsync } from '../../features/ui/ui.actions';
import { setFieldPosts } from '../../features/posts/postsSlice';
import useRouter from '../../hooks/useRouter';

function PostsSection({
  posts: receivedProps = [],
  showTitle = false,
  showCreate = false,
  title = '',
  cbOnSubmitPost = () => undefined,
}) {
  const { user, isLoggedIn } = useSelector(selectState);
  const { push } = useRouter();
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);
  const [showPostModal, setshowPostModal] = useState(false);
  const [showAddNewPostModal, setshowAddNewPostModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});

  useEffect(() => {
    setPosts(receivedProps);
    if (selectedPost.id) {
      setSelectedPost({
        ...receivedProps.find((item) => item.id === selectedPost.id),
      });
    }
  }, [receivedProps]);

  const handleOnClickPost = (id) => {
    setSelectedPost({
      ...posts.find((item) => item.id === id),
    });
    setshowPostModal(true);
  };

  const handleOnSubmit = ({
    title: propTitle,
    description,
    imageLink,
    location,
    geoLocation,
  }) => {
    setshowAddNewPostModal(false);
    dispatch(
      createPostAsync({
        title: propTitle,
        description,
        author: user.id,
        assets: [imageLink],
        location,
        geoLocation,
      }),
    );

    cbOnSubmitPost();
  };

  const handleOnToggleLikePost = (postId) => {
    if (isLoggedIn) {
      const { id } = user;
      let postsCopy = cloneDeep(posts || []);

      const selectedPostCopy = postsCopy.find((post) => post.id === postId);
      let selectedLikesCopy = cloneDeep(selectedPostCopy.likes || []);

      if (selectedLikesCopy.includes(id)) {
        selectedLikesCopy = selectedLikesCopy.filter((curr) => curr !== id);
      } else {
        selectedLikesCopy = [...selectedLikesCopy, id];
      }

      dispatch(
        updatePost({
          id: postId,
          payload: {
            likes: selectedLikesCopy,
          },
        }),
      );
      postsCopy = postsCopy.map((result) => {
        if (result.id === selectedPostCopy.id) {
          return {
            ...result,
            likes: selectedLikesCopy,
          };
        }
        return result;
      });
      dispatch(
        setFieldPosts({
          name: 'posts',
          value: postsCopy,
        }),
      );
    }
  };

  const handleOnSubmitComment = (message) => {
    const payloadComment = {
      description: message,
      entityId: selectedPost.id,
      author: user.id,
    };

    const newComment = {
      description: message,
      author: {
        name: user.name,
        imageLink: user.imageLink,
        id: user.id,
      },
      createdAt: new Date(),
      entityId: selectedPost.id,
    };

    dispatch(createCommentAsync(payloadComment));

    let postsCopy = cloneDeep(posts || []);

    const selectedPostCopy = cloneDeep(selectedPost);
    let selectedPostCommentsCopy = cloneDeep(selectedPostCopy.comments || []);
    selectedPostCommentsCopy = [...selectedPostCommentsCopy, newComment];

    postsCopy = postsCopy.map((result) => {
      if (result.id === selectedPost.id) {
        return {
          ...result,
          comments: selectedPostCommentsCopy,
        };
      }
      return result;
    });

    dispatch(
      setFieldPosts({
        name: 'posts',
        value: postsCopy,
      }),
    );
  };

  const handleOnClikShare = (id) => {
    push(`/newsfeed/${id}`);
  };

  return (
    <>
      <Modal open={showPostModal} onClose={() => setshowPostModal(false)}>
        {!isEmpty(selectedPost) && (
          <ViewCardInfo
            id={selectedPost?.author?.id}
            image={selectedPost?.assets[0]}
            profile={selectedPost?.author?.imageLink}
            name={selectedPost?.author?.name}
            description={selectedPost?.description}
            createdAt={selectedPost?.createdAt}
            comments={selectedPost?.comments}
            onSubmit={handleOnSubmitComment}
          />
        )}
      </Modal>
      <Modal
        open={showAddNewPostModal}
        onClose={() => setshowAddNewPostModal(false)}
      >
        <AddNewPost onSubmit={handleOnSubmit} />
      </Modal>
      <section className="pb-20 relative block">
        <div className="mb-16">
          <div className="max-w-7xl px-2 lg:px-10 pt-10 mx-auto">
            {showTitle && <Title heading={title} />}
            {showCreate && isLoggedIn && (
              <Button
                color="green"
                buttonType="link"
                ripple="dark"
                className="my-4"
                onClick={() => setshowAddNewPostModal(true)}
              >
                <Icon family="font-awesome" name="fa-solid fa-plus" size="lg" />
                CREATE
              </Button>
            )}
            <div className="lg:container lg:mx-auto">
              <div className="md:masonry before:box-inherit after:box-inherit">
                {posts.map((result) => {
                  const {
                    id,
                    author,
                    assets,
                    description,
                    createdAt,
                    likes,
                    comments = [],
                  } = result;
                  return (
                    <div className="md:break-inside" key={id}>
                      <FeedPostCard
                        key={id}
                        id={author?.id}
                        userImage={author.imageLink}
                        userName={author.name}
                        asset={assets[0]}
                        description={description}
                        createdAt={createdAt}
                        totalLikes={likes.length}
                        totalComments={comments.length}
                        liked={likes.includes(user?.id)}
                        handleOnClick={() => handleOnClickPost(id)}
                        handleOnLike={() => handleOnToggleLikePost(id)}
                        handleOnClikShare={() => handleOnClikShare(id)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PostsSection;
