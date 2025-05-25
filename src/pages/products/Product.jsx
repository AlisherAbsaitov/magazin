import React from "react";
import { useStore } from "../../store/zustand";
import { FaStar } from "react-icons/fa";

export default function Product() {
  let product = JSON.parse(localStorage.getItem("product"));


  return (
    <div className="container mx-auto">
      <div className="w-[80%] mx-auto shadow-md rounded-2xl py-[50px] px-[30px]">
        <div className="flex items-center gap-x-[20px]">
          <img
            src={product.product_img}
            alt={product.product_desc}
            width={"40%"}
          />
          <div className="w-[100%]">
            <p className="text-[28px] leading-[24px] font-semibold mb-[30px]">
              {product.product_desc}
            </p>
            <div className="flex justify-between mb-[30px]">
              <div className="flex flex-col">
                <ins className="font-bold text-[20px] leading-[27px] no-underline">
                  {product.product_plictik}
                </ins>
                <span className="font-normal text-[16px] leading-[18px] no-underline">
                  С картой
                </span>
              </div>
              <div className="flex flex-col">
                <ins className="font-normal text-[20px] leading-[24px] no-underline">
                  {product.product_cash}
                </ins>
                <span className="font-normal text-[16px] leading-[18px] no-underline">
                  Обычная
                </span>
              </div>
            </div>
            <div className="flex gap-x-[4px] mb-[30px]">
              {product.star.map((value, index) => {
                return value ? (
                  <FaStar key={index} className="text-[#FF6633] text-[25px]" />
                ) : (
                  <FaStar key={index} className="text-[#BFBFBF] text-[25px]" />
                );
              })}
            </div>
            <button className="w-full py-[14px] border-[1px] border-[#70C05B] font-normal text-[24px] leading-[24px] text-[#70C05B] hover:bg-[#FF6633] hover:text-white hover:border-[#FF6633]">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
