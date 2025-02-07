import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="w-full h-full flex-col md:flex-row flex justify-between items-start bg-[#F2F0F1] md:h-[500px] max-w-screen-2xl mx-auto">
      <div className=" w-full md:w-[500px] mt-3 md:mt-11 md:ml-12 pl-3">
        <h1 className="text-2xl md:text-5xl font-extrabold">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-sm md:mt-3 text-gray-600">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black py-2 px-8 text-sm text-white rounded-[16px] mt-4">
          Shop Now
        </button>
      </div>
      <div className="relative">
        <Image
          src={"/Rectangle 2.png"}
          className="w-[600px] mr-5"
          width={200}
          height={200}
          alt="fashionable"
        ></Image>
        <Image
          src={"/Vector.png"}
          className="w-[50px] md:w-[100px] absolute top-[100px] md:top-[200px] md:left-[-100px] left-8"
          width={200}
          height={200}
          alt="fashionable"
        ></Image>
        <Image
          src={"/Vector.png"}
          className="w-[60px] md:w-[100px] absolute md:top-[70px] md:right-[60px] top-10 right-[50px]"
          width={200}
          height={200}
          alt="fashionable"
        ></Image>
      </div>
    </main>
  );
};

export default Hero;
