
import { Card, CardContent } from "@/components/ui/card"
// import Link from "next/link"
import Image from "next/image"

import Footer from "../../components/Footer";
import Header from "../../components/header";

export default function SettlementSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative mt-24 h-80 bg-gray-800 flex items-center justify-center">
       <div 
          className="absolute inset-0 bg-top bg-cover bg-black/80 bg-blend-overlay"
          style={{
            backgroundImage: "url('/people.jpg')",
            // backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">SETTLEMENT SUPPORT PROGRAM</h1>
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
              <Image
                src="/group.jpg"
                 width = {400}
              height = {400}
                alt="Settlement support workshop with participants"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About The Program</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ensures that immigrants or newcomers to Canada can access the essential resources
              </p>
              <p className="text-gray-700 leading-relaxed">
                they need to build stable, empowered lives. We provide personalized services including housing
                assistance, employment readiness training, healthcare navigation, and community integration
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Services:</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Housing Assistance */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Housing Assistance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Support with finding safe, affordable housing
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Guidance on tenant rights, rental applications, and connecting with local housing services
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Employment Readiness Training */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Employment Readiness Training</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Job search strategies tailored for newcomers
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Resume development, interview coaching, and workplace culture orientation
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Healthcare Navigation */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare Navigation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Help with enrolling in provincial healthcare plans
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Assistance in accessing family doctors, mental health support, and interpretation services
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Community Integration Opportunities */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community Integration Opportunities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Referrals to language classes (ESL/FSL) and cultural orientation sessions
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Volunteer opportunities and community events to foster belonging and connection
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Family & Youth Support */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Family & Youth Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    School enrollment assistance and parenting workshops
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Youth engagement programs to support integration and leadership development
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
