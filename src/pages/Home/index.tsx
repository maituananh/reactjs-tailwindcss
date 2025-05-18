import { Banner, Menu } from "@components/index";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getNewProducts, searchItems } from "@services/index";
import { useEffect, useState } from "react";
import CategoryItem from "../../components/items/CategoryItem";
import Item from "../../components/items/Item";
import SuggestionView from "../../components/views/SuggestionView";
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
    const fetchData = async () => {
      Promise.all([getNewProducts(), searchItems()]).then(
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
        {banners.map((b, index) => (
          <Banner key={index}></Banner>
        ))}
      </div>

      <div className="m-7 w-1230 flex justify-center items-center bg-white rounded-md">
        {menu.map((m, index) => (
          <Menu key={index} {...m} />
        ))}
      </div>

      <div className="w-full h-full bg-flash-sale-image flex justify-center">
        <div className="flex flex-col">
          <div className="w-1230 h-16 bg-white rounded-md mt-5">
            <a href="" className="h-full flex items-center justify-start ml-5">
              <img
                src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/flashsale/label-flashsale.svg?q="
                className=""
              />
              <p className="ml-5">Kết thúc trong</p>
            </a>
          </div>
          <div className="w-1230 mt-3 mb-5">
            <div className="grid grid-cols-5">
              {products?.map((product, index) => (
                <Item key={index} book={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

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

      <SuggestionView newBooks={newProducts!} />
    </div>
  );
}

export default Home;
