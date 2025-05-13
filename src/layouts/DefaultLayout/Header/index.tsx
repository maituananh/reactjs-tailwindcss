import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCaretDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/buttons/Button";
import Modal from "../../../components/modal";
import Search from "../../../components/Search";
import routes from "../../../configs/routes";
import "./index.css";

function Header() {
  const [isShowLoginForm, setIsShowLoginForm] = useState(false);

  const handleClickLogin = () => {
    setIsShowLoginForm(true);
  };

  return (
    <div className="header w-1230 h-16 bg-white flex items-center content-center">
      <Link
        to={routes.home}
        className="bg-contain bg-no-repeat bg-center w-56 h-16 bg-header-logo"
      ></Link>

      <div className="w-24 h-full flex items-center ml-12">
        <FontAwesomeIcon icon={faBars} className="w-7 h-7 text-gray-400" />
        <FontAwesomeIcon icon={faCaretDown} className="w-4 h-4 text-gray-400" />
      </div>

      <Search />

      <div className="w-16 text-center ml-9">
        <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
        <p className="text-xs">Thông Báo</p>
      </div>

      <div className="w-16 text-center">
        <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6" />
        <p className="text-xs">Giỏ Hàng</p>
      </div>

      <div className="relative header__account">
        <div className="w-16 text-center cursor-pointer group-hover:text-red-500 transition duration-200">
          <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
          <p className="text-xs">Tài Khoản</p>
        </div>

        <div className="header__account-group-buttons w-64 h-32 absolute right-[0] bg-white items-center justify-center rounded-md">
          <div>
            <Button
              name="Đăng nhập"
              bg="bg-red-201"
              textColor="text-white"
              border="border-red-201"
              handleClick={handleClickLogin}
            ></Button>
          </div>
          <div className="mt-2">
            <Button
              name="Đăng ký"
              bg="bg-while"
              textColor="text-red-201"
              border="border-red-201"
              handleClick={() => {}}
            ></Button>
          </div>
        </div>
      </div>

      <Modal css={isShowLoginForm ? "block" : "hidden"}>
        <div className="">
          <div>
            <p>Đăng nhập</p>
            <p>Đăng ký</p>
          </div>
          <div>
            <p>Số điện thoại/Email</p>
            <input type="text" />
          </div>
          <div>
            <p>Số điện thoại/Email</p>
            <input type="text" />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Header;
