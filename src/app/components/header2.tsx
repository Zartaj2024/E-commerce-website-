import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const Header2 = () => {
  return (
  <div className="flex gap-[100px]  w-full h-[100px] md:grid-cols-3 bg-white pb-3 pt-3 text-black p-7 items-center">
      <div className="flex justify-center md:justify-start">
        <Image src="/Bandage.png" alt="Bandage" width={100} height={35} />
      </div>
    <div className="flex justify-center items-center gap-[800px]">
      <div className="flex justify-center  md:justify-start mt-2">
        <div className="flex gap-7 font-bold text-gray-500 justify-start  ">
          <Link href="/">Home</Link>
          <Link href="/Page2">Shop</Link>
          <Link href="/Page4">About</Link>
          <Link href="/kk">Blog</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/Contact">Pages</Link>
        </div>
      </div>
      <div className="flex justify-center md:justify-end ">
        <Image src="/login.png" alt="Login" width={300} height={50} />
      </div>
    </div>
  </div>
  );
};

export default Header2;