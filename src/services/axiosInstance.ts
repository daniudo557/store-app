import axios from "axios";

const baseURL = "http://localhost:3001";

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
