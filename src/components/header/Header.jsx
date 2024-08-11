import React from "react";
import SearchBox from "./SearchBox";
import LoginBox from "./LoginBox";
import { Link } from "react-router-dom";
import HeaderCommonBox from "./HeaderCommonBox";
import { BsCart2 } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import ThreeDotBox from "./ThreeDotBox";

const Header = () => {
  return (
    <header className="text-black bg-white shadow-lg">
      <div className="container mx-auto flex gap-10 items-center py-4 px-6">
        <div className="text-3xl font-bold">
          <a href="/">APNA-BAZAR</a>
        </div>
        <div className="flex items-center space-x-4 gap-5">
          <SearchBox />
          <LoginBox />

          <Link to="/viewcart">
            <HeaderCommonBox BoxIcon={BsCart2} BoxName={"Cart"} />
          </Link>

          <Link to="/viewcart">
            <HeaderCommonBox BoxIcon={BsShop} BoxName={"Become a Seller"} />
          </Link>
          <ThreeDotBox/>
        </div>
      </div>
    </header>
  );
};

export default Header;
