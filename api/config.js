import axios from "@nuxtjs/axios"

const baseURL = process.env.APP_BASE_API

export const json_hafizhlab = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-type": "application/json"
    }
})