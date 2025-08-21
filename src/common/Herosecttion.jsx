import Image from "next/image";

const HeroSection = ({text,heroImage,className,className2}) => {
    return (
        <div className="h-[70vh] md:h-[80vh] w-full relative">
            {/* Background Image */}
            <Image 
                src={heroImage} 
                alt="About Us" 
                fill 
                className={`object-cover object-[75%_20%] ${className}`}
                priority
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00000080] z-[5]"></div>
            
            {/* Content */}
            <div className="absolute inset-0 z-10 flex items-center">
                <div className="container mx-auto px-4 text-white">
                    <div className="w-full flex items-center justify-center">
                      
                        
                        <h1 className="text-4xl md:text-6xl  text-center lg:text-7xl font-light mb-6 leading-tight">
                         {text}
                        </h1>
                        
                     
                    </div>
                </div>
            </div>
            
            {/* Bottom Decoration */}
            <div className={`absolute bottom-0 left-0 right-0 h-24 md:h-3 ${className2}`}>
                <Image 
                    src='/assets/section1/s-1-background.svg' 
                    alt="decoration" 
                    fill 
                    className="object-cover object-[80%_50%]"
                />
            </div>
        </div>
    );
};

export default HeroSection;