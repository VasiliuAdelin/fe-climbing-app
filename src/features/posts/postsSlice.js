import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./posts.actions";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFieldPosts: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      const { results = [] } = action.payload;

      state.posts = results;
    });
  },
});

export const { setFieldPosts } = postsSlice.actions;
export default postsSlice.reducer;
