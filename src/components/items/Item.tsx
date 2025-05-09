import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import routes from "../../configs/routes";
import { BookData } from "../../types/Book";

function Item(book: BookData) {
  return (
    <div
      className={`w-11/12 h-80 flex flex-col bg-white rounded-md mt-2 hover:border-gray-400 shadow hover:shadow-slate-700 transition-shadow`}
    >
      <Link
        to={routes.productDetail}
        className="flex justify-center items-center mt-2"
      >
        <img
          src={book.image}
          className="bg-item-image h-48 w-full bg-no-repeat bg-center bg-contain border-white border-2 rounded-md"
        />
      </Link>
      <div className="ml-3 flex flex-1 flex-wrap content-between mb-2">
        <div>
          <p className="text-sm">{book.title}</p>
        </div>
        <div>
          <div className="flex items-center">
            <p className="text-red-600 font-bold mr-2">{book.price}</p>
            <p className="bg-red-600 text-white rounded-md w-11 content-center items-center flex justify-center">
              -25%
            </p>
          </div>
          <del className="text-gray-400">120.000 đ</del>
          <div className="text-xs">
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <span className="text-gray-400 ml-2">| Đã bán 1.000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
