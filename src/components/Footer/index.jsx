import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#eaeaea]">
      <div className=" grid grid-cols-12">
        <div className="col-span-3 flex items-center flex-col">
          <div className="flex col-span-3 items-center">
            <img
              className=" mr-2 h-24 w-auto"
              src="./Images/vector 3222 book .jpg"
              alt="Your Company"
            />
            <div className="h-full flex flex-col items-center text-[30px] font-bold text-[#62ab00] ">
              <span className="leading-[30px]">RỒNG</span>
              <span className="leading-[30px]">XANH</span>
            </div>
          </div>
          <div className="flex gap-1 mt-3">
            <div className=" w-[45px] h-[45px] rounded-md overflow-hidden hover:scale-[1.08] transition duration-300">
              <Link
                target="_blank"
                to="https://www.facebook.com/thangminh.ho.9/"
              >
                <div className="w-full h-full flex items-center justify-center bg-[#1b2f3e] hover:bg-[#61ab0086] ">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ color: "#ffffff" }}
                    className="items-center"
                  />
                </div>
              </Link>
            </div>
            <div className=" w-[45px] h-[45px] rounded-md overflow-hidden hover:scale-[1.08] transition duration-300">
              <Link target="_blank" to="https://twitter.com/?lang=vi">
                <div className="w-full h-full flex items-center justify-center bg-[#1b2f3e] hover:bg-[#61ab0086]">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </Link>
            </div>
            <div className=" w-[45px] h-[45px] rounded-md overflow-hidden hover:scale-[1.08] transition duration-300">
              <Link target="_blank" to="https://www.youtube.com/">
                <div className="w-full h-full flex items-center justify-center bg-[#1b2f3e] hover:bg-[#61ab0086]">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </Link>
            </div>
            <div className=" w-[45px] h-[45px] rounded-md overflow-hidden hover:scale-[1.08] transition duration-300">
              <Link target="_blank" to="https://www.instagram.com/?hl=vi">
                <div className="w-full h-full flex items-center justify-center bg-[#1b2f3e] hover:bg-[#61ab0086]">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="text-[20px] text-gray-600 font-bold ">LIÊN LẠC</div>
          <div className="border_underline"></div>
          <div className="text-[15px] text-gray-600 font-sans mt-[40px] w-[300px]">
            Đừng ngần ngại liên hệ với chúng tôi để được hỗ trợ thêm.
          </div>
          <div className="mt-[20px] flex">
            <Link
              className="flex"
              target="_blank"
              to="https://api.whatsapp.com/send/?phone=84775551487&text&type=phone_number&app_absent=0"
            >
              <div>
                <FontAwesomeIcon icon={faPhone} style={{ color: "#74C0FC" }} />
              </div>
              <p className="ml-[10px] text-[15px] text-gray-600 font-medium hover:underline">
                (+84)775551487
              </p>
            </Link>
          </div>
          <div className="mt-[20px] flex">
            <Link
              className="flex"
              target="_blank"
              to="mailto:Rongxanh@gmail.com"
            >
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#74C0FC" }}
                />
              </div>
              <p className="ml-[10px] text-[15px] text-gray-600 hover:underline ">
                Rongxanh@gmail.com
              </p>
            </Link>
          </div>
        </div>
        <div className="col-span-3">
          <div className="text-[20px] text-gray-600 font-bold ">
            LIÊN KẾT NHANH
          </div>
          <div className="border_underline"></div>

          <div className="mt-[40px] flex">
            <Link
              className="flex"
              target="_blank"
              to="https://api.whatsapp.com/send/?phone=84775551487&text&type=phone_number&app_absent=0"
            >
              <p className="ml-[5px] text-[17px] text-gray-600 hover:text-[#62ab00]">
                + Sách Thiếu Nhi
              </p>
            </Link>
          </div>
          <div className="mt-[5px] flex">
            <Link
              className="flex"
              target="_blank"
              to="mailto:Rongxanh@gmail.com"
            >
              <p className="ml-[5px] text-[17px] text-gray-600 hover:text-[#62ab00]">
                + Sách Chữ Ký
              </p>
            </Link>
          </div>
          <div className="mt-[5px] flex">
            <Link
              className="flex"
              target="_blank"
              to="mailto:Rongxanh@gmail.com"
            >
              <p className="ml-[5px] text-[17px] text-gray-600 hover:text-[#62ab00]">
                + Sách Bán Chạy
              </p>
            </Link>
          </div>
          <div className="mt-[5px] flex">
            <Link
              className="flex"
              target="_blank"
              to="mailto:Rongxanh@gmail.com"
            >
              <p className="ml-[5px] text-[17px] text-gray-600 hover:text-[#62ab00]">
                + Combo Sách
              </p>
            </Link>
          </div>
        </div>
        <div className="col-span-3">
          <div className="text-[20px] text-gray-600 font-bold ">
            CHĂM SÓC KHÁCH HÀNG
          </div>
          <div className="border_underline"></div>

          <div className="mt-[40px] flex">
            <Link className="flex" target="_blank" to="/PrivacyPolicy">
              <p className="ml-[5px] text-[17px] text-gray-600 hover:text-[#62ab00]">
                + Chính sách bảo mật
              </p>
            </Link>
          </div>
          <div className="mt-[5px] flex">
            <Link className="flex" target="_blank" to="/ShoppingGuide">
              <p className="ml-[5px] text-[17px] text-gray-600 hover:text-[#62ab00]">
                + Phương thức thanh toán
              </p>
            </Link>
          </div>
          <div className="mt-[5px] flex">
            <Link className="flex" target="_blank" to="/Guarantee">
              <p className="ml-[5px] text-[17px] text-gray-600 hover:text-[#62ab00]">
                + Chính sách bào hành
              </p>
            </Link>
          </div>
          <div className="mt-[5px] flex">
            <Link className="flex" target="_blank" to="/Refund">
              <p className="ml-[5px] text-[17px] text-gray-600 hover:text-[#62ab00]">
                + Chính sách đổi trả
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
