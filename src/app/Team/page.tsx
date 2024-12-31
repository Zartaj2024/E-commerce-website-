import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer"
const team =[
    {
      image:"/t4.png",
      title:"Username",
      profession:"Profession",
      image2:"/social2.png",
      
    },
    {
      image:"/t5.png",
      title:"Username",
      profession:"Profession",
      image2:"/social2.png",
    },
    {
      image:"/t6.png",
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
      {
        image:"/t7.png",
        title:"Username",
        profession:"Profession",
        image2:"/social2.png",
      },
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
        image:"/t8.png",
        title:"Username",
        profession:"Profession",
        image2:"/social2.png",
      },
      {
        image:"/t9.jpg",
        title:"Username",
        profession:"Profession",
        image2:"/social2.png",
      },
    
  ]
export default function Team() {
  return (
    <div>
      <section className="bg-[#FFFFFF]">
        <div className="flex justify-between items-center px-[200px] py-5  ">
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
        <div className="justify-center text-center space-y-10 py-10 font-bold">
          <div>
            <h1 className="text-gray-500">WHAT WE DO</h1>
          </div>
          <div>
            <h1 className="text-6xl text-black">Innovation tailored for you</h1>
          </div>
          <div className="flex font-bold justify-center items-center gap-3">
          <div>
            <Link href="/" className="text-black">Home</Link>
          </div>
          <div>
            <h1 className="text-gray-400 text-2xl ">›</h1>
          </div>
          <div>
            <h1 className="text-gray-300">Team</h1>
          </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFFFFF]">
        <div className="flex justify-center items-center gap-2 ">
            <Image src="/tpic1.png" alt="pic1" width={550} height={150} />
           <div className="space-y-2">
            <div>
            <Image src="/tpic2.png" alt="pic2" width={285} height={200} />
            </div>
            <div>
            <Image src="/tpic4.png" alt="pic3" width={285} height={200} />
            </div>
        </div>
        <div className="space-y-2">
            <div >
            <Image src="/tpic3.png" alt="pic4" width={285} height={200} />
            </div>
            <div>
            <Image src="/tpic5.png" alt="pic5" width={285} height={200} />
            </div>
        </div>
        </div>
     
     
      
      </section>
      <section className="bg-[#FFFFFF] px-[50px] ">
        <div className="space-y-10 w-[1100px] mx-auto">
            <div>
                <h1 className="justify-center text-center text-5xl font-bold text-black py-10">Meet Our Team</h1>
            </div>
            <div className=" justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10  ">
            {team.map((member, number) => (
        <div key={number} className="space-y-2 justify-center text-center py-10 px-10">
          <Image
            src={member.image}
            alt="Team Member"
            width={300}
            height={300}
            className="mx-auto"
          />
          <h1 className="font-bold text-black">{member.title}</h1>
          <h1 className="font-bold text-gray-500">{member.profession}</h1>
          <Image src="/social2.png" alt="social" width={250} height={150} className="mx-auto"/>
        </div>
      ))}
            </div>
        </div>
      </section>
      <section className="bg-[#FFFFFF]">
        <div className="justify-center text-center py-20 space-y-[50px] font-bold text-black">
            <div><h1 className="font-bold text-5xl text-black ">Start your 14 days free trial</h1></div>
            <div><p className="w-[400px] mx-auto">Met minim Mollie non desert Alamo est sit cliquey dolor 
            do met sent. RELIT official consequent.</p></div>
            <div><button className="border bg-blue-500 rounded w-[200px] h-[50px] font-bold text-white">Try it free now</button></div>
            <div>
            <Image
                src="/Rsocial.png"
                alt="social logo"
                width={240}
                height={140}
                className="mx-auto"
              />
            </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
