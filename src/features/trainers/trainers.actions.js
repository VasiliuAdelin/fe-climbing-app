import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAPI, fetchAPIWithBearer } from '../../api';
import config from '../../config';

const { routes } = config;
const { base, trainer } = routes;

export const getTrainers = createAsyncThunk(
  'auth/fetchTrainersAsync',
  async (query = '') => getAPI(`${base}${trainer.getAll}${query}`),
);

export const createTrainerAsync = createAsyncThunk(
  'auth/createTrainerAsync',
  async (data) => fetchAPIWithBearer(data, `${base}${trainer.base}`),
);

export const getTrainerById = createAsyncThunk(
  'auth/fetchGetTrainerByIdAsync',
  async (id) => getAPI(`${base}${trainer.base}/${id}`),
);

export const updateTrainer = createAsyncThunk(
  'auth/fetchUpdateTrainerAsync',
  async (props) => {
    const { id, payload } = props;

    return fetchAPIWithBearer(payload, `${base}${trainer.base}/${id}`, 'PATCH');
  },
);
