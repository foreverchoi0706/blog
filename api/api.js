import axios from "axios";

const DEV_URL = "http://localhost:8080";

const DEP_URL = "http://blog_back.foreverchoi0706.com";

const instance = axios.create({
  baseURL: DEP_URL,
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
  readPost: async (id) =>
    await instance.get("/post/read", {
      params: {
        id,
      },
    }),
  createPost: async (formData) => await instance.post("/post/create", formData),
};

export default api;
