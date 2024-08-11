import React from "react";

import { Link } from "react-router-dom";

const ProfileCommonBox = ({BoxName, BoxIcon1, BoxIcon2}) => {
  return (
      <div className="flex items-center px-6 py-4 border-b border-gray-200 gap-5 text-xl">
        <BoxIcon1 color="blue" size={25} />
        <button className="uppercase flex items-center justify-between font-bold w-full text-[1.1rem]">
          {BoxName}
          <BoxIcon2 className="ml-12 size-8" />
        </button>
      </div>
  );
};

export default ProfileCommonBox;
