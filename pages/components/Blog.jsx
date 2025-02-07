import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
const Blog = () => {
  return (
    <>

    <Navbar/>
    <div className="min-h-screen bg-[#0039a6] text-white">
      {/* Banner Section */}
      <div className="relative h-[50vh] w-full">

        <Image
          src="/images/img30.jpg"
          alt="Blog Banner"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">Our Blog</h1>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden border-2 border-black">
            <div className="relative h-64">
              <Image
                src="/images/img31.jpg"
                alt="Blog 1"
                fill
                className="object-cover"



              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">The Art of Tattooing</h3>
              <p className="text-black mb-4">Discover the ancient history and modern techniques of tattoo artistry...</p>
              <Link href="/blogs/Blog1" className="inline-block bg-[#F7A600] text-black px-4 py-2 rounded-full hover:bg-[#E69500] transition-colors">


                Read More
              </Link>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden border-2 border-black">
            <div className="relative h-64">
              <Image
                src="/images/img14.jpg"
                alt="Blog 2"
                fill
                className="object-cover"


              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Choosing Your First Tattoo</h3>
              <p className="text-black mb-4">Tips and considerations for selecting your perfect first tattoo design...</p>
              <Link href="/blogs/Blog2" className="inline-block bg-[#F7A600] text-black px-4 py-2 rounded-full hover:bg-[#E69500] transition-colors">


                Read More
              </Link>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden border-2 border-black">
            <div className="relative h-64">
              <Image
                src="/images/img16.jpg"
                alt="Blog 3"
                fill
                className="object-cover"


              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Tattoo Aftercare Guide</h3>
              <p className="text-black mb-4">Essential tips for taking care of your new tattoo and ensuring proper healing...</p>

              <Link href="/blogs/Blog3" className="inline-block bg-[#F7A600] text-black px-4 py-2 rounded-full hover:bg-[#E69500] transition-colors">
                Read More
              </Link>
            </div>


          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}


export default Blog
