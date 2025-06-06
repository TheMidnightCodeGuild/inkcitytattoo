import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function SingleBlog() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;

      try {
        const blogDoc = doc(db, 'blogs', id);
        const blogSnapshot = await getDoc(blogDoc);

        if (!blogSnapshot.exists()) {
          setError('Blog post not found');
          return;
        }

        setBlog({
          id: blogSnapshot.id,
          ...blogSnapshot.data()
        });
      } catch (err) {
        setError('Failed to fetch blog post');
        console.error('Error fetching blog:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="animate-pulse space-y-4 sm:space-y-8">
            <div className="h-8 sm:h-12 bg-gray-200 rounded-lg w-3/4"></div>
            <div className="h-4 sm:h-6 bg-gray-200 rounded-lg w-1/4"></div>
            <div className="h-[300px] sm:h-[500px] bg-gray-200 rounded-2xl"></div>
            <div className="space-y-4 sm:space-y-6">
              <div className="h-4 sm:h-6 bg-gray-200 rounded-lg"></div>
              <div className="h-4 sm:h-6 bg-gray-200 rounded-lg"></div>
              <div className="h-4 sm:h-6 bg-gray-200 rounded-lg w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4">
          <div className="text-red-500 text-xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">{error}</div>
          <Link 
            href="/blogs" 
            className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-gray-50 mt-16 sm:mt-20">
      <Navbar />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="mb-8 sm:mb-12">
          <Link 
            href="/components/Blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6 sm:mb-8 group transition-all duration-200 text-base sm:text-lg"
          >
            <span className="mr-2 sm:mr-3 transform group-hover:-translate-x-2 transition-transform duration-200">←</span>
            Back to All Articles
          </Link>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center text-gray-600 text-base sm:text-lg">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>

        <div className="prose prose-sm sm:prose-xl max-w-none">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 sm:mb-8 text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl">
              {paragraph}
            </p>
          ))}
        </div>

     
      </article>
    </div>
  );
}
