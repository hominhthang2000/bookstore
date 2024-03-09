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
    {
      discount: "  -5%",
      img: "./Images/84b363c405ffcddf906b4aa95a3f0bec_4359e847828b41c2b11759589425d9ce_medium.webp",
      tilte: "BA LÔ CHỐNG GÙ BIG HUGS B-12-018",

      price: "599,000đ",
      pricediscount: "569,050đ",
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
      img: "./Images/b55ebc71d32e8dc7955b4cd85085152a_da38eb19cbb44018a4b1537037d6d8ec_medium.webp",
      tilte: "BA LÔ MÁY BAY B-12-029",

      price: "250,000đ",
      pricediscount: "237,500đ",
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
      img: "./Images/image_195509_1_24148_af2ec173861646ba8f027835f55c18d1_medium.webp",
      tilte: "CHUỐT RUỘT BÚT CHÌ STABILO PS4588-EXAM GRADE TAM GIÁC",

      price: "32,000đđ",
      pricediscount: "30,400đ",
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

      price: "26,000đ",
      pricediscount: "24,700đ",
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
      img: "./Images/8935001840954_dcc208d073954926b1b4343ec7b8293e_medium.webp",
      tilte: "KIM BẤM SỐ 10 STS-02",

      price: "3,800đ",
      pricediscount: "4,000đ",
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
      img: "./Images/7bace9288adc419c8fa14fd511a6033c_a27c7d6800014748a6ccd0794d63fd6f_medium.webp",
      tilte: "XÓA KÉO TOMBOW, 6MMX8M CT-CF6",

      price: "29,450đ",
      pricediscount: "31,000đ",
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
      img: "./Images/image_195509_1_40889_c70a7371473f46fb953e9930c3cac5b2_medium.webp",
      tilte: "BẤM KIM SỐ 3 OT-SL03005",

      price: "61,750",
      pricediscount: "65,000đ",
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
