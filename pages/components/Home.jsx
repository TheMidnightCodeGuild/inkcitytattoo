import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    return () => window.removeEventListener('resize', setVH);
  }, []);

  return (
    <div className="h-[calc(var(--vh,1vh)*100)] overflow-hidden relative flex items-center px-2 xs:px-4 sm:px-8 md:px-20 py-4 xs:py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-900 to-black border-r-[10px] border-l-[10px] border-b-[10px] border-[#ffffff] rounded-r-[30px] rounded-l-[30px] 
      rounded-b-[30px] rounded-t-[0px]">
      <div className="absolute sm:top-[4%] top-[16%] left-1/2 transform -translate-x-1/2 z-20 w-[80%] sm:w-[450px]">
        <Image src="/images/baba1.png" alt="Ink City" width={400} height={200} className="mx-auto" />
      </div>
      <div className="absolute inset-0 z-0">


        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/home1.jpg"
                alt="Background slide 1"
                fill
                className="object-cover opacity-60"
                priority
              />
            </div>
            <div className="absolute z-10 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] mx-auto px-2 xs:px-4 sm:px-8 md:px-0 top-1/2 mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-center">
                <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-light mb-2 xs:mb-3 sm:mb-6 text-white capitalize sliderhome">
                  We celebrate tattoos and fun...
                </h1>
                <Link href="#gallery" className="relative inline-flex items-center justify-center px-4 xs:px-6 py-3 xs:py-3 overflow-hidden text-[16px] xs:text-[16px] text-white bg-[#E69500] rounded-full group">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black text-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="relative">Our Gallery</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/home2.jpg"
                alt="Background slide 2"
                fill
                className="object-cover opacity-60 sliderhome"
              />
            </div>
            <div className="absolute z-10 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] mx-auto px-2 xs:px-4 sm:px-8 md:px-0 top-1/2 mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-center">

                <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-light mb-2 xs:mb-3 sm:mb-6 text-white capitalize sliderhome">
                  Ink City-Master of the Ink
                </h1>
                <Link href="#gallery" className="relative inline-flex items-center justify-center px-4 xs:px-6 py-3 xs:py-3 overflow-hidden text-[16px] xs:text-[16px] text-white bg-[#E69500] rounded-full group">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black text-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="relative">Our Gallery</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <video
              className="w-full h-full object-cover opacity-60 sliderhome"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/images/home3.mp4" type="video/mp4" />
            </video>
            <div className="absolute z-10 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] mx-auto px-2 xs:px-4 sm:px-8 md:px-0 top-1/2 mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-center">
                <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-light mb-2 xs:mb-3 sm:mb-6 text-white capitalize sliderhome">
                  Tattoos are my life choice
                </h1>
                <Link href="#gallery" className="relative inline-flex items-center justify-center px-4 xs:px-6 py-3 xs:py-3 overflow-hidden text-[16px] xs:text-[16px] text-white bg-[#E69500] rounded-full group">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black text-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="relative">Our Gallery</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="relative z-10 w-full max-w-2xl mx-auto px-2 xs:px-4 sm:px-8 md:px-0 mt-48 xs:mt-56 sm:mt-64">
        <div className="flex justify-center">
        </div>
      </div>
    </div>
  )
}

export default Home
