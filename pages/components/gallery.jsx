import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

const Gallery = () => {
  const images = [
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg',
    '/images/img7.jpg',
    '/images/img8.jpg',
    '/images/img9.jpg',
    '/images/img10.jpg',
    '/images/img11.jpg',
    '/images/img12.jpg',
    "/images/img13.jpg",
    "/images/img14.jpg",
    "/images/img15.jpg",
    "/images/img16.jpg",
    "/images/img17.jpg",
    "/images/img18.jpg",
    "/images/img19.jpg",
    "/images/img20.jpg",
    "/images/img21.jpg",
    "/images/img22.jpg",
    "/images/img23.jpg",
    "/images/img24.jpg",
    "/images/img25.jpg",
  ]

  return (
    <section className="min-h-screen px-4 sm:px-8 md:px-20 py-12 sm:py-16 md:py-20 bg-[#0039a6] border-[10px] border-white rounded-3xl">
      <div className="lg:max-w-[1300px] mx-auto mt-20 sm:mt-0">
        <h2 className="text-[1.8rem] sm:text-3xl md:text-5xl font-bold text-white uppercase">
          Masterpieces in Ink
        </h2>
        <p className="text-gray-100 text-left sm:text-left text-base sm:text-lg mb-4 sm:mb-6">Explore Our Collection of Stunning Tattoo Artistry</p>
        <div className="w-20 md:w-24 h-1.5 bg-[#F7A600] mx-auto sm:mx-0 mb-8 sm:mb-12"></div>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: 15
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 25
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            },
          }}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={`gallery-image-${index}`}>
              <div className="relative h-[500px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] rounded-lg overflow-hidden group">
                <Image
                  src={image}
                  alt={`Tattoo Gallery Image ${index + 1}`}
                  fill
                  className="object-cover rounded-[15px] sm:rounded-[30px] "
                  priority={index <= 2}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Gallery
