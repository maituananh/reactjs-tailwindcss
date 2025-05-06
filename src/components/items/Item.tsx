import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Item() {
    return (
        <div className={`w-56 h-80 bg-white rounded-md mt-2 hover:border-gray-400`}>
            <a href="" className="flex justify-center items-center mt-2">
                <img src="" className="bg-item-image h-48 w-56 bg-no-repeat bg-center bg-contain border-white border-2 rounded-md" />
            </a>
            <div className="ml-2">
                <p className="text-sm">Mua He Bat Tan</p>
                <div className="flex items-center mt-7">
                    <p className="text-red-600 font-bold mr-2">320.000 đ</p>
                    <p className="bg-red-600 text-white rounded-md w-11 content-center items-center flex justify-center">-25%</p>
                </div>
                <del className="text-gray-400">120.000 đ</del>
                <div className="text-xs">
                    <FontAwesomeIcon icon={ faStar } className="text-yellow-400" />
                    <FontAwesomeIcon icon={ faStar } className="text-yellow-400" />
                    <FontAwesomeIcon icon={ faStar } className="text-yellow-400" />
                    <FontAwesomeIcon icon={ faStar } className="text-yellow-400" />
                    <FontAwesomeIcon icon={ faStar } className="text-yellow-400" />
                    <span className="text-gray-400 ml-2">| Đã bán 1.000</span>
                </div>
            </div>
        </div>
    );
}

export default Item;