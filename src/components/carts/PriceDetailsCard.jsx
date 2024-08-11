import React from "react";

const PriceDetailsCard = () => {
    const data = {
        price: "₹26,490",
        discount: "− ₹11,492",
        couponDiscount: "− ₹250",
        deliveryCharges: "₹80",
        totalAmount: "₹14,748",
        savings: "₹11,742",
        couponImgSrc:
          "https://rukminim2.flixcart.com/www/400/400/promos/10/04/2020/f1887cd2-f5dc-4103-880d-8c24ea271f91.png?q=50",
      };
    
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="border-b py-5 border-gray-200">
      <span className="text-lg font-semibold uppercase">Price details</span>
      </div>
      <div className="mt-4">
        <div className="flex justify-between py-2">
          <div className="text-gray-600">Price (4 items)</div>
          <div className="text-gray-800">{data.price}</div>
        </div>
        <div className="flex justify-between py-2">
          <div className="text-gray-600">Discount</div>
          <div className="text-gray-800">
            <span>{data.discount}</span>
          </div>
        </div>
        <div className="flex justify-between py-2">
          <div className="text-gray-600 flex items-center">
            Coupons for you
          </div>
          <div className="text-gray-800">
            <span>{data.couponDiscount}</span>
          </div>
        </div>
        <div className="flex justify-between py-2">
          <div className="text-gray-600">Delivery Charges</div>
          <div className="text-gray-800">
            {data.deliveryCharges} <span className="text-green-600">Free</span>
          </div>
        </div>
        <div className="flex mt-4 justify-between py-3 border-dotted border-t-2 border-b-2 border-gray-200">
          <div className="text-lg font-bold">Total Amount</div>
          <div className="mt-1 text-lg font-bold text-gray-800">{data.totalAmount}</div>
        </div>
        <div className="mt-4 text-green-600">
          You will save {data.savings} on this order
        </div>
      </div>
    </div>
  );
};

export default PriceDetailsCard;
