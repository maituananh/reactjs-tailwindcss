import { searchItems } from "@services/index";
import { useEffect, useRef, useState } from "react";
import NewBook from "../types/NewBook";

const useSearch = (
  keyword: string
): [NewBook | null, number, (page: number) => void] => {
  const prevKeyword = useRef(keyword);

  const [item, setItem] = useState<NewBook>();
  const [currentPage, setCurrentPage] = useState(1);

  const setPage = (page: number) => {
    setCurrentPage(page + 1);
  };

  useEffect(() => {
    const search = async (page: number) => {
      const result = await searchItems(keyword, page);
      setItem(result);
      prevKeyword.current = keyword;
    };

    if (prevKeyword.current !== keyword) {
      console.log(prevKeyword.current);
      // setCurrentPage(1);
    }
    search(currentPage);
  }, [keyword, currentPage]);
  return [item ?? null, currentPage, setPage];
};

export default useSearch;
