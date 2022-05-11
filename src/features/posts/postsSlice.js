import { createSlice } from '@reduxjs/toolkit';
import { getPostById, getPosts } from './posts.actions';

const initialState = {
  posts: [],
  currentPost: {},
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setFieldPosts: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        const { results = [] } = action.payload;

        state.posts = results;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.currentPost = action.payload;
      });
  },
});

export const { setFieldPosts } = postsSlice.actions;
export default postsSlice.reducer;
