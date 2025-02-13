import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:5000/api";

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAPI = async (endPoint: string) => {
  try {
    const response = await api.get(endPoint);
    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred", err);
    }
  }
};
