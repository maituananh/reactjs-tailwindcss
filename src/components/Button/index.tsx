import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

type ButtonTypes = "button" | "submit" | "reset";

function Button({
  name,
  type = "button",
  bg,
  textColor,
  border,
  icon,
  width = "w-56",
  height = "h-full",
  margin = "",
  handleClick,
}: {
  name?: string;
  type?: ButtonTypes;
  bg?: string;
  textColor?: string;
  border?: string;
  icon?: IconProp;
  width?: string;
  height?: string;
  margin?: string;
  handleClick?: () => void;
}) {
  return (
    <div
      className={classNames(
        "flex items-center justify-center rounded-md box-border cursor-pointer select-none border-2",
        bg,
        border,
        width,
        height,
        margin
      )}
    >
      <button
        onClick={handleClick}
        type={type}
        className={classNames(
          "h-9 w-full content-center font-medium",
          textColor
        )}
      >
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className={classNames("w-4 h-4", name && "mr-2")}
          />
        )}
        <span>{name}</span>
      </button>
    </div>
  );
}

export default Button;
