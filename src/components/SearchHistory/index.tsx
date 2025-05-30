import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  clearSearchHistory,
  getSearchHistory,
  removeSearchHistoryKeywork,
  storeSearchHistory,
} from "@stores/index";
import { useEffect, useState } from "react";

function SearchHistory({
  newKeyword,
  onClickKeyword,
}: {
  newKeyword: string;
  onClickKeyword: (keyword: string) => void;
}) {
  const [histories, setHistories] = useState<string[]>(getSearchHistory());

  const handleRemoveHistory = (history: string) => {
    removeSearchHistoryKeywork(history);
    setHistories(getSearchHistory());
  };

  const handleClearHistory = () => {
    clearSearchHistory();
    setHistories([]);
  };

  useEffect(() => {
    if (newKeyword) {
      storeSearchHistory(newKeyword);
    }
    setHistories(getSearchHistory());
  }, [newKeyword]);

  return (
    <>
      <div className="flex justify-between mt-3">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faClock} />
          <p className="ml-2 font-semibold text-lg">Lịch sử tìm kiếm</p>
        </div>
        <p onClick={handleClearHistory} className="text-red-201 cursor-pointer">
          Xoá tất cả
        </p>
      </div>
      <ul className="flex flex-wrap items-center mt-3 select-none">
        {histories.map((history: string) => (
          <li
            key={history}
            className="bg-slate-200 rounded-md p-1 content-center mt-2 mr-2 cursor-pointer"
          >
            <span onClick={() => onClickKeyword(history)}>{history}</span>

            <FontAwesomeIcon
              onClick={() => handleRemoveHistory(history)}
              icon={faXmark}
              className="ml-2 cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchHistory;
