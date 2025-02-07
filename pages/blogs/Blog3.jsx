import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

const Blog3 = () => {
  return (
    <>
      <Head>
        <title>Tattoo Aftercare Guide - Essential Care Tips | InkCity Tattoo Studio</title>
        <meta name="description" content="Complete guide to tattoo aftercare and healing. Learn how to properly care for your new tattoo with expert tips from InkCity Tattoo Studio in Ujjain." />
        <meta name="keywords" content="tattoo aftercare, tattoo healing, tattoo care tips, InkCity Tattoo Studio, Ujjain tattoo care" />
        <meta property="og:title" content="Tattoo Aftercare Guide - InkCity Tattoo Studio Ujjain" />
        <meta property="og:description" content="Essential aftercare tips for your new tattoo. Expert advice from Ujjain's premier tattoo studio." />
        <meta property="og:image" content="/images/img16.jpg" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://inkcity.com/blogs/Blog3" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-[#0039a6] text-white">
        {/* Hero Section */}
        <div className="relative h-[50vh] w-full">
          <Image
            src="/images/img16.jpg"
            alt="Tattoo Aftercare and Healing Process"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              Complete Tattoo Aftercare Guide
            </h1>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <article className="prose prose-lg prose-invert">
            <div className="mb-6 text-sm">
              <time dateTime="2023-11-25">Published: November 25, 2023</time>
              <span className="mx-2">|</span>
              <span>Reading time: 6 minutes</span>
            </div>

            <h2 className="text-3xl font-bold mb-6">Essential Aftercare for Your New Tattoo</h2>
            
            <p className="mb-6">
              Proper aftercare is crucial for ensuring your tattoo heals beautifully and remains vibrant for years to come. Follow these expert guidelines from InkCity Tattoo Studio to protect your investment in body art.
            </p>

            <h3 className="text-2xl font-bold mb-4">First 24 Hours</h3>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Keep the bandage on for the recommended time (usually 2-4 hours)</li>
              <li>Wash hands thoroughly before touching the tattoo</li>
              <li>Clean the area gently with mild, fragrance-free soap</li>
              <li>Pat dry with a clean paper towel</li>
              <li>Apply a thin layer of recommended aftercare ointment</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">First Week Care</h3>
            
            <p className="mb-6">
              During the initial healing phase, follow these essential steps:
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>Wash the tattoo 2-3 times daily</li>
              <li>Apply moisturizer as needed</li>
              <li>Avoid direct sunlight</li>
              <li>Don't swim or soak in water</li>
              <li>Wear loose, clean clothing</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Long-term Care Tips</h3>
            
            <p className="mb-6">
              To maintain your tattoo's appearance over time:
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>Use high-SPF sunscreen when exposed to sunlight</li>
              <li>Keep the skin moisturized</li>
              <li>Avoid harsh chemicals on the tattooed area</li>
              <li>Touch-ups may be needed every few years</li>
            </ul>

            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-3">Warning Signs</h4>
              <p>
                Contact your artist or healthcare provider if you notice:
              </p>
              <ul className="mt-3">
                <li>Excessive redness or swelling</li>
                <li>Unusual discharge or odor</li>
                <li>Severe pain or burning</li>
                <li>Fever or chills</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4">Products to Avoid</h3>
            
            <p className="mb-6">
              During the healing process, avoid:
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>Alcohol-based products</li>
              <li>Scented lotions or soaps</li>
              <li>Petroleum-based products</li>
              <li>Abrasive cleaning materials</li>
            </ul>

            <div className="mt-8 border-t border-gray-600 pt-6">
              <p className="text-sm">
                Tags: tattoo aftercare, healing process, tattoo care tips, skin care, tattoo maintenance, InkCity Tattoo Studio
              </p>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog3
