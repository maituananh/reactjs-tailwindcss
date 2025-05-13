import classNames from "classnames";

function Modal({
  children,
  handleClick,
  css = "top-0",
}: {
  children?;
  handleClick?: () => void;
  css?: string;
}) {
  return (
    <div
      onClick={handleClick}
      className={classNames(
        "header__search-modal fixed z-[0] w-full h-full left-0 bg-modal",
        css
      )}
    >
      {children}
    </div>
  );
}

export default Modal;
