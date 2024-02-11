import React, { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
      description: "test",
      price: 339,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
      description: "test",
      price: 223,
    },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
        <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
          <div>
            <div className="flex w-full justify-end pt-5 pr-5">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            {/* Item length */}
            <div className={`${styles.noramlFlex} p-4`}>
              <AiOutlineHeart size={25} />
              <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
            </div>
            {/* cart Single Items */}
            <br />
            <div className="w-full border-t">
              {cartData &&
                cartData.map((i, index) => (
                  <CartSingle
                    key={index}
                    data={i}
                    // quantityChangeHandler={quantityChangeHandler}
                    // removeFromCartHandler={removeFromCartHandler}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// import React from "react";

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <>
      <div className="border-b p-4">
        <div className="w-full flex items-center">
          <RxCross1
            className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2 ml-2"
            // onClick={() => removeFromWishlistHandler(data)}
          />
          <img
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[100px] h-min ml-2 mr-2 rounded-[5px]"
          />

          <div className="pl-[5px]">
            <h1>{data.name}</h1>
            <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
              US${totalPrice}
            </h4>
          </div>
          <div>
            <BsCartPlus
              size={20}
              className="cursor-pointer"
              title="Add to cart"
              //    onClick={() => addToCartHandler(data)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
