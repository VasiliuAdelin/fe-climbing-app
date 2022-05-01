import { createSlice } from "@reduxjs/toolkit";
import { getEventById, getEvents } from "./events.actions";

const initialState = {
  events: [],
  currentEvent: {},
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setFieldEvents: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.fulfilled, (state, action) => {
        const { results = [] } = action.payload;

        state.events = results;
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.currentEvent = action.payload;
      });
  },
});

export const { setFieldEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
