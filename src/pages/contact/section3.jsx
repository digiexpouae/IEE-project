'use client';
import React, { useState } from 'react';
import Image from 'next/image';

function ContactSection() {
  const [Formdata, setFormdata] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formsubmit, setFormsubmit] = useState('');
  const [error, setError] = useState('');
  const [Submitting, setisSubmitting] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setisSubmitting(true);
    setError('');
    setFormsubmit('');

    const payload = new FormData();
    payload.append('name', Formdata.name);
    payload.append('email', Formdata.email);
    payload.append('message', Formdata.message);

    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(Formdata),
      });

      if (res.ok) {
        setFormsubmit('Form Submitted Successfully ');
        setFormdata({ name: '', email: '', message: '' });
     
      } else {
        setError('Form Submission Failed ');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while submitting the form.');
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-5xl md:h-[60vh] lg:h-[80vh] mx-auto p-6 flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-light mb-2">Love To Hear From You</h2>
          <p className="text-gray-600 mb-4 text-xs">
            Reach us out directly or send us a message regarding any information,
            business queries, or just a friendly hello. We’d love to hear from you.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-2 text-xl">
            <a href="#">
              <Image src="/assets/contact/facebook.svg" alt="Facebook" width={34} height={34} />
            </a>
            <a href="#">
              <Image src="/assets/contact/twitter.svg" alt="Twitter" width={34} height={34} />
            </a>
            <a href="#">
              <Image src="/assets/contact/whatsapp.svg" alt="Whatsapp" width={34} height={34} />
            </a>
            <a href="#">
              <Image src="/assets/contact/youtube.svg" alt="Youtube" width={34} height={34} />
            </a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <form onSubmit={handlesubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-light text-gray-400">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A5B21] focus:border-transparent"
              required
              onChange={handlechange}
              name="name"
              value={Formdata.name}
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
              onChange={handlechange}
              name="email"
              value={Formdata.email}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="message" className="text-sm font-light text-gray-400">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              onChange={handlechange}
              rows="4"
              className="border border-gray-500  p-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#0A5B21] focus:border-transparent"
              required
              name="message"
              value={Formdata.message}
            ></textarea>
          </div>

        

          <button
          disabled={Submitting}
            type="submit"
            className="w-[120px] cursor-pointer bg-[#E9C522] hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition-all hover:shadow-md mt-2"
          >
            Send
          </button>
          {formsubmit && <p className="text-sm text-green-600">{formsubmit}</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
