import React from "react";

import Image from "next/legacy/image";

const EditorPick = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl text-gray-800 md:text-3xl font-bold uppercase">
            Editor's Pick
          </h2>
          <p className="text-gray-500 mt-2 font-bold">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[1350px] h-[400px]">
          {/* Large Image */}
          <div className="col-span-2 relative">
            <Image
              src="/men.png"
              alt="Men"
              layout="responsive"
              width={400}
              height={300}
              className="w-[200] h-[200] "
            />
            <button className="absolute bottom-4 left-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg" aria-label="View Men Collection">
              Men
            </button>
          </div>

          {/* Smaller Images */}
          <div className="grid grid-cols-2 gap-4">
            {/* Women */}
            <div className="relative">
              <Image
                src="/women.png"
                alt="Women"
                layout="responsive"
                width={450}
                height={1420}
                className="w-[450px] h-[1420px]"
              />
              <button className="absolute bottom-4 left-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg" aria-label="View Women Collection">
                Women
              </button>
            </div>
            <div className="space-y-5">
            {/* Accessories */}
            <div className="relative">
              <Image
                src="/acce.png"
                alt="Accessories"
                layout="responsive"
                width={450}
                height={685}
                className="w-full h-full "
              />
              <button className="absolute bottom-4 left-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg" aria-label="View Accessories Collection">
                Accessories
              </button>
            </div>
            {/* Kids */}
            <div className="relative col-span-2">
              <Image
                src="/kids.png"
                alt="Kids"
                layout="responsive"
                width={450}
                height={685}
                className="w-full h-[100px] "
              />
              <button className="absolute bottom-4 left-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg" aria-label="View Kids Collection">
                Kids
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorPick;

