import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Studio from "./components/Studio";
import Socialmedia from "./components/Socialmedia";
import Loader from "./components/Loader";
import Testimonial from "./components/Testimonial";
import Gallery from "./components/Gallerystudio";
const index = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <Home />
      <About />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="studio">
        <Studio />
      </div>
      <Testimonial />
      <Footer />
      <Socialmedia />
    </>
  );
};

export default index;
