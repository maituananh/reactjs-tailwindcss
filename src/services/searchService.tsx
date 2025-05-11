import { BookData } from "../types/Book";
import { get } from "../utils/request";

export const searchItems = async (): Promise<BookData[]> => {
  try {
    const response = await get(`/search/10/1`);
    return response.books as BookData[];
  } catch (e) {
    console.log(e);
  }

  return [];
};
