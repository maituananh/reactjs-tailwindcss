import { get } from "@utils/httpRequest";
import NewBook from "../types/NewBook";

export const searchItems = async (
  searchValue: string,
  page: number = 1
): Promise<NewBook> => {
  if (!searchValue) {
    return {} as NewBook;
  }

  try {
    const response = await get(
      `/search/${encodeURIComponent(searchValue)}/${page}`
    );
    return response as NewBook;
  } catch (e) {
    console.log(e);
  }

  return {} as NewBook;
};
