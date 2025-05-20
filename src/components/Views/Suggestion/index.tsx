import { Button, Item } from "@components/index";
import routes from "@configs/routes";
import { paginationProducts } from "@services/index";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookData } from "../../../types/Book";

function SuggestionView({
  page = 1,
  isShowPagable = true,
}: {
  page?: number;
  isShowPagable?: boolean;
}) {
  const [newProducts, setnewProducts] = useState<BookData[]>();

  useEffect(() => {
    const getProducts = async () => {
      const items = await paginationProducts("mongo", 1);
      setnewProducts(items);
    };

    getProducts();
  }, [page]);

  return (
    <div className="w-1230 h-auto bg-suggestion bg-no-repeat bg-contain rounded-md mt-5 pb-3 bg-while-blue">
      <div className="h-20 w-full"></div>
      <div className="grid grid-cols-5 ml-5">
        {newProducts?.map((book: BookData) => (
          <Item key={book.isbn13} book={book} />
        ))}
      </div>

      {isShowPagable ? (
        <></>
      ) : (
        <Link
          to={`${routes.suggestion}/${page}`}
          className="flex items-center justify-center mt-3"
        >
          <Button
            name="Xem thêm"
            border="border-red-201"
            textColor="text-red-201"
          />
        </Link>
      )}
    </div>
  );
}

export default SuggestionView;
