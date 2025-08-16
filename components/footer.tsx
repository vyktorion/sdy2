"use client";

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();  

  return (
   <footer className="bg-gray-800 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-2">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Coloana 1 - Logo & Descriere */}
      <div className="ml-14">
  <Image
    src="/og-image1.png"
    alt="Logo Serendipity Academy"
    width={200} 
    height={200}
    className="object-cover"
  />
  <div>
</div>
        <div className="flex space-x-2 mt-10">
          <a
           href="https://www.facebook.com/share/1APWU4dVLH/?mibextid=wwXIfr"
           target="_blank"
           rel="noopener noreferrer"
           >
             <img
            src="/fb.png"
           className="w-11 h-11 rounded-full hover:opacity-80 transition-opacity"
             />
            </a>
          <a
           href="https://www.instagram.com/_serendipityacademy_?igsh=ajIwd282Nm13M2Zj"
           target="_blank"
           rel="noopener noreferrer"
           >
             <img
            src="/ig.png"
           className="w-10 h-10 rounded-full hover:opacity-80 transition-opacity"
             />
            </a>
          <a
           href="https://www.tiktok.com/@serendipityacademy?_t=ZN-8yu7s34doVa&_r=1"
           target="_blank"
           rel="noopener noreferrer"
           >
             <img
            src="/tiktok.png"
           className="w-11 h-11 rounded-full hover:opacity-80 transition-opacity"
             />
            </a>
          <a
           href="http://wa.me/40732416308"
           target="_blank"
           rel="noopener noreferrer"
           >
             <img
            src="/wapp.png"
           className="w-10 h-10 rounded-full hover:opacity-80 transition-opacity"
             />
            </a>
        </div>
      </div>

      {/* Coloana 2 - Navigare Rapidă */}
      <div className="lg:ml-20">
        <h3 className="text-lg font-semibold mb-6 text-white">Navigare Rapidă</h3>
        <ul className="space-y-3">
          {[
            { href: '/', label: 'Acasă' },
            { href: '/despre-noi', label: 'Despre Noi' },
            { href: '/cursuri', label: 'Cursuri' },
            { href: '/contact', label: 'Contact' }
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Coloana 3 - Contact */}
      <div>
        <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-300">București, sector 4</p>
              <p className="text-gray-300">Șoseaua Giurgiului nr. 37</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
            <p className="text-gray-300">+40 732 416 308</p>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
            <p className="text-gray-300">serendipityacademy.ro@gmail.com</p>
          </div>
        </div>
      </div>

    </div>

    {/* Bara de jos */}
    <div className="border-t border-gray-700 mt-4 text-center">
      <p className="text-gray-400 mt-4">
        © {new Date().getFullYear()} Serendipity Academy.
      </p>
      <p className="text-gray-500 text-sm mt-1">
        #Never Miss A Chance To Dance!
      </p>
    </div>
  </div>
</footer>

  );
}