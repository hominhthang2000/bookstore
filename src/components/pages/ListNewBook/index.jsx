import React from "react";
import { Link } from "react-router-dom";
import { booksData } from "../../../data/books";

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
              {booksData?.map((item, index) => (
                <Link
                  to={`/Productss?slug=${item.slug}`}
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListNewBook;
