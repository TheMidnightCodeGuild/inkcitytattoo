import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/gallery'
import Studio from './components/Studio'
import Socialmedia from './components/Socialmedia'
import Loader from './components/Loader'
import Testimonial from './components/Testimonial'
const index = () => {
  return (
    <div>

      <Loader/>

      <Navbar/>


      <Home/>
      <About/>
      <div id='gallery'>
      <Gallery/>
      </div>
      <div id='studio'>
      <Studio/>
      </div>
      <Testimonial/>
      <Footer/>
      <Socialmedia/>

    </div>


  )
}

export default index
