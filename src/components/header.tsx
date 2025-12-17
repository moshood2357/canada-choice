"use client"
import { X, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopPastEventOpen, setIsDesktopPastEventOpen] = useState(false);
   const [isMobilePastEventOpen, setIsMobilePastEventOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  // const [isDesktopServiceOpen, setIsDesktopServiceOpen] = useState(false);
  // const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);

  return (
    <div className="">
      <nav className="bg-[#d6edff] shadow-lg fixed w-full z-1000 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <Image
                  src="/migrate.png"
                  alt="immigration at large company logo"
                  width={120}
                  height={59}
                  className=""
                />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/"
                className="text-white bg-[#0d2c50] hover:bg-[#0b2543]  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                HOME
              </Link>
              <Link
                href="/about-us"
                className="text-white bg-[#0d2c50] hover:bg-[#0b2543]  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                ABOUT US
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setIsDesktopServicesOpen(true)}
                onMouseLeave={() => setIsDesktopServicesOpen(false)}
              >
                <button
                  className="text-white bg-[#0d2c50] hover:bg-[#0b2543]  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                  onClick={() =>
                    setIsDesktopServicesOpen(!isDesktopServicesOpen)
                  }
                >
                  SERVICES <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isDesktopServicesOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="/advocacy"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        ADVOCACY & POLICY ENGAGEMENT
                      </Link>
                      <Link
                        href="/career"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        CAREER & ENTREPRENEURSHIP PROGRAMS
                      </Link>
                      <Link
                        href="/community"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        COMMUNITY ENGAGEMENT
                      </Link>
                      <Link
                        href="/education"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        EDUCATION & SKILLS DEVELOPMENT
                      </Link>
                      <Link
                        href="/wellness"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        HEALTH & WELLNESS PROGRAMS
                      </Link>
                      <Link
                        href="/settlement"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        SETTLEMENT SUPPORT PROGRAMS
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* <div
                className="relative"
                onMouseEnter={() => setIsDesktopServiceOpen(true)}
                onMouseLeave={() => setIsDesktopServiceOpen(false)}
              >
                <button
                  className="text-white bg-[#0d2c50] hover:bg-[#0b2543]  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                  onClick={() => setIsDesktopServiceOpen(!isDesktopServiceOpen)}
                >
                  AWARD NIGHT <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isDesktopServiceOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="/about-the-program"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        ABOUT THE PROGRAM
                      </Link>
                      <Link
                        href="/nomination"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        NOMINATIONS
                      </Link>
                      <Link
                        href="/become-an-exhibitor"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        BECOME A VENDOR
                      </Link>
                    </div>
                  </div>
                )}
              </div> */}
              
              <div
                className="relative"
                onMouseEnter={() => setIsDesktopPastEventOpen(true)}
                onMouseLeave={() => setIsDesktopPastEventOpen(false)}
              >
                <button
                  className="text-white bg-[#0d2c50] hover:bg-[#0b2543]  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                  onClick={() =>
                    setIsDesktopPastEventOpen(!isDesktopPastEventOpen)
                  }
                >
                  PAST EVENTS <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isDesktopPastEventOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="/award-night"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                       AWARD NIGHT
                      </Link>
                      <Link
                        href="/career"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        LEADERSHIP CONFERENCE
                      </Link>
                     
                    </div>
                  </div>
                )}
              </div>
              {/* <Link
                href="https://www.eventbrite.ca/e/leadership-conference-african-gala-night-2025-tickets-1619187245639?aff=oddtdtcreator"
                className="text-white bg-[#0d2c50] hover:bg-[#0b2543]  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                BUY TICKET
              </Link> */}

              <Link
                href="/contact-us"
                className="text-white bg-[#0d2c50] hover:bg-[#0b2543] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                CONTACT US
              </Link>
              <Link
                href="tel:438-622-8333"
                className="bg-[#0d2c50] hover:bg-[#0b2543] text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-105"
              >
                438-622-8333
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t z-40">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                HOME
              </Link>
              <Link
                href="/about-us"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                ABOUT US
              </Link>

              <div className="relative">
                <button
                  className="text-gray-700 bg-transparent hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                  onClick={() => setIsMobilePastEventOpen(!isMobilePastEventOpen)}
                >
                  SERVICES <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isMobilePastEventOpen && (
                  <div className="flex flex-col space-y-2 pl-4 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="/advocacy"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        ADVOCACY & POLICY ENGAGEMENT
                      </Link>
                      <Link
                        href="/career"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        CAREER & ENTREPRENEURSHIP PROGRAMS
                      </Link>
                      <Link
                        href="/community"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        COMMUNITY ENGAGEMENT
                      </Link>
                      <Link
                        href="/education"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        EDUCATION & SKILLS DEVELOPMENT
                      </Link>
                      <Link
                        href="/wellness"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        HEALTH & WELLNESS PROGRAMS
                      </Link>
                      <Link
                        href="/settlement"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        SETTLEMENT SUPPORT PROGRAMS
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className="text-gray-700 bg-transparent hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                  onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
                >
                  PAST EVENTS <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isMobileServiceOpen && (
                  <div className="flex flex-col space-y-2 pl-4 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a
                        href="/about-the-program"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        GALA NIGHT
                      </a>
                      <a
                        href="/nomination"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        LEADERSHIP CONFERENCE
                      </a>
                      {/* <a
                        href="/become-an-exhibitor"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        BECOME A VENDOR
                      </a> */}
                    </div>
                  </div>
                )}
              </div>

              {/* <div className="relative">
                <button
                  className="text-gray-700 bg-transparent hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                  onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
                >
                  AWARD NIGHT <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isMobileServiceOpen && (
                  <div className="flex flex-col space-y-2 pl-4 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a
                        href="/about-the-program"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        ABOUT THE PROGRAM
                      </a>
                      <a
                        href="/nomination"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        NOMINATIONS
                      </a>
                      <a
                        href="/become-an-exhibitor"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        BECOME A VENDOR
                      </a>
                    </div>
                  </div>
                )}
              </div> */}
{/* 
              <a
                href="https://www.eventbrite.ca/e/leadership-conference-african-gala-night-2025-tickets-1619187245639?aff=oddtdtcreator"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                BUY TICKET
              </a> */}

              <a
                href="/contact-us"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                CONTACT US
              </a>
              <a
                href="tel:438-622-8333"
                className="block px-3 py-2 text-blue-600 font-medium"
              >
                438-622-8333
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default App;
