import React from "react";

const dataCategory = [
  {
    image: "./Images/hfcategories2_mini_img1.png",
    title: "Sách Văn Học",
    decreption: "Tìm cuốn sách của bạn",
  },
  {
    image: "./Images/hfcategories2_mini_img2.webp",
    title: "Sách Thiếu Nhi",
    decreption: "Tìm cuốn sách của bạn",
  },
  {
    image: "./Images/hfcategories2_mini_img3.webp",
    title: "Sách Ngoại Văn",
    decreption: "Tìm cuốn sách của bạn",
  },
  {
    image: "./Images/hfcategories2_mini_img4.png",
    title: "Sách Lịch Sử",
    decreption: "Tìm cuốn sách của bạn",
  },
  {
    image: "./Images/hfcategories2_mini_img5.png",
    title: "Truyện Trinh Thám",
    decreption: "Tìm cuốn sách của bạn",
  },
  {
    image: "./Images/hfcategories2_mini_img6.webp",
    title: "Sách Kinh Tế",
    decreption: "Tìm cuốn sách của bạn",
  },
];

function Category() {
  return (
    <div>
      <div>
        <div className="flex flex-row items-center">
          <div className="text-[30px] text-[#333333] font-bold">
            CÁC DÒNG SẢN PHẨM
          </div>
          <div className="text-[16px]  text-[#666666]">
            Tìm cuốn sách theo chủ đề bạn quan tâm.
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 cursor-pointer  justify-between mt-6">
          {dataCategory.map((item, index) => (
            <div
              key={index}
              className="col-span-4 flex items-center  overflow-hidden "
            >
              <div className="relative box-cate">
                <div className="flex flex-col pl-3 absolute  mt-7 z-10 ">
                  <div className="text-[18px] text-[#333333] font-bold">
                    {item.title}
                  </div>
                  <div className="text-sm p-1 mt-3 text-[#333333] border-solid border border-[#333333]">
                    {item.decreption}
                  </div>
                </div>
                <img
                  className="hover:scale-[1.05] transition duration-300"
                  src={item.image}
                  alt=""
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
