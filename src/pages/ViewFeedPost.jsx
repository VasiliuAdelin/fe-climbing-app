import React, { useEffect, useState } from 'react';
import { cloneDeep, isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import ViewCardInfo from '../components/feed/ViewCardInfo';
import ComplexLayout from '../components/layouts/ComplexLayout';
import { getPostById } from '../features/posts/posts.actions';
import useRouter from '../hooks/useRouter';
import Breadcrumb from '../components/shared/Breadcrumb';
import { selectState } from '../features/auth/authSlice';
import { createCommentAsync } from '../features/ui/ui.actions';
import { setFieldPosts } from '../features/posts/postsSlice';

function ViewFeedPost() {
  const [post, setPost] = useState({});
  const { user } = useSelector(selectState);
  const { currentPost } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { id } = query;

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);

  useEffect(() => {
    setPost(currentPost);
  }, [currentPost]);

  const { title = '', description = '' } = post;

  const routesBreadcrumb = [
    {
      name: 'ClimbAround',
      icon: 'home',
      urlTo: '/',
    },
    {
      name: 'News Feed',
      icon: 'article',
      urlTo: '/newsfeed',
    },
    {
      name: title,
      icon: 'article',
      urlTo: `/newsfeed/${id}`,
    },
  ];

  const handleOnSubmitComment = (message) => {
    const payloadComment = {
      description: message,
      entityId: id,
      author: user.id,
    };

    const newComment = {
      description: 'Comment sent for validation...',
      author: {
        name: user.name,
        imageLink: user.imageLink,
        id: user.id,
      },
      createdAt: new Date(),
      entityId: id,
    };

    dispatch(createCommentAsync(payloadComment));
    let postCopy = cloneDeep(post);
    let selectedPostCommentsCopy = cloneDeep(postCopy.comments || []);
    selectedPostCommentsCopy = [...selectedPostCommentsCopy, newComment];

    postCopy = {
      ...postCopy,
      comments: selectedPostCommentsCopy,
    };

    dispatch(
      setFieldPosts({
        name: 'currentPost',
        value: postCopy,
      }),
    );
  };

  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title={title}
      subtitle={description}
    >
      <Breadcrumb routes={routesBreadcrumb} />
      {!isEmpty(post) && (
        <ViewCardInfo
          image={post?.assets[0]}
          profile={post?.author?.imageLink}
          name={post?.author?.name}
          description={post?.description}
          createdAt={post?.createdAt}
          comments={post?.comments}
          onSubmit={handleOnSubmitComment}
        />
      )}
    </ComplexLayout>
  );
}

export default ViewFeedPost;
