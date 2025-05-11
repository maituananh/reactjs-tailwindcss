import { useState } from "react";
import ButtonSearch from "../buttons/ButtonSearch";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative">
      <div className="h-9 w-584 flex items-center border-slate-300 border-2 rounded-lg">
        <input
          className="outline-none ml-8 mr-1 w-full"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <ButtonSearch />
      </div>
      <div className="absolute top-[50px] before:content-[''] before:block bg-black w-584 h-16 rounded-md"></div>
    </div>
  );
}

export default Search;
