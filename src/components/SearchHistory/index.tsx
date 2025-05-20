import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSearchHistory, removeSearchHistoryKeywork } from "@stores/index";
import { useEffect, useState } from "react";

function SearchHistory() {
  const [removeHistoryValue, setRemoveHistoryValue] = useState("");
  const [isClearHistory, setIsClearHistory] = useState(false);

  console.log(removeHistoryValue);

  useEffect(() => {
    console.log("render");

    removeSearchHistoryKeywork(removeHistoryValue);
  });

  //   const handleClearHistory = () => {
  //     clearSearchHistory();
  //     setIsClearHistory(true);
  //   };

  return (
    <>
      <div className="flex justify-between mt-3">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faClock} />
          <p className="ml-2 font-semibold text-lg">Lịch sử tìm kiếm</p>
        </div>
        {/* <p onClick={handleClearHistory} className="text-red-201 cursor-pointer">
          Xoá tất cả
        </p> */}
      </div>
      <ul className="flex space-x-2 items-center mt-3">
        {getSearchHistory().map((history: string) => (
          <li
            key={history}
            className="bg-slate-200 rounded-md p-1 content-center"
          >
            {history}
            <FontAwesomeIcon
              onClick={() => setRemoveHistoryValue(history)}
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
