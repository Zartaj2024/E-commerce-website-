import React from "react";

import Image from "next/legacy/image";

const EditorPick = () => {
  return (
    <section className="py-16 w-full h-full bg-white  ">
      <div className="justify-center items-center ">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl text-gray-800 md:text-3xl font-bold uppercase">
            Editors Pick
          </h2>
          <p className="text-gray-500 mt-2 font-bold">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Grid */}
        
        <div className="justify-center items-center w-full h-full p-[100px] ">
          <div className="grid  justify-center items-center grid-cols-1 md:grid-cols-3 gap-4 w-full h-full  ">
            {/* Large Image */}
            <div className="col-2 relative ">
              <Image
                src="/men.png"
                alt="Men"
                layout="responsive"
                width={710}
                height={715}
                className="w-full h-full "
              />
              <button className="absolute w-[150px] h-[50px] bottom-4 left-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg" aria-label="View Men Collection">
                Men
              </button>
            </div>

            {/* Smaller Images */}
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              {/* Women */}
              <div className="relative ">
                <Image
                  src="/women.png"
                  alt="Women"
                  layout="responsive"
                  width={240}
                  height={500}
                  className="w-[240px] h-[500px]"
                />
                <button className="absolute h-[50px] font-bold bottom-4 left-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg" aria-label="View Women Collection">
                  Women
                </button>
              </div>
              <div className="space-y-4">
              {/* Accessories */}
              <div className="relative ">
                <Image
                  src="/acce.png"
                  alt="Accessories"
                  layout="responsive"
                  width={240}
                  height={242}
                  className="w-full h-full "
                />
                <button className="absolute h-[50px] bottom-4 left-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg" aria-label="View Accessories Collection">
                  Accessories
                </button>
              </div>
              {/* Kids */}
              <div className="relative col-2">
                <Image
                  src="/kids.png"
                  alt="Kids"
                  layout="responsive"
                  width={240}
                  height={242}
                  className="w-full h-[100px] "
                />
                <button className="absolute w-[100px] h-[50px] bottom-4 left-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg" aria-label="View Kids Collection">
                  Kids
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default EditorPick;

