import React from 'react'
import SeoBlogPage from '../components/SeoBlogPage'
import { seoBlogs } from '@/content/seoBlogs'

const Blog4 = () => {
  return <SeoBlogPage blog={seoBlogs.blog4} canonicalPath="/blogs/Blog4" />
}

export default Blog4
