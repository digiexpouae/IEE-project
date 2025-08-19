'use client'
import Image from "next/image";
import im1 from '../../../../public/assets/section4/1.JPG'
import im2 from '../../../../public/assets/section4/2.JPG'
export default function PrayerSection() {
  return (
    <section className="relative w-full h-auto md:flex items-center justify-center bg-zinc-100 bg-[url('/pattern.png')] bg-repeat py-12">
          <div className="absolute inset-0 z-[0] bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: "url('/assets/section2/background.png')" ,backgroundSize:'cover',backgroundPosition:'center'}}>
  </div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
          
          {/* Card 1 */}
          <div className="relative group rounded-lg overflow-hidden shadow-md">
            <Image
              src={im1}
              alt="Ramadan"
              width={400}
              height={500}
              className="w-full h-62 md:h-82 object-cover transform group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
              <h3 className="text-2xl font-bold">Ramadan</h3>
              <button className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-sm font-medium rounded transition">
                → Discover More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-lg overflow-hidden shadow-md">
            <Image
              src={im2}
              alt="Reading Quran"
              width={400}
              height={500}
              className="w-full h-62 md:h-82 object-cover transform group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
              <h3 className="text-2xl font-bold">Reading Quran</h3>
              <button className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-sm font-medium rounded transition">
                → Discover More
              </button>
            </div>
          </div>

          {/* Prayer Timings */}
          <div className="bg-[#0A5B21] h-82 relative z-10 text-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Prayer Timings</h3>
            <ul className="space-y-3">
              {[
                { name: "FAJR", time: "5:44 AM" },
                { name: "SUNRISE", time: "6:59 AM" },
                { name: "DHUHR", time: "2:33 PM" },
                { name: "ASR", time: "5:44 AM" },
                { name: "MAGHRIB", time: "4:52 PM" },
                { name: "ISHA", time: "6:10 PM" },
              ].map((prayer, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{prayer.name}</span>
                  <span className="bg-yellow-500 text-gray-900 px-3 py-1 text-sm rounded">
                    {prayer.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
