import React from "react";

const ProfileImageBox = () => {
  return (
    <div className="flex gap-5 p-3 bg-white shadow-md">
      <img
        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
        alt=""
      />
      <div>
        <div className="text-sm">Hello,</div>
        <div className="text-lg font-bold">Sanjay Kumar</div>
      </div>
    </div>
  );
};

export default ProfileImageBox;
