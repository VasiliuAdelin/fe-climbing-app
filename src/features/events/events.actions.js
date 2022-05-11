import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAPI, fetchAPIWithBearer } from '../../api';
import config from '../../config';

const { routes } = config;
const { base, event } = routes;

export const getEvents = createAsyncThunk(
  'auth/fetchEventsAsync',
  async (query = '') => await getAPI(`${base}${event.getAll}${query}`),
);

export const createEventAsync = createAsyncThunk(
  'auth/createEventAsync',
  async (data) => await fetchAPIWithBearer(data, `${base}${event.base}`),
);

export const getEventById = createAsyncThunk(
  'auth/fetchGetEventByIdAsync',
  async (id) => await getAPI(`${base}${event.base}/${id}`),
);

export const updateEvent = createAsyncThunk(
  'auth/fetchUpdateEventAsync',
  async (props) => {
    const { id, payload } = props;

    return await fetchAPIWithBearer(
      payload,
      `${base}${event.base}/${id}`,
      'PATCH',
    );
  },
);
