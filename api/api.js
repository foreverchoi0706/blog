import axios from "axios";

const DEV_URL = "http://localhost:8080";

const DEP_URL = "";

const instance = axios.create({
  baseURL: DEV_URL,
});

const api = {
  getPosts: async (area) =>
    await instance.get("/post/postList", {
      params: {
        area,
      },
    }),
  read: async (id) => await instance.get("/post/read", id),
  create: async (formData) => await instance.post("/post/create", formData),
};

export default api;
