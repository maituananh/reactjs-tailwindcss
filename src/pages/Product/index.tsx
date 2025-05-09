import {
  faArrowTrendUp,
  faBox,
  faCarSide,
  faCartShopping,
  faGreaterThan,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/buttons/Button";
import ItemDescription from "../../components/items/ItemDescription";
import ShipInforView from "../../components/views/ShipInforView";

function ItemDetail() {
  const { itemId } = useParams();

  useEffect(() => {}, []);

  const handleClickAddToCart = () => {
    console.log("click to add");
  };

  const handleClickBuy = () => {
    console.log("click to buy");
  };

  return (
    <div className="mt-5 w-1230">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-5 bg-white w-full h-full rounded-lg">
          <div className="flex justify-center">
            <img
              className="w-11/12 h-full"
              src="https://cdn1.fahasa.com/media/catalog/product/t/_/t_-tr_-th_ng-gi_m-4.jpg"
            />
          </div>
          <div className="flex justify-center mt-4">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div key={index} className="ml-2">
                <img
                  className="w-20 h-20 bg-no-repeat bg-center bg-contain"
                  src="https://cdn1.fahasa.com/media/catalog/product/t/_/t_-tr_-th_ng-gi_m-4.jpg"
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
                  <FontAwesomeIcon icon={faCarSide} className="text-red-600" />
                </div>
                <p>
                  Thời gian giao hàng:{" "}
                  <span className="font-thin">Giao hàng uy tín</span>
                </p>
              </div>
              <FontAwesomeIcon icon={faGreaterThan} className="text-gray-500" />
            </div>
            <div className="flex text-sm items-center justify-between">
              <div className="flex items-center">
                <div className="w-6">
                  <FontAwesomeIcon icon={faBox} className="text-red-600" />
                </div>
                <p>
                  Chính sách đổi trả:{" "}
                  <span className="font-thin">Đổi trả miễn phí toàn quốc</span>
                </p>
              </div>
              <FontAwesomeIcon icon={faGreaterThan} className="text-gray-500" />
            </div>
            <div className="flex text-sm items-center justify-between">
              <div className="flex items-center">
                <div className="w-6">
                  <FontAwesomeIcon icon={faShop} className="text-red-600" />
                </div>
                <p>
                  Chính sách khách sỉ:{" "}
                  <span className="font-thin">Ưu đãi khi mua số lượng lớn</span>
                </p>
              </div>
              <FontAwesomeIcon icon={faGreaterThan} className="text-gray-500" />
            </div>
          </div>
        </div>

        <div className="col-span-7 h-max">
          <div className="pl-4 pt-4 pb-4 bg-white rounded-lg">
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-orange-235 text-white w-24 h-5 rounded-md">
                <p>Xu hướng</p>
                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  className="w-4 h-4 ml-1"
                />
              </div>
              <p className="text-2xl font-medium ml-2">
                Các Triều Đại Việt Nam
              </p>
            </div>
            <div className="flex justify-between mt-4 mr-24 text-sm">
              <div className="">
                <p>
                  Nhà cung cấp:{" "}
                  <a href="" className="font-bold">
                    Huy Hoang BookStore
                  </a>
                </p>
                <p>
                  Nhà xuất bản:{" "}
                  <span className="font-bold">NXB Thanh Niên</span>
                </p>
              </div>
              <div className="">
                <p>
                  Tác giả:{" "}
                  <span className="font-bold">Huy Hoang BookStore</span>
                </p>
                <p>
                  Hình thức bìa:{" "}
                  <span className="font-bold">Huy Hoang BookStore</span>
                </p>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <p className="text-3xl font-medium text-red-700">60.000 đ</p>
              <del className="text-gray-500 ml-3">60.000 đ</del>
              <div className="bg-red-700 text-white rounded-md ml-3 w-10">
                <p className="text-center">-50%</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pl-4 bg-white rounded-lg">
            <ShipInforView />
          </div>

          <div className="mt-4 pl-4 bg-white rounded-lg">
            <ItemDescription />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
