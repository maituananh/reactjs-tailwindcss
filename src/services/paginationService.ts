import { get } from "@utils/httpRequest";
import { BookData } from "../types/Book";

export const paginationProducts = async (
  query: string,
  page: number
): Promise<BookData[]> => {
  try {
    const response = await get(`/search/${query}/${page}`);
    return response.books as BookData[];
  } catch (e) {
    console.log(e);
  }

  return [];
};
