"use client";
import Image from "next/image";
export default function ContactInfo() {
  return (
    <section className="flex justify-center py-16 bg-gray-50 relative" >
        <div className="absolute inset-0 z-[0] bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: "url('/assets/contact/background.png')" ,backgroundSize:'cover',backgroundPosition:'center'}}>
  </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl w-full px-6 relative z-20">
        
        {/* Email */}
        <div className="bg-white border-1 border-[#D1CCB7] shadow-md rounded-lg p-6 pb-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full  mb-4">
            <Image src='/assets/contact/email.svg' width={20} height={20}    className="text-white w-32 h-32" />
          </div>
          <p className="font-semibold text-sm text-lg mb-2 text-[#0A5B21]">Email</p>
          <p className="text-gray-600 text-xs">contact@yourname.com</p>
        </div>

        {/* Location */}
        <div className="bg-white shadow-md border-1 border-[#D1CCB7] rounded-lg p-6  pb-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <Image src='/assets/contact/location.svg'  width={20} height={20} className="text-white w-32 h-32" />
          </div>
          <p className="font-semibold text-lg text-sm mb-2 text-[#0A5B21]">Location</p>
          <p className="text-gray-600 text-xs">Bain & Company, United States</p>
        </div>

        {/* Office Hours */}
        <div className="bg-white  border-1 border-[#D1CCB7] shadow-md rounded-lg p-6 pb-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full  mb-4">
            <Image src='/assets/contact/clock.svg' width={100} height={100} className="text-white w-32 h-32" />
          </div>
          <p className="font-semibold text-lg mb-2 text-sm text-[#0A5B21]">Office Hours</p>
          <p className="text-gray-600 text-xs">8AM - 11PM</p>
        </div>

      </div>
    </section>
  );
}
