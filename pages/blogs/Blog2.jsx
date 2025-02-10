import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

const Blog2 = () => {
  return (
    <>
      <Head>
        <title>Choosing Your First Tattoo - Tips & Design Guide | InkCity Tattoo Studio</title>
        <meta name="description" content="Expert guidance on choosing your first tattoo design. Learn about placement, styles, and what to consider before getting inked at InkCity Tattoo Studio in Ujjain." />
        <meta name="keywords" content="first tattoo, tattoo design guide, tattoo placement, tattoo styles, InkCity Tattoo Studio, Ujjain tattoo" />
        <meta property="og:title" content="First Tattoo Guide - InkCity Tattoo Studio Ujjain" />
        <meta property="og:description" content="Everything you need to know about choosing your first tattoo. Expert advice from Ujjain's premier tattoo studio." />
        <meta property="og:image" content="/images/img14.jpg" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://inkcity.com/blogs/Blog2" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-[#0039a6] text-white">
        {/* Hero Section */}
        <div className="relative h-[50vh] w-full">
          <Image
            src="/images/img14.jpg"
            alt="First Tattoo Design Consultation at InkCity Studio"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              Choosing Your First Tattoo: A Complete Guide
            </h1>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <article className="prose prose-lg prose-invert">
            <div className="mb-6 text-sm">
              <time dateTime="2023-11-20">Published: November 20, 2023</time>
              <span className="mx-2">|</span>
              <span>Reading time: 7 minutes</span>
            </div>

            <h2 className="text-3xl font-bold mb-6">Essential Considerations for Your First Tattoo</h2>
            
            <p className="mb-6">
              Getting your first tattoo is an exciting and meaningful experience. At InkCity Tattoo Studio, we understand the importance of making the right choice for your permanent body art. Here's our comprehensive guide to help you make an informed decision.
            </p>

            <h3 className="text-2xl font-bold mb-4">1. Design Selection</h3>
            
            <p className="mb-6">
              Choose a design that holds personal meaning and reflects your personality. Consider these factors:
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>Personal significance and symbolism</li>
              <li>Timeless appeal vs. trending designs</li>
              <li>Size and scalability</li>
              <li>Color scheme preferences</li>
              <li>Style compatibility with your aesthetic</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">2. Placement Considerations</h3>
            
            <p className="mb-6">
              The location of your tattoo affects both its visibility and pain level during the process. Popular first-tattoo spots include:
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>Upper arm or forearm</li>
              <li>Shoulder blade</li>
              <li>Calf or ankle</li>
              <li>Wrist</li>
              <li>Upper back</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">3. Pain Management Expectations</h3>
            
            <p className="mb-6">
              Different body parts have varying pain levels during tattooing. We'll guide you through the process and ensure your comfort throughout the session. Remember, the experience varies for each individual.
            </p>

            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-3">Ready to Start Your Tattoo Journey?</h4>
              <p>
                Book a consultation at InkCity Tattoo Studio - Ujjain's trusted name in tattooing:
              </p>
              <ul className="mt-3">
                <li>📞 Contact: +9195163-62594</li>
                <li>📧 Email: inkcitythetattoostudio22@gmail.com</li>
                <li>📍 Location: Mini chopati ki gali, near gurudwara, Freeganj, Ujjain, Madhya Pradesh 456010</li>
                <li>⏰ Hours: Monday-Saturday, 10:00 AM - 8:00 PM</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4">4. Preparation Tips</h3>
            
            <p className="mb-6">
              Before your appointment:
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>Get plenty of rest</li>
              <li>Stay hydrated</li>
              <li>Avoid alcohol and blood thinners</li>
              <li>Eat a good meal beforehand</li>
              <li>Wear comfortable clothing</li>
            </ul>

            <div className="mt-8 border-t border-gray-600 pt-6">
              <p className="text-sm">
                Tags: first tattoo, tattoo design, tattoo placement, pain management, tattoo preparation, Ujjain tattoo studio
              </p>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog2
