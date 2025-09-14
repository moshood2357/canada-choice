"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Star, Trophy, Users, Target, Award, Heart, Palette, Medal } from "lucide-react"
import emailjs from "@emailjs/browser"
import Image from "next/image"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Menu, X } from "lucide-react"
import Link from "next/link"

// Set your target date here
const targetDate = new Date("2025-11-20T00:00:00")

export default function CanadianChoiceAward() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        // Countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const [isVotingFormOpen, setIsVotingFormOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [votingFormData, setVotingFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nominate: "",
    nominee: "",
  })

  const [isVotingSubmitting, setIsVotingSubmitting] = useState(false)
  const [votingSubmitSuccess, setVotingSubmitSuccess] = useState(false)

  const categories = [
    {
      title: "Community & Social Impact",
      icon: Users,
      image: "/social.jpg",
      description: "Recognizing leaders who make a positive impact in their communities",
    },
    {
      title: "Business & Innovation",
      icon: Target,
      image: "/business.jpg",
      description: "Celebrating innovative African entrepreneurs driving business success",
    },
    {
      title: "Arts & Culture",
      icon: Palette,
      image: "/culture.jpg",
      description: "Honoring outstanding contributions to arts and cultural preservation",
    },
    {
      title: "Leadership & Governance",
      icon: Award,
      image: "/governances.jpg",
      description: "Recognizing exceptional achievements by young African Canadians",
    },
    {
      title: "Health, Education & Development",
      icon: Medal,
      image: "/health.jpg",
      description: "Celebrating outstanding athletic performance and sportsmanship",
    },
    {
      title: "Special Recognition",
      icon: Heart,
      image: "/recognition.jpg",
      description: "Honoring those who dedicate their lives to helping others",
    },
  ]

  const subCategories = {
    "Community & Social Impact": [
      "Humanitarian Impact Award",
      "Community Leadership Award",
      "Grassroots Change Maker Award",
      "African Unity & Inclusion Award",
      "Youth Empowerment Award",
    ],
    "Business & Innovation": [
      "African Entrepreneur of the Year",
      "Business Excellence Award",
      "Innovation & Technology Award",
      "African Women in Business Leadership Award",
      "African DJ of the year",
      "African MC of the year",
    ],
    "Arts & Culture": [
      "African Music Icon Award",
      "African Fashion & Style Award",
      "Creative Arts Excellence Award",
      "Best Traditional Performer",
      "Cultural Heritage Preservation Award",
    ],
    "Leadership & Governance": [
      "African Trailblazer Award",
      "Political Leadership Excellence Award",
      "Pan-African Leadership Award",
      "Lifetime Achievement in Leadership",
      "Public Service Excellence Award",
    ],
    "Health, Education & Development": [
      "African Educator of the Year",
      "Health & Wellness Champion Award",
      "African Research & Innovation Award",
      "Sustainable Development Impact Award",
      "Women & Girls Empowerment Award",
    ],
    "Special Recognition": [
      "Lifetime Achievement Award",
      "Diaspora Excellence Award",
      "African Rising Star Award",
      "Legacy Builder Award",
    ],
  }

  const handleVoteClick = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle)
    setIsVotingFormOpen(true)
    setVotingFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      nominate: "",
      nominee: "",
    })
    setVotingSubmitSuccess(false)
  }

  const handleVotingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVotingSubmitting(true)

    try {
      const templateParams = {
        to_email: "info@immigrantatlargecanada.ca",
        from_name: `${votingFormData.firstName} ${votingFormData.lastName}`,
        from_email: votingFormData.email,
        phone: votingFormData.phone,
        category: selectedCategory,
        nominee: votingFormData.nominee,
        nominate: votingFormData.nominate,
        subject: `New Vote Submission - ${selectedCategory}`,
        message: `Vote submitted for sub-category "${votingFormData.nominee}" in ${selectedCategory} category.`,
      }

      await emailjs.send("service_r7wr5br", "template_lrxdkli", templateParams, "wglabsWakJL1JDUyr")

      setVotingSubmitSuccess(true)
      setTimeout(() => {
        setIsVotingFormOpen(false)
        setVotingSubmitSuccess(false)
      }, 2000)
    } catch (error) {
      console.error("Error sending nomination email:", error)
      alert("There was an error submitting your nomination. Please try again.")
    } finally {
      setIsVotingSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setVotingFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 40%, #2a2a2a 70%, rgba(239, 217, 132, 0.15) 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-20 w-2 h-2 bg-yellow-400 rotate-45 opacity-80 animate-pulse"></div>
        <div className="absolute top-32 right-32 w-1 h-4 bg-yellow-500 rotate-12 opacity-70 animate-bounce"></div>
        <div className="absolute top-20 right-20 w-3 h-1 bg-yellow-400 rotate-45 opacity-60"></div>
        <div className="absolute bottom-40 left-16 w-2 h-2 bg-yellow-500 rotate-12 opacity-80 animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-1 h-3 bg-yellow-400 rotate-45 opacity-70"></div>
        <div className="absolute top-60 left-40 w-2 h-1 bg-yellow-500 rotate-12 opacity-60 animate-bounce"></div>
        <div className="absolute bottom-60 right-16 w-1 h-2 bg-yellow-400 rotate-45 opacity-80"></div>
        <div className="absolute top-40 right-60 w-3 h-1 bg-yellow-500 rotate-12 opacity-70 animate-pulse"></div>
        <div className="absolute top-80 left-80 w-2 h-2 bg-yellow-400 rotate-45 opacity-60"></div>
        <div className="absolute bottom-80 right-80 w-1 h-3 bg-yellow-500 rotate-12 opacity-70"></div>
      </div>

      <style jsx global>{`
        :root {
          --canada-red: #FA0101;
          --canada-navy: #000246;
          --canada-black: #000000;
          --canada-gold: #efd984;
          --canada-gold-mid: #be9c43;
          --canada-gold-dark: #a38235;
        }

        --gradient-black-gold-metallic: linear-gradient(
    135deg,
    #000000 0%,
    #1a1a1a 25%,
    #FFD700 50%,
    #b8860b 75%,
    #000000 100%
  );
        
        .btn-primary {
          background: linear-gradient(135deg, #efd984, #be9c43);
          border: none;
          color: #000000;
          transition: all 0.3s ease;
          font-weight: 600;
        }
        
        .btn-primary:hover {
          background: linear-gradient(135deg, #be9c43, #a38235);
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(239, 217, 132, 0.3);
        }
        
        .btn-secondary {
          background: linear-gradient(135deg, #efd984, #be9c43);
          border: 1px solid #a38235;
          color: #000000;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: linear-gradient(135deg, #be9c43, #a38235);
          color: white;
        }
        
        .card-hover {
          transition: all 0.3s ease;
          border: 2px solid #efd984;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(239, 217, 132, 0.3);
          border-color: #be9c43;
        }
        
        .gradient-gold {
          background: linear-gradient(135deg, #efd984, #be9c43, #a38235);
        }
        
        .text-canada-red { color: #FA0101; }
        .text-canada-navy { color: #000246; }
        .text-canada-black { color: #000000; }
        .text-canada-gold { color: #efd984; }
        .bg-canada-navy { background-color: #000246; }
        .bg-canada-red { background-color: #FA0101; }
        .border-canada-gold { border-color: #efd984; }
        .bg-canada-gold { background-color: #efd984; }

        /* Added dark theme styling for Arts & Culture section */
        .arts-culture-special {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(26, 26, 26, 0.9));
          border: 2px solid #efd984;
          position: relative;
          overflow: hidden;
        }
        
        .arts-culture-special::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(239, 217, 132, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white backdrop-blur-md shadow-md z-50 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex flex-col justify-center items-center space-x-2">
            <Image src="/migrate.png" alt="Logo" width={120} height={59} />
            <h4 className="font-bold text-center text-xs pt-3 text-black">
              LEADERSHIP CONFERENCE AND AFRICAN GALA NIGHT
            </h4>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="#about" className="text-black hover:text-canada-gold font-medium transition-colors">
              About
            </Link>
            <Link href="#category" className="text-black hover:text-canada-gold font-medium transition-colors">
              Categories
            </Link>
            <Link href="#voting" className="text-black hover:text-canada-gold font-medium transition-colors">
              Voting
            </Link>
            <Link href="#contact" className="text-black hover:text-canada-gold font-medium transition-colors">
              Contact
            </Link>
            <AnchorLink href="#category">
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold px-6 w-full sm:w-auto border-0 shadow-lg">
                NOMINATE NOW
              </Button>
            </AnchorLink>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-canada-gold focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-yellow-500/20 shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="#about"
                className="text-white hover:text-canada-gold font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#category"
                className="text-white hover:text-canada-gold font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="#voting"
                className="text-white hover:text-canada-gold font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Voting
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-canada-gold font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <AnchorLink href="#category">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold px-6 w-full sm:w-auto border-0 shadow-lg">
                  NOMINATE NOW
                </Button>
              </AnchorLink>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 sm:pt-48 md:pt-60 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-black-gold-metallic">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            {/* Left: Text */}
            <div className="relative">
              <div className="absolute inset-0 bg-black/60 rounded-lg -z-10"></div>
              <div className="relative z-10 p-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                  NOMINATIONS FOR
                  <br />
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-yellow-400 block drop-shadow-2xl">
                    2026
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl text-white block mt-2 drop-shadow-2xl">
                    ARE NOW OPEN
                  </span>
                </h1>
                <AnchorLink href="#category">
                  <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold px-6 w-full sm:w-auto border-0 shadow-lg">
                    NOMINATE NOW
                  </Button>
                </AnchorLink>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/AWARDS.png"
                alt="award banner"
                width={350}
                height={350}
                className="drop-shadow-2xl w-48 sm:w-64 md:w-80 lg:w-[350px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Award Categories Section */}
      <section
        className="pb-16 pt-40 px-4 sm:px-6 lg:px-8"
        id="category"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">AWARD CATEGORIES</h2>
            <p className="text-xl text-canada-gold max-w-3xl mx-auto">
              We have a wide range of Award categories. Here are the categories available for nominations:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              const isArtsAndCulture = category.title === "Arts & Culture"
              return (
                <Card
                  key={index}
                  className={`group cursor-pointer ${isArtsAndCulture ? "arts-culture-special" : "card-hover"}`}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      {isArtsAndCulture && (
                        <>
                          <div className="absolute top-4 left-4">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-yellow-400">
                              <path
                                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                    {/* Golden confetti overlay for Arts & Culture */}
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-2 right-8 w-1 h-2 bg-yellow-400 rotate-45 opacity-80"></div>
                            <div className="absolute top-8 right-4 w-2 h-1 bg-yellow-500 rotate-12 opacity-70"></div>
                            <div className="absolute bottom-8 left-4 w-1 h-2 bg-yellow-400 rotate-45 opacity-60"></div>
                          </div>
                        </>
                      )}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center gradient-gold">
                        <IconComponent className="w-6 h-6 text-canada-navy" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3
                        className={`text-xl font-bold mb-3 group-hover:text-canada-gold transition-colors ${isArtsAndCulture ? "text-white" : "text-white"}`}
                      >
                        {category.title}
                      </h3>
                      <p
                        className={`text-sm mb-4 opacity-80 ${isArtsAndCulture ? "text-canada-gold" : "text-canada-gold"}`}
                      >
                        {category.description}
                      </p>
                      <Button className="w-full btn-secondary" onClick={() => handleVoteClick(category.title)}>
                        Nominate in this category
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Dialog open={isVotingFormOpen} onOpenChange={setIsVotingFormOpen}>
        <DialogContent className="max-w-md mx-auto bg-white/98 backdrop-blur-sm border-canada-gold max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-canada-navy text-center">
              Nominate in this category
            </DialogTitle>
            <p className="text-canada-red font-semibold text-center">{selectedCategory}</p>
          </DialogHeader>

          {votingSubmitSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-canada-navy" />
              </div>
              <h3 className="text-xl font-bold text-canada-red mb-2">Nomination Submitted Successfully!</h3>
              <p className="text-canada-black">Thank you for your nomination. We will be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleVotingSubmit} className="space-y-4">
              <div className="relative">
                <label className="block text-sm text-black font-medium text-canada-navy mb-1">
                  Select Sub-Category *
                </label>
                <Select
                  required
                  value={votingFormData.nominee}
                  onValueChange={(value) => handleInputChange("nominee", value)}
                >
                  <SelectTrigger className="w-full border-canada-gold focus:border-canada-red bg-white">
                    <SelectValue placeholder="Choose a sub-category" />
                  </SelectTrigger>
                  <SelectContent
                    className="bg-black border-canada-gold shadow-lg max-h-[200px] overflow-y-auto z-[9999]"
                    position="popper"
                    sideOffset={4}
                  >
                    {subCategories[selectedCategory as keyof typeof subCategories]?.map((subCategory, index) => (
                      <SelectItem
                        key={index}
                        value={subCategory}
                        className="cursor-pointer px-3 py-2 hover:bg-canada-gold"
                      >
                        {subCategory}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-canada-navy mb-1">Who do you want to nominate*</label>
                <Input
                  required
                  value={votingFormData.nominate}
                  onChange={(e) => handleInputChange("nominate", e.target.value)}
                  className="border-canada-gold text-black focus:border-canada-red focus:ring-canada-red"
                  placeholder="Who do you want to nominate"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-canada-navy mb-1">First Name *</label>
                <Input
                  required
                  value={votingFormData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="border-canada-gold text-black focus:border-canada-red focus:ring-canada-red"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-canada-navy mb-1">Last Name *</label>
                <Input
                  required
                  value={votingFormData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="border-canada-gold text-black focus:border-canada-red focus:ring-canada-red"
                  placeholder="Enter last name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-canada-navy mb-1">Email Address *</label>
                <Input
                  type="email"
                  required
                  value={votingFormData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-canada-gold text-black focus:border-canada-red focus:ring-canada-red"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm  font-medium text-canada-navy mb-1">Phone Number *</label>
                <Input
                  type="tel"
                  required
                  value={votingFormData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border-canada-gold text-black focus:border-canada-red focus:ring-canada-red"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsVotingFormOpen(false)}
                  className="flex-1 border-gray-300 text-canada-navy hover:bg-gray-50"
                  disabled={isVotingSubmitting}
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 btn-primary font-semibold" disabled={isVotingSubmitting}>
                  {isVotingSubmitting ? "Submitting..." : "Submit nomination"}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Countdown */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white  leading-tight">
            NOMINATION
            <br />
            <span className="text-canada-gold">COUNTDOWN</span>
          </h2>
          <small className="text-canada-gold ">Nominations closes on November 20</small> <br /> <br />
          {timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0 ? (
            <p className="text-2xl sm:text-3xl font-bold text-red-500">Nominations Closed</p>
          ) : (
            <div className="grid grid-cols-2 sm:flex sm:justify-center gap-4 sm:space-x-4">
              <div className="bg-canada-gold text-black p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-xs sm:text-sm">DAYS</div>
              </div>
              <div className="bg-canada-gold text-[#000000] p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs sm:text-sm">HOURS</div>
              </div>
              <div className="bg-canada-gold text-[#000000] p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs sm:text-sm">MINUTES</div>
              </div>
              <div className="bg-canada-gold text-[#000000] p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs sm:text-sm">SECONDS</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">BENEFITS OF BECOMING AN OFFICIAL NOMINEE</h2>
          <p className="text-canada-gold mb-12 text-center max-w-4xl mx-auto opacity-80">
            Nominating a business for LEADERSHIP CONFERENCE AND AFRICAN GALA NIGHT is a win-win for customers and
            businesses. Customers have a say about the businesses and businesses get recognized for their outstanding
            service, standing out from competitors.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-8 h-8 text-canada-navy" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Recognition Within the Community</h3>
              <p className="text-canada-gold text-sm opacity-80">
                Being nominated officially becomes highlights the confidence and appreciation customers and supporters
                have in your business and services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-8 h-8 text-canada-navy" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Personalized Bronze Badge</h3>
              <p className="text-canada-gold text-sm opacity-80">
                Receive an official digital badge to display on your website, social communications, or social media, a
                mark of excellence supported by your community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-8 h-8 text-canada-navy" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Exclusive Marketing Assets</h3>
              <p className="text-canada-gold text-sm opacity-80">
                Receive customized digital and print-ready materials designed to help you communicate your nomination
                with customers and stakeholders.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-8 h-8 text-canada-navy" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Eligibility to Advance</h3>
              <p className="text-canada-gold text-sm opacity-80">
                Official Nominees have the distinguished opportunity to progress further in the Canadian Choice Award
                process, potentially earning the title of Top 3 Finalists or becoming a Winner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "rgba(239, 217, 132, 0.3)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-canada-navy mb-4">
            STEPS TO BECOMING GALA NIGHT
            <br />
            <span className="text-white">AWARDEE</span>
          </h2>
          <p className="text-canada-black mb-12 opacity-80">
            Curious how your favorite nominee becomes a Gala night Award winner? Here is a look at the key journey, from
            community nominations to the final celebration.
          </p>

          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Users className="w-10 h-10 text-canada-navy" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-canada-navy mb-2">NOMINATIONS</h3>
                <p className="text-canada-black opacity-80">
                  Support your favorite Canadian businesses by submitting a nomination. Business owners can also
                  nominate themselves. Once nominated, businesses become a business nominee, the closer they get to
                  becoming an Official Nominee and receiving exclusive benefits.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Target className="w-10 h-10 text-canada-navy" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-canada-navy mb-2">TOP 3 FINALISTS</h3>
                <p className="text-canada-black opacity-80">
                  The expert panel regularly reviews all qualifying nominees and selects the Top 3 Finalists in each
                  category. These finalists receive enhanced recognition, including a special Top 3 Finalist badge,
                  press release distribution, social media recognition, and community impact.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Trophy className="w-10 h-10 text-canada-navy" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-canada-navy mb-2">WINNERS</h3>
                <p className="text-canada-black opacity-80">
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

      {/* Call for Vendors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-canada-gold to-transparent transform rotate-45"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
          <div className="w-full h-full bg-gradient-to-tl from-canada-gold to-transparent transform -rotate-45"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Main Call for Vendors */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl font-black mb-4  text-canada-gold drop-shadow-2xl">CALL FOR</h1>
            <h2 className="text-6xl md:text-7xl font-black text-white drop-shadow-2xl mb-6">VENDORS</h2>
            <p className="text-2xl font-bold text-canada-gold mb-8 tracking-wider">SHOWCASE YOUR BUSINESS & BRAND</p>
          </div>

          {/* Conference Header */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mr-3 mb-8 inline-block border-2 border-canada-gold">
            <h3 className="text-lg font-bold text-canada-navy mb-2">LEADERSHIP CONFERENCE AND AFRICAN GALA NIGHT</h3>
            <div className="flex items-center justify-center space-x-4 text-canada-black">
              <span className="text-2xl font-bold">NOVEMBER 21, 2025</span>
              <span className="text-xl">|</span>
              <div className="text-right">
                <div className="font-semibold">BLUE LEGACY CONVENTION CENTRE,</div>
                <div> 3750 N BOWESVILLE RD, OTTAWA, ON K1V 1B8</div>
              </div>
            </div>
          </div>

          {/* Limited Offer Badge */}
          <div className="inline-flex items-center space-x-2 bg-canada-gold text-black px-4 py-2 rounded-full mb-6 shadow-lg">
            <Star className="w-5 h-5 fill-white" />
            <span className="font-bold text-sm">LIMITED OFFER</span>
          </div>

          {/* Registration Information */}
          <div className="bg-canada-gold text-[#000000] p-8 rounded-2xl shadow-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4 text-black">REGISTER AT</h3>
            <div className="text-2xl font-black mb-6 break-all">
              <Link href="/become-an-exhibitor" >
                www.immigrantatlargecanada.ca/become-an-exhibitor
              </Link>
            </div>

            {/* <div className="bg-canada-black text-canada-gold px-6 py-3 rounded-lg inline-block mb-4">
              <span className="text-xl font-bold">info@immigrantlargecanada.ca</span>
            </div>
             */}
            <div className="text-lg font-semibold text-canada-gold">
              <span className="text-[#000246]">Call:</span> <span className="text-black">+1(613)501-8351</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/become-an-exhibitor">
              <Button className="btn-primary font-bold px-8 py-4 text-lg shadow-lg cursor-pointer">
                BECOME A VENDOR
              </Button>
            </Link>
            {/* <Button className="btn-secondary font-bold px-8 py-4 text-lg shadow-lg">
              LEARN MORE
            </Button> */}
          </div>

          {/* Sponsor Logos Placeholder */}
          {/* <div className="border-t border-canada-gold pt-8">
            <p className="text-canada-gold text-sm mb-4 opacity-80">PROUDLY SUPPORTED BY</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xs text-white font-bold">SPONSOR</span>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xs text-white font-bold">SPONSOR</span>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xs text-white font-bold">SPONSOR</span>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xs text-white font-bold">SPONSOR</span>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-canada-navy mb-12 text-center">FREQUENTLY ASKED QUESTIONS</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/90 rounded-lg border border-canada-gold shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-canada-navy hover:text-canada-red">
                Can I nominate more than one business?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-canada-black opacity-80">
                Yes, you can nominate multiple businesses across different categories.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/90 rounded-lg border border-canada-gold shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-canada-navy hover:text-canada-red">
                Does it cost anything to nominate?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-canada-black opacity-80">
                No, nominations are completely free for both nominators and businesses.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/90 rounded-lg border border-canada-gold shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-canada-navy hover:text-canada-red">
                What does a business receive as the Nominee?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-canada-black opacity-80">
                Nominees receive recognition badges, marketing materials, and eligibility to advance to Top 3 Finalists.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/90 rounded-lg border border-canada-gold shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-canada-navy hover:text-canada-red">
                Will my business be automatically listed?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-canada-black opacity-80">
                Businesses must meet certain criteria and go through a review process before being officially listed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/90 rounded-lg border border-canada-gold shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-canada-navy hover:text-canada-red">
                What if I do not have the exact category?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-canada-black opacity-80">
                You can select the closest matching category or contact us for guidance on the best fit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white/90 rounded-lg border border-canada-gold shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-canada-navy hover:text-canada-red">
                What if they have multiple locations?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-canada-black opacity-80">
                Each location can be nominated separately as they serve different communities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section
  className="py-16 px-4 sm:px-6 lg:px-8"
  style={{ background: "linear-gradient(135deg, #efd984, #be9c43)" }}
>
  <div className="max-w-4xl mx-auto text-center">
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border-2 border-canada-gold shadow-xl">
      <Trophy className="w-12 sm:w-16 h-12 sm:h-16 text-canada-red mx-auto mb-6" />
      <h2 className="text-2xl sm:text-3xl font-bold text-canada-navy mb-6">
        SIGN UP FOR ALL THE LATEST UPDATES!
      </h2>

      
      <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="EMAIL ADDRESS"
          required
          className="flex-1 border-canada-gold focus:border-canada-red"
        />
        <Button
          type="submit"
          className="btn-primary font-semibold px-6 w-full sm:w-auto"
        >
          BE THE FIRST TO KNOW!
        </Button>
      </form>
    </div>
  </div>
</section> */}

      {/* Footer Trophy */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(to bottom, #be9c43, #a38235)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative">
            <div className="w-64 h-64 gradient-gold rounded-full flex items-center justify-center mx-auto shadow-2xl border-4 border-white">
              <Image src="/AWARDS.png" alt="award banner" width={400} height={400} className="drop-shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="font-semibold mb-4 text-canada-gold">Home</h3>
          </div>

          <div className="flex items-center justify-center mb-8">
            <Image src="/immigrants.png" alt="immigration at large company logo" width={120} height={59} className="" />
          </div>

          <div className="grid md:grid-cols-5 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2 text-canada-gold hover:text-white cursor-pointer transition-colors">
                Home
              </h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-canada-gold hover:text-white cursor-pointer transition-colors">
                About
              </h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-canada-gold hover:text-white cursor-pointer transition-colors">
                Our Process
              </h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-canada-gold hover:text-white cursor-pointer transition-colors">
                Advantages
              </h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-canada-gold hover:text-white cursor-pointer transition-colors">
                Winners
              </h4>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-canada-gold">
            <p className="text-sm opacity-80">
              © 2025 LEADERSHIP CONFERENCE AND AFRICAN GALA NIGHT. All Rights Reserved. Privacy Policy | Terms and
              Conditions
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
