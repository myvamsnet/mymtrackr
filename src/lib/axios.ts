// lib/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`, // Set your base URL
  withCredentials: true, // Include credentials (cookies)
});
export default axiosInstance;
