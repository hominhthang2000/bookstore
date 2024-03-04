import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const dataDiscount = [
  {
    discount: "  -10%",
    img: "./Images/buoi-dau-nhiep-anh-viet-nam_839f73fbd3d541c59f39053aabde544e_medium.webp",
    tilte: "Buổi Đầu Nhiếp Ảnh Việt Nam",

    price: "439,000",
    pricediscount: "395,100đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -10%",
    img: "./Images/nguoi-gay-anh-huong-dam-cho-di_fa647fde3db84943a9e65c1f2d9f58f8_medium.webp",
    tilte: "Người Gây Ảnh Hưởng Dám Cho Đi",

    price: "80,000đ",
    pricediscount: "72,000đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -10%",
    img: "./Images/8934974158042_11_db283de7a8ac4e3596ce3eb2559ed728_medium.webp",
    tilte: "Nhà lãnh đạo dám cho đi",

    price: "85,000₫đ",
    pricediscount: "76,500₫đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -10%",
    img: "./Images/nxbtre_full_05372018_103729_ae236a41559f40eaba13079705d319da_medium.webp",
    tilte: "Người Dám Cho Đi Bán Được Nhiều Hơn",

    price: "125,000đ",
    pricediscount: "112,500đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },

  {
    discount: "  -10%",
    img: "./Images/image_196898_967b91fb7c344131a87d4f97a234df15_medium.webp",
    tilte: "Nghề Thuyết Phục - Chuyện Đời - Chuyện Nghề Của Bậc Thầy PR",

    price: "165,000đ",
    pricediscount: "148,500đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -10%",
    img: "./Images/_chu_nghia_tu_ban_dua_tren_dam_dong_tai_ban_2018_1_2018_10_22_10_21_21_69ca390f0037496885d2d6ce7c4369da_medium.webp",
    tilte:
      "Nền Kinh Tế Chia Sẻ - Sự Kết Thúc Của Việc Làm, Và Sự Trỗi Dậy Của ...",

    price: "138,000đ",
    pricediscount: "124,200đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -10%",
    img: "./Images/8934974154921_72c44566bb174a39ac745a862ab8b3d7_medium.webp",
    tilte: "Hãy Đến Hiệu Thuốc Yukil",

    price: "168,000đ",
    pricediscount: "151,200đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -10%",
    img: "./Images/image_178713_77d7cbacb72142c5bc942cc6f845c764_medium.webp",
    tilte: "Đối đầu nơi công sở",

    price: "98,000đ",
    pricediscount: "88,200đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
];
const ComboNewBook = () => {
  return (
    <div>
      <div className="mt-[60px] flex cursor-pointer overflow-hidden">
        <div>
          <div className="w-[235px] ">
            <img
              className="h-[530px] hover:scale-[1.05] transition duration-300"
              src="./Images/hmproducts2_img1.webp"
              alt=""
            ></img>
          </div>
          <div className=" mt-6 w-[235px] ">
            <img
              className="h-[180px] hover:scale-[1.05] transition duration-300"
              src="./Images/hmproducts2_img2.webp"
              alt=""
            ></img>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex gap-4 ">
            <div className="w-full  grid grid-cols-12 ">
              {dataDiscount.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg !m-1 col-span-3 dark:bg-gray-800 p-2 px-[5px] "
                >
                  <div className="border-[1px] cursor-pointer border-[#ccc] rounded-md relative overflow-hidden flex flex-col items-center">
                    <div className=" left-0 z-10 m-1 text-[14px] absolute border  bg-[#62ab00] rounded-full w-[50px] h-[50px] font-bold text-white text-center flex justify-center items-center">
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

export default ComboNewBook;
