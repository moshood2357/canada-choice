"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { 
  Star, 
  Trophy, 
  Users, 
//   MapPin,
//   Calendar,
  Phone,
  Mail,
  Globe,
  CheckCircle,
  Handshake,
  TrendingUp,
  Network,
  Megaphone,
  Gift
} from "lucide-react"
import emailjs from "@emailjs/browser"
import Image from "next/image"
import Link from "next/link"

export default function BecomeAnExhibitor(){
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false)
 const [selectedPackage, setSelectedPackage] = useState("")
  const [applicationFormData, setApplicationFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    packageType: "",
    specialRequests: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const exhibitorPackages = [
    {
      name: "Individual Sponsor",
      price: "$300+",
      features: [
        "10x10 booth space",
        "Table and 2 chairs",
        "Basic signage",
        "Conference materials",
        "Networking opportunities"
      ],
      popular: false
    },
    {
      name: "Supporter Sponsor",
      price: "$500+",
      features: [
        "10x10 booth space",
        "Premium table setup",
        "Professional signage",
        "Conference materials",
        "Priority placement",
        "Social media promotion",
        "Networking reception access"
      ],
      popular: true
    },
    {
      name: "Community Sponsor",
      price: "$1,000+",
      features: [
        "12x12 booth space",
        "Premium setup with backdrop",
        "Logo on conference materials",
        "Speaking opportunity",
        "VIP networking access",
        "Social media spotlight",
        "Conference program ad",
        "Welcome reception sponsor"
      ],
      popular: false
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: "Direct Access to Community",
      description: "Connect with over 500 Afro-Caribbean professionals, entrepreneurs, and community leaders"
    },
    {
      icon: TrendingUp,
      title: "Business Growth Opportunities",
      description: "Showcase your products/services to a targeted audience actively seeking business solutions"
    },
    {
      icon: Network,
      title: "Networking Excellence",
      description: "Build valuable partnerships and collaborations within the thriving Afro-Caribbean business ecosystem"
    },
    {
      icon: Megaphone,
      title: "Brand Visibility",
      description: "Increase brand awareness through conference marketing, social media, and on-site promotion"
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities",
      description: "Explore joint ventures, supplier relationships, and strategic business partnerships"
    },
    {
      icon: Gift,
      title: "Lead Generation",
      description: "Generate qualified leads and expand your customer base within the community"
    }
  ]

  const handleApplicationSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const templateParams = {
      companyName: applicationFormData.companyName,
      contactPerson: applicationFormData.contactPerson,
      email: applicationFormData.email,
      phone: applicationFormData.phone,
      website: applicationFormData.website,
      businessType: applicationFormData.businessType,
      packageType: applicationFormData.packageType,
      specialRequests: applicationFormData.specialRequests,
    }

    await emailjs.send(
      "service_2u97134",
      "template_1tni21u",
      templateParams,
      "wglabsWakJL1JDUyr"
    )

    setSubmitSuccess(true)

    // ✅ reset form after success
    setApplicationFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      website: "",
      businessType: "",
      packageType: "",
      specialRequests: "",
    })
    setSelectedPackage("")

    setTimeout(() => {
      setIsApplicationFormOpen(false)
      setSubmitSuccess(false)
    }, 3000)
  } catch (error) {
    console.error("Error sending application:", error)
    alert("There was an error submitting your application. Please try again.")
  } finally {
    setIsSubmitting(false)
  }
}


  const handleInputChange = (field: string, value: string) => {
    setApplicationFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName)
    setApplicationFormData((prev) => ({
      ...prev,
      packageType: packageName,
    }))
    setIsApplicationFormOpen(true)
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #efd984, #be9c43)' }}>
      <style jsx global>{`
        :root {
          --canada-red: #FA0101;
          --canada-navy: #000246;
          --canada-black: #000000;
          --canada-gold: #efd984;
          --canada-gold-mid: #be9c43;
          --canada-gold-dark: #a38235;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #FA0101, #d40000);
          border: none;
          color: white;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background: linear-gradient(135deg, #d40000, #b80000);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(250, 1, 1, 0.3);
        }
        
        .btn-secondary {
          background: linear-gradient(135deg, #efd984, #be9c43);
          border: 1px solid #a38235;
          color: #000246;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: linear-gradient(135deg, #be9c43, #a38235);
          color: white;
        }
        
        .card-hover {
          transition: all 0.3s ease;
          border: 2px solid #efd984;
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
      `}</style>

      {/* Header */}
      <header className="backdrop-blur-sm border-b fixed z-50 w-full border-canada-gold" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
             {/* Logo */}
              <Link href="/" className="flex flex-col justify-center items-center space-x-2">
                <Image
                  src="/migrate.png"
                  alt="Logo"
                  width={120}
                  height={59}
                  
                />
                <h4 className="font-bold text-canada-navy text-center text-xs pt-3">LEADERSHIP CONFERENCE AND AFRICAN GALA NIGHT</h4>
              </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-canada-gold font-medium transition-colors">
                HOME
              </Link>
              <Link href="#packages" className="text-black hover:text-canada-gold font-medium transition-colors">
                PACKAGES
              </Link>
              <Link href="#benefits" className="text-black hover:text-canada-gold font-medium transition-colors">
                BENEFITS
              </Link>
              <Link href="#contact" className="text-black hover:text-canada-gold font-medium transition-colors">
                CONTACT
              </Link>
              <Link href="#packages">
                <Button 
                className="btn-primary font-semibold px-6 cursor-pointer"
                // onClick={() => setIsApplicationFormOpen(true)}
                >
                  APPLY NOW
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-canada-navy overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-canada-gold to-transparent transform rotate-45"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
          <div className="w-full h-full bg-gradient-to-tl from-canada-gold to-transparent transform -rotate-45"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Conference Header */}
          {/* <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-8 inline-block border-2 border-canada-gold">
            <h3 className="text-lg font-bold text-canada-navy mb-2">AFRO-CARIBBEAN THRIVE CONFERENCE</h3>
            <div className="flex items-center justify-center space-x-4 text-canada-black">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-canada-red" />
                <span className="text-2xl font-bold">AUGUST 30, 2025</span>
              </div>
              <span className="text-xl">|</span>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-canada-red" />
                <div className="text-right">
                  <div className="font-semibold">ROGERS (SHAW)</div>
                  <div>CENTRE, OTTAWA</div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Limited Offer Badge */}
          <div className="inline-flex items-center space-x-2 bg-canada-red text-white px-4 py-2 rounded-full mt-9 mb-6 shadow-lg">
            <Star className="w-5 h-5 fill-white" />
            <span className="font-bold text-sm">LIMITED SPACES AVAILABLE</span>
          </div>

          {/* Main Hero Content */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-black mb-4  bg-gradient-to-r from-canada-gold via-yellow-400 to-canada-gold bg-clip-text text-transparent drop-shadow-2xl">
              BECOME AN
            </h1>
            <h2 className="text-5xl md:text-6xl font-black text-white drop-shadow-2xl mb-6">
              EXHIBITOR
            </h2>
            <p className="text-2xl font-bold text-canada-gold mb-8 tracking-wider">
              SHOWCASE YOUR BUSINESS TO 600+ ATTENDEES
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
           
            <Button className="btn-secondary font-bold px-8 py-4 text-lg shadow-lg">
              <a href="#packages">VIEW PACKAGES</a>
            </Button>

            <Link href = "#packages">
               <Button 
              className="btn-primary font-bold px-8 py-4 text-lg shadow-lg cursor-pointer"
              // onClick={() => setIsApplicationFormOpen(true)}
            >
              APPLY NOW
            </Button>
          </Link>

          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-canada-gold">
              <div className="text-3xl font-bold text-canada-gold mb-2">600+</div>
              <div className="text-white">Expected Attendees</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-canada-gold">
              <div className="text-3xl font-bold text-canada-gold mb-2">50+</div>
              <div className="text-white">Exhibitor Spaces</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-canada-gold">
              <div className="text-3xl font-bold text-canada-gold mb-2">8 Hours</div>
              <div className="text-white">Networking Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-canada-navy mb-4">WHY EXHIBIT WITH US?</h2>
            <p className="text-xl text-canada-black max-w-3xl mx-auto opacity-80">
              Join the premier LEADERSHIP CONFERENCE AND AFRICAN GALA NIGHT and connect with a thriving community of entrepreneurs, professionals, and decision-makers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="card-hover bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent className="w-8 h-8 text-canada-navy" />
                    </div>
                    <h3 className="text-xl font-bold text-canada-navy mb-3">{benefit.title}</h3>
                    <p className="text-canada-black text-sm opacity-80">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Exhibitor Packages Section */}
      <section id="packages" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(239, 217, 132, 0.3)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-canada-navy mb-4">EXHIBITOR PACKAGES</h2>
            <p className="text-xl text-canada-black max-w-3xl mx-auto opacity-80">
              Choose the package that best fits your business needs and budget. All packages include access to our vibrant community of attendees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {exhibitorPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`card-hover bg-white/95 backdrop-blur-sm relative ${pkg.popular ? 'ring-2 ring-canada-red' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-canada-red text-white px-4 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-canada-navy mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-canada-red mb-4">{pkg.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-canada-black text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-semibold cursor-pointer ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => handlePackageSelect(pkg.name)}
                  >
                    SELECT {pkg.name.toUpperCase()}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-canada-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">GET IN TOUCH</h2>
          <p className="text-canada-gold text-xl mb-12">
            Have questions about exhibiting? Our team is here to help you make the most of this opportunity.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-canada-gold">
              <Globe className="w-8 h-8 text-canada-gold mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Website</h3>
              <p className="text-canada-gold text-sm break-all">
                www.immigrantatlargecanada.ca/become-an-exhibitor
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-canada-gold">
              <Mail className="w-8 h-8 text-canada-gold mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Email</h3>
              <p className="text-canada-gold text-sm">
                info@immigrantatlargecanada.ca
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-canada-gold">
              <Phone className="w-8 h-8 text-canada-gold mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Phone</h3>
              <p className="text-canada-gold text-sm">
                 +1(613)501-8351
              </p>
            </div>
          </div>

          <Button 
            className="btn-primary font-bold px-8 py-4 text-lg shadow-lg cursor-pointer"
            onClick={() => setIsApplicationFormOpen(true)}
          >
            APPLY TO EXHIBIT NOW
          </Button>
        </div>
      </section>

      {/* Application Form Dialog */}
      <Dialog open={isApplicationFormOpen} onOpenChange={setIsApplicationFormOpen}>
        <DialogContent className="max-w-2xl mx-auto bg-white/98 backdrop-blur-sm border-canada-gold max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-canada-navy text-center">
              Exhibitor Application {selectedPackage && ` - ${selectedPackage}`}
            </DialogTitle>
            <p className="text-canada-red font-semibold text-center">
              LEADERSHIP CONFERENCE AND AFRICAN GALA NIGHT 2025
            </p>
          </DialogHeader>

          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-canada-navy" />
              </div>
              <h3 className="text-xl font-bold text-canada-red mb-2">Application Submitted Successfully!</h3>
              <p className="text-canada-black">Thank you for your interest. We will review your application and get back to you within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleApplicationSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-black font-medium text-canada-navy mb-1">Company Name *</label>
                  <Input
                    required
                    value={applicationFormData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    className="border-canada-gold focus:border-canada-red focus:ring-canada-red"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-canada-navy mb-1">Contact Person *</label>
                  <Input
                    required
                    value={applicationFormData.contactPerson}
                    onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                    className="border-canada-gold text-black focus:border-canada-red focus:ring-canada-red"
                    placeholder="Enter contact person"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-canada-navy mb-1">Email Address *</label>
                  <Input
                    type="email"
                    required
                    value={applicationFormData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-canada-gold text-black focus:border-canada-red focus:ring-canada-red"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-canada-navy mb-1">Phone Number *</label>
                  <Input
                    type="tel"
                    required
                    value={applicationFormData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="border-canada-gold text-black focus:border-canada-red focus:ring-canada-red"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-canada-navy mb-1">Website</label>
                <Input
                  // type="url"
                  value={applicationFormData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  className="border-canada-gold text-black focus:border-canada-red focus:ring-canada-red"
                  placeholder="Enter website URL"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text -canada-navy mb-1">Business Type *</label>
                <Select
                  required
                  value={applicationFormData.businessType}
                  onValueChange={(value) => handleInputChange("businessType", value)}
                >
                  <SelectTrigger className="w-full text-black border-canada-gold focus:border-canada-red bg-white">
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-canada-gold shadow-lg max-h-[200px] overflow-y-auto z-[9999]">
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="services">Professional Services</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                    <SelectItem value="health-wellness">Health & Wellness</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="non-profit">Non-Profit</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-canada-navy mb-1">Preferred Package *</label>
                <Select
                  required
                  value={applicationFormData.packageType}
                  onValueChange={(value) => handleInputChange("packageType", value)}
                >
                  <SelectTrigger className="w-full text-black border-canada-gold focus:border-canada-red bg-white">
                    <SelectValue placeholder="Select package" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-canada-gold shadow-lg max-h-[200px] overflow-y-auto z-[9999]">
                    
                    <SelectItem value="Standard Booth">Individual Sponsor — $300+</SelectItem>
                    <SelectItem value="Premium Booth">Supporter Sponsor — $500+</SelectItem>
                    <SelectItem value="Platinum Sponsor">Community Sponsor — $1,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-canada-navy mb-1">Special Requests</label>
                <Input
                  value={applicationFormData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  className="border-canada-gold text-black focus:border-canada-red focus:ring-canada-red"
                  placeholder="Any special requirements or requests"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsApplicationFormOpen(false)}
                  className="flex-1 border-gray-300 text-canada-navy hover:bg-gray-50"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 btn-primary font-semibold cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-canada-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Link href="/" className="flex items-center justify-center mb-8">
              <Image
                src="/migrate.png"
                alt="immigration at large company logo"
                width={120}
                height={59}
                className=""
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-5 gap-8 text-center md:text-left">
            <div>
              <Link href="/" className="font-semibold mb-2 text-canada-gold hover:text-white cursor-pointer transition-colors">
                Home
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-canada-gold hover:text-white cursor-pointer transition-colors">About</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-canada-gold hover:text-white cursor-pointer transition-colors">Conference</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-canada-gold hover:text-white cursor-pointer transition-colors">Exhibitors</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-canada-gold hover:text-white cursor-pointer transition-colors">Contact</h4>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-canada-gold">
            <p className="text-sm opacity-80">
              © 2025 LEADERSHIP CONFERENCE AND AFRICAN GALA NIGHT. All Rights Reserved. Privacy Policy | Terms and Conditions
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}