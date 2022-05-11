import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAPI, fetchAPIWithBearer, getToken } from '../../api';
import config from '../../config';

const { routes } = config;
const { base, auth } = routes;

export const loginAsync = createAsyncThunk('auth/loginAsync', async (data) => fetchAPI(data, `${base}${auth.login}`));

export const registerAsync = createAsyncThunk(
  'auth/registerAsync',
  async (data) => fetchAPI(data, `${base}${auth.register}`),
);

export const logout = createAsyncThunk('auth/logoutAsync', async () => {
  const refreshToken = getToken('refresh');
  return fetchAPI({ refreshToken }, `${base}${auth.logout}`);
});

export const forgotPasswordAsync = createAsyncThunk(
  'auth/forgotPasswordAsync',
  async (data) => fetchAPIWithBearer(data, `${base}/v1/auth/forgot-password`),
);

export const updateUserDataAsync = createAsyncThunk(
  'auth/fetchUpdateUserDataAsync',
  async (props) => {
    const { id, payload } = props;

    return fetchAPIWithBearer(payload, `${base}/v1/users/${id}`, 'PATCH');
  },
);
