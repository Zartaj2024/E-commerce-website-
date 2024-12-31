"use client";
import React from "react";

import Image from "next/image";

import Link from "next/link";

export default function Page2Products() {
  const products = [
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/p1.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/p2.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image:"/p3.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/p4.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/p5.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/p6.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/p7.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/p8.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/p1.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/p2.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/p3.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/p4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Container */}

      <div className="container mx-auto px-4">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onClick={() => product}
            >
              <Link href="/shop">
                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                  width={300}
                  height={400}
                />

                {/* Product Content */}
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{product.department}</p>

                  {/* Price */}
                  <div className="mt-2">
                    <span className="line-through text-gray-400 mr-2">
                      {product.originalPrice}
                    </span>
                    <span className="text-green-500 font-bold">
                      {product.salePrice}
                    </span>
                  </div>

                  {/* Color Dots */}
                  <div className="flex justify-center space-x-2 mt-3">
                    <span className="h-4 w-4 bg-blue-500 rounded-full"></span>
                    <span className="h-4 w-4 bg-green-500 rounded-full"></span>
                    <span className="h-4 w-4 bg-orange-500 rounded-full"></span>
                    <span className="h-4 w-4 bg-red-500 rounded-full"></span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 ">
          <nav className="inline-flex items-center px-4 py-4 ">
            <Link
              href="/"
              className=" w-[50px] h-[50px] px-3 py-3 bg-gray-200 text-gray-600 rounded-l hover:bg-gray-300"
            >
              First
            </Link>
            <Link
              href="Page2"
              className=" w-[50px] h-[50px] px-3 py-3 bg-blue-500 text-white hover:bg-blue-600"
            >
              1
            </Link>
            <Link
              href="shop"
              className=" w-[50px] h-[50px] px-3 py-3 bg-gray-200 text-gray-600 hover:bg-gray-300"
            >
              2
            </Link>
            <Link
              href="About u"
              className=" w-[50px] h-[50px] px-3 py-3 bg-gray-200 text-gray-600 hover:bg-gray-300"
            >
              3
            </Link>
            <Link
              href=""
              className=" w-[50px] h-[50px] px-3 py-3 bg-gray-200 text-gray-600 rounded-r hover:bg-gray-300"
            >
              Next
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
