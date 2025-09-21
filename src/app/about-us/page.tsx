

import React from 'react';
import { Phone, Mail, Users, Target, Heart, ArrowRight } from 'lucide-react'; 

import Image from "next/image"
// import Link from "next/link"

import Header from "../../components/header";
import CardCarousel from "../../components/CardCarousel";
import PartnersCarousel from "../../components/PartnersCarousel";


function App() {
 
 
  return (
    <div className="min-h-screen bg-white">
      
       <Header />
      {/* Hero Section */}
      <div className="relative h-85 bg-gradient-to-r from-gray-800 to-gray-600 mt-16">
        <div 
          className="absolute inset-0 bg-top bg-cover bg-black/80 bg-blend-overlay"
          style={{
            backgroundImage: "url('/people.jpg')",
            // backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        ></div>
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              About Us
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto animate-fade-in-up delay-200"></div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Immigrant at Large Canada was founded in 2019 with a mission to amplify the voices of immigrants and advocate for their rightful recognition and inclusion in Canadian society.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What began as a grassroots initiative has grown into a passionate movement dedicated to supporting and empowering immigrants from all walks of life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that immigrants are not just participants in Canadian society—they are builders, leaders, and changemakers. Through a variety of impactful programs, community-led initiatives, and advocacy efforts, we work to ensure that immigrants have access to the resources, support, and opportunities they need to thrive.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At the heart of our work is the belief that when immigrants are empowered, communities flourish.
              </p>
            </div>
            <div className="lg:pl-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/conference.jpg"
                  alt="Our team working together"
                  width={500}
                  height={350}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Immigrant at Large Canada is dedicated to supporting and empowering immigrants through a variety of impactful programs and initiatives. We are committed to building a thriving, inclusive community where immigrants feel empowered to succeed.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a Canada where every immigrant thrives with dignity, opportunities and belonging, feels empowered to lead, contribute, and transform their communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the impactful initiatives that drive positive change in immigrant communities across Canada.
            </p>
          </div>
          
          <CardCarousel />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join Our Movement
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Be part of the change. Help us create a more inclusive and empowering Canada for all immigrants.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href = "#" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
              <Users className="mr-2 h-6 w-6" />
              VOLUNTEER
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a href = "#" className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
              <Heart className="mr-2 h-6 w-6" />
              DONATE
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600">Working together to create lasting impact</p>
          </div>
          
         <PartnersCarousel />
      </div>
      </div>
    
      

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Image src="/canada.png" alt="immigration at large company logo" width={120} height={59} className="" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reach Out to</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                We are here to help. Contact us for more information about our programs, to get involved, or to share your feedback.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-300">438-622-8333</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-300">info@immigrantatlarge.ca</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Programs</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Youth Hangout</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Cultural Exchange</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Community Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Advocacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              Copyright © 2025 Immigrant At Large Canada. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;