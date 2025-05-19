function NavBar() {
  return (
    <div className="col-span-3 bg-white rounded-lg">
      <div className="h-16 text-red-700 font-bold text-xl pl-4 pt-4 border-b-gray-300 border-b-2">
        <p>LỌC THEO</p>
      </div>
      <div>
        <div className="border-t-gray-500">
          <p className="font-bold pl-4">DANH MỤC CHÍNH</p>
          <ul className="pl-8 pt-2 text-sm space-y-2">
            <li className="flex space-x-2">
              <input type="checkbox" />
              <p>Sách Tiếng Việt</p>
            </li>
            <li className="flex space-x-2">
              <input type="checkbox" />
              <p>Sách Tiếng Việt</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
