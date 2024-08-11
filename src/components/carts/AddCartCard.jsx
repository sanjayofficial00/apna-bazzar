import React, { useState, useEffect, useRef } from "react";
import { IoMdAlert } from "react-icons/io";
import "react-tooltip/dist/react-tooltip.css";
import { FaRegWindowMinimize } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
// import Tooltip from 'react-tooltip';

const AddCartCard = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const tooltipRef = useRef(null);
  const handleClick = () => {
    setIsTooltipVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setIsTooltipVisible(false);
    }
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="p-5 bg-white shadow-md border-border-solid border-t-2 border-b-2 border-gray-200">
        <div className="flex justify-between">
          <div className="">
            <img
              className="w-15"
              src="https://rukminim2.flixcart.com/image/224/224/l15bxjk0/inverter/a/a/4/super-power-digital-ups-model-700-12v-dg-3-microtek-original-imagcs4uhzstqvef.jpeg?q=90"
              alt="Inverter"
            />
          </div>
          <div className="items-center">
            <div className="text-info truncate w-35 font-bold">
              Microtek MTKAA70H Square Wave Inverter
            </div>
            <div className="text-sm font-light py-3">
              Seller: RetailNet{" "}
              <span>
                <img src="" alt="" />
              </span>
            </div>
            <div className="flex justify-items-center">
              <div className="flex text-lg gap-3 text-center pt-2 font-bold">
                <span className="text-center line-through text-sm font-extralight">
                  ₹6,240
                </span>
                ₹4,099 <span className="text-sm text-red-500">34% Off</span>
              </div>
            </div>
            <div className="flex items-center gap-3 relative">
              3 offers applied{" "}
              <span
                className="handleAlert cursor-pointer"
                onClick={handleClick}
              >
                <IoMdAlert />
              </span>
              {isTooltipVisible && (
                <div
                  ref={tooltipRef}
                  onMouseLeave={handleMouseLeave}
                  className="absolute text-sm top-7 left-0 mt-2 bg-white border border-gray-300 p-2 rounded shadow-lg w-64 h-[40vh] overflow-y-auto z-10"
                >
                  <div className="flex justify-between">
                    <div>MRP</div>
                    <div className="line-through">₹ 6,240</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Selling Price</div>
                    <div>₹ 4,484</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Extra Discount</div>
                    <div>− ₹ 385</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Special Price</div>
                    <div>₹ 4,099</div>
                  </div>
                  <ul className="space-y-2 py-3">
                    <li>
                      Make a purchase and enjoy a surprise cashback/ coupon that
                      you can redeem later!
                    </li>
                    <li>
                      Get Extra 5% Off on Next purchase of Home & Kitchen
                      Appliances
                    </li>
                    <li>
                      Get Extra 5% Off on Next purchase of Home & Kitchen
                      Appliances
                    </li>
                  </ul>
                  <div className="flex justify-between py-2 border-dotted border-t-2 border-b-2 border-gray-200">
                    <div>Total</div>
                    <div className="font-bold">₹4,099</div>
                  </div>
                  <ul className="font-bold space-y-2 py-2">
                    <li className="text-red-500">
                      Save more with these offers
                    </li>
                    <li>5% Cashback on Flipkart Axis Bank Card</li>
                    <li>
                      10% off up to ₹1,250 on ICICI Bank Credit Card
                      Transactions, on orders of ₹5,000 and above
                    </li>
                    <li>
                      10% off up to ₹1,750 on ICICI Bank Credit Card EMI
                      Transactions, on orders of ₹5,000 and above
                    </li>
                    <li>
                      10% off up to ₹1,000 on ICICI Bank Debit Card
                      Transactions, on orders of ₹5,000 and above
                    </li>
                    <li>
                      12% off up to ₹1,800 on ICICI Bank Debit Card EMI
                      Transactions, on orders of ₹7,000 and above
                    </li>
                    <li>
                      10% off up to ₹1,250 on BOBCARD Transactions, on orders of
                      ₹5,000 and above
                    </li>
                    <li>
                      10% off up to ₹1,750 on BOBCARD EMI Transactions, on
                      orders of ₹5,000 and above
                    </li>
                    <li>
                      10% off up to ₹1,250 on YES Bank Credit Card Transactions,
                      on orders of ₹5,000 and above
                    </li>
                    <li>
                      10% off up to ₹1,750 on YES Bank Credit Card EMI
                      Transactions, on orders of ₹5,000 and above
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="">Delivery in 2 days, Fri</div>
        </div>

        {/* Count product cart */}
        <div className="mt-10">
          <div className="flex justify-items-center">
            <div className="flex justify-items-center">
              <button
                className="px-3 py-1 bg-gray-300 shadow-md rounded-full disabled:opacity-50"
                onClick={handleDecrement}
                disabled={quantity <= 1}
              >
                –
              </button>
              <div className="mx-2 flex justify-items-center">
                <input
                  type="text"
                  className="w-[8vh] text-center border rounded"
                  value={quantity}
                  readOnly
                />
              </div>
              <button
                className="px-3 py-1 bg-gray-300 shadow-md rounded-full"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
            <div className="cursor-pointer text-blue-500 mx-10 my-auto text-lg font-bold">
              Save for later
            </div>
            <div className="cursor-pointer text-red-500 mx-10 my-auto text-lg font-bold">
              Remove
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end py-5 px-5 m-0 bg-white shadow-md">
        <button className="text-md text-white uppercase font-bold py-3 px-20 rounded-md bg-orange-500">
          PLACE ORDER
        </button>
      </div>
    </>
  );
};

export default AddCartCard;
