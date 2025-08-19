'use client'
import Image from "next/image";
import proj1 from "../../../../public/assets/section6/1.JPG"; 
import proj2 from "../../../../public/assets/section6/2.JPG";
import proj3 from "../../../../public/assets/section6/3.JPG";

const Projects = () => {
  return (
    <section className="w-full bg-zinc-100 py-16 relative">
               <div className="absolute inset-0 z-[0] bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: "url('/assets/section2/background.png')" ,backgroundSize:'cover',backgroundPosition:'center'}}>
  </div>
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto px-6 text-center relative z-10">
        
        {/* Heading */}
        <span className="text-green-600 font-medium">Our community initiatives</span>
        <h2 className="text-3xl md:text-4xl font-medium mt-2">Explore Our Projects</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mt-12">
          
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
            <Image src={proj1} alt="Project 1" className="w-full h-48 object-cover" />
            <span className=" absolute left-4 right-0 top-44 w-1/3  bg-green-600 text-white text-xs  py-1 rounded">EDUCATION</span>

            <div className=" py-2 px-5">
              <h3 className="mt-3 font-medium  text-left text-xl">Education of needy orphans</h3>
              <p className="text-gray-600 mt-1  text-left text-sm">Raised: $2,140</p>
              
              <div className="mt-2 w-full bg-gray-200  flex rounded-full h-2">
              <div className="bg-[#0A5B21] h-2 rounded-l-full w-[70%]"></div>
                <div className="bg-[#DBAC42] h-2 rounded-r-full w-[30%]"></div>
   
              </div>

              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="flex items-center gap-2 text-gray-600">
                  <i className="fas fa-clock"></i> 1 Day Left
                </span>
                <button className="bg-[#DBAC42] hover:bg-yellow-600 text-white text-sm font-medium px-4 py-2 rounded">
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
            <Image src={proj2} alt="Project 2" className="w-full h-48 object-cover" />
            <div className=" py-2 px-5">
            <span className=" absolute left-4 right-0 top-44 w-1/3  bg-green-600 text-white text-xs px-3 py-1 rounded ">EDUCATION</span>
              <h3 className="mt-3 font-medium  text-left text-lg">Providing drinking water</h3>
              <p className="text-gray-600 mt-1 text-left text-sm">Raised: $1,260</p>

              <div className="mt-2 w-full bg-gray-200  flex rounded-full h-2">
              <div className="bg-[#0A5B21] h-2 rounded-l-full w-[70%]"></div>
                <div className="bg-[#DBAC42] h-2 rounded-r-full w-[30%]"></div>
   
              </div>

              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="flex items-center gap-2 text-gray-600">
                  <i className="fas fa-clock"></i> 1 Day Left
                </span>
                <button className="bg-[#DBAC42] hover:bg-yellow-600 text-white text-sm font-medium px-4 py-2 rounded">
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
            <Image src={proj3} alt="Project 3" className="w-full h-48 object-cover" />
            <div className=" py-2 px-5">
            <span className=" absolute left-4 right-0 top-44 w-1/3  bg-green-600 text-white text-xs px-3 py-1 rounded ">EDUCATION</span>
              <h3 className="mt-3 font-medium text-left text-xl">Education of needy orphans</h3>
              <p className="text-gray-600 mt-1 text-left text-sm">Raised: $3,100</p>
              <div className="mt-2 w-full bg-gray-200  flex rounded-full h-2">
              <div className="bg-[#0A5B21] h-2 rounded-l-full w-[70%]"></div>
                <div className="bg-[#DBAC42] h-2 rounded-r-full w-[30%]"></div>
   
              </div>
              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="flex items-center gap-2 text-gray-600">
                  <i className="fas fa-clock"></i> 1 Day Left
                </span>
                <button className="bg-[#DBAC42] hover:bg-yellow-600 text-white text-sm font-medium px-4 py-2 rounded">
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
