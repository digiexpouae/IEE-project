import Image from 'next/image';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const EventBox = ({ date, title, location, time, imageSrc, altText }) => (
  <div className="bg-white shadow-md p-3 overflow-hidden mb-6 flex flex-col md:flex-row  md:border-3 border-[#E3E3E3]">
    <div className="w-full rounded md:w-[30%] h-48 md:h-auto relative">
      <Image
        src={imageSrc}
        alt={altText}
        fill
        className="object-cover rounded "

      />
    </div>
    <div className="p-6 flex-1 flex  items-center justify-between">
      <div>
       
        <h3 className="text-xl font-light text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 gap-2 mb-3">
        
          <Image src='/assets/f-clock-2.svg' width={16} height={16} />
          <p className='text-sm !text-[#7A7A7A]'>{date}</p>
        </div>
      
      </div>
      <button className="flex items-center justify-center gap-2 bg-[#DBAC42] rounded-md h-10 px-4 font-medium hover:text-[#0a7c2d] transition-colors text-xs" style={{whiteSpace:'nowrap'}} >
      <Image src='/assets/section9/arrow.svg' width={16} height={16} /> DISCOVER MORE
      </button>
    </div>
  </div>
);

const Section9 = () => {
  const events = [
    {
      date: 'DECEMBER 23, 2022',
      title: 'Weekly Islamic Center Conference',
      location: 'Main Prayer Hall',
      time: '11:00 AM - 12:00 PM',
      imageSrc: '/assets/section9/1.JPG',
      altText: 'Friday Prayer'
    },
    {
      date: 'DECEMBER 23, 2022',
      title: 'The beginning of the holy month of Ramadan',
      location: 'Islamic Center Auditorium',
      time: '11:00 AM - 12:00 PM',
      imageSrc: '/assets/section9/2.JPG',
      altText: 'Quran Competition'
    },
    {
      date: 'DECEMBER 23, 2022',
      title: 'The beginning of the Hajj season',
      location: 'Conference Hall',
      time: '11:00 AM - 12:00 PM',
      imageSrc: '/assets/section9/3 (2).jpg',
      altText: 'Islamic Lecture'
    }
  ];

  return (
    <section className="py-16 w-full bg-zinc-100 relative ">
      <div className="absolute inset-0  bg-cover bg-center opacity-[0.7] "
        style={{ backgroundImage: "url('/assets/section2/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
      
      <div className='relative z-10 max-w-6xl mx-auto px-4 '>
        <div className="text-center mb-12"> 
          <span className="text-[#0A5B21] text-xs font-medium tracking-wider">FUTURE EVENTS</span>
          <h2 className="text-4xl font-light text-gray-800 mb-4 mt-2">Events This Month</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.          </p>  
        </div>

        <div className="space-y-6  max-w-4xl mx-auto ">
          {events.map((event, index) => (
            <EventBox
              key={index}
              date={event.date}
              title={event.title}
          
              time={event.time}
              imageSrc={event.imageSrc}
              altText={event.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section9;