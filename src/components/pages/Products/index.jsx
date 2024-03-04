import React, { useEffect, useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tabData = {
  but_viet: [
    {
      discount: "  -5%",
      img: "./Images/image_195509_1_24221_01134d873a2b4c44adb2d1d916787efb_medium.webp",
      tilte: "AP146M-40 BÚT KỸ THUẬT 1.0MM ĐỎ",

      price: "50,000",
      pricediscount: "47,500đ",
      icon: (
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "  #333333" }}
          className="hover:!text-red-500"
        />
      ),
    },
    {
      discount: "  -5%",
      img: "./Images/image_195509_1_24222_96cd0b79c5ac493a967aa335f5dde928_medium.webp",
      tilte: "AP146M-40 BÚT KỸ THUẬT 1.0MM XANH",

      price: "50,000",
      pricediscount: "47,500đ",
      icon: (
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "  #333333" }}
          className="hover:!text-red-500"
        />
      ),
    },
    {
      discount: "  -5%",
      img: "./Images/8935001805168_e27a019ff23a44608f97d253245808e3_medium.webp",
      tilte: "BÚT BI 0.5 MM LARIS - THIÊN LONG TL-095 - MỰC ĐEN",

      price: "12,000đ",
      pricediscount: "11,400đ",
      icon: (
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "  #333333" }}
          className="hover:!text-red-500"
        />
      ),
    },
    {
      discount: "  -5%",
      img: "./Images/but_bi_tl_027___tim_1_2018_06_25_10_32_47_dae3da01594c402b81e36b134d3d62f5_medium.png",
      tilte: "BÚT BI 0.5 MM THIÊN LONG TL-027 - MỰC TÍM",

      price: "6,000",
      pricediscount: "5,700đ",
      icon: (
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "  #333333" }}
          className="hover:!text-red-500"
        />
      ),
    },
  ],
  hoc_sinh: [
    {
      discount: "  -5%",
      img: "./Images/upload_99385b890874431fa7cb0b600b83ff16_medium.webp",
      tilte: "BA LÔ CG DREAM BOX-DRIVER B-12-050 XÁM",

      price: "499,000đ",
      pricediscount: "474,050đ",
      icon: (
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "  #333333" }}
          className="hover:!text-red-500"
        />
      ),
    },
  ],
  van_phong: [
    {
      discount: "  -5%",
      img: "./Images/image_244718_1_1101_13d3df6e451a46c6a9d1b9c030fd77b8_medium.webp",
      tilte: "KEO DÁN KHÔ TOMBOW PIT GLUE STICK 10G PT-TC",

      price: "499,000đ",
      pricediscount: "474,050đ",
      icon: (
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "  #333333" }}
          className="hover:!text-red-500"
        />
      ),
    },
  ],
};

const Products = () => {
  const [currentAcctiveTab, setCurrenAcctiveTab] = useState("but_viet");
  const [dataShow, setDataShow] = useState([]);
  useEffect(() => {
    setDataShow(tabData[currentAcctiveTab]);
  }, [currentAcctiveTab]);

  return (
    <div>
      <div>
        <img src="./Images/hhori_img2.webp" alt=""></img>
      </div>
      <div className="flex  mt-[40px] w-full ">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="text-[36px] text-[#333333] font-bold">
            VĂN PHÒNG PHẨM
          </div>
          <div className="flex cursor-pointer mt-6 gap-11 ">
            <div
              className={`text-[15px]  font-sans font-bold  h-8 ${
                currentAcctiveTab === "but_viet"
                  ? "text-[#62ab00] border-b-[2px] border-[#62ab00]"
                  : "text-[#333333]"
              }`}
              onClick={() => setCurrenAcctiveTab("but_viet")}
            >
              Bút - Viết
            </div>
            <div
              className={`text-[15px] font-sans font-bold h-8 ${
                currentAcctiveTab === "hoc_sinh"
                  ? "text-[#62ab00] border-b-[2px] border-[#62ab00]"
                  : "text-[#333333]"
              }`}
              onClick={() => setCurrenAcctiveTab("hoc_sinh")}
            >
              Dụng cụ học sinh
            </div>
            <div
              className={`text-[15px] font-sans font-bold h-8 ${
                currentAcctiveTab === "van_phong"
                  ? "text-[#62ab00] border-b-[2px] border-[#62ab00]"
                  : "text-[#333333]"
              }`}
              onClick={() => setCurrenAcctiveTab("van_phong")}
            >
              Dụng cụ văn phòng
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] flex cursor-pointer overflow-hidden">
        <div className="flex flex-row">
          <div className="flex gap-4 ">
            <div className="w-full  grid grid-cols-12 ">
              {dataShow?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg m-1 col-span-3 dark:bg-gray-800 p-2 px-[5px] "
                >
                  <div className="border-[1px] cursor-pointer border-[#ccc] rounded-md relative overflow-hidden flex flex-col items-center">
                    <div className=" left-0 z-20 m-1 text-[14px] absolute border  bg-[#62ab00] rounded-full w-[50px] h-[50px] font-bold text-white text-center flex justify-center items-center">
                      {item.discount}
                    </div>
                    <img
                      className="hover:scale-[1.05] transition duration-300 cursor-pointer h-[232px]"
                      src={item.img}
                      alt=""
                    ></img>
                    <div className="hover:text-[#62ab00]  text-[16px] text-[#333333] items-center p-[10px] h-[80px]">
                      {item.tilte}
                    </div>

                    <div className="flex p-[10px] w-full !pt-0">
                      <div className="flex  flex-col">
                        <div className="text-[12px] line-through text-[#f25529]">
                          {item.price}
                        </div>
                        <div className="text-[14px] font-bold">
                          {item.pricediscount}
                        </div>
                      </div>

                      <div className=" flex text-[30px] justify-end w-full items-center">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
