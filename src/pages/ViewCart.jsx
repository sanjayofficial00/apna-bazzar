import React from "react";
import AddressCard from "../components/carts/AddressCard";
import PriceDetailsCard from "../components/carts/PriceDetailsCard";
import AddCartCard from "../components/carts/AddCartCard";

const ViewCart = () => {
  return (
    <div className="mx-12 my-5">
      <div className="grid grid-cols-3 gap-4">
        {/* Left Component */}
        <div className="col-span-2">
          <div className="mb-5"><AddressCard /></div>
          <div><AddCartCard/></div>
        </div>

        {/* Right Component */}
        <div className="col-span-1">
          <PriceDetailsCard />
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
