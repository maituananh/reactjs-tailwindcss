import { BookData } from "../types/Book";
import { get } from "../utils/httpRequest";

export const searchItems = async (
  searchValue: string = "10/1"
): Promise<BookData[]> => {
  try {
    const response = await get(`/search/${searchValue}`);
    return response.books as BookData[];
  } catch (e) {
    console.log(e);
  }

  return [];
};
