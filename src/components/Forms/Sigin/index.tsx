import { Button } from "@components/index";
import classNames from "classnames";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

function Sigin({ handleClickIgnore }: { handleClickIgnore?: () => void }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);

  return (
    <div className="pl-8 pr-8 pb-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <label>Số điện thoại/Email</label>
          <input
            {...register("email", { required: true })}
            className={classNames(
              "pl-4 border-2 h-10 w-full rounded-s-sm outline-none",
              errors.email ? "border-red-201" : "border-gray-300"
            )}
            placeholder="Nhập số điện thoại hoặc email"
            type="email"
          />
        </div>
        <div className="space-y-2">
          <label>Mật khẩu</label>
          <div
            className={classNames(
              "flex items-center h-10 w-full rounded-s-sm border-2",
              errors.password ? "border-red-201" : "border-gray-300"
            )}
          >
            <input
              {...register("password", { required: true })}
              className={classNames("pl-4 w-full outline-none")}
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
        <div className="flex flex-col items-center space-y-3 mb-5 mt-5">
          <Button type="submit" bg="bg-gray-300" name="Đăng nhập" />
          {handleClickIgnore!! && (
            <Button
              handleClick={handleClickIgnore}
              name="Bỏ qua"
              border="border-red-201"
              textColor="text-red-201"
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default Sigin;
