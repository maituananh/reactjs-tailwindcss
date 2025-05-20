import { Item, NavBar, PageButtons, Spinner } from "@components/index";
import { searchItems } from "@services/searchService";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import DropdownList from "../../components/dropdowns/Dropdown";
import NewBook from "../../types/NewBook";

function SearchItem() {
  const { value } = useParams();

  const storeSearchValue = useRef(value);

  const [item, setItem] = useState<NewBook>();
  const [isLoader, setIsLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (storeSearchValue.current !== value) {
      setCurrentPage(1);
    }

    const search = async () => {
      const result = await searchItems(value!, currentPage);
      setItem(result);
      storeSearchValue.current = value;
      setIsLoader(false);
    };

    search();
  }, [value, currentPage]);

  const handleOnClickPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="grid grid-cols-12 w-1230 gap-4 mt-5">
      {isLoader ? (
        <Spinner />
      ) : (
        <>
          <NavBar />

          <div className="col-span-9 bg-white rounded-lg pl-4">
            <div className="font-semibold mt-4">
              <p className="font-bold">
                KẾT QUẢ TÌM KIẾM:{" "}
                <a className="text-blue-600" href="#">
                  khoa học
                </a>
              </p>
            </div>
            <div className="font-normal text-blue-700 mt-3">
              <ul className="flex space-x-4">
                <li className="bg-blue-201 w-max rounded-md content-center p-1">
                  Sách tiếng việt
                </li>
                <li className="bg-blue-201 w-max rounded-md content-center p-1">
                  Sách tiếng việt
                </li>
              </ul>
            </div>
            <div className="border-b-gray-300 border-b-2">
              <div>
                <p>Sắp xếp theo</p>
              </div>
              <div>
                <DropdownList />
              </div>
            </div>
            <div className="grid grid-cols-12 ml-1">
              {item?.books?.map((i) => (
                <div key={i.isbn13} className="col-span-3">
                  <Item book={i} />
                </div>
              ))}
            </div>

            <PageButtons total={item?.total!} onClickPage={handleOnClickPage} />
          </div>
        </>
      )}
    </div>
  );
}

export default SearchItem;
