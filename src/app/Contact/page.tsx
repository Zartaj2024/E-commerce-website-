import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div>
      <section>
        <div className="bg-[url('/Cfamilt.png')] bg-cover bg-white">
          <div className="flex justify-between items-center px-[100px] py-5">
            <div>
              <Image src="/Bandage.png" alt="logo" width={150} height={50} />
            </div>
            <div className="text-gray-500 font-bold space-x-9">
              <Link href="/">Home</Link>
              <Link href="Page2">Product</Link>
              <Link href="Pricing">Pricing</Link>
              <Link href="Contact">Contact</Link>
            </div>
            <div className="flex gap-5 items-center">
              <h1 className="font-bold text-blue-500 text-3sm">Login </h1>
              <button className="bg-blue-400 text-white font-bold py-4 px-4 rounded hover:bg-blue-700">
                become a member
              </button>
            </div>
          </div>
          <div className="container mx-auto px-4 py-80 space-y-9 md:space-y-12 font-bold text-2xl md:text-3xl">
            <div>
              <p className="text-black uppercase tracking-wider text-xl font-semibold">
                CONTACT US
              </p>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl text-black font-bold mt-4">
                Get in touch <br /> today!
              </h1>
            </div>
            <div>
              <p className="text-gray-500 mt-4 text-lg md:text-xl">
                We know how large objects will act,
                <br />
                but things on a small scale.
              </p>
            </div>
            <div className="text-black text-lg">
              <p>Phone ; +451 215 215 </p>
              <p>Fax : +451 215 215</p>
            </div>
            <div>
              <Image
                src="/blackSo.png"
                alt="logo"
                width={150}
                height={50}
                className=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFFFFF]">
        <div className="space-y-10 px-10 py-[100px]">
          <div className="justify-center text-center space-y-10">
            <h1 className="text-black font-bold">VISIT OUR OFFICE</h1>
            <p className="font-bold text-black text-4xl w-[500px] mx-auto">
              We help small businesses with big ideas
            </p>
          </div>
          <div className="flex px-[500px] ">
            <div className="mx-auto justify-center text-center  w-[300px] h-[400px] px-5 py-10">
              <Image
                src="/Cphone.png"
                alt="Clogo"
                width={80}
                height={80}
                className="mx-auto py-5"
              />
              <div className="space-y-5 font-bold text-black">
                <div>
                  <h1>georgia.young@example.com </h1>
                  <h1>georgia.young@ple.com</h1>
                </div>
                <h1>Get Support</h1>
                <button className="border border-blue-500  rounded-3xl w-[200px] h-[50px] text-blue-500">
                  Submit Request
                </button>
              </div>
            </div>
            <div className="mx-auto justify-center text-center bg-[#252B42] w-[300px] h-[400px] px-5 py-10">
              <Image
                src="/Clocation.png"
                alt="Clogo"
                width={80}
                height={80}
                className="mx-auto py-5"
              />
              <div className="space-y-5 font-bold">
                <div>
                  <h1>georgia.young@example.com </h1>
                  <h1>georgia.young@ple.com</h1>
                </div>
                <h1>Get Support</h1>
                <button className="border border-blue-500 bg-[#252B42] rounded-3xl w-[200px] h-[50px] text-blue-500">
                  Submit Request
                </button>
              </div>
            </div>
            <div className="mx-auto justify-center text-center  w-[300px] h-[400px] px-5 py-10">
              <Image
                src="/Cmail.png"
                alt="Clogo"
                width={80}
                height={80}
                className="mx-auto py-5"
              />
              <div className="space-y-5 font-bold text-black">
                <div>
                  <h1>georgia.young@example.com </h1>
                  <h1>georgia.young@ple.com</h1>
                </div>
                <h1>Get Support</h1>
                <button className="border border-blue-500  rounded-3xl w-[200px] h-[50px] text-blue-500">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="justify-center text-center py-10 text-black font-black space-y-10">
          <Image
            src="/Arrow 2.png"
            alt="arrow"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h1>WE Can't WAIT TO MEET YOU</h1>
          <h1 className="text-7xl">Let’s Talk</h1>
          <button className="border rounded w-[200px] h-[50px] bg-[#23A6F0] text-white">
            Try it free now
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
