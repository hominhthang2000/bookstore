import {
  faChevronDown,
  faLifeRing,
  faPiggyBank,
  faRotateRight,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const dataBox = [
  {
    icon: <FontAwesomeIcon icon={faTruckFast} style={{ color: "#62ab00" }} />,
    title: "Miễn phí vẫn chuyển",
    decreption: "Đơn hàng trên 1 triệu",
  },
  {
    icon: <FontAwesomeIcon icon={faRotateRight} style={{ color: "#62ab00" }} />,
    title: "Chế độ hoàn tiền",
    decreption: "100% số tiền được hoàn",
  },
  {
    icon: <FontAwesomeIcon icon={faPiggyBank} style={{ color: "#62ab00" }} />,
    title: "Giá cả hợp lí",
    decreption: "Tiết kiệm tối đa giá tiền",
  },
  {
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ color: "#62ab00" }} />,
    title: "Hỗ trợ & tư vấn",
    decreption: "Liên hệ: 0775551487 ",
  },
];
const BoxFirst = () => {
  return (
    <div className="grid grid-cols-12 gap-4  justify-between mt-6">
      {dataBox.map((item, index) => (
        <div
          key={index}
          className="col-span-3 flex  border-solid border-2 px-5 items-center  "
        >
          <div className="text-[50px]"> {item?.icon}</div>
          <div className="flex flex-col pl-3">
            <div> {item.title}</div>
            <div> {item.decreption}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxFirst;
