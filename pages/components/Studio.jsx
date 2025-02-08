import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const Studio = () => {
  const studioImages = [
    '/images/studio4.jpg',
  
  ]

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-20 py-16 sm:py-20 md:py-24 bg-[#ffffff] ">
      <div className="lg:max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div className="relative h-[250px] xs:h-[300px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden mt-6">
            <Swiper
              modules={[EffectFade, Autoplay]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-full"
            >
              {studioImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`Studio Interior ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="text-gray-300 space-y-6 sm:space-y-8 md:space-y-10 mt-6 md:mt-5">
            <div className="text-center md:text-left">
              <p className="text-gray-900 uppercase tracking-wider mb-2 text-sm sm:text-base">Our Studio</p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#002D62] uppercase">
                Where Body Meets Art
              </h2>

              <p className="text-gray-900 mt-4 sm:mt-6 text-sm sm:text-base">
                Welcome to Ink City, where creativity knows no bounds. Our studio is more than just a place to get tattooed - it's a creative sanctuary where your ideas transform into stunning works of art.
              </p>

              <div className="w-20 md:w-24 h-1 bg-[#E69500] mx-auto mt-10 sm:mt-5"></div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 flex-shrink-0 relative">
                <Image src="/images/ic-bird.svg" alt="Tattoo Quality" fill />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-[#002D62] mb-2">IMPECCABLE TATTOO QUALITY</h2>
                <p className="text-gray-950 text-sm sm:text-base">
                  Our commitment to excellence ensures that every tattoo we create meets the highest standards of artistry and precision.
                </p>

              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 flex-shrink-0 relative">
                <Image src="/images/ic-work.svg" alt="Hygiene" fill />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-[#002D62] mb-2">USING THE BEST & HYGIENIC EQUIPMENT</h2>
                <p className="text-gray-950 text-sm sm:text-base">
                  We maintain strict sterilization protocols and use only top-quality, medical-grade equipment for your safety and comfort.
                </p>

              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 flex-shrink-0 relative">
                <Image src="/images/ic-hand.svg" alt="Artist" fill />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-[#002D62] mb-2">EXPERIENCED ARTIST</h2>
                <p className="text-gray-950 text-sm sm:text-base">
                  Our talented artists bring years of expertise and passion to every project, ensuring your vision comes to life exactly as you imagined.
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Studio
