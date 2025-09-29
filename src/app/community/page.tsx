
import { Card, CardContent } from "@/components/ui/card"
// import Link from "next/link"

import Footer from "../../components/Footer";
import Header from "../../components/header";

import Image from "next/image"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative h-80 mt-24 bg-gray-800 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-top bg-cover bg-black/80 bg-blend-overlay"
          style={{
            backgroundImage: "url('/people.jpg')",
            // backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">COMMUNITY ENGAGEMENT</h1>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
        </div>
      </section>

      {/* About The Program Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <Image width = {400}
              height = {400}
                src="/group.jpg"
                alt="Diverse group of community members"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About The Program</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Community Engagement & Networking initiatives focus on creating safe, inclusive
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                spaces where immigrants and newcomers can build meaningful connections, celebrate
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                their cultures, and foster a sense of belonging. By bringing people together through shared
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                experiences, we support social integration, emotional well-being, and collaborative
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">community building.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Services:</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cultural Exchange Events */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural Exchange Events</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Multicultural festivals, food fairs, and storytelling nights
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Opportunities to showcase traditions, music, and art from diverse backgrounds
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Support Groups */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Support Groups</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Peer support groups for women, youth, parents, and seniors
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>A safe platform to share challenges, resources, and
                    encouragement
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Social Integration Activities */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Social Integration Activities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Community outings, sports, and group activities to explore Canadian culture
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Volunteer and mentorship programs that foster cross-cultural understanding
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Second row - Professional Networking */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Networking Opportunities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Sector-specific meetups and career mixers
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Panels, speaker series, and collaborations with local businesses and professionals
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

        <Footer />
    </div>
  )
}
