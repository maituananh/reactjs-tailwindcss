import { Register, Sigin } from "@components/Forms/index";
import classNames from "classnames";
import { useState } from "react";

function LoginForm({
  handleClickIgnore,
  css = "w-1230 mt-5",
  isModeLogin = true,
}: {
  handleClickIgnore?: () => void;
  css?: string;
  isModeLogin?: boolean;
}) {
  const [isShowLoginForm, setIsShowLoginForm] = useState<boolean>(isModeLogin);

  return (
    <div className={classNames("flex justify-center bg-white rounded-md", css)}>
      <div className="bg-white w-[450px] rounded-md select-none">
        <div className="flex items-center justify-around h-[72px] space-x-7 mr-7 ml-7">
          <div
            onClick={() => setIsShowLoginForm(true)}
            className="h-8 w-1/2 flex justify-center cursor-pointer hover:border-b-2 border-b-red-201"
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

        {isShowLoginForm ? (
          <Sigin handleClickIgnore={handleClickIgnore} />
        ) : (
          <Register />
        )}
      </div>
    </div>
  );
}

export default LoginForm;
