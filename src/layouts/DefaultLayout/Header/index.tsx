import { Button, LoginForm, Modal, Search } from "@components/index";
import routes from "@configs/routes";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCaretDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  const [isShowPopupLogin, setIsShowPopupLogin] = useState(false);
  const [isModeLogin, setIsModeLogin] = useState(false);

  return (
    <div className="header w-1230 h-16 bg-white flex items-center content-center">
      <Link
        to={routes.home}
        className="bg-contain bg-no-repeat bg-center w-56 h-16 bg-header-logo"
      />
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
      <div className="relative header__account text-center">
        <Link to={routes.login} className="w-16 text-center">
          <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
          <p className="text-xs">Tài Khoản</p>
        </Link>

        <div
          className={classNames(
            "header__account-group-buttons w-64 h-32 absolute right-0 bg-white items-center justify-center rounded-md"
          )}
        >
          <div>
            <Button
              name="Đăng nhập"
              bg="bg-red-201"
              textColor="text-white"
              border="border-red-201"
              handleClick={() => {
                setIsShowPopupLogin(true);
                setIsModeLogin(true);
              }}
            ></Button>
          </div>
          <div className="mt-2">
            <Button
              name="Đăng ký"
              bg="bg-while"
              textColor="text-red-201"
              border="border-red-201"
              handleClick={() => {
                setIsShowPopupLogin(true);
                setIsModeLogin(false);
              }}
            ></Button>
          </div>
        </div>
      </div>

      {isShowPopupLogin ? (
        <Modal css={"top-0 flex items-start justify-center"}>
          <LoginForm
            isShowIgnoreBtn
            css="w-[450px] mt-[72px]"
            isModeLogin={isModeLogin}
            onClickIgnoreBtn={() => setIsShowPopupLogin(false)}
          />
        </Modal>
      ) : (
        <Fragment />
      )}
    </div>
  );
}

export default Header;
