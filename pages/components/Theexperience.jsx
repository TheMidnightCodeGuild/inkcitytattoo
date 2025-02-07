import React from "react";
import Marquee from "react-fast-marquee";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import Image from "next/image";
import Balls from "./Balls";
import Socialmedia from "./Socialmedia";
const Banner = () => {
  return (
    <>


      <Navbar2 />
      <Socialmedia/>
      <section className="relative min-h-screen bg-[#F7A600] overflow-hidden pb-20 sm:pb-0 sm:h-[120vh]">
        {/* Content section */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8 md:px-20 pt-20 sm:pt-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full sm:w-[450px] h-[470px] sm:h-[450px] relative mt-24 sm:mt-44 ">
              <Image
                src="/images/img6.jpg"
                alt="Tattoo studio experience"
                fill
                className="rounded-full object-cover border-2 border-white"
                priority
              />
            </div>
            <div className="w-full md:w-1/2 text-[#fffff0] mt-8 sm:mt-[20%] md:ml-8">
              <p className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 px-4 sm:px-0">
                Welcome to Ink City, where artistry meets luxury. We've created an exceptional tattoo studio that combines professional expertise with a comfortable, high-end environment. Our goal is to make your tattoo experience unforgettable.
              </p>
              <p className="text-base sm:text-lg font-semibold px-4 sm:px-0">
                With state-of-the-art facilities and dedicated personal attention, we ensure every client receives the highest quality service from consultation through aftercare.
              </p>
            </div>
          </div>
        </div>

        {/* Marquee section */}
        <div className="absolute w-full top-[80px] sm:top-[120px] z-0">
          <div className="relative">
            {/* Left fade effect */}
            <div className="absolute left-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-r from-[#F7A600] to-transparent z-10"></div>
            <Marquee speed={200} className="overflow-hidden">

              {[
                "EXPERIENCE THE INK CITY TATTOO EXPERIENCE",
                "EXPERIENCE THE INK CITY TATTOO EXPERIENCE",
              ].map((text, index) => (
                <span
                  key={index}
                  className="text-[100px] sm:text-[200px] text-[#fffff0] mx-2 sm:mx-4 font-normal border-2 border-white/40"
                >
                  {text}
                </span>


              ))}
            </Marquee>
            {/* Right fade effect */}
            <div className="absolute right-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-l from-[#F7A600] to-transparent z-10"></div>
          </div>
        </div>
      </section>


      <section className="bg-white min-h-screen">
        <div className="overflow-hidden">
          <Marquee speed={200} className="mt-5">
            {[
                 "\"Professional\"",
              "\"Hygienic\"", 
              "\"Artistic\"",
              "\"Experienced\"",
              "\"Safe\"",
              "\"Professional\"",
              "\"Hygienic\"",
              "\"Artistic\"", 
              "\"Experienced\"",
              "\"Safe\""
            ].map((text, index) => (
              <span
                key={index}
                className="text-2xl text-black mx-4 sm:mx-6"
              >
                {text}
              </span>
            ))}
          </Marquee>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1300px] mx-auto px-4 py-12 mt-12">
          {/* Text content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl md:text-8xl font-normal">
              Your tattoo <span className="text-[#00BFFF]">story <span className="italic">begins</span></span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Once you walk in, you'll work with a skilled artist. All of our artists are amazing listeners who genuinely care about creating meaningful and inspiring art. We make sure that you're paired with an artist who is best suited to your tattoo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your consultation is where the magic starts, so feel free to share every detail - your ideas, placement ideas, and any image references you have in mind.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[800px] rounded-3xl overflow-hidden">
            <Image
              src="/images/img2.jpg"
              alt="Tattoo consultation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <Balls/>     
      </section>
      <Footer />
    </>

  );
};

export default Banner;