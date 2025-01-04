import React from "react";
import Image from "next/legacy/image";

const Header1 = () => {
  return (
    <div className="hidden md:flex justify-between items-center pb-3 pt-3 font-bold p-3">
      <div className="flex gap-4">
        <div className="flex pt-3 pb-3 gap-2">
          <Image
            src="/phone.png"
            alt="phone"
            className="w-5 h-5"
            width={20}
            height={20}
          />
          <div>(225) 555-0118</div>
        </div>
        <div className="flex gap-1">
          <p className="flex pb-3 pt-3 gap-2">
            <Image
              src="/mail.png"
              alt="mail"
              className="w-5 h-5"
              width={20}
              height={20}
            />
            michelle.rivera@example.com
          </p>
        </div>
      </div>

      <div className="flex pt-3 pb-3">
        <p>Follow Us and get a chance to win 80% off</p>
      </div>

      <div className="flex py-5 px-5">
        <p className="flex">
          Follow Us :
          <Image
            src="/social media.png"
            alt="media"
            className="w-[100px] h-[30]"
            width={70}
            height={20}
          />
        </p>
      </div>
    </div>
  );
};

export default Header1;
