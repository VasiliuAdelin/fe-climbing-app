import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, selectUIState } from "../features/ui/uiSlice";

const NewsComponent = () => {
  const { loading, posts, error } = useSelector(selectUIState);
  const dispatch = useDispatch();

  return (
    <div>
      NewsComponent
      {JSON.stringify({ loading, error})}
      {posts && posts.length > 0 && JSON.stringify(posts[0])}
      <button onClick={() => dispatch(getPosts())}>Get Posts</button>
    </div>
  );
};

export default NewsComponent;
