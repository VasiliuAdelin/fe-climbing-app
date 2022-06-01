/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAPIWithBearer, getAPI } from '../../api';
import config from '../../config';

const { routes } = config;
const { base, comment } = routes;

export const createCommentAsync = createAsyncThunk(
  'auth/createCommentAsync',
  async (data) => fetchAPIWithBearer(data, `${base}${comment.base}`),
);

export const fetchCommentsAsync = createAsyncThunk(
  'auth/fetchCommentsAsync',
  async () => getAPI(`${base}${comment.base}`),
);

export const updateComment = createAsyncThunk(
  'auth/fetchUpdateCommentAsync',
  async (props) => {
    const { id, payload } = props;

    return fetchAPIWithBearer(payload, `${base}${comment.base}/${id}`, 'PATCH');
  },
);
