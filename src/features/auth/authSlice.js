import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAPI, getAPI, getToken } from '../../api';
import {
  forgotPasswordAsync,
  loginAsync,
  logout,
  registerAsync,
  updateUserDataAsync,
} from './auth.actions';

import config from '../../config';

const { routes } = config;
const { base, auth } = routes;
const base_url = 'http://localhost:5001';

const initialState = {
  user: {},
  isLoggedIn: false,
  status: 'idle',
  loading: false,
  errors: [],
  message: '',
  success: '',
  currentProject: null,
};

export const getProjectById = createAsyncThunk(
  'auth/fetchProjectById',
  async (id) => {
    const accessToken = getToken('access');
    return accessToken
      ? await getAPI(
        `https://8bbc7624-a55c-425e-b713-6a13d3f3a967.mock.pstmn.io/v1/projects/${id}`,
      )
      : null;
  },
);

export const aboutMeAsync = createAsyncThunk('auth/aboutMeAsync', async () => {
  const accessToken = getToken('access');
  if (accessToken) return accessToken ? await getAPI(`${base}${auth.me}`) : '';
});

export const resetPasswordAsync = createAsyncThunk(
  'auth/resetPassword',
  async (data) => {
    const { password, token } = data;
    return await fetchAPI(
      { password },
      `${base_url}/v1/auth/reset-password?token=${token}`,
    );
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setField: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(registerAsync.fulfilled, (state, action) => {
        const { tokens, user } = action.payload || {};
        if (user && tokens) {
          state.user = user;
          state.isLoggedIn = true;
          window.localStorage.setItem('ems-tokens', JSON.stringify(tokens));
        }
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        const { tokens, user } = action.payload || {};
        if (user && tokens) {
          state.user = user;
          state.isLoggedIn = true;
          window.localStorage.setItem('ems-tokens', JSON.stringify(tokens));
        }
      })
      .addCase(updateUserDataAsync.fulfilled, (state, action) => {
        const { user } = action.payload || {};
        if (user) {
          state.user = user;
        }
      })
      .addCase(aboutMeAsync.fulfilled, (state, action) => {
        const { errors = [], message = '', user = null } = action.payload || {};
        if (errors) {
          state.status = 'error';
          state.errors = errors;
          state.message = message;
          state.user = user;
          state.isLoggedIn = !!user;
        }
        if (user) {
          state.user = user;
          state.isLoggedIn = !!user;
        }
      })
      .addCase(logout.fulfilled, (state) => {
        window.localStorage.clear();

        state.user = null;
        state.isLoggedIn = false;
        state.value = 1;
        state.status = 'idle';
        state.loading = false;
        state.errors = [];
        state.message = '';
      })
      .addCase(forgotPasswordAsync.fulfilled, (state, action) => {
        const { errors, message, code } = action.payload || {};
        if (!code && (!message || !errors)) {
          state.status = 'emailSent';
        }
      })
      .addCase(logout.rejected, (state) => {
        window.localStorage.clear();

        state.user = null;
        state.isLoggedIn = false;
        state.value = 1;
        state.status = 'idle';
        state.loading = false;
        state.errors = [];
        state.message = '';
      })
      .addCase(resetPasswordAsync.fulfilled, (state, action) => {
        const { message = '' } = action.payload || {};

        if (message) {
          state.status = message;
          state.message = message;
        } else {
          state.status = 'password-changed';
          state.message = '';
        }
      })
      .addCase(resetPasswordAsync.rejected, (state, action) => {
        const { message = '' } = action.payload || {};

        if (message) {
          state.status = message;
          state.message = message;
        } else {
          state.status = 'password-changed';
          state.message = '';
        }
      })
      .addCase(getProjectById.fulfilled, (state, action) => {
        console.log('getProjectById.fulfilled', action.payload);
        const { data = {} } = action.payload || {};
        console.log(action.payload);
        state.currentProject = {
          ...data,
        };
        state.status = 'idle';
        state.loading = false;
      })
      .addCase(getProjectById.rejected, (state, action) => {
        state.status = 'error';
        state.errors = ['Error on getProjectById'];
        state.loading = false;
      });
  },
});

export const { setField } = authSlice.actions;
export const selectState = (state) => state.auth;
export default authSlice.reducer;
