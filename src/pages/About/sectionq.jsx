"use client";
import Image from "next/image";
import im1 from '../../../public/assets/section9/2.JPG'
import im2 from '../../../public/assets/section9/3 (2).jpg'

export default function VisionMission() {
  return (
    <section className="flex justify-center py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full px-6">
        
        {/* Vision */}
        <div className="flex flex-col items-center text-center border-r border-gray-300 md:pr-8">
          <Image
            src={im2}// replace with your image path in /public
            alt="Vision"
            width={600}
            height={400}
            className="w-full h-54 object-cover mb-6"
          />
          <h2 className="text-3xl font-light  mb-4">Vision</h2>
          <p className="text-gray-600 text-sm leading-[1.8]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it...
          </p>
        </div>

        {/* Mission */}
        <div className="flex flex-col items-center text-center md:pl-8">
          <h2 className="text-3xl font-light mb-4">Mission</h2>
          <p className="text-gray-600 text-sm leading-[1.8] mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it...
          </p>
          <Image
            src={im1} // replace with your image path in /public
            alt="Mission"
            width={600}
            height={400}
            className="w-full h-54 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
