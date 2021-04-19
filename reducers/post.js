import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";


export const read = createAsyncThunk("READ", async (id) =>
  api.read(id)
);
export const create = createAsyncThunk("CREATE", async (formData) =>
  api.create(formData)
);

const post = (state = {}, action) => {
  return state;
};

export default post;
