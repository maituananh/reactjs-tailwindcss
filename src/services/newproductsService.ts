import { get } from "@utils/httpRequest";
import NewBook from "../types/NewBook";

export const getNewProducts = async (): Promise<NewBook> => {
  try {
    const response = await get(`/new`);
    return response as NewBook;
  } catch (e) {
    console.log(e);
  }

  return {} as NewBook;
};
