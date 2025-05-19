import { Star } from "@components/index";
import routes from "@configs/routes";
import { cutStringByLength } from "@utils/index";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { BookData } from "../../types/Book";

function Item({ book }: { book: BookData }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`w-11/12 h-80 flex flex-col bg-white rounded-md mt-2 hover:border-gray-400 shadow hover:shadow-slate-700 transition-shadow`}
    >
      {inView && (
        <>
          <Link
            to={`${routes.product}/${book.isbn13}`}
            className="flex justify-center items-center mt-2"
          >
            <img
              src={
                book.image ?? "https://itbook.store/img/books/9781430259831.png"
              }
              className="h-48 w-full bg-no-repeat bg-center bg-contain border-white border-2 rounded-md"
            />
          </Link>
          <div className="ml-3 mr-3 flex flex-1 flex-wrap content-between mb-2">
            <div>
              <p className="text-sm">{cutStringByLength(book.title)}</p>
            </div>
            <div>
              <div className="flex items-center">
                <p className="text-red-600 font-bold mr-2">{book.price}</p>
                <p className="bg-red-600 text-white rounded-md w-11 content-center items-center flex justify-center">
                  -25%
                </p>
              </div>
              <del className="text-gray-400">120.000 đ</del>
              <Star slot={5} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Item;
