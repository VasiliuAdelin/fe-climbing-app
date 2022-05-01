import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import uiReducer from "./features/ui/uiSlice";
import postsReducer from "./features/posts/postsSlice";
import peopleReducer from "./features/people/peopleSlice";
import eventsReducer from "./features/events/eventsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    posts: postsReducer,
    people: peopleReducer,
    events: eventsReducer,
  },
});

export default store;
