import Image from "next/image";
const Map = () => {
    return (
       <div className=" lg:h-[60vh] w-full ">
       <div className="w-full h-full flex justify-end items-end">
       <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19834.38177822592!2d-0.1246498!3d51.5032976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d0e2c1%3A0xa2bb2f52f6a2e1e5!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1694250000000!5m2!1sen!2suk"
  width="100%"
  style={{border:0}}
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  className="shadow-md h-[400px] md:h-full"
>
</iframe>       </div>
       </div>
    );
};                      
export default Map;
