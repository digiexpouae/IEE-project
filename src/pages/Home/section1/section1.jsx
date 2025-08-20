import Image from "next/image"
import im1 from '../../../../public/assets/section1/heroiamge.jpg'
// import { FaPlay } from 'react-icons/fa';

const Section1 = () => {
    return (
        <div className="h-[100vh] w-full relative">
            <Image 
                src={im1} 
                alt="hero image" 
                fill 
                className="object-cover object-[center_30%]"
                priority
            />
            <div className="relative h-[20vh]  md:h-[23vh]">
            <Image src='/assets/section1/s-1-background.svg' alt="hero image" fill className="object-cover" priority/></div>
            <div className="absolute inset-0 bg-[#00000066] z-[10] mt-10">
                <div className="container max-w-3xl h-full flex flex-col items-center justify-center px-4 text-white">
                    <div className="max-w-xl">
                        <div className="flex items-center"><Image src='/assets/section1/s-1.svg' width={16} height={16} /> <span className="text-xs mr-3">Truth, justice, hope</span> <Image src='/assets/section1/s-1.svg' width={16} height={16} /></div>
                        <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight leading-tight">
                        Do you feel like<br />
                        you are lost?
                        </h1>
                        <span className="text-md mb-8 opacity-90 tracking-tight" >
                        The sad people in the universe are so many .. but in <br />
                        Islam you move from happiness to happiness …
                        </span>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
        </div>
    )
}

export default Section1