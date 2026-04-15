import React, { useEffect } from "react";
import Image from "next/image";
import Loader from "./components/Loader";
import Header from "./components/header";
import Footer from "./components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const Index = () => {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  const images = [
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
    "/images/img9.jpg",
    "/images/img10.jpg",
    "/images/img11.jpg",
    "/images/img12.jpg",
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
    "/images/img26.jpg",
    "/images/img27.jpg",
    "/images/img28.jpg",
    "/images/img29.jpg",
    "/images/img30.jpg",
    "/images/img31.jpg",
    "/images/img32.jpg",
    "/images/img33.jpg",
    "/images/img34.jpg",
    "/images/img35.jpg",
    "/images/img36.jpg",
    "/images/img37.jpg",
    "/images/img38.jpg",
    "/images/img39.jpg",
    "/images/img40.jpg",
    "/images/img41.jpg",
    "/images/img42.jpg",
    "/images/img43.jpg",
    "/images/img44.jpg",
    "/images/img45.jpg",
    "/images/img46.jpg",
    "/images/img47.jpg",
    "/images/img48.jpg",
    "/images/img49.jpg",
    "/images/img50.jpg",
    "/images/img51.jpg",
    "/images/img52.jpg",
    "/images/img53.jpg",
    "/images/img54.jpg",
  ];

  return (
    <>
      <Loader />
      <Header />
      {/* home section */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[80vh] lg:min-h-[100vh] mt-20">
          {/* BACKGROUND IMAGE */}
          <Image
            src="/images/home-banner.png"
            alt="Tattoo Banner"
            fill
            priority
            className="object-fil object-center"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 ">
            <div className="max-w-xl text-white text-left mt-44">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Ink Your Story with <br />
                <span className="text-orange-500">Precision & Artistry</span>
              </h1>

              <p className="text-gray-300 mb-6">
                Custom Tattoo Designs Crafted Just for You
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/enquire-now"
                  className="bg-orange-500 px-6 py-3 rounded-lg font-medium"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/contact"
                  className="border border-white/40 px-6 py-3 rounded-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen px-4 sm:px-8 md:px-20 py-24 md:py-20 bg-[#ffffff] flex items-center justify-center">
        <div className="lg:max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/images/img1.jpg"
                alt="Tattoo Studio"
                fill
                className="w-full h-full object-cover rounded-[50px] md:rounded-[100px] border-[10px] border-[#002D62] scale-[0.90]"
                priority
              />
            </div>
            <div className="text-gray-950 space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D62] text-center uppercase">
                About Ink City
              </h1>
              <div className="w-20 md:w-24 h-1 bg-[#E69500] mx-auto"></div>
              <p className="text-base md:text-lg text-center md:text-left">
                Welcome to Ink City, where artistry meets passion. With over a
                decade of experience in the tattoo industry, we&apos;ve built
                our reputation on creativity, precision, and dedication to our
                craft.
              </p>
              <p className="text-base md:text-lg text-center md:text-left">
                Our studio combines a sterile, professional environment with a
                warm, welcoming atmosphere. We believe that getting a tattoo
                should be a memorable experience, not just a service.
              </p>
              <p className="text-base md:text-lg text-center md:text-left">
                Every piece we create is custom-designed to tell your unique
                story. Whether it&apos;s your first tattoo or your fiftieth,
                we&apos;re here to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-theme4 py-12">
        <div className="lg:max-w-[1400px] mx-auto flex px-4 lg:flex-row flex-col items-center gap-16">
          {/* LEFT : CONTENT */}
          <div className="md:w-1/2 flex flex-col lg:items-start lg:text-left items-center text-center">
            <span className="block h-1 w-16 bg-theme3 mb-4"></span>
            <p className="uppercase font-brandon tracking-[0.2rem] text-sm text-theme3 font-semibold mb-2">
              Why Choose Us
            </p>
            <h1 className="font-brandon lg:text-5xl lg:leading-[50px] text-4xl mb-4 font-bold text-theme3">
              Art That Stays With You Forever
            </h1>
            <p className="mb-4 text-theme3 text-lg leading-relaxed text-left lg:text-justify">
              At INK CITY TATTOO STUDIO, we transform your ideas into powerful,
              meaningful body art. Our artists blend creativity, precision, and
              years of experience to craft tattoos that are unique, expressive,
              and truly personal.
            </p>
            <p className="mb-4 text-theme3 text-lg leading-relaxed text-left lg:text-justify">
              From your first consultation to the final ink, we focus on
              hygiene, comfort, and perfection. Every design is created with
              attention to detail, ensuring you leave with a tattoo you&apos;ll
              be proud to wear for life.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-theme3">
              <div className="border border-theme3/20 px-4 py-3 rounded">
                <h4 className="font-semibold tracking-wide">
                  Custom Tattoo Designs
                </h4>
                <p className="text-sm opacity-90">
                  Unique artwork crafted just for you.
                </p>
              </div>
              <div className="border border-theme3/20 px-4 py-3 rounded">
                <h4 className="font-semibold tracking-wide">
                  High-Quality Ink and Equipment
                </h4>
                <p className="text-sm opacity-90">
                  We use only the finest equipment and inks to ensure lasting
                  results.
                </p>
              </div>
              <div className="border border-theme3/20 px-4 py-3 rounded">
                <h4 className="font-semibold tracking-wide">
                  Expert Artists and Consultation
                </h4>
                <p className="text-sm opacity-90">
                  Our artists are trained to listen, understand, and create the
                  perfect tattoo for you.
                </p>
              </div>
              <div className="border border-theme3/20 px-4 py-3 rounded">
                <h4 className="font-semibold tracking-wide">
                  Safe and Sterile Environment
                </h4>
                <p className="text-sm opacity-90">
                  We maintain strict sterilization protocols and use only
                  single-use needles and tools.
                </p>
              </div>
            </div>
          </div>
          {/* RIGHT : IMAGE */}
          <div className="prem-reveal-r order-1 lg:order-2 flex justify-center lg:justify-end prem-in">
            <div>
              <Image
                className="w-[600px] h-[600px]"
                src="/images/img4.jpg"
                alt="tattoo artist work"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen px-4 sm:px-8 md:px-20 py-12 sm:py-16 md:py-20 bg-[#F97316] border-[10px] border-white rounded-3xl">
        <div className="lg:max-w-[1300px] mx-auto mt-20 sm:mt-0">
          <h2 className="text-[1.8rem] sm:text-3xl md:text-5xl font-bold text-white uppercase">
            Masterpieces in Ink
          </h2>
          <p className="text-gray-100 text-left sm:text-left text-base sm:text-lg mb-4 sm:mb-6">
            Explore Our Collection of Stunning Tattoo Artistry
          </p>
          <div className="w-20 md:w-24 h-1.5 bg-[#F7A600] mx-auto sm:mx-0 mb-8 sm:mb-12"></div>
          {images.length > 0 ? (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={15}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="w-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={`gallery-image-${index}`}>
                  <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] rounded-lg overflow-hidden group">
                    <Image
                      src={image}
                      alt={`Tattoo Gallery Image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-[15px] sm:rounded-[30px]"
                      priority={index <= 2}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center text-white mt-12">
              <p>No gallery images found.</p>
            </div>
          )}
        </div>
      </section>

      <section className="min-h-screen px-4 sm:px-8 md:px-20 py-16 sm:py-20 md:py-24 bg-[#ffffff]">
        <div className="lg:max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="relative h-[250px] xs:h-[300px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden mt-6">
              <Image
                src="/images/studio4.jpg"
                alt="Studio Interior"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="text-gray-300 space-y-6 sm:space-y-8 md:space-y-10 mt-6 md:mt-5">
              <div className="text-center md:text-left">
                <p className="text-gray-900 uppercase tracking-wider mb-2 text-sm sm:text-base">
                  Our Studio
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#002D62] uppercase">
                  Where Body Meets Art
                </h2>
                <p className="text-gray-900 mt-4 sm:mt-6 text-sm sm:text-base">
                  Welcome to Ink City, where creativity knows no bounds. Our
                  studio is more than just a place to get tattooed - it&apos;s a
                  creative sanctuary where your ideas transform into stunning
                  works of art.
                </p>
                <div className="w-20 md:w-24 h-1 bg-[#E69500] mx-auto mt-10 sm:mt-5"></div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <Image src="/images/ic-bird.svg" alt="Tattoo Quality" fill />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-[#002D62] mb-2">
                    IMPECCABLE TATTOO QUALITY
                  </h2>
                  <p className="text-gray-950 text-sm sm:text-base">
                    Our commitment to excellence ensures that every tattoo we
                    create meets the highest standards of artistry and
                    precision.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <Image src="/images/ic-work.svg" alt="Hygiene" fill />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-[#002D62] mb-2">
                    USING THE BEST & HYGIENIC EQUIPMENT
                  </h2>
                  <p className="text-gray-950 text-sm sm:text-base">
                    We maintain strict sterilization protocols and use only
                    top-quality, medical-grade equipment for your safety and
                    comfort.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <Image src="/images/ic-hand.svg" alt="Artist" fill />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-[#002D62] mb-2">
                    EXPERIENCED ARTIST
                  </h2>
                  <p className="text-gray-950 text-sm sm:text-base">
                    Our talented artists bring years of expertise and passion to
                    every project, ensuring your vision comes to life exactly as
                    you imagined.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-20 py-14 sm:py-16 md:py-20 bg-gradient-to-b from-[#f8fbff] to-white">
        <div className="lg:max-w-[1300px] mx-auto">
          <div className="text-center sm:text-left">
            <p className="uppercase tracking-[0.2rem] text-sm font-semibold text-[#E69500] mb-2">
              Beyond Ink
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D62] uppercase">
              Specialized Services
            </h2>
            <p className="text-gray-700 mt-3 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl">
              Expert care beyond tattoos for every stage of your journey.
            </p>
            <div className="w-20 md:w-24 h-1 bg-[#E69500] mb-8 sm:mb-10 mx-auto sm:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Tattoo Removal",
                desc: "Safe and effective sessions to lighten or fully remove unwanted tattoos.",
              },
              {
                title: "Piercing",
                desc: "Professional body piercing with hygienic methods and premium-quality tools.",
              },
              {
                title: "Tattoo Training",
                desc: "Hands-on training designed for aspiring artists to build real studio skills.",
              },
              {
                title: "Female Tattoo Artist",
                desc: "Comfort-focused sessions with an experienced female artist for personalized work.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group bg-white border border-[#002D62]/15 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#002D62] text-white flex items-center justify-center text-sm font-bold mb-4 group-hover:bg-[#E69500] transition-colors duration-300">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#002D62] mb-3 group-hover:text-[#001f45] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {service.desc}
                </p>
                <div className="w-0 group-hover:w-full h-[2px] bg-[#E69500] mt-4 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F97316] flex justify-center items-center min-h-screen px-4 py-10 border-[10px] rounded-3xl  border-white">
        <div className="lg:max-w-[1300px] w-full text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-8">
            What Our Clients Say
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-5">
            Hear from those who trusted us with their ink stories!
          </p>
          <div className="w-20 md:w-24 h-1.5 bg-[#F7A600] mx-auto sm:mx-0 mb-8 sm:mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Incredible artistry and attention to detail. The artists here truly understand how to bring your vision to life. My sleeve turned out better than I could have ever imagined!",
                name: "Mr. Ramesh Nair",
              },
              {
                text: "Such a professional and clean studio. The atmosphere is welcoming, and they made me feel completely at ease during my first tattoo experience. Highly recommend!",
                name: "Mrs. Sushma Naik",
              },
              {
                text: "Outstanding custom work! They took my rough idea and transformed it into an absolute masterpiece. The healing process was smooth, and the aftercare advice was spot-on.",
                name: "Rohit Sharma",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 px-5 sm:px-6 py-16 rounded-xl shadow-md border-4 border-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-6 h-6 sm:w-8 sm:h-8 text-black mb-4 mx-auto"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="text-sm sm:text-base leading-relaxed mb-2">
                  {testimonial.text}
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-800">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
