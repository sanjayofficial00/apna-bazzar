import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

const ThreeDotBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  const ThreeDotBoxData = [
    { icon: FaRegBell, text: "Notification Preferences" },
    { icon: FaHeadset, text: "24x7 Customer Care" },
    { icon: BsGraphUpArrow, text: "Advertise" },
    { icon: FiDownload, text: "Download App" },
  ];
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="/account">
        <button
          className={`px-4 py-2 rounded-md flex text-black items-center gap-2 text-md ${
            isHovered ? "bg-blue-500 text-black" : "hover:bg-[#F1F3F6]"
          }`}
        >
          <BsThreeDotsVertical />
        </button>
      </Link>
      {isHovered && (
        <div className="absolute right-0 text-black bg-white shadow-md rounded-md w-[20vw]">
          {ThreeDotBoxData.map(({ icon: Icon, text }, index) => (
            <div className="hover:bg-[#F1F2F6]">
              <button key={index} className="flex gap-3 mx-5 items-center my-2">
                <Icon size={20} />
                <span>{text}</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThreeDotBox;
