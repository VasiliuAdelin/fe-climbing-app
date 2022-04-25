import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAPIWithBearer } from "../../api";
import config from "../../config";

const { routes } = config;
const { base, comment } = routes;


export const createCommentAsync = createAsyncThunk(
  "auth/createCommentAsync",
  async (data) => {
    return await fetchAPIWithBearer(data, `${base}${comment.base}`);
  }
);
