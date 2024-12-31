// components/HeroSection.js
import React from "react";
import Image from "next/image";


export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen py-2 bg-gray-100 w-full p-40 " >
      <div className="relative w-[960px] h-[960px] px-24 py-5">
       <Image
       src="/hero-cover-1.png"
       alt="heroCover"
       width={300}
       height={300}
       className="w-full h-full"
       ></Image>
        
      </div>
      <div className="w-1/2 p-8 space-y-10">
        <h2 className="text-gray-500 font-bold text-2xl">SUMMER 2020</h2>
        <h1 className="text-6xl font-bold text-gray-900">
          Part of the Neural Universe
        </h1>
        <p className="mt-4 text-2xl text-gray-700 font-bold">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="mt-6 text-2xl">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-4">
            BUY NOW
          </button>
       
        </div>
      </div>
    </div>
  );
}
