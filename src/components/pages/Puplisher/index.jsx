import React from "react";
import Slider from "react-slick";

const Data = [
  { img: "./Images/hfbrand_img1.webp" },
  { img: "./Images/hfbrand_img2.webp" },
  { img: "./Images/hfbrand_img3.webp" },
  { img: "./Images/hfbrand_img4.webp" },
  { img: "./Images/hfbrand_img5.webp" },
  { img: "./Images/hfbrand_img6.webp" },
  { img: "./Images/hfbrand_img7.webp" },
  { img: "./Images/hfbrand_img8.webp" },
  { img: "./Images/hfbrand_img9.webp" },
  { img: "./Images/hfbrand_img10.webp" },
  { img: "./Images/hfbrand_img11.webp" },
  { img: "./Images/hfbrand_img12.webp" },
];
const Publisher = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div className="w-full flex flex-col">
      <div className="text-[#333333] text-4xl font-bold flex justify-center mb-7">
        {" "}
        CÁC NHÀ XUẤT BẢN
      </div>

      <div className="next">
        <Slider {...settings}>
          {Data.map((item, index) => (
            <div className=" cursor-pointer px-1 h-[90px]" key={index}>
              <div className="h-full ">
                <img
                  className="h-full hover:scale-[1.05] transition duration-300"
                  src={item.img}
                  alt=""
                ></img>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Publisher;
