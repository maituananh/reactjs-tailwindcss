import { get } from "@utils/httpRequest";
import { BookDetail } from "../types/BookDetail";

export const getItemById = async (
  id: string | undefined | null
): Promise<BookDetail> => {
  if (!id) return {} as BookDetail;

  try {
    const response = await get(`/books/${id}`);
    return response as BookDetail;
  } catch (e) {
    console.log(e);
  }

  return {} as BookDetail;
};
