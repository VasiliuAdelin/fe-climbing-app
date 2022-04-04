import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  forgotPasswordAsync,
  loginAsync,
  registerAsync,
  updateUserDataAsync,
} from "../auth/auth.actions";

const initialState = {
  loading: true,
  posts: [],
  error: {
    isError: false,
    message: "",
  },
  success: {
    isSuccess: false,
    message: "",
  },
  notification: {
    isNotification: false,
    message: "",
  },
};

export const getPosts = createAsyncThunk("ui/getPostsAsync", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = response.data;
  return { posts };
});

export const isPendingAction = (action) => {
  return action.type.endsWith("Async/pending");
};

export const isAsyncRejected = (action) => {
  return action.type.endsWith("Async/rejected");
};

export const isAsyncFulfilled = (action) => {
  return action.type.endsWith("Async/fulfilled");
};

export const isAuthFulfilled = (action) => {
  const allowedActionCreators = [
    loginAsync.fulfilled.type,
    registerAsync.fulfilled.type,
    forgotPasswordAsync.fulfilled.type,
  ];
  return allowedActionCreators.includes(action.type);
};

const formatErrorMessage = (message = "ERROR", errors = ["Oops"]) =>
  `${message}: ${errors[0]}`;

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setFieldUI: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        const { posts = [] } = action.payload || {};
        state.loading = false;
        state.posts = posts;
      })
      .addCase(updateUserDataAsync.fulfilled, (state, action) => {
        const { code, errors = [], message = "", user } = action.payload || {};
        if ((errors || message) && code) {
          state.error = {
            isError: true,
            message: formatErrorMessage(message, errors),
          };
        }
        if (user) {
          state.success = {
            isSuccess: true,
            message: "Updated successfully",
          };
        }
      })
      .addMatcher(isAuthFulfilled, (state, action) => {
        const { errors, message, code } = action.payload || {};
        if ((errors || message) && code) {
          state.error = {
            isError: true,
            message: formatErrorMessage(message, errors),
          };
        }
      })
      .addMatcher(isPendingAction, (state) => {
        state.loading = true;
      })
      .addMatcher(isAsyncFulfilled, (state) => {
        state.loading = false;
      })
      .addMatcher(isAsyncRejected, (state, action) => {
        const { name, message } = action.error;
        state.loading = false;
        state.error = {
          isError: true,
          message: formatErrorMessage(name, [message]),
        };
      });
  },
});

export const { setFieldUI } = uiSlice.actions;
export const selectUIState = (state) => state.ui;
export default uiSlice.reducer;
