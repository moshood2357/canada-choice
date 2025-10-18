// import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import Link from "next/link"

import Footer from "../../components/Footer";
import Header from "../../components/header";
import Image from "next/image"

export default function HealthWellnessPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">HEALTH & WELLNESS PROGRAMS</h1>
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
                src="/present.jpg"
                 width = {400}
              height = {400}
                alt="Health and wellness workshop with diverse participants"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About The Program</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Health & Wellness Programs are dedicated to supporting the physical, mental, and emotional
                well-being of immigrants and newcomers. Recognizing the unique health challenges that come with
                resettlement, we offer culturally sensitive programs that promote healing, resilience, and family
                wellness.
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
            {/* Mental Health Support */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mental Health Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Access to counselling services in multiple languages
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Stress management workshops and trauma-informed care
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Peer support groups and wellness circles
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
                    Assistance enrolling in provincial health plans and finding family doctors
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Information sessions on how to access emergency, dental, and reproductive health services
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Support understanding prescriptions, referrals, and the healthcare system
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Family Well-Being Initiatives */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Family Well-Being Initiatives</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Parenting programs and child development workshops
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Family nutrition, fitness, and healthy lifestyle classes
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Programs focused on healthy relationships and domestic violence prevention
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
