import {
  Banner,
  CategoryItem,
  FlashSale,
  Menu,
  SuggestionView,
} from "@components/index";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getNewProducts, paginationProduct } from "@services/index";
import { useEffect, useState } from "react";
import { BookData } from "../../types/Book";
import { MenuType } from "../../types/MenuType";
import NewBook from "../../types/NewBook";

function Home() {
  const banners = [
    {
      img: "banner-freeship",
      url: "",
    },
    {
      img: "banner-freeship",
      url: "",
    },
    {
      img: "banner-freeship",
      url: "",
    },
    {
      img: "banner-freeship",
      url: "",
    },
  ];

  const menu: MenuType[] = [
    {
      img: "",
      url: "",
      name: "Day 05.05",
    },
    {
      img: "",
      url: "",
      name: "Flash Sale",
    },
    {
      img: "",
      url: "",
      name: "Patech",
    },
    {
      img: "",
      url: "",
      name: "Sbooks",
    },
    {
      img: "",
      url: "",
      name: "Mã Giảm Giá",
    },
    {
      img: "",
      url: "",
      name: "Sản Phẩm Mới",
    },
    {
      img: "",
      url: "",
      name: "Sản Phẩm Được Trợ Giá",
    },
    {
      img: "",
      url: "",
      name: "Phiên Chợ Cũ",
    },
    {
      img: "",
      url: "",
      name: "Bán Sỉ",
    },
    {
      img: "",
      url: "",
      name: "Manga",
    },
  ];

  const [products, setProduct] = useState<BookData[]>();
  const [newProducts, setnewProducts] = useState<NewBook>();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      Promise.all([getNewProducts(), paginationProduct(10, 1)]).then(
        ([newItems, items]) => {
          setnewProducts(newItems);
          setProduct(items);
        }
      );
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        {banners.map((_, index) => (
          <Banner key={index}></Banner>
        ))}
      </div>

      <div className="m-7 w-1230 flex justify-center items-center bg-white rounded-md">
        {menu.map((m, index) => (
          <Menu key={index} {...m} />
        ))}
      </div>

      <FlashSale books={products!} />

      <div className="w-1230 bg-white mt-5 rounded-md">
        <div className="flex h-16 border-b-2 items-center">
          <FontAwesomeIcon
            icon={faBars}
            className="w-7 h-7 text-red-400 ml-4"
          />
          <p className="ml-4 text-xl font-bold">Danh mục sản phẩm</p>
        </div>
        <div className="grid grid-cols-10 mb-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <CategoryItem key={i} />
          ))}
        </div>
      </div>

      <SuggestionView books={newProducts?.books!} />
    </div>
  );
}

export default Home;
