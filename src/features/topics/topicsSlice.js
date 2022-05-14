/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getTopicById, getTopics, getTopicsDistinct } from './topics.actions';

const initialState = {
  topics: [],
  currentTopic: {},
  distinctTopics: [],
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    setFieldTopics: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopics.fulfilled, (state, action) => {
        const { results = [] } = action.payload;

        state.topics = results;
      })
      .addCase(getTopicsDistinct.fulfilled, (state, action) => {
        state.distinctTopics = action.payload;
      })
      .addCase(getTopicById.fulfilled, (state, action) => {
        state.currentTopic = action.payload;
      });
  },
});

export const { setFieldTopics } = topicsSlice.actions;
export default topicsSlice.reducer;
