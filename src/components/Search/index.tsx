import Button from "@/components/Button";
import Modal from "@components/Modal";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowTrendUp,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../configs/routes";
import "./index.css";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchSuggestionValue, setSearchSuggestion] = useState(false);

  window.addEventListener("scroll", () => setSearchSuggestion(false));

  return (
    <div className="relative" onMouseLeave={() => setSearchSuggestion(false)}>
      <div className="h-9 w-584 flex items-center border-slate-300 border-2 rounded-lg">
        <input
          onClick={() => setSearchSuggestion(true)}
          className="outline-none ml-8 mr-1 w-full"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Link
          onClick={() => setSearchSuggestion(false)}
          to={{
            pathname: routes.search.replace(":searchValue", searchValue),
          }}
        >
          <Button
            width="w-16"
            height="h-7"
            margin="mr-1"
            icon={faSearch}
            textColor="text-slate-200"
            bg="bg-red-201"
          />
        </Link>
      </div>

      <div
        className={classNames(
          "header__search-suggestion absolute top-[50px] before:content-[''] before:block bg-white w-full rounded-md",
          searchSuggestionValue ? "block z-[1]" : "hidden"
        )}
      >
        <div className="p-5">
          <p className="text-white bg-red-212 h-10 rounded-md content-center text-lg pl-3">
            Quà Tặng Ngập Tràn - Rộn Ràng Đón Lễ
          </p>
          <div className="flex justify-between mt-3">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faClock} />
              <p className="ml-2 font-semibold text-lg">Lịch sử tìm kiếm</p>
            </div>
            <p className="text-red-201 cursor-pointer">Xoá tất cả</p>
          </div>
          <ul className="flex space-x-2 items-center mt-3">
            <li className="bg-slate-200 rounded-md p-1 content-center">
              khoa hoc
              <FontAwesomeIcon icon={faXmark} className="ml-2 cursor-pointer" />
            </li>
            <li className="bg-slate-200 rounded-md p-1 content-center">
              vat ly
              <FontAwesomeIcon icon={faXmark} className="ml-2 cursor-pointer" />
            </li>
          </ul>
          <div className="flex items-center mt-3 pt-2 border-t-2">
            <FontAwesomeIcon icon={faArrowTrendUp} />
            <p className="ml-2 font-semibold text-lg">Từ khoá hot</p>
          </div>
          <div className="grid grid-cols-12 mt-3">
            <Link className="col-span-4 flex" to="">
              <img
                className="h-16"
                src="https://cdn1.fahasa.com/media/catalog/product/t/h/th_-h_-lo-_u.jpg"
              />
              <p>Các tác phẩm kinh điển</p>
            </Link>
            <Link className="col-span-4 flex" to="">
              <img
                className="h-16"
                src="https://cdn1.fahasa.com/media/catalog/product/t/h/th_-h_-lo-_u.jpg"
              />
              <p>Các tác phẩm kinh điển</p>
            </Link>
            <Link className="col-span-4 flex" to="">
              <img
                className="h-16"
                src="https://cdn1.fahasa.com/media/catalog/product/t/h/th_-h_-lo-_u.jpg"
              />
              <p>Các tác phẩm kinh điển</p>
            </Link>
          </div>
        </div>
      </div>
      {searchSuggestionValue ? (
        <Modal css="top-16" handleClick={() => setSearchSuggestion(false)} />
      ) : (
        <Fragment />
      )}
    </div>
  );
}

export default Search;
