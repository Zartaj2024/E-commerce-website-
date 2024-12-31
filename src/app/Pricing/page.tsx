import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer"
export default function Pricing() {
  return (
    <div>
      <section className="px-[250px] py-10 bg-[#FAFAFA]">
        <div className="bg-[#FFFFFF] space-y-[60px] py-10">
          <div className="flex justify-between  items-center px-5 py-5">
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
          <div className="space-y-10">
            <div className="text-center font-bold text-gray-500 text-2xl">
              <h5>PRICING</h5>
            </div>
            <div className="text-center font-bold text-black text-8xl">
              <h1>Simple Pricing</h1>
            </div>
            <div className="flex justify-center items-center gap-5 text-center">
              <Link href="/" className="text-black font-bold ">
                Home
              </Link>
              <h1 className="text-gray-500 text-3xl">›</h1>
              <Link href="/Pricing" className="text-gray-500 font-bold">
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFA] text-center justify-center">
        <h1 className="text-black font-bold text-6xl">Pricing</h1>
        <p className="text-gray-500 font-bold p-10 text-center ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <Image
          src="/switch.png"
          alt="switch"
          width={350}
          height={200}
          className="justify-center items-center mx-auto"
        />

        <div className="flex relative py-10 justify-center items-center ">
          <div className="border  border-blue-500  rounded-xl w-[350px] h-[700px] justify-center items-center mt-[70px] ">
            <div className="mx-auto px-5 space-y-7 ">
              <h2 className="font-bold text-black text-3xl py-10 px-5">FREE</h2>
              <h4 className="w-[150px] mx-auto text-gray-500 font-bold">
                Organize across all apps by hand
              </h4>
              <div className="flex">
                <div className=" justify-center items-center space-x-3 mx-auto  flex">
                  <h2 className="text-blue-500 font-bold text-6xl">0</h2>

                  <div className="justify-center items-center">
                    <div className="text-blue-500">
                      <h2 className="text-start font-bold text-2xl">$</h2>
                    </div>
                    <div>
                      <h2 className="font-bold text-blue-500 ">Per Month</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/features-list.png"
                  alt="list"
                  width={250}
                  height={30}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="border border-blue-500 rounded-xl w-[350px] h-[700px] justify-center items-center space-y-10">
            <div className="mx-auto px-5 space-y-7 ">
              <h2 className="font-bold text-black text-3xl py-10 px-5">
                {" "}
                STANDARD
              </h2>
              <h4 className="w-[150px] mx-auto text-gray-500 font-bold">
                Organize across all apps by hand
              </h4>
              <div className="flex">
                <div className=" justify-center items-center space-x-3 mx-auto  flex">
                  <h2 className="text-blue-500 font-bold text-6xl">9.99</h2>

                  <div className="justify-center items-center">
                    <div className="text-blue-500">
                      <h2 className="text-start font-bold text-2xl">$</h2>
                    </div>
                    <div>
                      <h2 className="font-bold text-blue-500 ">Per Month</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/features-list.png"
                  alt="list"
                  width={250}
                  height={30}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="border border-blue-500 rounded-xl w-[350px] h-[700px] justify-center items-center space-y-10 mt-[70px]">
            <div className="mx-auto px-5 space-y-7 ">
              <h2 className="font-bold text-black text-3xl py-10 px-5">
                PREMIUM
              </h2>
              <h4 className="w-[150px] mx-auto text-gray-500 font-bold">
                Organize across all apps by hand
              </h4>
              <div className="flex">
                <div className=" justify-center items-center space-x-3 mx-auto  flex">
                  <h2 className="text-blue-500 font-bold text-6xl">19.99</h2>

                  <div className="justify-center items-center">
                    <div className="text-blue-500">
                      <h2 className="text-start font-bold text-2xl">$</h2>
                    </div>
                    <div>
                      <h2 className="font-bold text-blue-500 ">Per Month</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/features-list.png"
                  alt="list"
                  width={250}
                  height={30}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#FAFAFA]  px-10 py-10 space-y-10 -mt-[400px] justify-center w-full h-[400px] absolute z-10">
          <div>
            <h1 className="font-bold text-black text-xl justify-center text-center">
              Trusted By Over 4000 Big Companies
            </h1>
          </div>
          <div>
            <div className="flex justify-center items-center pt-5 pb-5 ">
              <Image
                src="/hooli.png"
                alt="hooli logo"
                width={240}
                height={140}
              />
              <Image src="/lyft.png" alt="lyft logo" width={240} height={140} />
              <Image src="/leaf.png" alt="leaf logo" width={240} height={140} />
              <Image src="/aws.png" alt="aws logo" width={240} height={140} />
              <Image
                src="/alien.png"
                alt="alien logo"
                width={240}
                height={140}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFFFFF]">
        <div>
          <div className=" p-10 space-y-5">
            <h1 className="font-bold text-5xl mx-auto text-black justify-center text-center">
              {" "}
              Pricing FAQs
            </h1>
            <p className="w-[400px] mx-auto font-bold text-gray-500  ">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics
            </p>
          </div >
          <div className="space-y-[80px]">
            <div className="flex  gap-10 text-black justify-center ">
              <div className="w-[500px] font-bold">
                <div className="flex gap-3">
                  <h1 className="text-4xl text-start text-blue-500">›</h1>
                  <h1 className="text-2xl py-2 text-start">
                    the quick fox jumps over the lazy dog
                  </h1>
                </div>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <div className=" font-bold w-[500px]">
                <div className="flex gap-3 ">
                  <h1 className="text-4xl text-start text-blue-500 ">›</h1>

                  <h1 className="text-2xl py-2">
                    the quick fox jumps over the lazy dog
                  </h1>
                </div>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
      
            <div className="flex  gap-10 text-black justify-center text-center">
              <div className="w-[500px] font-bold">
                <div className="flex gap-3">
                  <h1 className="text-4xl text-start text-blue-500">›</h1>
                  <h1 className="text-2xl py-2 text-start">
                    the quick fox jumps over the lazy dog
                  </h1>
                </div>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <div className=" font-bold w-[500px]">
                <div className="flex gap-3 ">
                  <h1 className="text-4xl text-start text-blue-500 ">›</h1>

                  <h1 className="text-2xl py-2">
                    the quick fox jumps over the lazy dog
                  </h1>
                </div>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
        
            <div className="flex  gap-10 text-black justify-center text-center">
              <div className="w-[500px] font-bold">
                <div className="flex gap-3">
                  <h1 className="text-4xl text-start text-blue-500">›</h1>
                  <h1 className="text-2xl py-2 text-start">
                    the quick fox jumps over the lazy dog
                  </h1>
                </div>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <div className=" font-bold w-[500px]">
                <div className="flex gap-3 ">
                  <h1 className="text-4xl text-start text-blue-500 ">›</h1>

                  <h1 className="text-2xl py-2">
                    the quick fox jumps over the lazy dog
                  </h1>
                </div>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center py-10 font-bold text-gray-500 text-1xl">Haven’t got your answer? Contact our support</h1>
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
