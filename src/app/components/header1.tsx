import React from "react";
import Image from "next/image";

const Header1 = () => {
  return (
    <div className="hidden md:flex justify-between items-center pb-3 pt-3 font-bold p-3 w-[1439px] h-[58px]">
      <div className="w-[1438px] h-[46px] ">
        <div className="flex gap-10 w-[415px] h-[46px] ">
          <div className="flex pt-3 pb-3 gap-2 w-[145px] h-[45px] pb-5 pt-5">
            <Image
              src="/phone.png"
              alt="phone"
              className="w-[16px] h-[16px]"
              width={16}
              height={16}
            />
            <div>
              <h6 className="w-[104px] h-[24px]">(225) 555-0118</h6>
            </div>
          </div>
          <div className="flex gap-1 w-[260px] h-[44px] pb-5 pt-5">
            <Image
              src="/mail.png"
              alt="mail"
              className="w-[16px] h-[16px]"
              width={16}
              height={16}
            />

            <div>
              <h6 className="w-[219px] h-[24px]">
                michelle.rivera@example.com
              </h6>
            </div>
          </div>
        </div>

        <div className="flex pt-3 pb-3 w-[332px] h-[44px]">
          <p className="w-[312px] h-[24px]">
            Follow Us and get a chance to win 80% off
          </p>
        </div>

        <div className="flex py-5 px-5 w-[233px] h-[46px] ">
          <p className="flex">
            <Image
              src="/social media.png"
              alt="media"
              className="w-[124px] h-[26px]"
              width={124}
              height={26}
            />
          </p>
          <h6 className="w-[83px]  h-[24px]">Follow Us :</h6>
        </div>
      </div>
    </div>
  );
};

export default Header1;
