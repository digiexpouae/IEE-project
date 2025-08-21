'use client';
import React from 'react';
import Image from 'next/image';


export default function ContactSection() {



  return (
    <section className="w-full max-w-5xl md:h-[60vh] lg:h-[80vh] mx-auto p-6 flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-light mb-2">Love To Hear From You</h2>
          <p className="text-gray-600 mb-4 text-xs">
            Reach us out directly or send us a message regarding any information, business queries, or just a friendly hello. We’d love to hear from you.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-2 text-xl">
            <a href="#" className="text-blue-600 hover:text-blue-800"><Image src="/assets/contact/facebook.svg" alt="Facebook" width={34} height={34} /></a>
            <a href="#" className="text-blue-400 hover:text-blue-600"><Image src="/assets/contact/twitter.svg" alt="Twitter" width={34} height={34} /></a>
            <a href="#" className="text-green-500 hover:text-green-600"><Image src="/assets/contact/whatsapp.svg" alt="Whatsapp" width={34} height={34} /></a>
            <a href="#" className="text-red-500 hover:text-red-600"><Image src="/assets/contact/youtube.svg" alt="Youtube" width={34} height={34} /></a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-light text-gray-400">Name</label>
            <input 
              id="name"
              type="text" 
              placeholder=" Name" 
              className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A5B21] focus:border-transparent"
              required 
            />
          </div>
          
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-light text-gray-400">Email</label>
            <input 
              id="email"
              type="email" 
              placeholder="Email" 
              className="border border-gray-500  p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A5B21] focus:border-transparent"
              required
            />
          </div>
          
          
          
          <div className="flex flex-col space-y-1">
            <label htmlFor="message" className="text-sm font-light text-gray-400">Message</label>
            <textarea 
              id="message"
              placeholder="Message" 
              rows="4" 
              className="border border-gray-500  p-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#0A5B21] focus:border-transparent"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-[120px] cursor-pointer bg-[#E9C522] hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition-all hover:shadow-md mt-2"
          >
           <p> Send</p>
          </button>
        </form>

      </div>
    </section>
  );
}
