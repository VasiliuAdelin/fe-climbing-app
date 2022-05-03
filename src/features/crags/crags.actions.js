import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI, fetchAPIWithBearer } from "../../api";
import config from "../../config";

const { routes } = config;
const { base, crag } = routes;

export const getCrags = createAsyncThunk(
  "auth/fetchCragsAsync",
  async (query = "") => {
    return await getAPI(`${base}${crag.getAll}${query}`);
  }
);

export const createCragAsync = createAsyncThunk(
  "auth/createCragAsync",
  async (data) => {
    return await fetchAPIWithBearer(data, `${base}${crag.base}`);
  }
);

export const getCragById = createAsyncThunk(
  "auth/fetchGetCragByIdAsync",
  async (id) => {
    return await getAPI(`${base}${crag.base}/${id}`);
  }
);

export const updateCrag = createAsyncThunk(
  "auth/fetchUpdateCragAsync",
  async (props) => {
    const { id, payload } = props;

    return await fetchAPIWithBearer(
      payload,
      `${base}${crag.base}/${id}`,
      "PATCH"
    );
  }
);
