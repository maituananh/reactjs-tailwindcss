import { searchItems } from "@services/index";
import { useEffect, useRef, useState } from "react";
import NewBook from "../types/NewBook";

const useSearch = (
  keyword: string
): [NewBook | null, number, (page: number) => void] => {
  const prevKeyword = useRef("");

  const [item, setItem] = useState<NewBook>();
  const [currentPage, setCurrentPage] = useState(0);

  const updateCurrentPage = (page: number) => {
    setCurrentPage(page + 1);
  };

  useEffect(() => {
    const search = async (page: number) => {
      const result = await searchItems(keyword, page);
      setItem(result);
      prevKeyword.current = keyword;
    };

    if (prevKeyword.current !== keyword) {
      setCurrentPage(1);
      prevKeyword.current = keyword;
    } else {
      search(currentPage);
    }
  }, [keyword, currentPage]);

  return [item ?? null, currentPage - 1, updateCurrentPage];
};

export default useSearch;
