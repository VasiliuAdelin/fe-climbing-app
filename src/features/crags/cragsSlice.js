import { createSlice } from '@reduxjs/toolkit';
import { getCragById, getCrags } from './crags.actions';

const initialState = {
  crags: [],
  currentCrag: {},
};

export const cragsSlice = createSlice({
  name: 'crags',
  initialState,
  reducers: {
    setFieldCrags: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCrags.fulfilled, (state, action) => {
        const { results = [] } = action.payload;

        state.crags = results;
      })
      .addCase(getCragById.fulfilled, (state, action) => {
        state.currentCrag = action.payload;
      });
  },
});

export const { setFieldCrags } = cragsSlice.actions;
export default cragsSlice.reducer;
