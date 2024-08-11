import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp, FaRegHeart, FaRegUser } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";



const LoginBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  const LoginBoxData = [
    { icon: FaRegUser, text: "My Profile" },
    { icon: BsBoxSeam, text: "Orders" },
    { icon: FaRegHeart, text: "Wishlist" },
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
          <FaRegUser size={25} />
          Login
          {isHovered ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </Link>
      {isHovered && (
        <div className="absolute left-0 text-black bg-white shadow-md rounded-md w-[20vw]">
          <div className="flex justify-between text-lg p-4 border-b border-gray-200">
            <div>New customer?</div>
            <button className="font-bold text-blue-500">Sign Up</button>
          </div>
          {LoginBoxData.map(({ icon: Icon, text }, index) => (
            <div className="hover:bg-[#F1F2F6] px-3">
              <button key={index} className="flex gap-3 px-3 py-2 items-center">
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

export default LoginBox;
