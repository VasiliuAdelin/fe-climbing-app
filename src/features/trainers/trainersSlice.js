/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getTrainerById, getTrainers } from './trainers.actions';

const initialState = {
  trainers: [],
  currentTrainer: {},
};

export const trainersSlice = createSlice({
  name: 'trainers',
  initialState,
  reducers: {
    setFieldTrainers: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrainers.fulfilled, (state, action) => {
        const { results = [] } = action.payload;

        state.trainers = results;
      })
      .addCase(getTrainerById.fulfilled, (state, action) => {
        state.currentTrainer = action.payload;
      });
  },
});

export const { setFieldTrainers } = trainersSlice.actions;
export default trainersSlice.reducer;
