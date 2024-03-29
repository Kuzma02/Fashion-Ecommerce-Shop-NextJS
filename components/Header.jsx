import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";


const Header = () => {
  return (
    <header>
      <div className="bg-black text-white h-10 px-10 max-sm:h-16 max-sm:px-5">
        <div className="max-w-screen-2xl h-full flex justify-between items-center mx-auto max-sm:flex-col max-sm:justify-center">
          <div>
            <p className="text-sm">
              Need virtual style advice? / +123 523 5312
            </p>
          </div>
          <div className="flex gap-x-5 items-center h-full max-sm:h-auto">
            <p className="text-sm">United States(USD $)</p>
            <p className="text-sm">English</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-w-screen-2xl mx-auto items-center py-2 max-2xl:px-5 max-lg:flex-col max-lg:gap-y-5 max-lg:py-5">
        <Link href="/"><Image src="/static/logo black v2.png" alt="next fashion logo" width={200} height={200} /></Link>
        <div className="text-xl flex gap-x-5 max-[350px]:text-lg">
          <Link href="/" className="hover:underline underline-offset-4">Home</Link>
          <Link href="/shop" className="hover:underline underline-offset-4">Shop</Link>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
        </div>

        <div className="flex gap-x-5 text-2xl">
          <IoSearchOutline className="cursor-pointer" />
          <IoPersonSharp className="cursor-pointer" />
          <IoHeart className="cursor-pointer" />
          <Link href="/cart"><IoCartOutline className="cursor-pointer" /></Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
