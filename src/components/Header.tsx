import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { LuCircleUserRound } from "react-icons/lu";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./NavigationMenu";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-[60px] max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-center">
        <SheetSide />
        <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
      </div>
      {/* Navbar  */}
      <ul className="hidden md:block">
        <li className="space-x-5 flex items-center">
          <Link href={""}>
            <NavigationMenuDemo />
          </Link>
          <Link href={"/"}>On Sale</Link>
          <Link href={"/products"}>New Arrivals</Link>
          <Link href={"/"}>Brands</Link>
        </li>
      </ul>
      {/* Search Bar  */}
      <div className="hidden md:block">
        <div className="flex justify-start items-center w-[330px] h-[40px] bg-[#F0F0F0] rounded-[62px]">
          <FaSearch className="text-xl ml-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full h-full ml-2 outline-none rounded-[62px] bg-[#F0F0F0]"
          />
        </div>
      </div>
      {/* Cart Icons */}
      <div className="flex items-center mr-7 space-x-5">
        <FaSearch className="text-1xl ml-2 md:hidden" />
        <Link href={"/cart"}>
        <FiShoppingCart className="text-1xl" />
        </Link>
        <LuCircleUserRound className="text-1xl" />
      </div>
    </header>
  );
};

export default Header;
