import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../features/posts/posts.actions';
import PostsSection from './PostsSection';

function NewsFeedPostsSection() {
  const { posts: reduxPosts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dispatch(getPosts('/?sortBy=createdAt:desc'));
  }, []);

  useEffect(() => {
    setPosts(reduxPosts);
  }, [reduxPosts]);

  const cbOnSubmitPost = () => {
    setTimeout(() => {
      dispatch(getPosts());
    }, 2000);
  };
  return (
    <PostsSection
      showTitle
      title="Top Related posts"
      showCreate
      posts={posts}
      cbOnSubmitPost={cbOnSubmitPost}
    />
  );
}

export default NewsFeedPostsSection;
