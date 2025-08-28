import React from "react";
import { Phone, Mail, Users, Facebook, Instagram, Twitter } from "lucide-react";

const Address = () => {
  return (
    <div className="w-full min-h-[60vh] bg-gradient-to-b from-green-600 to-black text-white flex items-center  justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full max-w-6xl gap-2">
        
        {/* Contact Us */}
        <div className="p-8 border-b border-l sm:border-r border-green-400/30  shadow-md shadow-green-600 flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Phone size={20} /> Contact Us
          </h2>
          <p className="text-gray-200">+91 9833-1234-1234</p>
          <p className="text-gray-200">info@example.com</p>
        </div>

        {/* Enquiries */}
        <div className="p-8 border-b md:border-r shadow-md shadow-green-600  border-green-400/30 flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Mail size={20} /> Enquiries
          </h2>
          <p className="text-gray-200">sales@example.com</p>
          <p className="text-gray-200">support@example.com</p>
        </div>

        {/* Customer Relationship */}
        <div className="p-8 border-b shadow-md shadow-green-600  md:border-r border-green-400/30 flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Users size={20} /> Customer Relationship
          </h2>
          <p className="text-gray-200">Mon - Fri: 9 AM - 6 PM</p>
          <p className="text-gray-200">Sat: 10 AM - 4 PM</p>
        </div>

        {/* Social Media */}
        <div className="p-8 flex flex-col shadow-md shadow-green-600  border-b md:border-r border-green-400/30 items-center text-center">
          <h2 className="text-xl font-semibold mb-4">Social Media</h2>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-green-700 rounded-full hover:bg-green-500 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-green-700 rounded-full hover:bg-green-500 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-green-700 rounded-full hover:bg-green-500 transition"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
