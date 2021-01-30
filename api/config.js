import axios from "axios";

const baseURLBackend = "http://hafizhlab.hashlash.dev";
const baseURLQuran = "http://api.alquran.cloud";
const baseURLAuth = "http://localhost:8000";

export const be = axios.create({
  baseURL: baseURLBackend,
  headers: {
    "Content-Type": "application/json",
  },
});

export const quran = axios.create({
  baseURL: baseURLQuran,
  headers: {
    "Content-Type": "application/json",
  },
});

export const auth = axios.create({
  baseURL: baseURLAuth,
  headers: {
    "Content-Type": "application/json",
  },
});
