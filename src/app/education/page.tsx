
import { Card, CardContent } from "@/components/ui/card"
// import Link from "next/link"
import Footer from "../../components/Footer";
import Header from "../../components/header";
import Image from "next/image"

export default function EducationPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">EDUCATION & SKILLS DEVELOPMENT</h1>
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
               width = {400}
              height = {400}
                src="/people.jpg"
                alt="Education and skills development event"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About The Program</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Education & Skills Development programs are designed to empower immigrants and
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                newcomers with the knowledge and competencies needed to thrive in Canadian society
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                and the workforce. Through interactive workshops and practical training, participants build
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                foundational and advanced skills that support personal growth, financial independence,
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">and community leadership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Services:</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Financial Literacy */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Literacy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Budgeting and saving
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Understanding credit and banking in Canada
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Filing taxes and accessing financial support programs
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Language Training */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Language Training</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    English and French as a Second Language (ESL/FSL) classes
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Conversation circles and pronunciation practice
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Workplace communication skills
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Leadership Development */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Public speaking and confidence-building
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Community engagement and civic participation
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Project planning and team management
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
