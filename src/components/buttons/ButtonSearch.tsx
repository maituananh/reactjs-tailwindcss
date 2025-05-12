import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonSearch() {
  return (
    <div className="w-16 h-7 mr-1 bg-red-201 flex justify-center items-center rounded cursor-pointer">
      <FontAwesomeIcon icon={faSearch} className="w-5 h-5 text-slate-200" />
    </div>
  );
}

export default ButtonSearch;
