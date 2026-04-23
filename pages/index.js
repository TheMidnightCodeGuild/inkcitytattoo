import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Loader from "./components/Loader";
import Header from "./components/header";
import Footer from "./components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import SeoHead from "./components/SeoHead";
import { absoluteUrl } from "@/lib/seo";

const Index = () => {
  const [firebaseImages, setFirebaseImages] = useState([]);

  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const getTimestampFromFirebaseUrl = (url) => {
      try {
        const decodedUrl = decodeURIComponent(url);
        const match = decodedUrl.match(/images\/(\d+)_/);
        return match ? Number(match[1]) : 0;
      } catch {
        return 0;
      }
    };

    const fetchFirebaseImages = async () => {
      try {
        const response = await fetch("/api/images/viewAllImages");

        if (!response.ok) {
          throw new Error(`Failed to fetch images: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted && Array.isArray(data?.images)) {
          const sortedFirebaseImages = [...data.images].sort((a, b) => {
            const timestampA = getTimestampFromFirebaseUrl(a);
            const timestampB = getTimestampFromFirebaseUrl(b);
            return timestampB - timestampA;
          });
          setFirebaseImages(sortedFirebaseImages);
        }
      } catch (error) {
        console.error("Error fetching Firebase images:", error);
      }
    };

    fetchFirebaseImages();

    return () => {
      isMounted = false;
    };
  }, []);

  const swiperImages = [...new Set(firebaseImages)];

  return (
    <>
      <SeoHead
        title="Ink City Tattoo Studio Ujjain - Custom Tattoos, Piercing and Tattoo Training"
        description="Welcome to Ink City, Ujjain's trusted tattoo studio. Get custom tattoo designs, body piercing, safe tattoo removal, and hands-on tattoo training from experienced artists."
        canonicalPath="/"
        keywords="tattoo studio Ujjain, custom tattoo Ujjain, tattoo artist Ujjain, best tattoo Ujjain, tattoo removal, piercing, tattoo training, female tattoo artist Ujjain"
        image="/images/home-banner.png"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ink City Tattoo Studio",
              url: absoluteUrl("/"),
            }),
          }}
        />
    <link rel="icon" href="/images/favicon.png" type="image/png" />

      </Head>
      <Loader />
      <Header />
      {/* home section */}

      <section
        className="relative h-[70vh] lg:mt-0 mt-12 lg:h-[100vh] bg-cover bg-center bg-[url('/images/home-mobile.png')] lg:bg-[url('/images/home-banner.png')]"
      >
        {/* <div className="absolute inset-0 bg-black/60"></div> */}

        <div className="relative z-10 h-full flex items-center">
          <div className="lg:max-w-[1300px] mx-auto w-full px-4">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 py-20 lg:py-0">
              <p className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.4em] py-1.5 px-4 rounded-full text-white bg-white/30 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                Since 2015
              </p>

              <h1 className="font-urbanist text-3xl lg:text-6xl lg:leading-[60px] font-bold text-white">
                Ink Your Story with <br className="hidden sm:block" />
                <span className="text-theme2 font-bold">
                  Precision & Artistry
                </span>
              </h1>

              <div className="max-w-3xl">
                <p className="text-sm sm:text-base text-white italic leading-relaxed text-center lg:text-left">
                  Custom Tattoo Designs Crafted Just for You in Ujjain
                </p>
            
                <Link
                  href="/contactus"
                  className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm text-white font-medium text-base lg:px-6 lg:py-3 py-1 px-2 transition-colors duration-200 w-fit sm:w-fit justify-center border border-gray-50 mt-2"
                >
                  Contact Now
                  <span className="ml-2 w-8 h-8 rounded-full bg-theme2 flex items-center justify-center transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-theme1 transition-colors duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 18L18 6M18 6H10M18 6V14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
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
                alt="Inside Ink City Tattoo Studio Ujjain"
                fill
                className="w-full h-full object-cover rounded-[50px] md:rounded-[100px] border-[10px] border-[#002D62] scale-[0.90]"
                priority
              />
            </div>
            <div className="text-gray-950 space-y-4 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D62] text-center uppercase">
                About Ink City Tattoo Studio, Ujjain
              </h2>
              <div className="w-20 md:w-24 h-1 bg-theme1 mx-auto"></div>
              <p className="text-base md:text-lg text-center md:text-left">
                Welcome to Ink City, where artistry meets passion in the heart
                of Ujjain. With over a decade of experience in the tattoo
                industry, we&apos;ve built our reputation on creativity,
                precision, and dedication to our craft.
              </p>
              <p className="text-base md:text-lg text-center md:text-left">
                Our studio in Ujjain combines a sterile, professional
                environment with a warm, welcoming atmosphere. We believe that
                getting a tattoo should be a memorable experience, not just a
                service.
              </p>
              <p className="text-base md:text-lg text-center md:text-left">
                Every piece we create is custom-designed to tell your unique
                story. Whether it&apos;s your first tattoo or your fiftieth,
                we&apos;re here to bring your vision to life right here in
                Ujjain.
              </p>
              <div className="text-center md:text-left">
                <span className="block text-sm text-gray-700 font-bold mt-4">
                  Studio Location: Ujjain, Madhya Pradesh
                </span>
              </div>
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
            <h2 className="font-brandon lg:text-5xl lg:leading-[50px] text-4xl mb-4 font-bold text-theme3">
              Art That Stays With You Forever
            </h2>
            <p className="mb-4 text-theme3 text-lg leading-relaxed text-left lg:text-justify">
              At INK CITY TATTOO STUDIO in Ujjain, we transform your ideas into
              powerful, meaningful body art. Our artists blend creativity,
              precision, and years of experience to craft tattoos that are
              unique, expressive, and truly personal.
            </p>
            <p className="mb-4 text-theme3 text-lg leading-relaxed text-left lg:text-justify">
              From your first consultation to the final ink, we focus on
              hygiene, comfort, and perfection. Every design is created with
              attention to detail, ensuring you leave with a tattoo you&apos;ll
              be proud to wear for life.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-theme3">
              <div className="border border-theme3/20 px-4 py-3 rounded">
                <h3 className="font-semibold tracking-wide">
                  Custom Tattoo Designs
                </h3>
                <p className="text-sm opacity-90">
                  Unique artwork crafted just for you in Ujjain.
                </p>
              </div>
              <div className="border border-theme3/20 px-4 py-3 rounded">
                <h3 className="font-semibold tracking-wide">
                  High-Quality Ink and Equipment
                </h3>
                <p className="text-sm opacity-90">
                  We use only the finest equipment and inks to ensure lasting
                  results.
                </p>
              </div>
              <div className="border border-theme3/20 px-4 py-3 rounded">
                <h3 className="font-semibold tracking-wide">
                  Expert Artists and Consultation
                </h3>
                <p className="text-sm opacity-90">
                  Our artists are trained to listen, understand, and create the
                  perfect tattoo for you.
                </p>
              </div>
              <div className="border border-theme3/20 px-4 py-3 rounded">
                <h3 className="font-semibold tracking-wide">
                  Safe and Sterile Environment
                </h3>
                <p className="text-sm opacity-90">
                  We maintain strict sterilization protocols and use only
                  single-use needles and tools.
                </p>
              </div>
            </div>
            <div className="mt-6 text-left w-full">
              <span className="font-bold bg-yellow-50 px-4 py-2 rounded text-theme3">
                Studio Location:&nbsp;Ujjain, Madhya Pradesh
              </span>
            </div>
          </div>
          {/* RIGHT : IMAGE */}
          <div className="prem-reveal-r order-1 lg:order-2 flex justify-center lg:justify-end prem-in">
            <div>
              <Image
                className="w-[600px] h-[600px]"
                src="/images/img4.jpg"
                alt="Tattoo artist working in Ink City Studio Ujjain"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen px-4 sm:px-8 md:px-20 py-12 sm:py-16 md:py-20 bg-theme2 border-[10px] border-white rounded-3xl">
        <div className="lg:max-w-[1300px] mx-auto mt-20 sm:mt-0">
          <h2 className="text-[1.8rem] sm:text-3xl md:text-5xl font-bold text-white uppercase">
            Masterpieces in Ink
          </h2>
          <p className="text-gray-100 text-left sm:text-left text-base sm:text-lg mb-4 sm:mb-6">
            Explore Our Collection of Stunning Tattoo Artistry
          </p>
          <div className="w-20 md:w-24 h-1.5 bg-theme1 mx-auto sm:mx-0 mb-8 sm:mb-12"></div>
          {swiperImages.length > 0 ? (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={15}
              slidesPerView={1}
              loop={true}
              allowTouchMove={true}
              simulateTouch={true}
              grabCursor={true}
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
              {swiperImages.map((image, index) => (
                <SwiperSlide key={`gallery-image-${index}`}>
                  <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] rounded-lg overflow-hidden group">
                    <Image
                      src={image}
                      alt={`Tattoo Gallery Image ${index + 1} - Custom tattoo work by Ink City Ujjain`}
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
                alt="Tattoo Studio Interior - Ink City Ujjain"
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
                  Where Body Meets Art in Ujjain
                </h2>
                <p className="text-gray-900 mt-4 sm:mt-6 text-sm sm:text-base">
                  Welcome to Ink City, where creativity knows no bounds. Our
                  studio is more than just a place to get tattooed - it&apos;s a
                  creative sanctuary in Ujjain where your ideas transform into
                  stunning works of art.
                </p>
                <div className="w-20 md:w-24 h-1 bg-theme1 mx-auto mt-10 sm:mt-5"></div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <Image
                    src="/images/ic-bird.svg"
                    alt="Impeccable Tattoo Quality"
                    fill
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#002D62] mb-2">
                    IMPECCABLE TATTOO QUALITY
                  </h3>
                  <p className="text-gray-950 text-sm sm:text-base">
                    Our commitment to excellence ensures that every tattoo we
                    create meets the highest standards of artistry and
                    precision.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <Image
                    src="/images/ic-work.svg"
                    alt="Top-Quality and Hygienic Equipment"
                    fill
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#002D62] mb-2">
                    USING THE BEST &amp; HYGIENIC EQUIPMENT
                  </h3>
                  <p className="text-gray-950 text-sm sm:text-base">
                    We maintain strict sterilization protocols and use only
                    top-quality, medical-grade equipment for your safety and
                    comfort.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <Image
                    src="/images/ic-hand.svg"
                    alt="Tattoo Artist Expertise"
                    fill
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#002D62] mb-2">
                    EXPERIENCED ARTIST
                  </h3>
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
            <p className="uppercase tracking-[0.2rem] text-sm font-semibold text-theme1 mb-2">
              Beyond Ink
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D62] uppercase">
              Specialized Services in Ujjain
            </h2>
            <p className="text-gray-700 mt-3 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl">
              Expert care beyond tattoos for every stage of your journey—now in
              Ujjain.
            </p>
            <div className="w-20 md:w-24 h-1 bg-theme1 mb-8 sm:mb-10 mx-auto sm:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Tattoo Removal",
                desc: "Safe and effective sessions to lighten or fully remove unwanted tattoos in Ujjain.",
              },
              {
                title: "Piercing",
                desc: "Professional body piercing with hygienic methods and premium-quality tools, right in Ujjain.",
              },
              {
                title: "Tattoo Training",
                desc: "Hands-on training in Ujjain designed for aspiring artists to build real studio skills.",
              },
              {
                title: "Female Tattoo Artist",
                desc: "Comfort-focused sessions in Ujjain with an experienced female artist for personalized work.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group bg-white border border-[#002D62]/15 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#002D62] text-white flex items-center justify-center text-sm font-bold mb-4 group-hover:bg-theme1 transition-colors duration-300">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#002D62] mb-3 group-hover:text-[#001f45] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {service.desc}
                </p>
                <div className="w-0 group-hover:w-full h-[2px] bg-theme1 mt-4 transition-all duration-300"></div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block font-bold bg-yellow-100 px-6 py-1 rounded text-[#002D62]">
              Ink City Tattoo Studio • Ujjain, Madhya Pradesh
            </span>
          </div>
        </div>
      </section>

      <section className="bg-theme2 flex justify-center items-center min-h-screen px-4 py-10 border-[10px] rounded-3xl  border-white">
        <div className="lg:max-w-[1300px] w-full text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-8">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-5">
            Hear from those who trusted us with their ink stories in Ujjain!
          </p>
          <div className="w-20 md:w-24 h-1.5 bg-theme1 mx-auto sm:mx-0 mb-8 sm:mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Incredible artistry and attention to detail. The artists here in Ujjain truly understand how to bring your vision to life. My sleeve turned out better than I could have ever imagined!",
                name: "Mr. Ramesh Nair",
              },
              {
                text: "Such a professional and clean studio in Ujjain. The atmosphere is welcoming, and they made me feel completely at ease during my first tattoo experience. Highly recommend!",
                name: "Mrs. Sushma Naik",
              },
              {
                text: "Outstanding custom work! They took my rough idea and transformed it into an absolute masterpiece right here in Ujjain. The healing process was smooth, and the aftercare advice was spot-on.",
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
                  aria-hidden="true"
                >
                  <title>Client Testimonial Quote</title>
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
          <div className="mt-10 text-center">
            <span className="inline-block font-bold bg-white text-theme2 px-6 py-1 rounded shadow">
              Visit Us in Ujjain: Ink City Tattoo Studio
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
