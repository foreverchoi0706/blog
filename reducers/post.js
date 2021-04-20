import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import api from "../api/api";

export const getPosts = createAsyncThunk("GET_POSTS", async (area) =>
  api.getPosts(area)
);

export const create = createAsyncThunk("CREATE", async (formData) =>
  api.create(formData)
);

export const update = createAsyncThunk("DELETE", async (id, formData) =>
  api.update(id, formData)
);

export const read = createAsyncThunk("READ", async (id) => api.read(id));

export const deletePost = createAsyncThunk("DELETE", async (id) =>
  api.delete(id)
);

const initialState = {
  postList: [],
};

const post = createReducer(initialState, {
  [getPosts.fulfilled]: (state, action) => {
    console.log(action);
    return {
      ...state,
      postList: action.payload.data,
    };
  },
});

export default post;
