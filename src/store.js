import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import uiReducer from "./features/ui/uiSlice";
import postsReducer from "./features/posts/postsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    posts: postsReducer
  },
});

export default store;
