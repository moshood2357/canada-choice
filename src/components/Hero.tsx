function Hero(){
    return(
        <div>
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
        </div>
    )
}

export default Hero