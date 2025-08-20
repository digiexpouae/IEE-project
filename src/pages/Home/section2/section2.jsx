'use client'
import im1 from '../../../../public/assets/section2/im2.jpg'
import im2 from '../../../../public/assets/section2/img2.png'
import im3 from '../../../../public/assets/section2/img3.jpg'
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="relative py-16 bg-zinc-100 ">
       <div className="absolute inset-0 z-[0] bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: "url('/assets/section2/background.png')" ,backgroundSize:'cover',backgroundPosition:'center'}}>
  </div>

      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#0A5B21] font-medium">Guaranteed Success</span>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mt-2">
            What We Do
          </h2>
          <p className="text-gray-600  text-xs mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-[85%] mx-auto">
          {/* Card 1 */}
          <div className="bg-white border-1 border-3 border-[#EFEDE4]  py-6  px-6 shadow-md  overflow-hidden hover:shadow-lg transition">
            <Image
              src={im2}
              alt="Daily Prayers"
              width={400}
           
              height={450}
              className="w-full  object-contain"
            />
            <div className="p-2 flex flex-col  items-center">
              <h3 className="text-xl font-light text-[#0A5B21]">Daily Prayers</h3>
              <p className="text-gray-600 text-center mt-2 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="mt-4 bg-[#DBAC42] flex items-center gap-2 text-gray-900 px-5 py-2 rounded-md font-medium hover:bg-yellow-500 transition text-xs">
                <Image src='/assets/section9/arrow.svg' width={12} height={12} /> Discover More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white  py-6  px-6 shadow-md border-3 border-[#EFEDE4]    overflow-hidden hover:shadow-lg transition">
            <Image
              src={im1}
              alt="Family Counseling"
              width={400}
              height={450}
              className="w-full   rounded  object-contain"
            />
            <div className="p-2 flex flex-col  items-center">
              <h3 className="text-xl font-light text-[#0A5B21]">Family Counseling</h3>
              <p className="text-gray-600  text-center mt-2 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="mt-4 bg-[#DBAC42] flex items-center gap-2 text-gray-900 px-5 py-2 rounded-md font-medium hover:bg-yellow-500 transition text-xs">
                <Image src='/assets/section9/arrow.svg' width={12} height={12} /> Discover More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white  py-6 px-6 border-3 border-[#EFEDE4]    px-4 shadow-md  overflow-hidden hover:shadow-lg transition">
            <Image
              src={im3}
              alt="Social Welfare"
              width={400}
              height={450}
              className="w-full rounded object-contain"
            />
            <div className="p-2 flex flex-col  items-center">
              <h3 className="text-xl font-light text-[#0A5B21]">Social Welfare</h3>
              <p className="text-gray-600 text-center mt-2 text-xs ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="mt-4 bg-[#DBAC42] flex items-center gap-2 text-gray-900 px-5 py-2 rounded-md font-medium hover:bg-yellow-500 transition text-xs">
                <Image src='/assets/section9/arrow.svg' width={12} height={12} /> Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>    
  );
}
