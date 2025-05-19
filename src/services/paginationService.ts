import { get } from "@utils/httpRequest";
import { BookData } from "../types/Book";

export const paginationProduct = async (
  page: number,
  perPage: number
): Promise<BookData[]> => {
  try {
    const response = await get(`/search/${page}/${perPage}`);
    return response.books as BookData[];
  } catch (e) {
    console.log(e);
  }

  return [];
};
