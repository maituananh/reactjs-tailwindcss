import NewBook from "../types/NewBook";
import { get } from "../utils/httpRequest";

export const getNewProducts = async (): Promise<NewBook> => {
  try {
    const response = await get(`/new`);
    return response as NewBook;
  } catch (e) {
    console.log(e);
  }

  return {} as NewBook;
};
