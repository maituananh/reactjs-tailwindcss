import { useDebounce } from "@hooks/index";
import { searchItems } from "@services/index";
import { useEffect, useRef, useState } from "react";
import NewBook from "../types/NewBook";

const useSearch = (
  initialKeyword: string = ""
): {
  item: NewBook | null;
  currentPage: number;
  currentKeyword: string;
  finallyKeyword: string;
  updateCurrentPage: (page: number) => void;
  updateKeyword: (newKeyword: string) => void;
} => {
  const prevKeyword = useRef("");

  const [item, setItem] = useState<NewBook>();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentKeyword, setNewKeyword] = useState(initialKeyword);

  const searchDebounce = useDebounce(currentKeyword, 800);

  const updateCurrentPage = (page: number) => {
    setCurrentPage(page + 1);
  };

  const updateKeyword = (newKeyword: string) => {
    console.log(newKeyword);
    setNewKeyword(newKeyword);
  };

  useEffect(() => {
    const search = async (page: number) => {
      const result = await searchItems(currentKeyword, page);
      setItem(result);
      prevKeyword.current = currentKeyword;
    };

    if (prevKeyword.current !== currentKeyword) {
      if (currentPage === 1) {
        search(currentPage);
      } else {
        setCurrentPage(1);
      }
      prevKeyword.current = currentKeyword;
    } else {
      search(currentPage);
    }
  }, [searchDebounce, currentPage]);

  return {
    item: item ?? null,
    updateKeyword,
    currentKeyword: currentKeyword,
    finallyKeyword: searchDebounce,
    currentPage: currentPage - 1,
    updateCurrentPage,
  };
};

export default useSearch;
