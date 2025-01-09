import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Products from "../components/Page2products"

export default function Page2() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-row justify-center items-center pb-3 pt-3 font-bold p-3 bg-[#23856D] text-500 space-x-10 pb-10 py-10">
        <div className="flex gap-4">
          <div className="flex pt-3 pb-3">
            <div>
              <Image src="/phone.png" alt="phone" className="w-[20px] h-[20px]" width={20} height={20} />
            </div>
            <div>(225) 555-0118</div>
          </div>
          <div className="flex gap-1">
            <p className="flex pb-3 pt-3 gap-2">
              <Image src="/mail.png" alt="mail" className="w-[20px] h-[20px]" width={20} height={20} />
              michelle.rivera@example.com
            </p>
          </div>
        </div>
        <div>
          <div className="flex pt-3 pb-3">
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
        </div>
        <div className="flex">
          <p className="flex px-5 py-5">
            Follow Us : <Image src="/social media.png" alt="media" className="w-[90px] h-[30px]" width={90} height={30} />
          </p>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white flex flex-row justify-between items-center pb-5 pt-5 font-bold px-[150px] h-[90px] text-black">
        <div>
          <Image src="/Bandage.png" alt="Logo" className="w-[100px] h-[50px]" width={100} height={35} />
        </div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/Page2">Shop</Link>
          <Link href="/Page4">About</Link>
          <Link href="/Contact">Contact</Link>
          <h1>Pages</h1>
        </div>
        <div>
          <Image src="/login.png" alt="login" className="" width={350} height={50} />
      </div>
      </div>

      <div className="bg-[#FAFAFA] m-full h-[500px]">
        <div className="text-black flex flex-row justify-between items-center pb-5 pt-5 font-bold px-[150px]">
          <div className="font-bold text-3xl">Shop</div>
          <div className="flex gap-4">
            <div>
              <Link href="/">Home</Link>
            </div>
            
            <div>
              <h1>Shop</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 font-bold px-[160px] p-8 m-8 ">
          <Image src="/shopclo1.png" alt="Shop Clothes" className=" w-[250px] h-[250px]" width={500} height={500} />
          <Image src="/shopclo2.png" alt="Shop Clothes" className=" w-[250px] h-[250px]" width={500} height={500} />
          <Image src="/shopclo3.png" alt="Shop Clothes" className=" w-[250px] h-[250px]" width={500} height={500} />
          <Image src="/shopclo4.png" alt="Shop Clothes" className=" w-[250px] h-[250px]" width={500} height={500} />
          <Image src="/shopclo5.png" alt="Shop Clothes" className=" w-[250px] h-[250px]" width={500} height={500} />
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-[200px] bg-white px-[350px] p-8">
        <h1 className="font-bold text-black">Showing all 12 results</h1>
        <Image src="/Page2sort.png" alt="Page22" className="h-[60px] w-[250px]" width={250} height={60} />
        <Image src="/Page2sort2.png" alt="Page22" className="h-[60px] w-[250px]" width={250} height={60} />
      </div>
      <div className="bg-[#FAFAFA] px-[160px] h-[200px] px-10 py-10 justify-center text-center">
        <Image src="/hooli.png" alt="Page23" className="h-[200px] w-[100px]" width={200} height={100} />
        <Image src="/lyft.png" alt="Page23" className="h-[200px] w-[100px]" width={200} height={100} />
        <Image src="/leaf.png" alt="Page23" className="h-[200px] w-[100px]" width={200} height={100} />
        <Image src="/strip.png" alt="Page23" className="h-[200px] w-[100px]" width={200} height={100} />
        <Image src="/aws.png" alt="Page23" className="h-[200px] w-[100px]" width={200} height={100} />
        <Image src="/alien.png" alt="Page23" className="h-[200px] w-[100px]" width={200} height={100} />
      </div>

      <div>
        <div className="flex flex-row justify-between items-center pb-5 pt-5 font-bold px-[150px] bg-white h-[150px]">
          <div>
            <Image src="/Bandage.png" alt="Logo" className="h-[30px] w-[140px]" width={140} height={30} />
          </div>
          <div>
            <Image src="/social2.png" alt="Social" className="h-[30px] w-[200px]" width={200} height={30} />
          </div>
        </div>
        <hr />

        <div className="mt-13 mb-13 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-10 pb-10 bg-white px-[150px]">
          <div className="font-bold">
            <h2 className="text-sm font-bold text-black uppercase tracking-wider">Company Info</h2>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <Link href="#">
                   About Us
                </Link>
              </li>
              <li>
                <Link href="#">
                  Carrier
                </Link>
              </li>
              <li>
                <Link href="#">
                  We are hiring
                </Link>
              </li>
              <li>
                <Link href="#">
                Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="font-bold">
            <h2 className="text-sm text-black font-bold uppercase tracking-wider">Legal</h2>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <Link href="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#">
                  Carrier
                </Link>
              </li>
              <li>
                <Link href="#">
                We are hiring
                </Link>
              </li>
              <li>
                <Link href="#">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="font-bold">
            <h2 className="text-sm text-black font-bold uppercase tracking-wider">Features</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <p className="text-gray-400 font-bold hover:text-white">Business Marketing</p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white">User Analytic</p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white">Live Chat</p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white">Unlimited Support</p>
              </li>
            </ul>
          </div>
          <div className="font-bold">
            <h2 className="text-sm font-bold text-black uppercase tracking-wider">Resources</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <p className="text-gray-400 hover:text-white">IOS & Android</p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white">Watch a Demo</p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white">Customers</p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white">API</p>
              </li>
            </ul>
          </div>
          <div className="font-bold">
            <h2 className="text-sm font-bold text-black uppercase tracking-wider">Get in Touch</h2>
            <form className="mt-4 mb-4 flex flex-row ml-[-70px] rounded-[50px] w-full">
              <div className="flex rounded">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-[190px] h-[70px] px-4 py-2 text-gray-900 bg-gray-200 focus:outline-none focus:bg-white"
                />
                <button
                  type="submit"
                  className="w-[90px] h-[70px] mt-0 bg-blue-500 text-white hover:bg-red-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-4 text-gray-400">Lore imp sum dolor Amit.</p>
          </div>
        </div>
        <div>
          <div className="pb-25px pt-25px py-6 px-6 text-left px-[150px] font-bold text-gray-400 bg-[#FAFAFA] h-[70px]">
            <p> Made With Love By Finland All Right Reserved</p>
          </div>
        </div>
      </div>

      <div>
      <Products/>
      </div>
    </div>
  );
};

