import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.API_ENDPOINT,
  withCredentials: false,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Credentials": true
  }
});

httpClient.interceptors.request.use(
  config => {
    let token = localStorage.getItem("token");

    if (token) {
      config.headers["x-access-token"] = `${token}`;
    }

    return config;
  },

  error => {
    return Promise.reject(error);
  }
);

export default httpClient;
