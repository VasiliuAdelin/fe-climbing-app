import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAPI, fetchAPIWithBearer, getToken } from "../../api";

const base_url = "http://localhost:5001";

export const loginAsync = createAsyncThunk("auth/loginAsync", async (data) => {
  return await fetchAPI(data, `${base_url}/v1/auth/login`);
});

export const registerAsync = createAsyncThunk(
  "auth/registerAsync",
  async (data) => {
    return await fetchAPI(data, `${base_url}/v1/auth/register`);
  }
);

export const logout = createAsyncThunk("auth/logoutAsync", async () => {
  const refreshToken = getToken("refresh");
  return await fetchAPI({ refreshToken }, `${base_url}/v1/auth/logout`);
});

export const forgotPasswordAsync = createAsyncThunk(
  "auth/forgotPasswordAsync",
  async (data) => {
    return await fetchAPIWithBearer(
      data,
      `${base_url}/v1/auth/forgot-password`
    );
  }
);

export const updateUserDataAsync = createAsyncThunk(
  "auth/fetchUpdateUserDataAsync",
  async (props) => {
    const { id, payload } = props;

    return await fetchAPIWithBearer(
      payload,
      `${base_url}/v1/users/${id}`,
      "PATCH"
    );
  }
);