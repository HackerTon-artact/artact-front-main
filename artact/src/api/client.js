import axios from "axios";

export const client = axios.create({
  baseURL: '',
  headers: {
    "Content-Type": "application/json",
  },
});

export const getClientAccessToken = axios.create({
  baseURL: '',
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export const uploadFile = axios.create({
    baseURL : process.env.VUE_APP_FILE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});