import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
    return (
        <div className="w-1230 grid grid-cols-12 bg-white rounded-lg mt-5 pl-5 pt-6">
            <div className="col-span-4 space-y-4 border-r-2">
                <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo.png"/>
                <p className="text-sm">
                    Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCMCông Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam
                </p>
                <p className="text-sm">
                    Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.
                </p>
                <img className="w-28 h-8" src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/logo-bo-cong-thuong-da-thong-bao1.png"/>
                <div className="flex space-x-1">
                    <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/footer/Facebook-on.png" />
                    <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png" />
                    <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Youtube-on.png" />
                    <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/tumblr-on.png" />
                    <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/twitter-on.png" />
                    <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/pinterest-on.png" />
                </div>
                <div className="flex">
                    <img className="w-28" src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/android1.png" />
                    <img className="w-28 ml-5" src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/appstore1.png" />
                </div>
            </div>
            <div className="col-span-8 pl-4">
                <div className="flex justify-around">
                    <div className="flex flex-col w-1/3">
                        <p className="font-bold text-lg mb-3">DỊCH VỤ</p>
                        <div className="space-y-3 text-sm">
                            <p>Điều khoản sử dụng</p>
                            <p>Chính sách bảo mật thông tin cá nhân</p>
                            <p>Chính sách bảo mật thanh toán</p>
                            <p>Giới thiệu Fahasa</p>
                            <p>Hệ thống trung tâm - nhà sách</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3">
                        <p className="font-bold text-lg mb-3">HỖ TRỢ</p>
                        <div className="space-y-3 text-sm">
                            <p>Điều khoản sử dụng</p>
                            <p>Chính sách bảo mật thông tin cá nhân</p>
                            <p>Chính sách bảo mật thanh toán</p>
                            <p>Giới thiệu Fahasa</p>
                            <p>Hệ thống trung tâm - nhà sách</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3">
                        <p className="font-bold text-lg mb-3">TÀI KHOẢN CỦA TÔI</p>
                        <div className="space-y-3 text-sm">
                            <p>Điều khoản sử dụng</p>
                            <p>Chính sách bảo mật thông tin cá nhân</p>
                            <p>Chính sách bảo mật thanh toán</p>
                            <p>Giới thiệu Fahasa</p>
                            <p>Hệ thống trung tâm - nhà sách</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around mt-5">
                    <div className="flex flex-col w-1/3">
                        <p className="font-bold text-lg mb-3">LIÊN HỆ</p>
                        <div className="space-y-3 text-sm">
                            <FontAwesomeIcon icon={ faLocationDot }/>
                            <span className="ml-1">60-62 Lê Lợi, Q.1, TP. HCM</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3">
                        <p className="mt-7 mb-3"></p>
                        <div className="space-y-3 text-sm">
                            <FontAwesomeIcon icon={ faEnvelope }/>
                            <span className="ml-1">cskh@fahasa.com.vn</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3">
                        <p className="mt-7 mb-3"></p>
                        <div className="space-y-3 text-sm">
                            <FontAwesomeIcon icon={ faPhone }/>
                            <span className="ml-1">1900636467</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="col-span-12 text-sm text-center text-gray-500 pb-6 mt-6">
                Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ 10, ngày 20/05/2022.
            </p>
        </div>
    );
}

export default Footer;