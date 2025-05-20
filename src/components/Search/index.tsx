import { Button, Modal, SearchHistory } from "@components/index";
import routes from "@configs/routes";
import { faArrowTrendUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDebounce } from "@hooks/index";
import { searchItems } from "@services/index";
import { storeSearchHistory } from "@stores/index";
import { cutStringByLength } from "@utils/index";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookData } from "../../types/Book";
import "./index.css";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchSuggestionValue, setSearchSuggestion] = useState(false);
  const [items, setItems] = useState<BookData[]>([]);

  const searchDebounce = useDebounce(searchValue, 1000);

  window.addEventListener("scroll", () => setSearchSuggestion(false));

  useEffect(() => {
    if (!searchDebounce) {
      return;
    }

    setSearchSuggestion(true);

    const searchResults = async () => {
      const item = await searchItems(searchDebounce);
      setItems(item.books);
    };

    searchResults();
    storeSearchHistory(searchDebounce);
  }, [searchDebounce]);

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
          to={`${routes.search}/${searchValue}`}
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

      {searchSuggestionValue && (
        <Modal
          css="top-16"
          handleClick={() => setSearchSuggestion(false)}
        ></Modal>
      )}

      {searchSuggestionValue && (
        <div
          className={classNames(
            "header__search-suggestion absolute top-[50px] before:content-[''] before:block bg-white w-full rounded-md z-[1]"
          )}
        >
          <div className="p-5">
            <p className="text-white bg-red-212 h-10 rounded-md content-center text-lg pl-3">
              Quà Tặng Ngập Tràn - Rộn Ràng Đón Lễ
            </p>

            <SearchHistory />

            <div className="flex items-center mt-3 pt-2 border-t-2">
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <p className="ml-2 font-semibold text-lg">Từ khoá hot</p>
            </div>
            <div className="grid grid-cols-12 mt-3">
              {items?.map((item) => (
                <Link
                  className="col-span-4 flex hover:shadow-gray-500 hover:shadow-md"
                  onClick={() => setSearchSuggestion(false)}
                  to={`${routes.product}/${item.isbn13}`}
                >
                  <img className="h-16" src={item.image} />
                  <p className="text-sm">{cutStringByLength(item.title)}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
