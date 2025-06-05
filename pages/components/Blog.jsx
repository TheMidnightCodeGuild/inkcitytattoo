import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import { db } from "@/lib/firebase"
import { collection, getDocs, orderBy, query } from "firebase/firestore"

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs');
        const q = query(blogsCollection, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const blogsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setBlogs(blogsData);
      } catch (err) {
        setError('Failed to fetch blogs');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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

        {/* Static Blog Cards Section */}
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

        {/* Dynamic Blog Posts Section */}
        {loading ? (
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-56 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-7 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map(blog => (
                <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-black">{blog.title}</h3>
                    <p className="text-gray-600 mb-4">{blog.content.substring(0, 150)}...</p>
                    <Link href={`/blog/${blog.id}`} className="inline-block bg-[#F7A600] text-black px-4 py-2 rounded-full hover:bg-[#E69500] transition-colors">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  )
}

export default Blog
