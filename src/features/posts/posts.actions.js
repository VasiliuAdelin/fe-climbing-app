import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI, fetchAPIWithBearer } from "../../api";
import config from "../../config";

const { routes } = config;
const { base, post } = routes;

export const getPosts = createAsyncThunk("auth/fetchPostsAsync", async () => {
  return await getAPI(`${base}${post.getAll}`);
});

export const createPostAsync = createAsyncThunk(
  "auth/createPostAsync",
  async (data) => {
    return await fetchAPIWithBearer(data, `${base}${post.base}`);
  }
);
