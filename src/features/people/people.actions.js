/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAPI } from '../../api';
import config from '../../config';

const { routes } = config;
const { base, users } = routes;

export const getUserProfile = createAsyncThunk(
  'auth/fetchGetUserProfileAsync',
  async (id) => getAPI(`${base}${users.profile}/${id}`),
);
