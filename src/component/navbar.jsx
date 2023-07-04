import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";

const Navbar = () => {
  const [sideWindow, setSideWindow] = useState(false);

  const SideIconList = (props) => {
    return (
      <li className="text-xl py-4 flex">
        {props.tag}{props.txt}
      </li>
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
      {/* Left side */}
      <div className="flex  items-center">
        <div
          className="cursor-pointer"
          onClick={() => setSideWindow(!sideWindow)}
        >
          <AiOutlineMenu size={30} />
          {console.log("side meinkdn", sideWindow)}
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">
          Best <span>Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pick up</p>
        </div>
      </div>

      {/* SearchBar and Cart section */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Food's"
        />
      </div>
      <button className="bg-black text-white hidden md:flex items-center py-2 px-3 rounded-3xl">
        <BsFillCartFill size={22} className="mr-2" />
        Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {sideWindow ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          sideWindow
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setSideWindow(!sideWindow)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <SideIconList tag={<TbTruckDelivery size={25} className="mr-4" />} txt="Orders" />
            <SideIconList tag={<MdFavorite size={25} className="mr-4" />} txt="Favorites" />
            <SideIconList tag={<FaWallet size={25} className="mr-4" />} txt="Wallet" />
            <SideIconList tag={<MdHelp size={25} className="mr-4" />} txt="Help" />
            <SideIconList tag={<AiFillTag size={25} className="mr-4" />} txt="Promotions" />
            <SideIconList tag={<BsFillSaveFill size={25} className="mr-4" />} txt="Best ones" />
            <SideIconList tag={<FaUserFriends size={25} className="mr-4" />} txt="Invite Friend's" />
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
