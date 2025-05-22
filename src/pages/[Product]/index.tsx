import {
  Button,
  ItemDescription,
  ShippingInformationView,
  Spinner,
} from "@components/index";
import routes from "@configs/routes";
import {
  faArrowTrendUp,
  faBox,
  faCarSide,
  faCartShopping,
  faGreaterThan,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getItemById } from "@services/productDetailService";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BookDetail } from "../../types/BookDetail";

function ItemDetail() {
  const { id } = useParams();

  const [isLoader, setIsLoader] = useState(true);
  const [item, setItem] = useState<BookDetail>();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const getItem = async () => {
      const item = await getItemById(id);
      setIsLoader(false);
      setItem(item);
    };

    getItem();
  }, [id]);

  const handleClickAddToCart = () => {
    console.log("click to add");
  };

  const handleClickBuy = () => {
    console.log("click to buy");
  };

  return (
    <div className="mt-5 w-1230">
      {isLoader ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-5 bg-white w-full h-full rounded-lg">
            <div className="flex justify-center">
              <img alt="img" className="w-11/12 h-full" src={item?.image} />
            </div>
            <div className="flex justify-center mt-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="ml-2">
                  <img
                    alt="img"
                    className="w-20 h-20 bg-no-repeat bg-center bg-contain"
                    src={item?.image}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-around mt-4">
              <Button
                bg="bg-white"
                name="Thêm vào giỏ hàng"
                textColor="text-red-700"
                border="border-2 border-red-700"
                icon={faCartShopping}
                handleClick={handleClickAddToCart}
              />
              <Button
                bg="bg-red-700"
                name="Đặt trước"
                textColor="text-white"
                border="text-red-700 border-2"
                handleClick={handleClickBuy}
              />
            </div>
            <div className="font-semibold ml-4 mr-4 space-y-2 mt-5 mb-5">
              <p>Chính sách ưu đãi của Fahasa</p>
              <div className="flex text-sm items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6">
                    <FontAwesomeIcon
                      icon={faCarSide}
                      className="text-red-600"
                    />
                  </div>
                  <p>
                    Thời gian giao hàng:{" "}
                    <span className="font-thin">Giao hàng uy tín</span>
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  className="text-gray-500"
                />
              </div>
              <div className="flex text-sm items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6">
                    <FontAwesomeIcon icon={faBox} className="text-red-600" />
                  </div>
                  <p>
                    Chính sách đổi trả:{" "}
                    <span className="font-thin">
                      Đổi trả miễn phí toàn quốc
                    </span>
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  className="text-gray-500"
                />
              </div>
              <div className="flex text-sm items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6">
                    <FontAwesomeIcon icon={faShop} className="text-red-600" />
                  </div>
                  <p>
                    Chính sách khách sỉ:{" "}
                    <span className="font-thin">
                      Ưu đãi khi mua số lượng lớn
                    </span>
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  className="text-gray-500"
                />
              </div>
            </div>
          </div>

          <div className="col-span-7 h-max">
            <div className="pl-4 pt-4 pb-4 bg-white rounded-lg">
              <div className="flex">
                <div className="flex items-center justify-center mt-2 bg-orange-235 text-white w-24 h-5 rounded-md min-w-24">
                  <p>Xu hướng</p>
                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    className="w-4 h-4 ml-1"
                  />
                </div>
                <p className="text-2xl font-medium ml-2">{item?.title}</p>
              </div>
              <div className="flex justify-between mt-4 mr-24 text-sm">
                <div className="">
                  <p>
                    Nhà cung cấp:{" "}
                    <Link to={routes.home} className="font-bold">
                      Huy Hoang BookStore
                    </Link>
                  </p>
                  <p>
                    Nhà xuất bản:{" "}
                    <span className="font-bold">{item?.publisher}</span>
                  </p>
                </div>
                <div className="">
                  <p>
                    Tác giả: <span className="font-bold">{item?.authors}</span>
                  </p>
                  <p>
                    Hình thức bìa:
                    {<span className="font-bold">Huy Hoang BookStore</span>}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <p className="text-3xl font-medium text-red-700">
                  {item?.price}
                </p>
                <del className="text-gray-500 ml-3">60.000 đ</del>
                <div className="bg-red-700 text-white rounded-md ml-3 w-10">
                  <p className="text-center">-50%</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pl-4 bg-white rounded-lg">
              <ShippingInformationView />
            </div>

            <div className="mt-4 pl-4 bg-white rounded-lg">
              <ItemDescription item={item!} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
