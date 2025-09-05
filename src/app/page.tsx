"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, Trophy, Users, Target, Award, Heart, Palette, Zap, Crown, Medal } from "lucide-react"

export default function CanadianChoiceAward() {
  const [timeLeft, setTimeLeft] = useState({
    days: 57,
    hours: 17,
    minutes: 45,
    seconds: 14,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const categories = [
    {
      title: "Outstanding Community Leadership",
      icon: Users,
      image: "/diverse.jpg",
      description: "Recognizing leaders who make a positive impact in their communities",
    },
    {
      title: "African Entrepreneur of the Year",
      icon: Target,
      image: "/successful.jpg",
      description: "Celebrating innovative African entrepreneurs driving business success",
    },
    {
      title: "Excellence in Arts & Culture",
      icon: Palette,
      image: "/arts-and-culture-creative-expression-painting-musi.jpg",
      description: "Honoring outstanding contributions to arts and cultural preservation",
    },
    {
      title: "African Youth Achievement Award",
      icon: Award,
      image: "/young.jpg",
      description: "Recognizing exceptional achievements by young African Canadians",
    },
    {
      title: "Excellence in Sports of the Year",
      icon: Medal,
      image: "/sports.jpg",
      description: "Celebrating outstanding athletic performance and sportsmanship",
    },
    {
      title: "Humanitarian Impact Award",
      icon: Heart,
      image: "/humanitarian.jpg",
      description: "Honoring those who dedicate their lives to helping others",
    },
    {
      title: "African Innovator of the Year",
      icon: Zap,
      image: "/innovation.jpg",
      description: "Recognizing groundbreaking innovations and technological advances",
    },
    {
      title: "Lifetime Achievement Award",
      icon: Crown,
      image: "/lifetime.jpg",
      description: "Celebrating a lifetime of exceptional contributions and service",
    },
    {
      title: "Community Recognition Award",
      icon: Star,
      image: "/community.jpg",
      description: "Acknowledging unsung heroes who strengthen our communities",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-amber-600 fill-amber-600" />
              <span className="text-xl font-bold text-gray-900">CANADIAN CHOICE AWARD</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">
                HOME
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">
                OUR PROCESS
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">
                ADVANTAGES
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">
                FAQ
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">
                CONTACT
              </a>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6">NOMINATE NOW</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-amber-600 mb-4">
                NOMINATIONS FOR
                <br />
                <span className="text-8xl">2026</span>
                <br />
                <span className="text-4xl text-gray-900">ARE NOW OPEN</span>
              </h1>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 text-lg mt-8">
                NOMINATE NOW
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-64 h-64 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-32 h-32 text-amber-800" />
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-amber-700 fill-amber-700" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-800 fill-amber-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AWARD CATEGORIES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have a wide range of Award categories. Here are the categories available for nominations:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm border-amber-200 hover:border-amber-400"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-amber-500/90 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                      <Button
                        variant="outline"
                        className="w-full border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 bg-transparent"
                      >
                        Vote in This Category
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Nomination Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-amber-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                NOMINATE YOUR FAVOURITE CANADIAN BUSINESS!
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Nominate your favourite business to be considered for the Canadian Choice Award. Tell us why you think
                they deserve to be recognized.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    STEP 1/2 PERSONAL INFORMATION
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="border-amber-200" />
                    <Input placeholder="Last Name" className="border-amber-200" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Email Address" className="border-amber-200" />
                  <Input placeholder="Phone Number" className="border-amber-200" />
                </div>

                <Input placeholder="Your Message (Optional)" className="border-amber-200" />

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3">
                  SEND VERIFICATION CODE
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            NOMINATION
            <br />
            COUNTDOWN
          </h2>
          <div className="flex justify-center space-x-4">
            <div className="bg-amber-600 text-white p-6 rounded-lg min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">DAYS</div>
            </div>
            <div className="bg-amber-600 text-white p-6 rounded-lg min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">HOURS</div>
            </div>
            <div className="bg-amber-600 text-white p-6 rounded-lg min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">MINUTES</div>
            </div>
            <div className="bg-amber-600 text-white p-6 rounded-lg min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">SECONDS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            BENEFITS OF BECOMING AN OFFICIAL NOMINEE
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Nominating a business for Canadian Choice Award is a win-win for customers and businesses. Customers have a
            say about the businesses and businesses get recognized for their outstanding service, standing out from
            competitors.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600 fill-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recognition Within the Community</h3>
              <p className="text-gray-600 text-sm">
                Being nominated officially becomes highlights the confidence and appreciation customers and supporters
                have in your business and services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600 fill-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Bronze Badge</h3>
              <p className="text-gray-600 text-sm">
                Receive an official digital badge to display on your website, social communications, or social media, a
                mark of excellence supported by your community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600 fill-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exclusive Marketing Assets</h3>
              <p className="text-gray-600 text-sm">
                Receive customized digital and print-ready materials designed to help you communicate your nomination
                with customers and stakeholders.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600 fill-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eligibility to Advance</h3>
              <p className="text-gray-600 text-sm">
                Official Nominees have the distinguished opportunity to progress further in the Canadian Choice Award
                process, potentially earning the title of Top 3 Finalists or becoming a Winner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            STEPS TO BECOMING CANADIAN
            <br />
            CHOICE
          </h2>
          <p className="text-gray-600 mb-12">
            Curious how your favourite business becomes a Canadian Choice Award winner? Here's a look at the key
            journey, from community nominations to the final celebration.
          </p>

          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-10 h-10 text-amber-600" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">NOMINATIONS</h3>
                <p className="text-gray-600">
                  Support your favourite Canadian businesses by submitting a nomination. Business owners can also
                  nominate themselves. Once nominated, businesses become a business nominee, the closer they get to
                  becoming an Official Nominee and receiving exclusive benefits.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-10 h-10 text-amber-600" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">TOP 3 FINALISTS</h3>
                <p className="text-gray-600">
                  The expert panel regularly reviews all qualifying nominees and selects the Top 3 Finalists in each
                  category. These finalists receive enhanced recognition, including a special Top 3 Finalist badge,
                  press release distribution, social media recognition, and community impact.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Trophy className="w-10 h-10 text-amber-600" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">WINNERS</h3>
                <p className="text-gray-600">
                  One winner per category city is selected from the Top 3 Finalists. Winners receive the exclusive
                  supplemental recognition, including extensive marketing materials, enhanced community recognition, and
                  a prestigious Winner badge. Winners represent the highest standard of excellence, credibility, and
                  community impact in their respective categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">FREQUENTLY ASKED QUESTIONS</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/80 rounded-lg border border-amber-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                Can I nominate more than one business?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes, you can nominate multiple businesses across different categories.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/80 rounded-lg border border-amber-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                Does it cost anything to nominate?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                No, nominations are completely free for both nominators and businesses.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/80 rounded-lg border border-amber-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                What does a business receive as the Nominee?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Nominees receive recognition badges, marketing materials, and eligibility to advance to Top 3 Finalists.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/80 rounded-lg border border-amber-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                Will my business be automatically listed?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Businesses must meet certain criteria and go through a review process before being officially listed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/80 rounded-lg border border-amber-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                What if I don't have the exact category?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                You can select the closest matching category or contact us for guidance on the best fit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white/80 rounded-lg border border-amber-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                What if they have multiple locations?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Each location can be nominated separately as they serve different communities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-100 to-orange-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 border border-amber-200">
            <Trophy className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SIGN UP FOR ALL THE LATEST UPDATES!</h2>
            <div className="flex max-w-md mx-auto space-x-4">
              <Input placeholder="EMAIL ADDRESS" className="flex-1 border-amber-200" />
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6">
                BE THE FIRST TO KNOW!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Trophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-200 to-yellow-300">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <div className="w-48 h-48 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full flex items-center justify-center">
                <Trophy className="w-24 h-24 text-amber-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4">CONNECT WITH US ON</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-amber-200">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-amber-200">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-amber-200">
                Instagram
              </a>
              <a href="#" className="text-white hover:text-amber-200">
                LinkedIn
              </a>
              <a href="#" className="text-white hover:text-amber-200">
                YouTube
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center mb-8">
            <Star className="h-8 w-8 text-white fill-white mr-2" />
            <span className="text-xl font-bold">CANADIAN CHOICE AWARD</span>
          </div>

          <div className="grid md:grid-cols-5 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2">Home</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2">About</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Our Process</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Advantages</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Winners</h4>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-amber-500">
            <p className="text-sm">
              © 2024 Canadian Choice Award. All Rights Reserved. Privacy Policy | Terms and Conditions
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
