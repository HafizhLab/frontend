import axios from "axios";

const baseURLBackend = "http://hafizhlab.hashlash.dev";
const baseURLQuran = "http://api.alquran.cloud";

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
