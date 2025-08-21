"use client";
import Image from "next/image";

export default function PrayerGallery() {
  return (
    <section className="flex justify-center py-16 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl w-full px-6">
        
        <Image
          src="/assets/social/1.JPG" // replace with your image in /public
          alt="Prayer 1"
          width={400}
          height={500}
          className="w-full h-72 md:h-96 object-cover  shadow"
        />

        <Image
         src="/assets/social/2.JPG" 
          alt="Prayer 2"
          width={400}
          height={500}
          className="w-full h-72 md:h-96 object-cover  shadow"
        />

        <Image
          src="/assets/social/3.JPG"
          alt="Prayer 3"
          width={400}
          height={500}
          className="w-full h-72 md:h-96 object-cover  shadow"
        />

        <Image
          src="/assets/social/4.JPG"
          alt="Prayer 4"
          width={400}
          height={500}
          className="w-full h-72 md:h-96 object-cover shadow"
        />

        <Image
          src="/assets/social/5.jpg"
          alt="Prayer 5"
          width={400}
          height={500}
          className="w-full h-72 md:h-96 object-cover  shadow"
        />

        <Image
          src="/assets/social/6.JPG"
          alt="Prayer 6"
          width={400}
          height={500}
          className="w-full h-72 md:h-96 object-cover  shadow"
        />
      </div>
    </section>
  );
}
