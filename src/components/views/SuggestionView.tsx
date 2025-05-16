import { BookData } from "../../types/Book";
import NewBook from "../../types/NewBook";
import Item from "../items/Item";

function SuggestionView({ newBooks }: { newBooks: NewBook }) {
  return (
    <div className="w-1230 h-auto bg-suggestion bg-no-repeat bg-contain rounded-md mt-5 bg-while-blue">
      <div className="h-20 w-full"></div>
      <div className="grid grid-cols-5 ml-5">
        {newBooks
          ? newBooks.books.map((book: BookData) => {
              return <Item key={book.isbn13} book={book} />;
            })
          : []}
      </div>
    </div>
  );
}

export default SuggestionView;
