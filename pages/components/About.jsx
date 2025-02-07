import React from 'react'


const About = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-20 py-24 md:py-20 bg-[#ffffff]  flex items-center justify-center">
      <div className="lg:max-w-[1300px] mx-auto">

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-lg overflow-hidden">
            <img
              src="/images/img1.jpg"
              alt="Tattoo Studio"
              className="w-full h-full object-cover rounded-[50px] md:rounded-[100px] border-[10px] border-[#002D62] scale-[0.90]"
              loading="eager"
            />
          </div>
          
          <div className="text-gray-950 space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D62] text-center uppercase">
              About Ink City
            </h1>


            <div className="w-20 md:w-24 h-1 bg-[#E69500] mx-auto"></div>
            <p className="text-base md:text-lg text-center md:text-left">
              Welcome to Ink City, where artistry meets passion. With over a decade of experience in the tattoo industry, we've built our reputation on creativity, precision, and dedication to our craft.
            </p>
            <p className="text-base md:text-lg text-center md:text-left">
              Our studio combines a sterile, professional environment with a warm, welcoming atmosphere. We believe that getting a tattoo should be a memorable experience, not just a service.
            </p>
            <p className="text-base md:text-lg text-center md:text-left">
              Every piece we create is custom-designed to tell your unique story. Whether it's your first tattoo or your fiftieth, we're here to bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
