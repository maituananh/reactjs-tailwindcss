function Modal({ handleClick }: { handleClick: () => void }) {
  return (
    <div
      onClick={handleClick}
      className="fixed z-[0] w-full h-full left-0 top-16 bg-modal"
    ></div>
  );
}

export default Modal;
