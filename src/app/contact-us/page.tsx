"use client"
import Image from "next/image";
// import Link from "next/link";
// import { useState } from 'react'
// import { X, ChevronDown,Menu } from "lucide-react"
import Footer from "../../components/Footer";
import Header from "../../components/header";

export default function Contact() {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
          {/* Hero Section */}
      <div className="relative  h-85 bg-gradient-to-r from-gray-800 to-gray-600 mt-16">
        <div 
          className="absolute inset-0 bg-top bg-cover bg-black/80 bg-blend-overlay"
          style={{
            backgroundImage: "url('/people.jpg')",
            // backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        ></div>
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto animate-fade-in-up delay-200"></div>
          </div>
        </div>
      </div>
     

      {/* Contact Section */}
      <section className="py-12 mt-24 container mx-auto px-4 flex-1">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side (Contact Info) */}
          <div>
            <div className="relative">
              <Image
                src="/present.jpg"
                alt="Contact"
                width={610}
                height={920}
                className="rounded-t"
              />
              <div className="relative bottom-0 left-0 right-0 bg-[#0b2345] text-white p-6 rounded-b-md">
                <h3 className="text-lg font-semibold">Reach Out to Immigrant at Large Canada</h3>
                <p className="mt-2">
                  <strong>Phone:</strong> 438-622-8333
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@immigrantatlarge.ca" className="underline">
                    info@immigrantatlargecanada.ca
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side (Form) */}
          <div>
            <h2 className="text-2xl font-bold mb-2">We are Here to Help!</h2>
            <p className="mb-6 text-gray-600">
              We are here to help. Contact us for more information about our programs,
              to get involved, or to share your feedback.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md p-3"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md p-3"
              />
              <textarea
                rows =  {4}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md p-3"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
              >
                SEND AWAY!
              </button>
            </form>
          </div>
        </div>
      </section>

     <Footer/>
    </div>
  );
}
