import  axios  from "axios";

const api = axios.create({
  baseURL:"http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export const imagesApi = axios.create({
  baseURL:"http://localhost:3001",
  headers: {
    "Content-Type": "multipart/form-data",
  },
  timeout: 5000,
});
export default api;