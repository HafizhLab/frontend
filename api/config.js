import axios from "axios";

export const be = axios.create({
  baseURL: $config.baseURLBackend,
  headers: {
    "Content-Type": "application/json",
  },
});

export const quran = axios.create({
  baseURL: $config.baseURLQuran,
  headers: {
    "Content-Type": "application/json",
  },
});

export const auth = axios.create({
  baseURL: $config.baseURLAuth,
  headers: {
    "Content-Type": "application/json",
  },
});
