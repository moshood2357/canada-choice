"use client";

import { X, ChevronDown,Menu } from "lucide-react"
import { useState } from 'react'

import Image from "next/image";
import Link from "next/link"


function Header(){

      const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);


    return(
        <div>
            {/* Navigation Header */}
      <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image src="/migrate.png" alt="Logo" width={120} height={59} />
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                HOME
              </Link>
              <Link href="/about-us" className="text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-blue-600">
                ABOUT US
              </Link>

               <Link href="/nomination" className="text-gray-700 hover:text-blue-600  px-3 py-2 text-sm font-medium ">
               NOMINATION
            </Link>
           
               <Link href="/become-an-exhibitor" className="text-gray-700 hover:text-blue-600  px-3 py-2 text-sm font-medium ">
              BECOME A VENDOR
            </Link>
           
              <div className="relative">
                <button 
                  className="text-gray-700 bg-transparent hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  SERVICES <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link href="/advocacy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">ADVOCACY & POLICY ENGAGEMENT</Link>
                      <Link href="/career" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">CAREER & ENTREPRENEURSHIP PROGRAMS</Link>
                      <Link href="/community" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">COMMUNITY ENGAGEMENT</Link>
                       <Link href="/education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">EDUCATION & SKILLS DEVELOPMENT</Link>
                        <Link href="/wellness" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">HEALTH & WELLNESS PROGRAMS</Link>
                         <Link href="/settlement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">SETTLEMENT SUPPORT PROGRAMS</Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/contact-us" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                CONTACT US
              </Link>
              <a href="tel:438-622-8333" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-105">
                438-622-8333
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">HOME</Link>
              <Link href="/about-us" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">ABOUT US</Link>
               <Link href="/nomination" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">NOMINATION</Link>
           <Link href="/become-an-exhibitor" className= "block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">BECOME A VENDOR</Link>
              
              <div className="relative">
                <button 
                  className="text-gray-700 bg-transparent hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  SERVICES <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link href="/advocacy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">ADVOCACY & POLICY ENGAGEMENT</Link>
                      <Link href="/career" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">CAREER & ENTREPRENEURSHIP PROGRAMS</Link>
                      <Link href="/community" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">COMMUNITY ENGAGEMENT</Link>
                       <Link href="/education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">EDUCATION & SKILLS DEVELOPMENT</Link>
                        <Link href="/wellness" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">HEALTH & WELLNESS PROGRAMS</Link>
                         <Link href="/settlement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">SETTLEMENT SUPPORT PROGRAMS</Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/contact-us" className="block px-3 py-2 text-gray-700 hover:text-blue-600">CONTACT US</Link>
              <a href="tel:438-622-8333" className="block px-3 py-2 text-blue-600 font-medium">438-622-8333</a>
            </div>
          </div>
        )}
      </nav>
        </div>
       
    )
}

export default Header;