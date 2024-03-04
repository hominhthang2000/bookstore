import {
  faBook,
  faBuilding,
  faCartShopping,
  faHeart,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

const Data = [
  {
    icon: <FontAwesomeIcon icon={faUsers} />,
    countNum: 10,
    countTitle: "Năm Hoạt Động",
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />,
    countNum: 20000,
    countTitle: "Người Dùng",
  },
  {
    icon: <FontAwesomeIcon icon={faBuilding} style={{ color: "#ffffff" }} />,
    countNum: 42,
    countTitle: "Cơ Sở",
  },
  {
    icon: <FontAwesomeIcon icon={faBook} style={{ color: "#ffffff" }} />,
    countNum: 15000,
    countTitle: "Sản Phẩm",
  },
];
const OutstandingNumbers = () => {
  const [focus, setFocus] = useState(false);
  return (
    <div className="flex flex-col images pb-[40px]">
      <div className="font-mono text-[#ffffff] flex mb-[80px] mt-[80px] text-4xl font-bold items-center justify-center">
        MỘT VÀI THỐNG KÊ VỀ TRANG
      </div>
      <div className="flex justify-center gap-[150px]">
        {Data.map((item, index) => (
          <div key={index} className="">
            <div className="flex items-center flex-col">
              <div className="text-[#ffffff] text-[40px]   ">{item.icon}</div>
              <div className="text-[#ffffff] font-bold text-[45px]">
                <CountUp
                  separator="."
                  start={focus ? 0 : null}
                  end={item.countNum}
                  duration={4}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span className="text-[45px]" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
              <div className="text-[#ffffff] text-[40px]">+</div>
              <div className="text-[#ffffff] text-[18px] font-bold  ">
                {item.countTitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutstandingNumbers;
