import { getNewProducts } from "@services/index";
import { useEffect, useState } from "react";

const useFetch = (keyword: string, page: number) => {
  const [item, setItem] = useState<object>();

  useEffect(() => {
    const search = async () => {
      const result = await getNewProducts();
      setItem(result);
    };

    search();
  }, [keyword, page]);
  return [item, page];
};
