import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAPI, fetchAPIWithBearer } from '../../api';
import config from '../../config';

const { routes } = config;
const { base, event } = routes;

export const getEvents = createAsyncThunk(
  'auth/fetchEventsAsync',
  async (query = '') => getAPI(`${base}${event.getAll}${query}`),
);

export const createEventAsync = createAsyncThunk(
  'auth/createEventAsync',
  async (data) => fetchAPIWithBearer(data, `${base}${event.base}`),
);

export const getEventById = createAsyncThunk(
  'auth/fetchGetEventByIdAsync',
  async (id) => getAPI(`${base}${event.base}/${id}`),
);

export const updateEvent = createAsyncThunk(
  'auth/fetchUpdateEventAsync',
  async (props) => {
    const { id, payload } = props;

    return fetchAPIWithBearer(payload, `${base}${event.base}/${id}`, 'PATCH');
  },
);
