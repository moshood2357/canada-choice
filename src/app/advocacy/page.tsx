
import { Card, CardContent } from "@/components/ui/card"
// import Link from "next/link"
import Image from "next/image"
import Footer from "../../components/Footer";
import Header from "../../components/header";

export default function AdvocacyPage() {
  return (
    <div className="min-h-screen bg-white">
     <Header />

      {/* Hero Section */}
      <section className="relative h-80 mt-24 bg-gray-800 flex items-center justify-center">
       <div 
          className="absolute inset-0 bg-top bg-cover bg-black/80 bg-blend-overlay"
          style={{
            backgroundImage: "url('/people.jpg')",
            backgroundColor: 'rgba(0,0,0,0.8)',
          }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">ADVOCACY & POLICY</h1>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mt-2">ENGAGEMENT</h1>
        </div>
        {/* Background pattern overlay */}
        
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
                src="/conference.jpg"
                alt="Community advocacy event with diverse participants"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About The Program</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our Advocacy & Policy Engagement initiatives aim to amplify immigrant voices in policy discussions,
                ensuring that the lived experiences of newcomers directly inform the decisions that shape their lives.
                By engaging with all levels of government, community stakeholders, and advocacy coalitions, we strive to
                create more inclusive, equitable policies that reflect the realities of immigrant communities.
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
            {/* Policy Research & Consultation */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Policy Research & Consultation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Gathering community input to inform reports, recommendations, and position statements
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Conducting research on immigration, housing, employment, and systemic barriers
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Leadership & Civic Engagement Training */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership & Civic Engagement Training</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Empowering immigrants to become advocates and community leaders
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Training on how to engage in public consultations, write policy briefs, and speak with elected
                    officials
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Coalition Building & Campaigns */}
            <Card className="bg-gray-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Coalition Building & Campaigns</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Partnering with other organizations to advance collective advocacy goals
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Organizing awareness campaigns and policy forums on issues affecting immigrants
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Representation & Storytelling - Full width card */}
          <div className="mt-8">
            <Card className="bg-gray-50 border-gray-200 shadow-sm max-w-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Representation & Storytelling</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Providing platforms for immigrants to share their stories in public and policy spaces
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Promoting narratives that challenge stereotypes and highlight contributions
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
