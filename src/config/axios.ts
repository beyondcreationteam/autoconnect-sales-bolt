import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});
