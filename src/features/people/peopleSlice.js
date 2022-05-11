/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from './people.actions';

const initialState = {
  currentUserProfile: {},
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setFieldPeople: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.currentUserProfile = action.payload;
    });
  },
});

export const { setFieldPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
