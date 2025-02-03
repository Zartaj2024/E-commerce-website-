import React from "react";
import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-[#FAFAFA] w-[1440px] h-[852px]">
      <div className="w-[1439px] h-[136px] bg-[#252B42]">
        <div className="w-[1439px] h-[58px]">
          <div className="w-[1438px] h-[46px] pt-9 pl-2">
            <div className="flex w-[1438px] h-[46px] justify-space-between">
              <div className="w-[1438px] h-[46px] justify-space-between pl-[24px] pr-[24px]">
                <div className="w-[415px] h-[46px] gap-10">
                  <div className="grid grid-cols-2 w-[145px] h-[44px] rounded-[5px] p-10 gap-[5px]">
                    <div className="w-[16px] h-[16px]">
                      <Image
                        src="/phone.png"
                        alt="Image description"
                        width={16}
                        height={16}
                        className="w-[16px] h-[16px]"
                      />
                    </div>
                    <h6 className="w-[104px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px]">
                      {"(225) 555-0118"}
                    </h6>
                  </div>
                  <div className="w-[332px] h-[44px] p-[10px] gap-[10px] ">
                    <h6 className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] ">
                      Follow Us and get a chance to win 80% off
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
