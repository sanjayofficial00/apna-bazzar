import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="relative w-[35vw]">
      <span className="absolute left-3 top-3 text-2xl text-gray-500">
        <FaSearch />
      </span>
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="w-full px-12 text-xl py-2 rounded-md text-gray-800 bg-[#F1F2F6]"
      />
    </div>
  );
};

export default SearchBox;
