import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:5162/api",
    withCredentials: true,
});

export default api;
