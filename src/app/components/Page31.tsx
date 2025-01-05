import React from "react";
import Link from "next/link";

const Page31 = () => {
  return (
  <div
      className="h-screen bg-no-repeat bg-center bg-cover bg-[url('/background.jpg')] bg-cover"
    
    >
      <header className="text-gray-600 body-font border-2  bg-[#FFFFFF] h-[105px] px-5 py-5">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Left Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-bold text-gray-900">Bandage</span>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex md:space-x-8 items-center text-gray-400 text-sm font-bold">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <Link href="/Page2" className="hover:text-gray-700">
              Product
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Pricing
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Contact
            </Link>
          </nav>

          {/* Right Section: Login & Button */}
          <div className="flex items-center space-x-6">
            <Link
              href="#"
              className="text-blue-500 font-semibold text-sm hover:underline"
            >
              Login
            </Link>
            <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600 flex items-center">
              Become a member
              <span className="ml-2 text-lg">→</span>
            </button>
          </div>
        </div>
      </header>

      <section className="grid text-black font-bold text-2xl justify-left items-left py-[170px] px-[170px] space-y-9">
        <div className="text-2">ABOUT COMPANY</div>
        <div className="text-8xl">ABOUT US</div>
        <div>
          <p>
            We know how large objects will act,
            <br />
            but things on a small scale
          </p>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md">
            Get Quote Now
          </button>
        </div>
      </section>
    </div>
  );
};
export default Page31;
