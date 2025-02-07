import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './Footer'

const Services = () => {
  const services = [
    {
      title: "Customized Tattoo",
      description: "Get a unique, personalized tattoo design created just for you. Our skilled artists will work closely with you to bring your vision to life, ensuring every detail matches your style and preferences. We specialize in various styles from traditional to contemporary.",
      image: "/images/custom-tattoo.jpg"
    },
    {
      title: "Tattoo Removal",
      description: "Professional and safe tattoo removal services using state-of-the-art laser technology. Our experienced technicians will guide you through the removal process, explaining each step and ensuring your comfort throughout the treatment sessions.",
      image: "/images/tattoo-removal.jpg"
    },
    {
      title: "Tattoo Consultation",
      description: "Free consultation sessions with our expert artists to discuss your tattoo ideas, placement options, and design possibilities. We'll help you make informed decisions about size, style, and colors while addressing any concerns you may have.",
      image: "/images/consultation.jpg"
    },
    {
      title: "Professional Piercings",
      description: "Safe and sterile body piercing services performed by certified professionals. We offer a wide range of piercing options and high-quality jewelry. Our team ensures proper aftercare guidance for optimal healing.",
      image: "/images/piercings.jpg"
    },
    {
      title: "Body Art",
      description: "Express yourself through various forms of body art beyond traditional tattoos. From scarification to dermal implants, our artists are skilled in multiple body modification techniques, always prioritizing safety and artistic excellence.",
      image: "/images/body-art.jpg"
    },
    {
      title: "Tattoo Aftercare",
      description: "Comprehensive aftercare services and products to ensure your tattoo heals perfectly. We provide detailed instructions and premium aftercare products to maintain the vibrancy and longevity of your tattoo.",
      image: "/images/aftercare.jpg"
    },
    {
      title: "Coverup Tattoo",
      description: "Expert coverup services to transform old or unwanted tattoos into beautiful new designs. Our artists specialize in creating coverup pieces that completely mask the original while delivering stunning results.",
      image: "/images/coverup.jpg"
    },
    {
      title: "Tattoo Training",
      description: "Professional tattoo training programs for aspiring artists. Learn from experienced professionals in a real studio environment. Courses cover everything from basic techniques to advanced skills and business practices.",
      image: "/images/training.jpg"
    },
    {
      title: "Temporary Tattoo",
      description: "High-quality temporary tattoo services perfect for special events or trying out designs. We use premium materials that look realistic and last several days. Great for events, photoshoots, or testing permanent tattoo ideas.",
      image: "/images/temporary.jpg"
    }
  ]

  return (
    <>
      <Navbar />
      
      <div className="bg-white">
        {/* Banner Section */}
        <div className="relative h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 text-center text-white bg-">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <div className="w-24 h-1.5 bg-[#F7A600] mx-auto"></div>
          </div>
          <Image
            src="/images/servicesbanner.png"
            alt="Services Banner"
            fill
            className="object-cover scale-[0.8] " 
            priority
          />
        </div>



        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-20 items-center`}
            >
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                <div className="w-20 h-1 bg-[#F7A600]"></div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className="bg-[#F7A600] text-black px-6 py-2 rounded-full hover:bg-[#E69500] transition-colors duration-300">
                  Learn More
                </button>
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
