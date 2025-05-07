import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ItemDetail() {
    return(
        <div className="w-1230">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-5 bg-white w-full rounded-lg">
                    <div className="flex justify-center">
                        <img 
                        className="w-full h-full"
                        src="https://cdn1.fahasa.com/media/catalog/product/t/_/t_-tr_-th_ng-gi_m-4.jpg"/>
                    </div>
                    <div className="flex justify-center mt-4">
                        {
                            [1, 2, 3, 4, 5].map((item, index) => (
                                <div key={index} className="ml-2">
                                    <img 
                                    className="w-20 h-20 bg-no-repeat bg-center bg-contain"
                                    src="https://cdn1.fahasa.com/media/catalog/product/t/_/t_-tr_-th_ng-gi_m-4.jpg"/>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="col-span-7 bg-white rounded-lg h-max">
                    <div className="ml-4">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center bg-orange-235 text-white w-24 h-5 rounded-md">
                                <p>Xu hướng</p>
                                <FontAwesomeIcon icon={ faArrowTrendUp } className='w-4 h-4 ml-1' />
                            </div>
                            <p className="text-2xl font-medium ml-2">Các Triều Đại Việt Nam</p>
                        </div>
                        <div className="flex justify-between mt-4 mr-24 text-sm">
                            <div className="">
                                <p>Nhà cung cấp: <a href="" className="font-bold">Huy Hoang BookStore</a></p>
                                <p>Nhà xuất bản: <span className="font-bold">NXB Thanh Niên</span></p>
                            </div>
                            <div className="">
                                <p>Tác giả: <span className="font-bold">Huy Hoang BookStore</span></p>
                                <p>Hình thức bìa: <span className="font-bold">Huy Hoang BookStore</span></p>
                            </div>
                        </div>
                        <div className="flex items-center mt-6">
                            <p className="text-3xl font-medium text-red-700">60.000 đ</p>
                            <del className="text-gray-500 ml-3">60.000 đ</del>
                            <div className="bg-red-700 text-white rounded-md ml-3 w-10">
                                <p className="text-center">-50%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;