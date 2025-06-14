import { Item } from "@components/index";
import { useEffect, useState } from "react";
import { getNewProducts } from "../../services";
import { BookData } from "../../types/Book";

function FlashSale() {
  const [products, setProduct] = useState<BookData[]>();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const newProducts = await getNewProducts();
      setProduct(newProducts.books);
    };

    fetchData();
  }, []);

  return (
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
            {products?.map((book, index) => (
              <Item key={index} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashSale;
