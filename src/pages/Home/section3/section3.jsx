'use client'
import Image from "next/image";
import im4 from '../../../../public/assets/section3/mosque.png'
import im5 from '../../../../public/assets/section3/img5.jpg'
export default function AboutUs() {
  return (
    <section className="relative w-full ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-3xl lg:items-start px-6 lg:px-16 py-12 lg:py-20 gap-40 md:gap-10">
        
        {/* Left side with background + images */}
        <div className="absolute left-0 top-0 bottom-0 h-full w-[0] lg:w-[35%]  -z-[10] bg-cover bg-[#0A5B21] bg-center bg-no-repeat"
       style={{ backgroundImage: "url('/assets/section3/background2.png')" ,backgroundSize:'cover',backgroundPosition:'center'}}>
  </div>
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          {/* Background pattern */}
          <div className="absolute left-0 top-0 w-full h-full lg:w-[100%]  opacity-90 -z-10" />

          {/* Overlapping images */}
          <div className="relative flex flex-col w-[100%] sm:flex-row lg:flex-col items-center gap-6">
           
          <Image 
              src={im4}
              alt="Mosque Dome" 
              width={400} 
              height={200} 
              className="rounded-md shadow-lg"
            />
                 
          </div>
            <Image 
              src={im5}
              alt="Reading Quran" 
              width={200} 
              height={200} 
              className="rounded-md shadow-lg absolute top-20 right-0 -left-5 -bottom-30"
            />
     
        </div>

        {/* Right side text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <p className="text-green-600  text-xs font-semibold mt-6">Guaranteed Success</p>
          <h2 className="text-3xl font-medium">About Us</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            The mission of the Muslim Association of Virginia (MAV) is to establish and 
            maintain a vibrant community based on the Qur’an and Sunnah that is pleasing to Allah
          </p>

          {/* Bullet points */}
          <ul className="space-y-2 text-xs text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600">➤</span>
              The Masjid is the center of spiritual and community life
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">➤</span>
              We believe in Allah, His Angels, His Prophets
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">➤</span>
              The Believers, the Executive Committee
            </li>
          </ul>

          {/* Buttons */}
          <button className="mt-6 px-6 py-3 bg-[#DBAC42] hover:bg-yellow-600 text-white rounded shadow-md transition">
            Discover more
          </button>
        </div>
      </div>
    </section>
  );
}
