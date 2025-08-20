import Image from "next/image"
import im1 from '../../../../public/assets/section8/mosque.jpg'
import play from '../../../../public/assets/section8/play.svg'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Section1 = () => {
    return (
        <div className="h-[65vh] flex items-center justify-center w-full relative">
            <Image 
                src={im1} 
                alt="hero image" 
                fill 
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-[#000000]  opacity-[0.5] z-[10]">   </div>
                <div className=" absolute z-20 inset-0 container max-w-7xl h-full flex flex-col items-center justify-center px-4 text-white">
                    <div className="max-w-4xl">
                        <div className="flex items-center justify-center">
                        <button className="rounded-full  flex items-center justify-center h-12 w-12 bg-[#DBAC42]">
                            <Image src={play} alt="" />
                        </button>
                        </div>
                        <h1 className="text-4xl  font-light mb-6 tracking-tight leading-tight">
                        Have you ever wondered What<br />
                        Muslims do at the mosque?
                        </h1>
                      
                        <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
                            <button className=" bg-[#0A5B21] hover:bg-[#0A5B21] text-white px-8 py-3 rounded-md font-medium transition-colors">
Welcome                            </button>
                            <button className="flex items-center justify-center gap-2 bg-[#DBAC42] hover:bg-[#DBAC42] text-black px-8 py-3 rounded-md font-medium transition-colors backdrop-blur-sm">
                                {/* <FaPlay className="text-[#A81F19]" /> */}
                               Discover more
                            </button>
                        </div>
                    </div>
                </div>
         
        </div>
    )
}

export default Section1