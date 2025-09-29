
import { Card, CardContent } from "@/components/ui/card"
// import Link from "next/link"
import Footer from "../../components/Footer";
import Header from "../../components/header";
import Image from "next/image"

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white">
     <Header />
      {/* Hero Section */}
      <section className="relative mt-24 h-80 bg-gray-800 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-top bg-cover bg-black/80 bg-blend-overlay"
          style={{
            backgroundImage: "url('/group.jpg')",
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">CAREER & ENTREPRENEURSHIP</h1>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mt-2">PROGRAMS</h1>
        </div>
        {/* Background pattern overlay */}
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
                src="/present.jpg"
                alt="Business materials, shoes, and accessories on a table"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About The Program</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Empowers immigrants with the skills, tools, and networks they need to build successful
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-2">
                careers or start their own businesses in Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Services:</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Career Readiness Workshops */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Career Readiness Workshops</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Resume and cover letter writing (Canadian style)
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Job search strategies and interview preparation
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Workplace communication and cultural competency training
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mentorship & Coaching */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mentorship & Coaching</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    One-on-one mentorship with professionals in relevant fields
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Career coaching sessions focused on personal branding, confidence building, and goal setting
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Credential Recognition & Bridging Support */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Credential Recognition & Bridging Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Guidance on credential assessment and licensing for regulated professions
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Bridging programs in fields such as healthcare, engineering, and education
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Second row of services */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Digital & Soft Skills Training */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Digital & Soft Skills Training</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Training in essential digital tools (Microsoft Office, Google Workspace, etc.)
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Development of soft skills like teamwork, leadership, and adaptability
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Job Placement & Employer Connections */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Job Placement & Employer Connections</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Job matching and referrals through partnerships with employers
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Networking events, job fairs, and workplace tours
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
