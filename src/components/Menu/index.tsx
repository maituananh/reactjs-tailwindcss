import { MenuType } from "../../types/MenuType";

function Menu(props: MenuType) {
  return (
    <div className="w-123 h-28 mt-4">
      <a href="" className="flex flex-col items-center justify-center">
        <img
          src=""
          alt="menu"
          className="h-11 w-11 bg-no-repeat bg-center bg-menu-first bg-contain rounded-md"
        />
        <p className="text-md mt-1 text-center">{props.name}</p>
      </a>
    </div>
  );
}

export default Menu;
