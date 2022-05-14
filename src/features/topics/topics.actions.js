import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAPI, fetchAPIWithBearer } from '../../api';
import config from '../../config';

const { routes } = config;
const { base, topic } = routes;

export const getTopics = createAsyncThunk(
  'topics/fetchTopicsAsync',
  async (query = '') => getAPI(`${base}${topic.getAll}${query}`),
);

export const getTopicsDistinct = createAsyncThunk(
  'topics/fetchTopicsDistinctAsync',
  async () => getAPI(`${base}${topic.topicsDistinct}`),
);

export const createTopicAsync = createAsyncThunk(
  'topics/createTopicAsync',
  async (data) => fetchAPIWithBearer(data, `${base}${topic.base}`),
);

export const getTopicById = createAsyncThunk(
  'topics/fetchGetTopicByIdAsync',
  async (id) => getAPI(`${base}${topic.base}/${id}`),
);

export const updateTopic = createAsyncThunk(
  'topics/fetchUpdateTopic',
  async (props) => {
    const { id, payload } = props;

    return fetchAPIWithBearer(payload, `${base}${topic.base}/${id}`, 'PATCH');
  },
);
