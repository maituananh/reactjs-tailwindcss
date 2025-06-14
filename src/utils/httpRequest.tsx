import config from "@configs/env";
import axios from "axios";

export const request = axios.create({
  baseURL: config.API_URL,
});

export const get = async (path: string) => {
  const response = await request.get(path);
  return response.data;
};
