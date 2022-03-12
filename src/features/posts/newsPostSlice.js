import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAPI, fetchAPIWithBearer, getAPI, getToken } from "../../api";

const base_url = "http://localhost:5000";

export const createNewsostAsync = createAsyncThunk("landing", async (data) => {
  return await fetchAPI(data, `${base_url}/landing`);
});
