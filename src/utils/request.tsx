import axios from "axios";

export const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});

export const get = async (path: string) => {
  const response = await request.get(path);
  return response.data;
};
