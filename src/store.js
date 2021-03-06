/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/auth/authSlice';
import uiReducer from './features/ui/uiSlice';
import postsReducer from './features/posts/postsSlice';
import peopleReducer from './features/people/peopleSlice';
import eventsReducer from './features/events/eventsSlice';
import cragsReducer from './features/crags/cragsSlice';
import trainersReducer from './features/trainers/trainersSlice';
import topicsReducer from './features/topics/topicsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    posts: postsReducer,
    people: peopleReducer,
    events: eventsReducer,
    crags: cragsReducer,
    trainers: trainersReducer,
    topics: topicsReducer,
  },
});

export default store;
