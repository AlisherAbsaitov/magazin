import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoHeartCircleSharp } from "react-icons/io5";

import productjson from "../../data/products.json";
import { ContextValue } from "../../context/Context";
import { Link } from "react-router-dom";
import { useStore } from "../../store/zustand";
import AOS from "aos";
export default function Products() {
  const { searchValue } = useContext(ContextValue);
  const [products, setProducts] = useState(productjson);
  const setProduct = useStore((state) => state.setProduct);

  const [likeProductId, setLikeProductId] = useState(
    JSON.parse(localStorage.getItem("likeId")) || []
  );
  const [likeProduct, setLikeProduct] = useState(
    JSON.parse(localStorage.getItem("likeproduct")) || []
  );

  // Animation
  useEffect(() => {
    AOS.init({
      duration:2000
    })
  },[])

  // like bosganda
  const favoriteLike = (value) => {
    let saveLikeId;
    let savelikeProduct;
    if (!likeProductId.includes(value.id)) {
      saveLikeId = [...likeProductId, value.id];
      savelikeProduct = [...likeProduct, value];
    } else {
      saveLikeId = likeProductId.filter((id) => id != value.id);
      savelikeProduct = likeProduct.filter((val) => val.id != value.id);
    }

    setLikeProductId(saveLikeId);
    setLikeProduct(savelikeProduct);
    localStorage.setItem("likeId", JSON.stringify(saveLikeId));
    localStorage.setItem("likeproduct", JSON.stringify(savelikeProduct));
  };

  console.log(likeProductId);
  console.log(likeProduct);

  const drawProduct = (value) => {
    let filterData = value.filter((value) => {
      if (!searchValue) {
        return value;
      } else {
        if (value.product_desc.indexOf(searchValue) !== -1) {
          return value;
        }
      }
    });

    // show product
    const showProduct = (val) => {
      localStorage.setItem("product", JSON.stringify(val));
    };

    return filterData.map((value, index) => {
      return (
        <li
          data-aos="fade-right"
          key={index}
          className="w-[272px] shadow-2xl relative rounded-[4px] bg-white"
        >
          <img
            src={value.product_img}
            alt="card img"
            className="w-full h-[160px]"
          />
          {likeProductId.includes(value.id) ? (
            <IoHeartCircleSharp
              className="absolute top-[8px] text-red-500 right-[8px] text-[25px] "
              onClick={() => favoriteLike(value)}
            />
          ) : (
            <IoHeartCircleSharp
              className="absolute top-[8px] right-[8px] text-black text-[25px]"
              onClick={() => favoriteLike(value)}
            />
          )}
          <Link to={"/product"} onClick={() => showProduct(value)}>
            <span className="py-[4px] px-[8px] bg-[#FF6633] rounded-[4px] text-[16px] leading-[24px] text-white absolute top-[118px] left-[10px]">
              -{value.product_skidka}
            </span>
            <div className="p-[8px] flex flex-col gap-y-[8px]">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <ins className="font-bold text-[18px] leading-[27px] no-underline">
                    {value.product_plictik}
                  </ins>
                  <span className="font-normal text-[12px] leading-[18px] no-underline">
                    С картой
                  </span>
                </div>
                <div className="flex flex-col">
                  <ins className="font-normal text-[16px] leading-[24px] no-underline">
                    {value.product_cash}
                  </ins>
                  <span className="font-normal text-[12px] leading-[18px] no-underline">
                    Обычная
                  </span>
                </div>
              </div>
              <p className="font-normal text-[16px] leading-[24px] h-[48px] overflow-hidden">
                {value.product_desc}
              </p>
              <div className="flex gap-x-[4px]">
                {value.star.map((value, index) => {
                  return value ? (
                    <FaStar key={index} className="text-[#FF6633]" />
                  ) : (
                    <FaStar key={index} className="text-[#BFBFBF]" />
                  );
                })}
              </div>
              <button className="w-full py-[8px] border-[1px] border-[#70C05B] font-normal text-[16px] leading-[24px] text-[#70C05B]">
                В корзину
              </button>
            </div>
          </Link>
        </li>
      );
    });
  };

  return (
    <section className="bg-[#FBF8EC]">
      <div className="container mx-auto">
        {products.map((value, index) => {
          return (
            <div key={index} className="mb-[30px]">
              {!searchValue ? (
                <h3 className="font-bold text-[36px] leading-[54px] mb-[40px]">
                  {value.title}
                </h3>
              ) : (
                ""
              )}
              <ul className="flex justify-between" key={index}>
                {drawProduct(value.infos)}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
