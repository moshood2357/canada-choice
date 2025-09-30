"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Users, Briefcase, GraduationCap, Scale, Heart, UserCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "../components/Footer"
import Header from "../components/header"
import {TestimonialCarousel} from "../components/testimonial-carousel"

import { useState, useEffect, useRef } from "react"


const images = ["/group.jpg", "/present.jpg", "/conference.jpg", "/people.jpg"]


function HeroSection(){
      const services = [
    {
      icon: Users,
      title: "Settlement Support Program",
      description:
        "Ensures that immigrants or newcomers to Canada can access the essential resources they need to build stable, empowered lives.",
    },
    {
      icon: Briefcase,
      title: "Career & Entrepreneurship Programs",
      description:
        "Empowers immigrants with the skills, tools, and networks they need to build successful careers or start their own businesses in Canada.",
    },
    {
      icon: GraduationCap,
      title: "Education & Skills Development",
      description:
        "Our Education & Skills Development programs are designed to empower immigrants and newcomers with the knowledge and competencies needed to thrive in Canadian society and the workforce.",
    },
    {
      icon: Scale,
      title: "Advocacy & Policy Engagement",
      description:
        "Our Advocacy & Policy Engagement initiatives aim to amplify immigrant voices in policy discussions, ensuring that the lived experiences of immigrants are heard and that policies that shape their lives.",
    },
    {
      icon: Heart,
      title: "Community Engagement & Networking",
      description:
        "Our Community Engagement & Networking initiatives focus on meaningful connections, celebrate their cultures, and foster a sense of belonging.",
    },
    {
      icon: UserCheck,
      title: "Health & Wellness Programs",
      description:
        "Our Health & Wellness Programs are dedicated to supporting the physical, mental, and emotional well-being of immigrants and newcomers.",
    },
  ]

   const [currentSlide, setCurrentSlide] = useState(0)  
   const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

   const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 1500) // Change slide every 3 seconds
  }

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {

    if (intervalRef.current) {
      clearInterval(intervalRef.current)

      
    }
  }

  const handleMouseLeave = () => {
    startAutoPlay()
  }

  const handlePrevSlide = () => {
    prevSlide()
    startAutoPlay()
  }

  const handleNextSlide = () => {
    nextSlide()
    startAutoPlay()
  }


  

    return(
        <div className = "p-0">

            <Header />
            {/* hero section */}
            <section className="relative mt-24 pt-5 bg-gray-900 text-white min-h-[600px] flex items-center">
            {/* Background image overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                style={{
                backgroundImage: `url('/group.jpg')`,
                }}
            />
        

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-sm font-medium text-blue-300 mb-4 tracking-wide">EMPOWERING COMMUNITIES:</p>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance">
                    Building Inclusion, Settlement and Integration,
                    <br />
                    <span className="text-blue-300">Improving Lives</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Immigrant at Large Canada was founded in 2019 with a mission to amplify the voices of immigrants and
                    advocate for their rightful recognition and inclusion in Canadian society. We are a passionate movement
                    dedicated to supporting and empowering immigrants from all walks of life.
                    </p>
                    <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                    >
                    DISCOVER MORE →
                    </Button>
                </div>


                <div className="relative overflow-hidden rounded-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
          {/* Carousel container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full h-80 bg-cover bg-center flex-shrink-0"
                style={{
                  backgroundImage: `url('${image}')`,
                }}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-white" : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

            {/* Slide counter */}
            {/* <div className="text-center mt-4 text-muted-foreground">
              {currentSlide + 1} / {images.length}
            </div> */}
        </div>
      </div>
     </section>
            
            
            {/* featured section */}
            <section className="py-16 bg-gray-50">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-600 mb-2">We Help Immigrants Thrive in 3 Simple Steps</p>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At Immigrant at Large Canada, we provide a clear pathway to help you build your new life with confidence.
            Our support is structured in three simple, effective steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">01</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Settle In with Confidence</h3>
              <p className="text-gray-600 mb-6">
                From finding housing to understanding your new environment, we provide essential, one-on-one support to
                help you navigate the first steps of your new life. This includes:
              </p>
              <Button variant="link" className="text-blue-600 p-0 h-auto font-medium">
                ABOUT US →
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">02</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Build Your Career & Skills</h3>
              <p className="text-gray-600 mb-6">
                We help you achieve your professional goals in Canada. Our programs are designed to bridge the gap
                between your experience and the Canadian job market.
              </p>
              <Button variant="link" className="text-blue-600 p-0 h-auto font-medium">
                OUR SERVICES →
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">03</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with Your Community</h3>
              <p className="text-gray-600 mb-6">
                Building meaningful connections is key to building meaningful connections. Share your culture, and get
                involved.
              </p>
              <Button variant="link" className="text-blue-600 p-0 h-auto font-medium">
                CONTACT US →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* about section */}
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div
              className="w-full h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/present.jpg')`,
              }}
            />
            <div
              className="w-full h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/conference.jpg')`,
              }}
            />
          </div>

          <div>
            <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide">ABOUT US</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-balance">Who We Are</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Immigrant at Large Canada was founded in 2019 with a mission to amplify the voices of immigrants and
                advocate for their rightful recognition and inclusion in Canadian society. What began as a passionate
                movement has evolved into a comprehensive organization dedicated to supporting and empowering immigrants
                from all walks of life.
              </p>
              <p>
                We believe that immigrants are not just participants in Canadian society—they are essential contributors
                who bring unique perspectives, skills, and experiences. Through a variety of impactful programs,
                community-led initiatives, and advocacy efforts, we work to ensure that immigrants have access to the
                resources, support, and opportunities they need to thrive. At the heart of our work is the belief that
                when immigrants are empowered, communities flourish.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    Immigrant at Large Canada is dedicated to supporting and empowering immigrants through a variety of
                    impactful programs and initiatives. We are committed to building a thriving community where everyone
                    has the opportunity to succeed.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    To create a Canada where every immigrant thrives with dignity, opportunities and belonging, from
                    empowerment to lead, contribute, and transform their communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* services overview */}

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide">WE ARE READY TO HELP YOU</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-balance">Our Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We help immigrants and newcomers around the world access essential resources to build stable, empowered
              lives. Our services are personalized and comprehensive, supporting every stage of the settlement journey.
            </p>
          </div>

          <div
            className="w-full h-80 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url('/group.jpg')`,
            }}
          />
        </div>
      </div>
    </section>

    {/* services grid section */}
              <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">HOW WE CAN HELP</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="bg-gray-800 border-gray-700 text-white">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-balance">{service.title}</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">{service.description}</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">LEARN MORE</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>

    {/* testimonials */}
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className="w-full h-80 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url('/conference.jpg')`,
            }}
          />

          <div >
            <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide">TESTIMONIALS</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-balance">Stories from Our Community</h2>
           <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>

    <Footer />
        </div>
        )
}

export default HeroSection;