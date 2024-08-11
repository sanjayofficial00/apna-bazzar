import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import ProfileCard from "../components/account/profile/ProfileListBox";
import ProfileInfo from "../components/account/profile/ProfileInfo";
import { Outlet } from 'react-router-dom'
import ProfileImageBox from "../components/account/profile/ProfileImageBox";
import ProfileCommonBox from "../components/account/profile/ProfileCommonBox";
import { FaWallet } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ProfileListBox from "../components/account/profile/ProfileListBox";
import { FaRegUser } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";

const Profile = () => {
  const datas = ["Profile Information", "Manage Address"];
  const ProfileData = [
    { path: "", link: "Profile Information" },
    { path: "addresses", link: "Manage Address" },
  ];

  const PaymentData = [
    { path: "vpdetails", link: "Save UPI" },
    { path: "carddetails", link: "Save Cards" },
  ];

  // 55680625487
  const StuffData = [
    { path: "reviews", link: "My Reviews & Ratings" },
    { path: "notifications", link: "All Notifications" },
    { path: "wishlist", link: "My Wishlist" },
  ];

  return (
    // Main Box
    <div className="mx-12 my-5 flex gap-5">
      {/* Left Box */}
      <div className="flex-col space-y-5 w-[25%]">
        {/* Image Box */}
        <ProfileImageBox/>
        <div className="bg-white shadow-md">
          {/* Common Box */}
          <ProfileCommonBox BoxName={"My Orders"} BoxIcon1={FaWallet} BoxIcon2={MdOutlineKeyboardArrowRight}/>
          {/* List Box */}
          <ProfileListBox BoxName={"Account Settings"} BoxIcon={FaRegUser} BoxData={ProfileData}/>
          <ProfileListBox BoxName={"Payments"} BoxIcon={LuWallet} BoxData={PaymentData}/>
          <ProfileListBox BoxName={"My Stuff"} BoxIcon={LuWallet} BoxData={PaymentData}/>
        </div>
      </div>

      {/* Right Box */}
      <div className="flex-col gap-5 bg-white shadow-md w-[75%] p-5">
        right        
        <Outlet />
        </div>
    </div>
  );
};

export default Profile;
