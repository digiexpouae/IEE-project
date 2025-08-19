import Image from "next/image";
import user1 from "../../../../public/assets/section7/1.JPG"
import user2 from "../../../../public/assets/section7/2.JPG"; // replace with actual path

const Testimonials = () => {
  return (
    <section className="relative py-16 bg-red-800 bg-[url('/pattern.png')] bg-cover bg-center text-white">
         <div className="absolute inset-0 z-[0] opacity-[0.2] bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: "url('/assets/section2/background.png')" ,backgroundSize:'cover',backgroundPosition:'center'}}>
  </div>
      <div className="max-w-5xl mx-auto px-6 text-center  relative z-10">
        {/* Section Heading */}
        <span className="text-yellow-500 font-medium">Our community initiatives</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">What People Say</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center">
            <div className="relative bg-green-800 p-6 rounded-lg text-white text-center shadow-md">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              {/* Speech Bubble Arrow */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-green-800"></div>
            </div>
            <div className="mt-8 text-center">
              <Image
                src={user1}
                alt="Ahmed Alkheir"
                width={60}
                height={60}
                className="rounded-full mx-auto"
              />
              <h4 className="mt-2 font-bold text-lg">Ahmed Alkheir</h4>
              <p className="text-sm text-yellow-500">Muslim</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col items-center">
            <div className="relative bg-green-800 p-6 rounded-lg text-white text-center shadow-md">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              {/* Speech Bubble Arrow */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-green-800"></div>
            </div>
            <div className="mt-8 text-center">
              <Image
                src={user2}
                alt="Omer Yagoob"
                width={60}
                height={60}
                className="rounded-full mx-auto"
              />
              <h4 className="mt-2 font-bold text-lg">Omer Yagoob</h4>
              <p className="text-sm text-yellow-500">Muslim</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
