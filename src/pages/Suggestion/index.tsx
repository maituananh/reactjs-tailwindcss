import { SuggestionView } from "@components/index";
import { paginationProduct } from "@services/index";
import { useEffect, useState } from "react";
import { BookData } from "../../types/Book";

function Suggestion() {
  const [items, setItems] = useState<BookData[]>();

  useEffect(() => {
    window.scrollTo(0, 0);

    const searchProductsResult = async () => {
      const products = await paginationProduct(10, 1);
      setItems(products);
    };

    searchProductsResult();
  }, []);

  return <SuggestionView books={items!} />;
}

export default Suggestion;
