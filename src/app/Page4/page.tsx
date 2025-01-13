import React from "react";
import Footer from "../components/footer"

import Image from "next/legacy/image";
import Link from "next/link";
const team =[
  {
    image:"/t1.png",
    title:"Username",
    profession:"Profession",
    image2:"/social2.png",
  },
  {
    image:"/t2.jpg",
    title:"Username",
    profession:"Profession",
    image2:"/social2.png",
  },
  {
    image:"/t3.jpg",
    title:"Username",
    profession:"Profession",
    image2:"/social2.png",
  },
]

export default function About() {
  return (
    <div className="bg-[#FFFFFF]">
     <section className="bg-[#FFFFFF] ">
      <div className="flex justify-between items-center px-5 py-5">
       <div >
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
        <button className="bg-blue-400 text-white font-bold py-4 px-4 rounded hover:bg-blue-700">become a member</button>

       </div>
       
      </div>
        <div className="flex justify-center items-center px-[150px] w-full ">
       <div className="space-y-10 space-x-10 text-black text-start font-bold">
        <div><h1 className="px-20">ABOUT COMPANY</h1></div>
        <div><h1 className="font-bold text-7xl">ABOUT US</h1></div>
        <div><h1 className="text-gray-500">We know how large objects will act,
        but things on a small scale</h1></div>
        <div>        <button className="bg-blue-400 text-white font-bold py-4 px-4 rounded hover:bg-blue-700">Get Quote Now</button></div>
      </div>
      <div className="x-20">
        <Image src="/background.jpg" alt="bg" width={1300} height={850} className=" y-20 w-[1300px] h-[850px]"/>
      </div>
      </div>
     </section>
   

   <section >
    <div className="flex w-full px-[150px] py-[140px] justify-center items-center gap-[400px] ">
      <div className="font-bold y-10 x-10 space-y-10">
        <h1 className="text-red-500 text-start">
          Problems trying
        </h1>
        <p className="text-black text-2xl">Met minim Mollie non desert
Alamo est sit cliquey dolor do
met sent.</p>
      </div>
      <div>
        <p className="text-gray-500 font-bold text-center justify-center text-start y-[100px]">Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics</p>
      </div>
    </div>
   </section>
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-bold sm:text-6xl text-3xl text-gray-900">
          15K
        </h2>
        <p className="leading-relaxed font-bold text-gray-500">Happy Customers</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-bold sm:text-6xl text-3xl text-gray-900">
          150K
        </h2>
        <p className="leading-relaxed font-bold text-gray-500">Monthly Visitors</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-bold sm:text-6xl text-3xl text-gray-900">
          15
        </h2>
        <p className="leading-relaxed font-bold text-gray-500">Countries Worldwide</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2 ">
        <h2 className="title-font font-bold sm:text-6xl text-3xl text-gray-900">
          100+
        </h2>
        <p className="leading-relaxed font-bold text-gray-500">Top Partners</p>
      </div>
    </div>
  </div>
</section>
<section>
  <Image src="/desktop-video-3.png" alt="video" width={1950} height={1000}/>
</section>
<section>
<div>
  <div className="justify-center text-center w-full px-[150px]">
    <h1 className="text-black text-6xl font-bold">Meet Our Team</h1>
    <p className="text-gray-500 text-10sm font-Montserrat font-bold">Problems trying to resolve the conflict between 
    the two major realms of Classical physics: Newtonian mechanics </p>
  </div>
  <div className="flex  justify-center items-center gap-10 px-20 py-20">
    <Link href="/Team" className="flex gap-10">
      {team.map((member, index) => (
        <div key={index} className="space-y-4 justify-center text-center">
          <Image
            src={member.image}
            alt="Team Member"
            width={300}
            height={300}
          />
          <div>
          <h1 className="font-bold text-black">{member.title}</h1>
          </div>
          <div>
          <h1 className="font-bold text-gray-500">{member.profession}</h1>
          </div>
          <div>
          <Image src="/social2.png" alt="social" width={200} height={30} className="x-10 y-10"/>
          </div>
        </div>
      ))}
    </Link>
  </div>
    
</div>
</section>

<section className="bg-[#FAFAFA] px-10 py-10 py-10 h-[500px]  ">
  <div >
    <div className="justify-center text-center w-full px-10 py-10 space-y-10">
      <h2 className="font-bold text-6xl text-black">Big Companies Are Here</h2>
      <p className="w-[550px] mx-auto justify-center text-center font-bold text-3sm text-gray-500">Problems trying to resolve the conflict between 
      the two major realms of Classical physics: Newtonian mechanics </p>

    </div>
    <div className="flex gap-5 justify-center items-center">
      <Image src="/hooli.png" alt="hooli" width={200} height={100}/>
      <Image src="/lyft.png" alt="hooli" width={200} height={100}/>
      <Image src="/leaf.png" alt="hooli" width={200} height={100}/>
      <Image src="/strip.png" alt="hooli" width={200} height={100}/>
      <Image src="/aws.png" alt="hooli" width={200} height={100}/>
      <Image src="/alien.png" alt="hooli" width={200} height={100}/>
    </div>
  </div>
</section>

      <section>
      <div className="flex justify-center items-center  bg-[#2A7CC7] h-full w-full">
      <div className="space-y-10 space-x-20 px-[230px] text-white text-start font-bold bg-blue-">
        <div><h1 className="px-20"> WORK WITH US</h1></div>
        <div><h1 className="font-bold text-6xl">Now Lets grow Yours</h1></div>
        <div><h1 className="text-white">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </h1></div>
        <div>        <button className=" bg-[#2A7CC7] text-white font-bold py-4 px-4 border border-white rounded hover:bg-blue-700">Button</button></div>
      </div>
      <div className="x-20 ml">
        <Image src="/page333.png" alt="bg" width={610} height={610} className=" y-20 w-[610px] h-[610px]"/>
      </div>
      </div>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

