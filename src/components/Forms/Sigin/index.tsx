import { useState } from "react";

function Sigin() {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="pl-8 pr-8 space-y-6">
      <div className="space-y-2">
        <p>Số điện thoại/Email</p>
        <input
          className="pl-4 border-2 border-gray-300 h-10 w-full rounded-s-sm outline-none"
          placeholder="Nhập số điện thoại hoặc email"
          type="text"
        />
      </div>
      <div className="space-y-2">
        <p>Mật khẩu</p>
        <div className="flex items-center border-gray-300 h-10 w-full rounded-s-sm border-2">
          <input
            className="pl-4 w-full outline-none"
            placeholder="Nhập mật khẩu"
            type={isShowPassword ? "text" : "password"}
          />

          <p
            onClick={() => setIsShowPassword(!isShowPassword)}
            className="text-blue-500 mr-2 cursor-pointer text-sm"
          >
            {isShowPassword ? "Ẩn" : "Hiện"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sigin;
