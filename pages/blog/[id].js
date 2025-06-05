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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded-lg w-3/4 mb-8"></div>
            <div className="h-6 bg-gray-200 rounded-lg w-1/4 mb-12"></div>
            <div className="h-[500px] bg-gray-200 rounded-2xl mb-12"></div>
            <div className="space-y-8">
              <div className="h-6 bg-gray-200 rounded-lg"></div>
              <div className="h-6 bg-gray-200 rounded-lg"></div>
              <div className="h-6 bg-gray-200 rounded-lg w-5/6"></div>
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
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
          <div className="text-red-500 text-3xl font-semibold mb-8">{error}</div>
          <Link 
            href="/blogs" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Link 
            href="/blogs" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 group transition-colors text-lg"
          >
            <span className="mr-3 transform group-hover:-translate-x-2 transition-transform">←</span>
            Back to All Articles
          </Link>
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center text-gray-600 text-lg">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>

        <div className="prose prose-xl max-w-none">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-8 text-gray-800 leading-relaxed text-xl">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/blogs"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <span className="mr-2">Read More Articles</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
