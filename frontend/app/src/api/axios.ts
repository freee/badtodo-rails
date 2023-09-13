import { Axios } from "axios";

const axios = new Axios({
  baseURL:"http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});
export default axios;