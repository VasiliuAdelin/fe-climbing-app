import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAPI, fetchAPIWithBearer } from '../../api';
import config from '../../config';

const { routes } = config;
const { base, post } = routes;

export const getPosts = createAsyncThunk(
  'auth/fetchPostsAsync',
  async (query = '') => await getAPI(`${base}${post.getAll}${query}`),
);

export const createPostAsync = createAsyncThunk(
  'auth/createPostAsync',
  async (data) => await fetchAPIWithBearer(data, `${base}${post.base}`),
);

export const getPostById = createAsyncThunk(
  'auth/fetchGetPostByIdAsync',
  async (id) => await getAPI(`${base}${post.base}/${id}`),
);

export const updatePost = createAsyncThunk(
  'auth/fetchUpdatePost',
  async (props) => {
    const { id, payload } = props;

    return await fetchAPIWithBearer(
      payload,
      `${base}${post.base}/${id}`,
      'PATCH',
    );
  },
);
