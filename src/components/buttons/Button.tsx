import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

function Button({
  name,
  bg,
  textColor,
  border,
  icon,
  handleClick,
}: {
  name: string;
  bg?: string;
  textColor?: string;
  border?: string;
  icon?: IconProp;
  handleClick?: () => void;
}) {
  return (
    <div
      className={classNames(
        "flex items-center justify-center w-56 h-full rounded-md box-border cursor-pointer select-none border-2",
        bg,
        border
      )}
      onClick={handleClick}
    >
      {icon ? (
        <FontAwesomeIcon
          icon={icon}
          className={classNames("w-4 h-4 mr-2", textColor)}
        />
      ) : (
        ""
      )}

      <p className={classNames("h-9 content-center font-medium", textColor)}>
        {name}
      </p>
    </div>
  );
}

export default Button;
