import React from "react";
import { NavLink } from "react-router-dom";

const ProfileListBox = ({ BoxName, BoxIcon, BoxData }) => {
  return (
    <div className="flex-col border-b border-gray-200">
      <div className="uppercase flex items-center px-6 py-4 gap-5 justify-items-start text-[1.1rem] font-bold">
        <BoxIcon color="blue" size={25} />
        {BoxName}
      </div>
      <div className="flex-col space-y-0 text-md">
        {BoxData.map(({ path, link }) => (
          <NavLink
            key={path}
            to={path}
            end
            className={({ isActive }) =>
              `p-2 px-20 block hover:bg-blue-400 ${isActive ? "bg-blue-500 text-white" : ""}`
            }
          >
            {link}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProfileListBox;
