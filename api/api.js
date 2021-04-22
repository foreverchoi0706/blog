import axios from "axios";

const DEV_URL = "http://localhost:8080";

const DEP_URL = "";

const instance = axios.create({
  baseURL: DEV_URL,
});

const api = {
  getTagList: async (area) =>
    await instance.get("/post/tagList", {
      params: {
        area,
      },
    }),
  getPostList: async (tag) =>
    await instance.get("/post/postList", {
      params: {
        tag,
      },
    }),
  read: async (id) => await instance.get("/post/read", id),
  create: async (formData) => await instance.post("/post/create", formData),
};

export default api;