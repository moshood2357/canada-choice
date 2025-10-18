import Image from "next/image";
import { Phone, Mail } from "lucide-react";

import Link from "next/link";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/canada.png"
                  alt="immigration at large company logo"
                  width={120}
                  height={59}
                  className=""
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reach Out to</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                We are here to help. Contact us for more information about our
                programs, to get involved, or to share your feedback.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-300">438-622-8333</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-300">
                    info@immigrantatlargecanada.ca
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Programs</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Youth Hangout
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Cultural Exchange
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Community Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Advocacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              Copyright © 2025 Immigrant At Large Canada. All rights reserved.
            </p>
            <span>
              Developed by{" "}
              <a
                rel="noopener noreferrer"
                className="underline text-blue-500"
                href="https://r2systemsolution.co.uk"
                target="_blank"
              >
                R2 system solution Ltd.
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
