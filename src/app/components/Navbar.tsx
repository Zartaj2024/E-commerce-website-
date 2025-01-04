import React from "react";
import Link from "next/link";

import Image from "next/legacy/image";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="bg-white flex flex-row justify-center items-center pb-3 pt-3 font-bold p-3 h-[100px]">
        <div>
          <Image src="/Bandage.png" alt="" className="w-10 h-10" width={40} height={40} />
        </div>
        <div>
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <h1>Pages</h1>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

