import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, cloneDeep } from "lodash";
import { Button } from "gpl-tailwind-theme";
import FeedPostCard from "./FeedPostCard";
import Modal from "../shared/Modals/Modal";
import ViewCardInfo from "../feed/ViewCardInfo";
import AddNewPost from "./AddNewPost";
import Icon from "@material-tailwind/react/Icon";
import { selectState } from "../../features/auth/authSlice";
import Title from "../landing/Title";
import { createPostAsync, getPosts } from "../../features/posts/posts.actions";
import { createCommentAsync } from "../../features/ui/ui.actions";
import { setFieldPosts } from "../../features/posts/postsSlice";

function NewsFeedPostsSection() {
  const { posts: reduxPosts } = useSelector((state) => state.posts);
  const { user, isLoggedIn } = useSelector(selectState);
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);
  const [showPostModal, setshowPostModal] = useState(false);
  const [showAddNewPostModal, setshowAddNewPostModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    setPosts(reduxPosts);
    if (selectedPost.id) {
      setSelectedPost({
        ...reduxPosts.find((item) => item.id === selectedPost.id),
      });
    }
  }, [reduxPosts]);

  const handleOnClickPost = (id) => {
    setSelectedPost({
      ...posts.find((item) => item.id === id),
    });
    setshowPostModal(true);
  };

  const handleOnSubmit = ({
    title,
    description,
    imageLink,
    location,
    geoLocation,
  }) => {
    setshowAddNewPostModal(false);
    dispatch(
      createPostAsync({
        title,
        description,
        author: user.id,
        assets: [imageLink],
        location,
        geoLocation,
      })
    );
    setTimeout(() => {
      dispatch(getPosts());
    }, 2000);
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

    let selectedPostCopy = cloneDeep(selectedPost);
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
        name: "posts",
        value: postsCopy,
      })
    );
  };

  return (
    <>
      <Modal open={showPostModal} onClose={() => setshowPostModal(false)}>
        {!isEmpty(selectedPost) && (
          <ViewCardInfo
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
            <Title heading="Top related posts"></Title>
            {isLoggedIn && (
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
                    <div className="md:break-inside">
                      <FeedPostCard
                        key={id}
                        userImage={author.imageLink}
                        userName={author.name}
                        asset={assets[0]}
                        description={description}
                        createdAt={createdAt}
                        totalLikes={likes.length}
                        totalComments={comments.length}
                        liked={false}
                        handleOnClick={() => handleOnClickPost(id)}
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

export default NewsFeedPostsSection;
