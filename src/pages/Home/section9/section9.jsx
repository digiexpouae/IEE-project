import Image from 'next/image';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const EventBox = ({ date, title, location, time, imageSrc, altText }) => (
  <div className="bg-white shadow-md p-3 overflow-hidden mb-6 flex flex-col md:flex-row">
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
       
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-3">
        
          <FaClock className="mr-2" />
          <span>{time}</span>
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
      date: '15 AUG, 2023',
      title: 'Friday Prayer & Community Gathering',
      location: 'Main Prayer Hall',
      time: '1:00 PM - 2:00 PM',
      imageSrc: '/assets/section9/1.JPG',
      altText: 'Friday Prayer'
    },
    {
      date: '20 AUG, 2023',
      title: 'Quran Recitation Competition',
      location: 'Islamic Center Auditorium',
      time: '5:00 PM - 7:00 PM',
      imageSrc: '/assets/section9/2.JPG',
      altText: 'Quran Competition'
    },
    {
      date: '25 AUG, 2023',
      title: 'Islamic Lecture Series',
      location: 'Conference Hall',
      time: '6:30 PM - 8:30 PM',
      imageSrc: '/assets/section9/3 (2).jpg',
      altText: 'Islamic Lecture'
    }
  ];

  return (
    <section className="py-16 w-full bg-zinc-100 relative">
      <div className="absolute inset-0  bg-cover bg-center opacity-[0.7] "
        style={{ backgroundImage: "url('/assets/section2/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
      
      <div className='relative z-10 max-w-6xl mx-auto px-4'>
        <div className="text-center mb-12"> 
          <span className="text-[#0A5B21] text-xs font-medium tracking-wider">FUTURE EVENTS</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-2">Events This Month</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for our upcoming events and activities. All are welcome to participate and learn.
          </p>  
        </div>

        <div className="space-y-6  max-w-4xl mx-auto">
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