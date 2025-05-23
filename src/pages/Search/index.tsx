import { DropdownList, Item, NavBar, Spinner } from "@components/index";
import routes from "@configs/routes";
import { searchItems } from "@services/searchService";
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
import NewBook from "../../types/NewBook";

function SearchItem() {
  const { value } = useParams();

  const storeSearchValue = useRef(value);

  const [item, setItem] = useState<NewBook>();
  const [isLoader, setIsLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const search = async (page: number = currentPage) => {
      storeSearchValue.current = value;
      const result = await searchItems(value!, page);

      setItem(result);
      setCurrentPage(page);
      setIsLoader(false);
    };

    if (storeSearchValue.current !== value) {
      search(1);
      return;
    }

    search();
  }, [value, currentPage]);

  const handleClickPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="grid grid-cols-12 w-1230 gap-4 mt-5">
      {isLoader ? (
        <Spinner />
      ) : (
        <>
          <NavBar />

          <div className="col-span-9 bg-white rounded-lg pl-4 pr-4">
            <div className="font-semibold mt-4">
              <p className="font-bold">
                KẾT QUẢ TÌM KIẾM:
                <Link
                  to={`${routes.search}/${value}`}
                  className="text-blue-600 ml-2"
                >
                  {value}
                </Link>
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
            <div className="flex justify-end items-center pb-4 space-x-4 border-b-gray-300 border-b-2">
              <div>
                <p>Sắp xếp theo</p>
              </div>
              <div>
                <DropdownList />
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

            <ReactPaginate
              onPageChange={(page) => handleClickPage(page.selected + 1)}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={item?.total!}
              previousLabel="<"
              previousClassName="border-2 w-7 h-7 content-center flex justify-center items-center"
              previousLinkClassName="page-link"
              nextLabel=">"
              nextClassName="border-2 w-7 h-7 content-center flex justify-center items-center"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="flex space-x-2 items-center mt-3 mb-3 justify-end"
              activeClassName="active bg-blue-300"
              pageClassName="border-2 w-auto pl-2 pr-2 h-7 content-center flex justify-center items-center"
              pageLinkClassName="page-link"
              forcePage={currentPage - 1}
              renderOnZeroPageCount={null}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default SearchItem;
