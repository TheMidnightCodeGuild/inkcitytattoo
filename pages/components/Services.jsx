import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './Footer'

const Services = () => {
  const services = [
    {
      title: "Customized Tattoo",
      description: "Get a unique, personalized tattoo design created just for you. Our skilled artists will work closely with you to bring your vision to life, ensuring every detail matches your style and preferences. We specialize in various styles from traditional to contemporary. Our experienced team takes pride in creating meaningful, high-quality artwork that tells your story. We use only the finest equipment and inks to ensure lasting results.",
      image: "/images/customizedtattoo.jpg"
    },
    {
      title: "Tattoo Removal",
      description: "Professional and safe tattoo removal services using state-of-the-art laser technology. Our experienced technicians will guide you through the removal process, explaining each step and ensuring your comfort throughout the treatment sessions. We use the latest PicoSure and Q-switched laser systems for optimal results with minimal scarring. Treatment plans are customized based on tattoo size, ink colors, and skin type.",
      image: "/images/tattooremoval.jpg"
    },
    {
      title: "Tattoo Consultation", 
      description: "Free consultation sessions with our expert artists to discuss your tattoo ideas, placement options, and design possibilities. We'll help you make informed decisions about size, style, and colors while addressing any concerns you may have. During your consultation, we'll review reference images, discuss your pain tolerance, and provide detailed pricing information. We also offer digital previews to help you visualize the final result.",
      image: "/images/tattoo-consultation.jpg"
    },
    {
      title: "Professional Piercings",
      description: "Safe and sterile body piercing services performed by certified professionals. We offer a wide range of piercing options and high-quality jewelry. Our team ensures proper aftercare guidance for optimal healing. We use surgical-grade materials and maintain strict sterilization protocols. All piercings are performed in a clean, private environment with single-use needles and tools.",
      image: "/images/tattoo-piercing.jpg"
    },
    {
      title: "Body Art",
      description: "Express yourself through various forms of body art beyond traditional tattoos. From scarification to dermal implants, our artists are skilled in multiple body modification techniques, always prioritizing safety and artistic excellence. We stay updated with the latest trends and techniques in body modification while maintaining strict health and safety standards. Each procedure is carefully planned and executed with precision.",
      image: "/images/body-art.jpg"
    },
    {
      title: "Tattoo Aftercare",
      description: "Comprehensive aftercare services and products to ensure your tattoo heals perfectly. We provide detailed instructions and premium aftercare products to maintain the vibrancy and longevity of your tattoo. Our aftercare packages include organic healing balms, antimicrobial soaps, and moisturizing lotions. We offer follow-up consultations to monitor healing progress and address any concerns.",
      image: "/images/tattoo-aftercare.png"
    },
    {
      title: "Coverup Tattoo",
      description: "Expert coverup services to transform old or unwanted tattoos into beautiful new designs. Our artists specialize in creating coverup pieces that completely mask the original while delivering stunning results. We use advanced techniques to work with existing ink and create seamless new artwork. Each coverup is carefully planned to ensure optimal coverage and artistic integrity.",
      image: "/images/tattoo-coverup.jpg"
    },
    {
      title: "Tattoo Training",
      description: "Professional tattoo training programs for aspiring artists. Learn from experienced professionals in a real studio environment. Courses cover everything from basic techniques to advanced skills and business practices. Our comprehensive curriculum includes hands-on practice, safety protocols, client communication, and portfolio development. We provide all necessary equipment and materials during training.",
      image: "/images/tattoo-training.png"
    },

    {
      title: "Temporary Tattoo",
      description: "High-quality temporary tattoo services perfect for special events or trying out designs. We use premium materials that look realistic and last several days. Great for events, photoshoots, or testing permanent tattoo ideas. Our temporary tattoos are created using skin-safe ingredients and can be customized to any size or style. We offer both traditional henna and modern temporary tattoo techniques.",
      image: "/images/temporary-tattoo.webp"
    }
  ]



  return (
    <>
      <Navbar />
      
      <div className="bg-white">
        {/* Banner Section */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white/80">Our Services</h1>
            <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-1.5 bg-[#F7A600] mx-auto"></div>
          </div>
          <Image
            src="/images/servicesbanner.png"
            alt="Services Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Services Section */}
        <div className="max-w-[90%] lg:max-w-[1300px] mx-auto px-4 py-8 sm:py-12 lg:py-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 items-center`}
            >
              <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] ">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-2 sm:space-y-3 lg:space-y-4 mt-4 md:mt-0">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">{service.title}</h2>
                <div className="w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-[#F7A600]"></div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services
