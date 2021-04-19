import axios from "axios";

const DEV_URL = "http://localhost:8080";

const DEP_URL = "";

const instance = axios.create({
  baseURL: DEV_URL,
});

const api = {
  read: async (id) => await instance.get("/read", id),
  create: async (formData) => await instance.post("/create", formData),
};

export default api;
