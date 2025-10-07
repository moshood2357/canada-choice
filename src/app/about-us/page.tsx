// import React from "react";
// import { Users, Target, Heart, ArrowRight } from "lucide-react";

// import Image from "next/image";
// // import Link from "next/link"

// import Header from "../../components/header";
// import Footer from "../../components/Footer";
// import Hero from "../../components/Hero";
// import CardCarousel from "../../components/CardCarousel";
// import PartnersCarousel from "../../components/PartnersCarousel";

// function About() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <Hero />

//       {/* Who We Are Section */}
//       <div className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                 Who We Are
//               </h2>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Immigrant at Large Canada was founded with a mission to amplify
//                 immigrants&apos; voices and advocate for their rightful
//                 recognition and inclusion in Canadian society.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 What began as a grassroots initiative has grown into a
//                 passionate movement dedicated to supporting and empowering
//                 immigrants from all walks of life.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 We believe that immigrants are not just participants in Canadian
//                 society—they are builders, leaders, and changemakers. Through a
//                 variety of impactful programs, community-led initiatives, and
//                 advocacy efforts, we work to ensure that immigrants have access
//                 to the resources, support, and opportunities they need to
//                 thrive.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 At the heart of our work is the belief that when immigrants are
//                 empowered, communities flourish.
//               </p>
//             </div>
//             <div className="lg:pl-8">
//               <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
//                 <Image
//                   src="/conference.jpg"
//                   alt="Our team working together"
//                   width={500}
//                   height={350}
//                   className="w-full h-96 object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mission and Vision Section */}
//       <div className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-6">
//                 <div className="bg-blue-600 p-3 rounded-full mr-4">
//                   <Target className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-900">
//                   Our Mission
//                 </h3>
//               </div>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Immigrant at Large Canada is dedicated to supporting and
//                 empowering immigrants through a variety of impactful programs
//                 and initiatives. We are committed to building a thriving,
//                 inclusive community where immigrants feel empowered to succeed.
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-6">
//                 <div className="bg-green-600 p-3 rounded-full mr-4">
//                   <Heart className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
//               </div>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 To create a Canada where every immigrant thrives with dignity,
//                 opportunities and belonging, feels empowered to lead,
//                 contribute, and transform their communities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Programs Section */}
//       <div className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Our Programs
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Discover the impactful initiatives that drive positive change in
//               immigrant communities across Canada.
//             </p>
//           </div>

//           <CardCarousel />
//         </div>
//       </div>

//       {/* Call to Action Section */}
//       <div className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
//             Join Our Movement
//           </h2>
//           <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
//             Be part of the change. Help us create a more inclusive and
//             empowering Canada for all immigrants.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <a
//               href="#"
//               className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
//             >
//               <Users className="mr-2 h-6 w-6" />
//               VOLUNTEER
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
//             </a>
//             <a
//               href="#"
//               className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
//             >
//               <Heart className="mr-2 h-6 w-6" />
//               DONATE
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Partners Section */}
//       <div className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Our Partners
//             </h2>
//             <p className="text-xl text-gray-600">
//               Working together to create lasting impact
//             </p>
//           </div>

//           <PartnersCarousel />
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default About;

import React from "react";
import { Users, Target, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

import Header from "../../components/header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
// import CardCarousel from "../../components/CardCarousel";
import PartnersCarousel from "../../components/PartnersCarousel";

function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* About Us Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leadership Conference & African Gala Night 2025
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Leadership Conference & African Gala Night 2025 is a
                landmark event dedicated to empowering African-Canadian voices,
                celebrating excellence, and building bridges across communities.
                Taking place in <strong>November 2025</strong>, this dynamic
                two-part gathering will feature:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li>
                  A Leadership Conference focused on dialogue, strategy, and
                  innovation in areas such as entrepreneurship, governance,
                  social impact, and youth development.
                </li>
                <li>
                  An elegant African Gala Night showcasing the richness of
                  African culture through awards, fashion, music, fine dining,
                  and distinguished guest appearances.
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                This event brings together African leaders, changemakers,
                creatives, entrepreneurs, and allies from across Canada and
                beyond, committed to shaping a more inclusive and prosperous
                future for African-Canadian communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                It is a movement of recognition, reflection, and renewal.
              </p>
            </div>
            <div className="lg:pl-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/conference.jpg"
                  alt="Leadership Conference & Gala Night"
                  width={500}
                  height={350}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Sponsor Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-600 p-3 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Why Sponsor
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sponsoring the Leadership Conference & African Gala Night 2025
                provides your organization with a unique opportunity to align
                with a powerful movement celebrating African excellence and
                leadership in Canada. Sponsors will gain:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                <li>High-profile brand exposure across a diverse audience.</li>
                <li>
                  Networking with African leaders, entrepreneurs, and
                  changemakers.
                </li>
                <li>
                  Opportunities to demonstrate your commitment to diversity,
                  inclusion, and social impact.
                </li>
                <li>
                  Direct engagement with influential communities and emerging
                  leaders.
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Partnering with us is not just sponsorship — it’s a statement of
                solidarity and shared vision for a thriving, inclusive future.
              </p>
            </div>

            {/* Target Audience Section */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Target Audience
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Leadership Conference & African Gala Night 2025 attracts a
                vibrant and diverse audience that includes:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                <li>African-Canadian professionals and community leaders</li>
                <li>Entrepreneurs, investors, and business innovators</li>
                <li>Youth and emerging changemakers</li>
                <li>Cultural enthusiasts, policymakers, and academics</li>
                <li>Corporate, government, and community sponsors</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                This event provides a dynamic platform for collaboration,
                dialogue, and inspiration among individuals passionate about
                leadership, culture, and positive transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Be Part of the Movement
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join us in celebrating African excellence, leadership, and unity.
            Whether as a sponsor, participant, or partner — your involvement
            helps shape a brighter future for African-Canadian communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://www.eventbrite.ca/e/leadership-conference-african-gala-night-2025-tickets-1619187245639?aff=oddtdtcreator"
              className="group bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              <Users className="mr-2 h-6 w-6" />
              BE A SPONSOR
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="https://www.eventbrite.ca/e/leadership-conference-african-gala-night-2025-tickets-1619187245639?aff=oddtdtcreator"
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              <Heart className="mr-2 h-6 w-6" />
              BUY A TICKET
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600">
              Working together to shape an inclusive and prosperous future
            </p>
          </div>
          <PartnersCarousel />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;

