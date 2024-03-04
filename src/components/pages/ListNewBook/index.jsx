import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const dataDiscount = [
  {
    discount: "  -30%",
    img: "./Images/toi_ve_cc_af4a7b96100e49c8a9dbbdd1cfc4178c_medium.webp",
    tilte: "Tôi Vẽ - Phương Pháp Tự Học Vẽ Truyện Tranh",

    price: "120,000đ",
    pricediscount: "100,000đ",
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
    img: "./Images/tb30-1_7a670519dc344827af0cc77ba6c15afa_medium.webp",
    tilte: "Can Trường Bước Tiếp (Tái bản 2023)",

    price: "96,000đ",
    pricediscount: "86,300đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -20%",
    img: "./Images/thiet_ke_chua_co_ten__25__a2f2b864221d4ba89a32de2a165db1d5_medium.jpg",
    tilte: "Đời sống bí ẩn của cây",

    price: "39,000₫đ",
    pricediscount: "31,200₫đ",
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
    img: "./Images/083ff9aa590e12891cd998cd1e2195d6_15a7dceb0aa54404b8bb3bee5140e952_medium.webp",
    tilte: "Gánh Gánh... Gồng Gồng... (Xuân Phượng hồi ký)",

    price: "160,000đ",
    pricediscount: "144,000đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },

  {
    discount: "  -30%",
    img: "./Images/thiet_ke_chua_co_ten__40__ec2b0e395b764f6f9c4d7ccbe57d8e4a_medium.webp",
    tilte: "Bộ Học Toán Thật Đơn Giản Cho Trẻ Từ 2-6 Tuổi (Cuốn Lẻ và Combo)",

    price: "120,000đ",
    pricediscount: "100,000đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -20%",
    img: "./Images/thiet_ke_chua_co_ten__8__9871b4f2fe3245e49f587d39c5378e87_medium.jpg",
    tilte: "Bộ Tủ Sách Thế Giới Động Vật (Cuốn Lẻ Và Combo)",

    price: "50,000đ",
    pricediscount: "40,000đ",
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
    img: "./Images/8935074129512_1f48737ab3ab4530a23afdb9af868380_medium.webp",
    tilte: "Bí quyết hội họa - Luyện vẽ hình khối",

    price: "88,000đ",
    pricediscount: "79,200đ",
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
    img: "./Images/8935074129505_712fcb003c70456db273aec4e9f81088_medium.webp",
    tilte: "Bí Quyết Hội Họa - Ký Họa Chân Dung",

    price: "70,000đ",
    pricediscount: "63,000đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
];
function ListNewBook() {
  return (
    <div>
      <div className=" flex cursor-pointer overflow-hidden">
        <div className="mt-1">
          <div className="w-[235px] ">
            <img
              className="h-[530px] hover:scale-[1.05] transition duration-300"
              src="./Images/hmproducts1_img1.webp"
              alt=""
            ></img>
          </div>
          <div className=" mt-6 w-[235px] ">
            <img
              className="h-[180px] hover:scale-[1.05] transition duration-300"
              src="./Images/hmproducts1_img2.webp"
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
                  className="bg-white rounded-lg m-1 col-span-3 dark:bg-gray-800 p-2 px-[5px] "
                >
                  <div className="border-[1px] cursor-pointer border-[#ccc] rounded-md relative overflow-hidden">
                    <div className="z-10 m-1 text-[14px] absolute border  bg-[#62ab00] rounded-full w-[50px] h-[50px] font-bold text-white text-center flex justify-center items-center">
                      {item.discount}
                    </div>
                    <img
                      className="hover:scale-[1.05] transition duration-300 cursor-pointer"
                      src={item.img}
                      alt=""
                    ></img>
                    <div className="hover:text-[#62ab00]  text-[16px] text-[#333333] items-center p-[10px] h-[80px]">
                      {item.tilte}
                    </div>

                    <div className="flex p-[10px] !pt-0">
                      <div className="flex flex-col">
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
}

export default ListNewBook;
