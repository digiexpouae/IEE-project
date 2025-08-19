'use client'
import Image from "next/image";
import man from "../../../../public/assets/section5/1.JPG";
import woman from "../../../../public/assets/section5/2.JPG";
import icon1 from '../../../../public/assets/section5/icon1.svg'
import icon2 from '../../../../public/assets/section5/icon2.svg'
import icon3 from '../../../../public/assets/section5/icon3.svg'

const Section5 = () => {
  return (
    <section className="w-full h-auto bg-white py-16 relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
        
        {/* Left Side (Images) */}
        <div className="flex  sm:flex-row gap-6">
          <div className="flex-1">
            <Image 
              src={man} 
              alt="Praying Man" 
              className="rounded-lg shadow-md w-full object-cover md:h-full"
            />
          </div>
          <div className="flex-1">
            <Image 
              src={woman} 
              alt="Praying Woman" 
              className="rounded-lg shadow-md w-full object-cover md:h-full"
            />
          </div>
        </div>

        {/* Right Side (Content) */}
        <div className="flex flex-col gap-12 justify-center px-4">
          
          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#DBAC42] h-[60%] md:h-auto  flex items-center justify-center p-4 rounded-full text-white text-xl">
              <Image src={icon1} alt="Icon" className="w-8 h-8 md:w-6 md:h-6" />
            </div>
            <div>
              <h3 className="text-[#0A5B21] text-md font-semibold">Ramadan vigils</h3>
              <p className="text-gray-600 text-xs ">
                Quran and Islamic orders classes, forming chore groups and performing Tawashih on ceremonies ...
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#DBAC42]  h-[60%] md:h-auto flex items-center justify-center  p-4 rounded-full text-white text-xl">
                    <Image src={icon2} alt="Icon" className="w-8 h-8 md:w-6 md:h-6" />
            </div>
            <div>
              <h3 className="text-[#0A5B21] text-md font-semibold">Deliver dynamic Khutbas</h3>
              <p className="text-gray-600 text-xs ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis...
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#DBAC42]  h-[60%] md:h-auto flex items-center justify-center  p-4 rounded-full text-white text-xl">
              <Image src={icon3} alt="Icon" className="w-8 h-8 md:w-6 md:h-6" />
            </div>
            <div>
              <h3 className="text-[#0A5B21] text-md font-semibold">Publishing Islamic magazines</h3>
              <p className="text-gray-600 text-xs ">
                Cultural section of the mosque according to different demand of Islamic knowledge for age levels ...
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section5;
