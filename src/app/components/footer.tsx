// components/Footer.js
import React from "react";


import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white w-full">
      <footer className="bg-white text-white py-12 justify-center items-center w-full">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 m-40px p-40px">
          <div className="flex justify-between items-center bg-[#FAFAFA] p-7 w-full h-[120px] px-10 py-10">
            <div>
              <Image src="/Bandage.png" alt="Bandage logo" width={100} height={100} className="w-[100px]" />
            </div>
            <div className="flex space-x-4">
              <Image src="/social2.png" alt="Social media icons" width={250} height={100} className="w-[250px]" />
            </div>
          </div>
          <div className="mt-10 mb-10 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-10 pb-10 px-10 py-10">
            <div className="font-bold">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider">Company Info</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link>
                </li>
                <li>
                  <Link href="/hiring" className="text-gray-400 hover:text-white">We are hiring</Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm text-black font-bold uppercase tracking-wider">Legal</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm text-black font-bold uppercase tracking-wider">Features</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/features/marketing" className="text-gray-400 font-bold hover:text-white">Business Marketing</Link>
                </li>
                <li>
                  <Link href="/features/analytics" className="text-gray-400 hover:text-white">User Analytics</Link>
                </li>
                <li>
                  <Link href="/features/live-chat" className="text-gray-400 hover:text-white">Live Chat</Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-400 hover:text-white">Unlimited Support</Link>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider">Resources</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/mobile" className="text-gray-400 hover:text-white">iOS & Android</Link>
                </li>
                <li>
                  <Link href="/demo" className="text-gray-400 hover:text-white">Watch a Demo</Link>
                </li>
                <li>
                  <Link href="/customers" className="text-gray-400 hover:text-white">Customers</Link>
                </li>
                <li>
                  <Link href="/api" className="text-gray-400 hover:text-white">API</Link>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider">Get in Touch</h2>
              <form className="mt-4 mb-4 flex flex-row rounded-[50px] w-full">
                <div className="flex rounded">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-[190px] h-[70px] px-4 py-2 text-gray-900 bg-gray-200 focus:outline-none focus:bg-white"
                    required
                  />
                  <button
                    type="submit"
                    className="w-[90px] h-[70px] mt-0 bg-blue-500 text-white hover:bg-red-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-4 text-gray-400">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="pb-25px pt-25px px-10 py-10 text-start font-bold text-gray-400 bg-[#FAFAFA] h-[70px]">
            <p>Made With Love By Finland. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

