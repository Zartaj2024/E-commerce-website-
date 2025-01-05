// pages/index.js
import React from "react";
import Image from "next/legacy/image";



const products = [
  {
    image: "/p1.png",
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: "/p2.png",
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: "/p3.png",
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: "/p4.png",
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: "/p5.png",
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: "/p6.png",
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: "/p7.png",
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: "/p8.png",
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  }
];           

const ProductGrid = () => {
  return (
    <div className="bg-white text-gray-900 py-80 px-40">
      <div className="text-center py-10 px-40">
        <h1 className="font-bold text-2xl text-gray-400">Featured Products</h1>
        <h2 className="text-4xl font-bold mb-4 text-black">
          Bestseller Products
        </h2>
        <h3 className="text-gray-400 text-sm font-bold">
          Problems trying to resolve the conflict between
        </h3>
      </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow w-[300px] h-[500px]"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={450}
              className=" mb-4 mx-auto"
            />

            <div className="p-4 place-items-center ">
              <h3 className="text-lg text-black font-bold mb-2">
                {product.title}
                Graphic Design
              </h3>
              <h3 className="text-lg text-gray-400 font-bold mb-2">
                English Department
              </h3>
              <div className="flex font-bold gap-1">
                <h1 className="text-black">$96.48</h1>
                <p className="text-green-500 font-bold mb-2">{product.price}</p>
              </div>
              <div className="flex space-x-2">
                {product.colors?.map((color, index) => (
                  <div key={index} className="w-4 h-4 rounded-full" ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;


