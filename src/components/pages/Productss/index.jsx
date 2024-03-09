import React, { useEffect, useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import { Link, useSearchParams } from "react-router-dom";
import { booksData } from "../../../data/books";

const Productss = () => {
  const [count, setcount] = useState(1);
  const [datashow, setdatashow] = useState();
  const [dataDetail, setDataDetail] = useState();
  const [tab, setTab] = useState("noi-dung");
  const [queryParameters] = useSearchParams();

  const slug = queryParameters.get("slug");

  useEffect(() => {
    booksData?.forEach((item) => {
      console.log(item.slug === slug);
      if (item.slug === slug) {
        setDataDetail(item);
        setdatashow(item?.anh?.[0].img2);
      }
    });
  }, [slug]);

  console.log(datashow);
  return (
    <div className="!bg-white">
      <MainLayout>
        <div className="container mt-[50px] mb-48 !bg-white">
          <div>
            <div className=" grid grid-cols-12 gap-3">
              <div className="col-span-5">
                <div className="flex">
                  <div className="w-[106px] cursor-pointer">
                    {dataDetail?.anh?.map((item, index) => (
                      <div
                        onClick={() => setdatashow(item.img2)}
                        className="flex"
                        key={index}
                      >
                        <img
                          className=" mr-2 h-auto w-auto"
                          src={item.img1}
                          alt="Your Company"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-1 relative cursor-pointer">
                    <div className="absolute right-[35px] text-base border-solid border-2 border-[#62ab00] rounded font-bold h-[45px] w-[45px] flex justify-center items-center text-[#fff] bg-[#62ab00]">
                      -20%
                    </div>
                    <img
                      className=" mr-2 h-[640px] w-auto object-contain"
                      src={datashow}
                      alt="Your Company"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-7">
                <div className="flex flex-col mt-7">
                  <div className="text-[18px] font-roboto font-bold text-[#333333]">
                    {dataDetail?.tilte}
                  </div>
                  <div className="text-[14px] font-roboto text-[#333333]">
                    Nhà cung cấp:{" "}
                    <span className="text-[#0000EE]">Đông A </span>| Loại bìa:{" "}
                    <span className="text-[#0000EE]">Bìa Mềm</span> | Mã SP:
                    8936071672704
                  </div>
                  <hr className="mt-[30px] mb-[10px]"></hr>
                  <div className=" font-roboto">
                    <span className="text-[24px] font-bold text-[#62ab00] mr-[15px]">
                      {dataDetail?.pricediscount}
                    </span>
                    <span className="line-through font-bold text-[20px] text-[#bebebe] mr-[15px]">
                      {dataDetail?.price}
                    </span>
                    <span className="text-[14px]">
                      (Bạn đã tiết kiệm được 20,000₫)
                    </span>
                  </div>
                  <hr className="mt-[10px] mb-[10px]"></hr>
                  <div className="p-[10px] mt-[30px] font-roboto font-bold bg-[#e8af462e] border-solid border-[1px] border-[#ffc214]">
                    <div className=" text-[14px] text-[#333333] mb-[10px] ">
                      Khuyến mãi & Ưu đãi tại
                      <Link className="text-[#62ab00]" target="_blank" to="/">
                        RONGXANH.VN
                      </Link>
                    </div>
                    <div className=" text-[14px] mb-1">
                      ▪ <span className="text-[#62ab00]">Freeship</span> TP.HCM
                      cho đơn hàng
                      <span className="text-[#62ab00]">
                        {" "}
                        từ 1.000.000 đồng
                      </span>{" "}
                    </div>
                    <div className=" text-[14px]">
                      ▪ <span className="text-[#62ab00]">Freeship</span> tại các
                      tỉnh thành ngoài TP.HCM cho đơn hàng
                      <span className="text-[#62ab00]">
                        {" "}
                        từ 1.500.000 đồng
                      </span>{" "}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className=" text-[14px] text-[#333333] font-roboto font-bold mt-3 ">
                      Số lượng
                    </span>
                    <div className="flex mt-2  items-center">
                      <button
                        onClick={() => {
                          if (count > 1) {
                            setcount((prevData) => prevData - 1);
                          }
                        }}
                        className="font-roboto items-center flex justify-center border-solid rounded-l-sm border-[1px] w-[40px] h-[35px]"
                      >
                        <span className="text-[25px]">-</span>
                      </button>
                      <input
                        onChange={(e) => {
                          if (e.target.value > 0) {
                            setcount(e.target.value);
                          } else {
                            setcount("");
                          }
                        }}
                        onBlur={(e) => {
                          if (e.target.value === "") {
                            setcount(1);
                          }
                        }}
                        className="font-roboto border-solid border-[1px] text-center w-[100px] h-[35px]"
                        value={count}
                      ></input>
                      <button
                        onClick={() => {
                          setcount((prevData) => prevData + 1);
                        }}
                        className=" mr-3 font-roboto items-center flex justify-center border-solid rounded-r-sm border-[1px] w-[40px] h-[35px]"
                      >
                        <span className="text-[25px]">+</span>
                      </button>
                      <button className="text-[14px] font-bold font-roboto text-white bg-[#62ab00] h-[40px] w-[128px] mr-3 ">
                        THÊM VÀO GIỎ
                      </button>
                      <button className="text-[14px] font-bold font-roboto text-white bg-[#62ab00] h-[40px] w-[128px] ">
                        MUA NGAY
                      </button>
                    </div>
                  </div>
                  <div className="h-[50px] flex items-center gap-1 p-4 bg-[#9696962e] mt-[30px] font-roboto font-bold text-[14px] text-[#333333] border-solid border-[1px] border-[#b5b5b5] rounded">
                    Gọi đặt mua
                    <Link
                      className="text-[#ff9900]"
                      target="_blank"
                      to="https://api.whatsapp.com/send/?phone=84775551487&text&type=phone_number&app_absent=0"
                    >
                      (+84) 7755 1487
                    </Link>
                    (Thứ 2 - Thứ 6 | 08:00 - 17:00)
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 mt-5 !font-roboto gap-3">
              <div className="col-span-9 flex flex-col ">
                <div className="flex">
                  <div className="bg-[#9696962e] p-4 gap-2 h-[50px] w-full flex font-roboto font-bold text-[16px]">
                    <button
                      onClick={() => setTab("noi-dung")}
                      className={`${
                        tab === "noi-dung"
                          ? "text-[#62ab00] "
                          : "text-[#333333]"
                      }`}
                    >
                      {" "}
                      MÔ TẢ
                    </button>
                    <button
                      onClick={() => setTab("binh-luan")}
                      className={`${
                        tab === "binh-luan"
                          ? "text-[#62ab00] "
                          : "text-[#333333]"
                      }`}
                    >
                      {" "}
                      BÌNH LUẬN
                    </button>
                  </div>
                </div>
                {tab === "noi-dung" && (
                  <div className=" border-solid border-[1px]">
                    <div className="bg-[#9696962e] mt-4 w-[200px] ml-4 h-[40px]">
                      <div className=" font-roboto text-[14px] w-[200px] h-[40px] text-[#4f4f4f] flex items-center p-2">
                        Mã hàng : 8936071672704
                      </div>
                    </div>
                    <div
                      className="mt-[20px] p-[20px]"
                      dangerouslySetInnerHTML={{ __html: dataDetail?.detail }}
                    ></div>
                  </div>
                )}
                {tab === "binh-luan" && (
                  <div>
                    <div className="flex flex-col  border-solid border-[1px]">
                      <div className="font-roboto font-bold mt-3 ml-3">
                        1 bình luận
                      </div>
                      <hr className="mt-3"></hr>
                      <div className="flex p-4">
                        <div>
                          <img
                            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/357065009_3679545938933538_8399820452446118100_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ehvUFSNc4-QAX-RtYWk&_nc_oc=AQm017xetsFSEeO3PPwUC9cUXyKpDabsKKoPO7Ca3G_Shur2erNNhKbaHYm9WjQ2Zqw&_nc_ht=scontent.fsgn2-5.fna&edm=AJqh0Q8EAAAA&oh=00_AfAW0oagVrTv7msgMx271T_yagJPU4d-DY_Q2Yhs8K-quA&oe=65F17A64"
                            alt=""
                          ></img>
                        </div>
                        <div className="flex flex-col ml-2 border-solid border-[1px] border-[#d3d6db] w-full ">
                          <textarea
                            className="min-h-[100px] outline-none p-3"
                            placeholder="Viết bình luận..."
                          ></textarea>
                          <div className=" flex justify-end items-center  h-[40px] bg-[#f5f6f7]">
                            <button className="bg-[#425674] hover:bg-[#88a3cc] h-[30px] rounded w-[55px] text-white">
                              Đăng
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr className="mt-3"></hr>
                      <div className="flex p-4">
                        <div>
                          <img
                            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/357065009_3679545938933538_8399820452446118100_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ehvUFSNc4-QAX-RtYWk&_nc_oc=AQm017xetsFSEeO3PPwUC9cUXyKpDabsKKoPO7Ca3G_Shur2erNNhKbaHYm9WjQ2Zqw&_nc_ht=scontent.fsgn2-5.fna&edm=AJqh0Q8EAAAA&oh=00_AfAW0oagVrTv7msgMx271T_yagJPU4d-DY_Q2Yhs8K-quA&oe=65F17A64"
                            alt=""
                          ></img>
                        </div>
                        <div className="flex flex-col ml-3">
                          <div className="font-roboto font-bold text-[14px] text-[#385898] cursor-pointer">
                            Hoàng Hải
                          </div>
                          <div className="font-roboto text-[14px] text-[#1c1e21] mt-2">
                            Sách này nội dung hay lắm mọi người ơi.
                          </div>
                          <div className="flex mt-2 gap-2 text-[12px] font-roboto">
                            <div className="cursor-pointer text-[#4267b2]">
                              {" "}
                              Thích
                            </div>
                            <div className="cursor-pointer text-[#4267b2]">
                              {" "}
                              Phản hồi
                            </div>
                            <div className="text-[#90949c]">1 Tuần</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-span-3 border-solid border-[1px]">
                <div className="bg-[#9696962e] p-4 gap-2 h-[50px] w-full flex font-roboto font-bold text-[16px] justify-center">
                  <span> SẢN PHẨM LIÊN QUAN</span>
                </div>
                <div className="flex flex-col  ">
                  {/* {products.map((item, index) => (
                    <div
                      className="flex mt-5 gap-3 border-b-[1px] pb-3 cursor-pointer text-hover "
                      key={index}
                    >
                      <div className=" overflow-hidden min-w-[100px] max-w-[100px] min-h-[100px]">
                        <img className="zoom " src={item.img} alt=""></img>
                      </div>
                      <div className="flex flex-col ">
                        <div className=" text-[14px] font-roboto font-bold hover:text-[#62ab00]">
                          {item.title}
                        </div>
                        <div className="text-[14px] font-roboto font-bold text-[#62ab00]">
                          {item.price}
                        </div>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Productss;
