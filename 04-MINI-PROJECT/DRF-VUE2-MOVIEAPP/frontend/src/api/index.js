import axios from "axios";

const api = axios.create({
  baseURL: "//localhost:8000/api/v1/",
});

export default api;
