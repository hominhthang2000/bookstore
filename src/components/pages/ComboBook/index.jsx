import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const dataDiscount = [
  {
    discount: "  -20%",
    img: "./Images/thiet_ke_chua_co_ten__8__9871b4f2fe3245e49f587d39c5378e87_medium (1).jpg",
    tilte: "Bộ Thử Tài Tìm Kiếm (Cuốn Lẻ Và Combo) - Bộ cũ",

    price: "50,000",
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
    discount: "  -20%",
    img: "./Images/thiet_ke_chua_co_ten__69__fa9c1c839b0146068ac6cc6bf27aa5b6_medium.jpg",
    tilte: "Bộ Thử Tài Tìm Kiếm (Cuốn Lẻ Và Combo) - Bộ cũ",

    price: "55,000đ",
    pricediscount: "44,000đ",
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
    img: "./Images/combo_6_cc_143f8aa34fdd4c46b050cda599878415_medium.jpg",
    tilte: "Bộ Bé Làm Họa Sĩ Cho Bé Từ 3-6 Tuổi (Cuốn Lẻ và Combo)",

    price: "38,000₫đ",
    pricediscount: "30,400đ",
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
    img: "./Images/thiet_ke_chua_co_ten__70__333edba60bcc46b886f5ca96491990d1_medium.webp",
    tilte: "Bộ Chuyện Rừng (Cuốn Lẻ và Combo)",

    price: "128,000đ",
    pricediscount: "102,400đ",
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
    img: "./Images/thiet_ke_chua_co_ten__5__214fc2f8e72148f5bf9c894e5f8dec9a_medium.webp",
    tilte: "Bách khoa cho trẻ em (Cuốn lẻ hoặc Combo)",

    price: "180,000đ",
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
    discount: "  -20%",
    img: "./Images/1_cc_5796053f8b63481d9125a184fc4e230d_medium.webp",
    tilte: "Bộ Con Là Bé Ngoan (Cuốn Lẻ)",

    price: "24,000đ",
    pricediscount: "19,200đ",
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
    img: "./Images/2-3__1__e7e7713cea604877a518cc2b75955c1d_medium.webp",
    tilte:
      "Combo Miếng Dán Thần Kì - Phát Triển Chỉ Số IQ - CQ - EQ Cho Trẻ Từ...",

    price: "150,000đ",
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
    discount: "  -20%",
    img: "./Images/thiet_ke_chua_co_ten__30__ad226b1e6d104c0093d092e894d75c01_medium.jpg",
    tilte: "Bộ Em Tập Gấp Hình Cho Trẻ Từ 3-6 Tuổi (Cuốn Lẻ Và Combo)",

    price: "48,000đ",
    pricediscount: "38,400đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
];
const ComboBook = () => {
  return (
    <div>
      <div>
        <img src="./Images/hhori_img1.webp" alt=""></img>
      </div>
      <div className="mt-[60px] flex cursor-pointer overflow-hidden">
        <div>
          <div className="w-[235px] ">
            <img
              className="h-[530px] hover:scale-[1.05] transition duration-300"
              src="./Images/hmproducts3_img1.webp"
              alt=""
            ></img>
          </div>
          <div className=" mt-6 w-[235px] ">
            <img
              className="h-[180px] hover:scale-[1.05] transition duration-300"
              src="./Images/hmproducts3_img2.webp"
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

export default ComboBook;
