// components/Footer.jsx
import Link from "next/link";
import Footerlogo from '../../public/assets/footerlogo.png'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        
        {/* Logo Section */}
        <div className=" bg-white text-green-800 p-8  text-center">
          <div className="w-24 h-24  flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            <Image src={Footerlogo} alt="Logo"  className="object-cover h-full w-full" width={400} height={400} />
          </div>
        
          <div className="text-xs text-gray-600 leading-relaxed mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </div>
          <div className="flex justify-center gap-3">
            <Link
              href="#"
              className="w-9 h-9 bg-green-800 rounded-full flex items-center justify-center text-white hover:bg-green-900 transition-colors"
            >
                <Image width={14} height={14} src='/assets/facebook.svg' alt="" />
            </Link>
            <Link
              href="#"
              className="w-9 h-9 bg-green-800 rounded-full flex items-center justify-center text-white hover:bg-green-900 transition-colors"
            >
                <Image width={16} height={16} src='/assets/twitter.svg' alt="" />
            </Link>
            <Link
              href="#"
              className="w-9 h-9 bg-green-800 rounded-full flex items-center justify-center text-white hover:bg-green-900 transition-colors"
            >
                <Image  width={16} height={16} src='/assets/youtube.svg' alt="" />
            </Link>
          </div>
        </div>

        {/* About Us Section */}
        <div className="my-10 h-full"> 
          <h3 className="text-lg font-semibold mb-5 ">About Us</h3>
          <ul className="space-y-3">
            <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Mission</Link></li>
            <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Vision</Link></li>
            <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Team</Link></li>
            <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="my-10 h-full"> 
          <h3 className="text-lg font-semibold mb-5 ">Useful Links</h3>
          <ul className="space-y-3">
            <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Services</Link></li>
            <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Resources</Link></li>
            <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Support</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="my-10 h-full"> 
          <h3 className="text-lg font-semibold mb-5 ">Contact Info</h3>
          <ul className="space-y-3">
            <li><span className="text-gray-300 text-sm flex gap-2"><Image width={16} height={16} src='/assets/f-Icon-1.svg'/> Bain & Company, United States</span></li>
            <li><a href="tel:+15551234567" className="text-gray-300 text-sm hover:text-white transition-colors flex gap-2"><Image width={16} height={16} src='/assets/f-icon2.svg'/> +1 (555) 123-4567</a></li>
            <li><a href="mailto:info@company.com" className="text-gray-300 text-sm hover:text-white transition-colors flex gap-2"><Image width={16} height={16} src='/assets/email.svg'/> info@company.com</a></li>
            <li><a href="https://www.company.com" className="text-gray-300 text-sm hover:text-white transition-colors flex gap-2"><Image width={16} height={16} src='/assets/f-clock.svg'/> Office Hours: 8AM - 11PM</a></li>

          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 pt-5 border-t border-green-700 text-xs text-gray-400">
        © 2024 Company Name. All Rights Reserved.
      </div>
    </footer>
  );
}
