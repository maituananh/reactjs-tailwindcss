import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

function Button({
  name,
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
      onClick={handleClick}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className={classNames("w-4 h-4", textColor)}
        />
      )}

      {name && (
        <p
          className={classNames(
            "ml-2 h-9 content-center font-medium",
            textColor
          )}
        >
          {name}
        </p>
      )}
    </div>
  );
}

export default Button;
