import { faCar, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SellCard from "../../Cards/SellCard";

function ShippingInformationView() {
  return (
    <div className="font-thin text-sm space-y-3 pt-4">
      <p className="font-bold text-xl">Thông tin vận chuyển</p>
      <p>
        Giao hàng đến{" "}
        <span className="font-bold">Phường Bến Nghé, Quận 1, Hồ Chí Minh</span>
      </p>
      <div className="flex">
        <FontAwesomeIcon icon={faCar} className="text-green-600 mt-1" />
        <div className="ml-3">
          <p className="font-bold">Giao hàng tiêu chuẩn</p>
          <p>
            Dự kiến giao <span className="font-bold">Thứ bảy - 10/05</span>
          </p>
        </div>
      </div>
      <div className="font-semibold flex items-center">
        <p className="text-xl">Ưu đãi liên quan</p>
        <a className="flex" href="">
          <p className="text-sm text-blue-400 ml-5">Xem thêm</p>
          <FontAwesomeIcon
            icon={faGreaterThan}
            className="text-blue-400 ml-1 pt-1"
          />
        </a>
      </div>
      <div>
        <SellCard />
      </div>
    </div>
  );
}

export default ShippingInformationView;
