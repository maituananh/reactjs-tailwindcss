import { Button, Item, PageButtons } from "@components/index";
import routes from "@configs/routes";
import { Link } from "react-router-dom";
import { BookData } from "../../../types/Book";

function SuggestionView({
  books,
  isShowPagable = true,
}: {
  books: BookData[];
  isShowPagable?: boolean;
}) {
  return (
    <div className="w-1230 h-auto bg-suggestion bg-no-repeat bg-contain rounded-md mt-5 pb-3 bg-while-blue">
      <div className="h-20 w-full"></div>
      <div className="grid grid-cols-5 ml-5">
        {books?.map((book: BookData) => (
          <Item key={book.isbn13} book={book} />
        ))}
      </div>

      {isShowPagable ? (
        <PageButtons total={100} />
      ) : (
        <Link
          to={routes.suggestion}
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
