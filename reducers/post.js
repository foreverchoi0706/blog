import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import api from "../api/api";

export const getTagList = createAsyncThunk("GET_TAG_LIST", async (area) =>
  api.getTagList(area)
);

export const getPostList = createAsyncThunk("GET_POSTS_LIST", async (tag) => {
  console.log(tag);
  return api.getPostList(tag);
});

export const createPost = createAsyncThunk("CREATE", async (formData) =>
  api.createPost(formData)
);

export const update = createAsyncThunk("DELETE", async (id, formData) =>
  api.update(id, formData)
);

export const readPost = createAsyncThunk("READ", async (id) =>
  api.readPost(id)
);

export const deletePost = createAsyncThunk("DELETE", async (id) =>
  api.delete(id)
);

const initialState = {
  tagList: [],
  postList: {},
  post: {},
};

const post = createReducer(initialState, {
  [getTagList.fulfilled]: (state, action) => {
    console.log(action);
    return {
      ...state,
      tagList: action.payload.data,
    };
  },
  [getPostList.fulfilled]: (state, action) => {
    return {
      ...state,
      postList: {
        ...state.postList,
        [action.meta.arg]: action.payload.data,
      },
    };
  },
  [readPost.fulfilled]: (state, action) => {
    return { ...state, post: action.payload.data };
  },
});

export default post;
