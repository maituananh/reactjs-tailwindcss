import classNames from "classnames";
import { Fragment, useState } from "react";
import Button from "../../Button";
import Register from "../Register";
import Sigin from "../Sigin";

function LoginForm({
  isShowIgnoreBtn = false,
  onClickIgnoreBtn,
  css = "w-1230 mt-5",
  isModeLogin = true,
}: {
  isShowIgnoreBtn?: boolean;
  css?: string;
  isModeLogin?: boolean;
  onClickIgnoreBtn?: () => void;
}) {
  const [isShowLoginForm, setIsShowLoginForm] = useState<boolean>(isModeLogin);

  return (
    <div className={classNames("flex justify-center bg-white rounded-md", css)}>
      <div className="bg-white w-[450px] rounded-md select-none">
        <div className="flex items-center justify-around h-[72px] space-x-7 mr-7 ml-7">
          <div
            onClick={() => setIsShowLoginForm(true)}
            className="hover:border-b-2 border-b-red-201 h-8 w-1/2 flex justify-center cursor-pointer"
          >
            <p>Đăng nhập</p>
          </div>
          <div
            onClick={() => setIsShowLoginForm(false)}
            className="hover:border-b-2 border-b-red-201 h-8 w-1/2 flex justify-center cursor-pointer"
          >
            <p>Đăng ký</p>
          </div>
        </div>

        {isShowLoginForm ? <Sigin /> : <Register />}

        <div className="flex flex-col items-center space-y-3 mb-5 mt-5">
          <Button
            bg="bg-gray-300"
            name={isShowLoginForm ? "Đăng nhập" : "Đăng ký"}
          />
          {isShowIgnoreBtn ? (
            <Button
              handleClick={onClickIgnoreBtn}
              name="Bỏ qua"
              border="border-red-201"
              textColor="text-red-201"
            />
          ) : (
            <Fragment />
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
