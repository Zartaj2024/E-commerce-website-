"use client";
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Footer from "../components/footer"
const products = [
  {
    image: "/p1.png",
    title: "Graphic Design",
    price: "$8.48",

  },
  {
    image: "/p2.png",
    title: "Graphic Design",
    price: "$8.48",

  },
  {
    image: "/p3.png",
    title: "Graphic Design",
    price: "$8.48",

  },
  {
    image: "/p4.png",
    title: "Graphic Design",
    price: "$8.48",

  },
  {
    image: "/p5.png",
    title: "Graphic Design",
    price: "$8.48",

  },
  {
    image: "/p6.png",
    title: "Graphic Design",
    price: "$8.48",

  },
  {
    image: "/p7.png",
    title: "Graphic Design",
    price: "$8.48",

  },
  {
    image: "/p8.png",
    title: "Graphic Design",
    price: "$8.48",
  
  }
];  
function Shop() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-row justify-center items-center space-x-5 pb-5 pt-5   gap-9 bg-[#23856D] text-500 mx-auto">
        <div className="flex gap-8">
          <div className="flex pt-3 pb-3">
            <Image src="/phone.png" alt="phone" width={20} height={10} />
            <div>(225) 555-0118</div>
          </div>
          <div className="flex gap-1">
            <p className="flex pb-3 pt-3 gap-2">
              <Image src="/mail.png" alt="mail" width={20} height={10} />
              michelle.rivera@example.com
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold">Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex">
          <p className="flex font-bold">
            Follow Us:{" "}
            <Image
              src="/social media.png"
              alt="media"
              width={90}
              height={30}
              className=""
            />
          </p>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white flex flex-row justify-between items-center pb-5 pt-5 font-bold px-[150px] h-[90px] text-black">
        <div>
          <Image src="/Bandage.png" alt="bandage" width={150} height={50} />
        </div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/Page4">About</Link>
          <Link href="/Contact">Contact</Link>
          <h1>Pages</h1>
        </div>
        <div>
          <Image src="/login.png" alt="login" width={250} height={100} />
        </div>
      </div>

      <div className="bg-[#FAFAFA] text-black flex flex-row justify-between items-center pb-5 pt-5 font-bold px-[150px]">
        <div className="flex gap-2">
          <Link href="/">home</Link>
          <h1>shop</h1>
        </div>
      </div>

      <section className="bg-[#FAFAFA] text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Image Section */}
            <div className="lg:w-1/2 w-full flex flex-col items-center">
              <div className="relative mb-4 w-[400px]">
                <Image
                  alt="product"
                  className="w-full h-full  object-center rounded"
                  src="/p1.png"
                  width={400}
                  height={400}
                />
                <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  &larr;
                </button>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  &rarr;
                </button>
              </div>
              {/* Thumbnail Images */}
              <div className="flex gap-5 mr-[250px]">
                <Image
                  src="/p2.png"
                  alt="thumbnail"
                  className="w-16 h-16  border-2 border-gray-300 hover:border-blue-400"
                  width={64}
                  height={64}
                />
                <Image
                  src="/p3.png"
                  alt="thumbnail"
                  className="w-16 h-16  border-2 border-gray-300 hover:border-blue-400"
                  width={64}
                  height={64}
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 font-bold space-y-6">
              <h1 className="text-gray-900 text-3xl font-medium mb-4">
                Floating Phone
              </h1>

              {/* Star Rating */}
              <div className="flex items-center mb-4">
                <span className="flex">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.124-6.573L1 6.91l6.564-.954L10 1l2.436 4.956 6.564.954-4.746 4.607 1.124 6.573z" />
                    </svg>
                  ))}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-300"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.124-6.573L1 6.91l6.564-.954L10 1l2.436 4.956 6.564.954-4.746 4.607 1.124 6.573z" />
                  </svg>
                </span>
                <span className="ml-2 text-gray-600">10 Reviews</span>
              </div>

              {/* Price */}
              <p className="text-2xl font-semibold mb-4">$1,139.33</p>
              <div className="flex">
                <p>Availability:</p>
                <p className="text-blue-500">In stock</p>
              </div>
              <div className="space-y-9">
                <div>
                  {/* Description */}
                  <p className="leading-relaxed mb-6 text-gray-700">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>

                <div>
                  <hr />
                </div>
                {/* Color Options */}
                <div>
                  <div className="flex items-center mb-6">
                    <span className="mr-3 text-gray-700">Colors</span>
                    <button className="w-6 h-6 rounded-full bg-blue-500 border-2 border-gray-300 focus:outline-none" title="add to fav" />
                    <button className="w-6 h-6 ml-2 rounded-full bg-green-500 border-2 border-gray-300 focus:outline-none" title="add to fav" />
                    <button className="w-6 h-6 ml-2 rounded-full bg-orange-500 border-2 border-gray-300 focus:outline-none" title="add to fav" />
                    <button className="w-6 h-6 ml-2 rounded-full bg-gray-800 border-2 border-gray-300 focus:outline-none" title="add to fav" />
                  </div>
                </div>

                {/* Select Options Button */}
                <div className="flex items-center">
                  <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                    Select Options
                  </button>
                  <button className="ml-4 rounded-full w-10 h-10 bg-gray-200 inline-flex items-center justify-center text-gray-600 hover:bg-gray-300"
                  title="add to fav">
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>

                  <button className="ml-4 rounded-full w-10 h-10 bg-gray-200 inline-flex items-center justify-center text-gray-600 hover:bg-gray-300"
                  title="add to fav">
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M14.31 8l5.74 9H8.65l-5.74-9h11.4z" />
                    </svg>
                  </button>

                  <button 
                    className="ml-4 rounded-full w-10 h-10 bg-gray-200 inline-flex items-center justify-center text-gray-600 hover:bg-gray-300" 
                    title="Add to favorites"
                  >
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] justify-center">
        <div className="flex flex-row justify-center items-center gap-[95px] pb-10 pt-10 font-bold text-[#737373]">
          <div>
            <p>Description</p>
          </div>
          <div>
            <p>Additional Information</p>
          </div>
          <div>Reviews (0)</div>
        </div>
        <hr />
        <div className="flex flex-row justify-center items-center p-9 gap-9 col-3 pb-10 pt-10">
          <div>
            <Image
              src="/p3.png"
              alt="p3"
              width={250}
              height={250}
              className="rounded"
            />
          </div>

          <div className="justify-center font-bold text-black space-y-7 pb-5 pt-5">
            <h1 className="font-bold text-3xl text-black">
              the quick fox jumps over
            </h1>
            <p>
              et minim Mollie non desert Alamo est sit <br /> liquey dolor do met sent.
              RELIT official <br /> onsequent door ENIM RELIT Mollie.<br/>xcitation venial
              consequent sent nostrum met
            </p>

            <p>
              et minim Mollie non desert Alamo est sit <br />liquey dolor do met sent.
              RELIT official <br /> onsequent door ENIM RELIT Mollie.<br/> xcitation venial
              consequent sent nostrum <br />met
            </p>

            <p>
              et minim Mollie non desert Alamo est sit <br /> liquey dolor do met sent.
              RELIT official <br /> onsequent door ENIM RELIT Mollie.<br/> xcitation venial
              consequent sent nostrum <br />met
            </p>
          </div>

          <div className="justify-center space-y-8 pb-10 font-bold text-black">
             <div>
              <h1 className="text-3xl space-y-10">the quick fox jumps over</h1>
              </div>
              <div className="space-y-4 ">
             
             <p> the quick fox jumps over the lazy dog</p>
              <p>the quick fox jumps over the lazy dog</p>
             <p>the quick fox jumps over the lazy dog</p>
             <p>the quick fox jumps over the lazy dog</p>
            </div>
             <div>
              <h1 className="text-3xl ">the quick fox jumps over</h1>
              </div>
               <div className="space-y-4">
            
               <p>the quick fox jumps over the lazy dog</p>
               <p>the quick fox jumps over the lazy dog</p>
               <p>the quick fox jumps over the lazy dog</p>
            </div>       
           
        </div>
        
        </div>
      </section>
                  <section className="bg-[#FAFAFA] p-20 justify-center items-center ">
                    
                     <div className="space-x-[15px] justify-center items-center">
                   <h1 className="font-bold text-3xl text-black  ">BESTSELLER PRODUCTS</h1> 
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 p-20 gap-[30px] space-x-[50px] ">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white  overflow-hidden shadow w-[250px] h-[550px] justify-center items-center   "
          >
            <Image
              src={product.image}
              alt={product.title}
              width={250}
              height={400}
              className="h-full w-full "
            />

            <div className="p-4 place-items-center ">
              <h3 className="text-lg text-black font-bold mb-1">
                {product.title}
                
              </h3>
              <h3 className="text-lg text-gray-400 font-bold mb-1">
                English Department
              </h3>
              <div className="flex font-bold gap-1">
                <h1 className="text-gray-300">$96.48</h1>
                <p className="text-green-500 font-bold mb-1">{product.price}</p>
              </div>
           
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center pt-5 pb-5">
        <Image src="/hooli.png" alt="hooli logo" width={300} height={140}/>
        <Image src="/lyft.png" alt="lyft logo" width={300} height={140}/>
        <Image src="/leaf.png" alt="leaf logo" width={300} height={140}/>
        <Image src="/aws.png" alt="aws logo" width={300} height={140}/>
        <Image src="/alien.png" alt="alien logo" width={300} height={140}/>
      </div>
              </div>  
                </section>

                <section>
                  <Footer/>
                </section>
   
    </div>
  );
}

export default Shop;
