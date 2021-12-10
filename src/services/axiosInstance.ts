import axios from "axios";

// const baseURL = "http://localhost:3001";
const baseURL = "https://fakestoreapi.com";

const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
