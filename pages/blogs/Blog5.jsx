import React from 'react'
import SeoBlogPage from '../components/SeoBlogPage'
import { seoBlogs } from '@/content/seoBlogs'

const Blog5 = () => {
  return <SeoBlogPage blog={seoBlogs.blog5} canonicalPath="/blogs/Blog5" />
}

export default Blog5
