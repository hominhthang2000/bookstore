import React, { useRef } from "react";
import BaseHeader from "../Headers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
  const boxRef = useRef(null);
  return (
    <div className="" ref={boxRef}>
      <div className="sticky top-[-135px] right-0 left-0 z-20">
        <BaseHeader />
      </div>
      <div className=" ">{children}</div>
      <div className="bg-[#eaeaea] pt-20 pb-14 ">
        <Footer />
      </div>
      <div
        onClick={() => {
          boxRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }}
        className="hover:bg-[#ffffff] shadow-md fixed flex h-[40px] w-[40px] bg-[#3eb110c7]  items-center justify-center rounded-full  bottom-[40px] right-[40px] cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          style={{ color: "#ffffff" }}
          className="h-[20px] w-[20px] p-3 hover:!text-[#3eb110c7] relative z-[100]"
        />
      </div>
    </div>
  );
};

export default MainLayout;
