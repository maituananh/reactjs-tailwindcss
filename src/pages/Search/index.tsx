import React from "react";
import DropdownList from "../../components/dropdowns/Dropdown";
import Item from "../../components/items/Item";

function SearchItem() {
    return (
        <div className="grid grid-cols-12 w-1230 gap-4 mt-5">
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

            <div className="col-span-9 bg-white rounded-lg pl-4">
                <div className="font-semibold mt-4">
                    <p className="font-bold">KẾT QUẢ TÌM KIẾM: <a className="text-blue-600" href="">khoa học</a></p>
                </div>
                <div className="font-normal text-blue-700 mt-3">
                    <ul className="flex space-x-4">
                        <li className="bg-blue-201 w-max rounded-md content-center p-1">
                            Sách tiếng việt
                        </li>
                        <li className="bg-blue-201 w-max rounded-md content-center p-1">
                            Sách tiếng việt
                        </li>
                    </ul>
                </div>
                <div className="border-b-gray-300 border-b-2">
                    <div>
                        <p>Sắp xếp theo</p>
                    </div>
                    <div>
                        <DropdownList />
                    </div>
                </div>
                <div className="grid grid-cols-12 ml-1">
                    <div className="col-span-3">
                        <Item />
                    </div>
                    <div className="col-span-3">
                        <Item />
                    </div>
                    <div className="col-span-3">
                        <Item />
                    </div>
                    <div className="col-span-3">
                        <Item />
                    </div>
                    <div className="col-span-3">
                        <Item />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;