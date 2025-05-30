import { Button, Modal, SearchHistory } from "@components/index";
import routes from "@configs/routes";
import { faArrowTrendUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearch } from "@hooks/index";
import { cutStringByLength } from "@utils/index";
import classNames from "classnames";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

function Search() {
  window.addEventListener("scroll", () => setSearchSuggestion(false));

  const navigate = useNavigate();

  const [searchSuggestionValue, setSearchSuggestion] = useState(false);

  const { item, currentKeyword, finallyKeyword, updateKeyword } = useSearch("");

  const handleClickSearch = () => {
    setSearchSuggestion(false);

    if (!currentKeyword) {
      return;
    }

    return navigate(`${routes.search}/${currentKeyword}`);
  };

  return (
    <div className="relative" onMouseLeave={() => setSearchSuggestion(false)}>
      <div className="h-9 w-584 flex items-center border-slate-300 border-2 rounded-lg">
        <input
          onClick={() => setSearchSuggestion(true)}
          className="outline-none ml-8 mr-1 w-full"
          value={currentKeyword}
          onChange={(e) => updateKeyword(e.target.value)}
        />
        <Button
          handleClick={handleClickSearch}
          width="w-16"
          height="h-7"
          margin="mr-1"
          icon={faSearch}
          textColor="text-slate-200"
          bg="bg-red-201"
        />
      </div>

      {searchSuggestionValue && (
        <Modal css="top-16" handleClick={() => setSearchSuggestion(false)} />
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

            <SearchHistory
              newKeyword={finallyKeyword}
              onClickKeyword={(keywordSelected: string) =>
                updateKeyword(keywordSelected)
              }
            />

            <div className="flex items-center mt-3 pt-2 border-t-2">
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <p className="ml-2 font-semibold text-lg">Từ khoá hot</p>
            </div>
            <div className="grid grid-cols-12 mt-3">
              {item?.books?.map((book) => (
                <Link
                  className="col-span-4 flex hover:shadow-gray-500 hover:shadow-md"
                  onClick={() => setSearchSuggestion(false)}
                  to={`${routes.product}/${book.isbn13}`}
                >
                  <img className="h-16" src={book.image} />
                  <p className="text-sm">{cutStringByLength(book.title)}</p>
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
