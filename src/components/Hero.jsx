import React from "react";
import shoeImage from '../assets/shoe_image.png'
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";

const Hero = () => {
  return (
    <div className="w-full flex py-[90px] px-[11%]">
      {/* Two divs needed to solve this design */}
      <div className="w-1/2 flex flex-col justify-center items-start gap-[36px]">
        <h1 className="text-black text-5xl md:text-[60px] lg:text-[90px] xl:text-[108px] font-extrabold leading-[102px]">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="text-[#5A5959] text-base font-semibold leading-normal">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="flex items-start gap-10">
          <button className="bg-[#D01C28] text-white text-2xl font-semibold px-[16px] py-[6px]">
            Shop Now
          </button>
          <button className="bg-white border border-black text-[#5A5959] text-2xl font-semibold px-[16px] py-[6px]">
            Category
          </button>
        </div>

        <div className="flex flex-col items-start gap-4">
          <p className="text-[#5A5959] text-base font-normal leading-normal">
            Also Available On
          </p>
          <div className="flex items-center gap-4">
            <a href="">
              <img src={flipkart} alt="" />
            </a>
            <a href="">
              <img src={amazon} alt="" />
            </a>
          </div>
        </div>
      </div>
      {/* Image Div */}
      <div className="w-1/2 flex items-center justify-center">
        <img src={shoeImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
