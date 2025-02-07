import React from 'react'
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
const Socialmedia = () => {
  return (
    <>
       <div className="fixed z-50 left-2 md:left-5 bottom-72 md:bottom-64 mx-2">
        <a className="flex justify-center flex-col-reverse items-center" target="_blank" rel="noopener noreferrer" href="https://wa.me/919516362594">
          <FaWhatsapp className="w-10 h-10 md:w-12 md:h-12 bg-white text-[#25D366] rounded-full p-1.5 md:p-2 hover:scale-110 transition-transform duration-300 mb-2 shadow-lg border border-black" />
        </a>

        
        <a className="flex justify-center flex-col-reverse items-center" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ink_city_the_tattoo_studio/">
          <FaInstagram className="w-10 h-10 md:w-12 md:h-12 bg-white text-pink-500 rounded-full p-1.5 md:p-2 hover:scale-110 transition-transform duration-300 mb-2 shadow-lg border border-black" />

        </a>

        <a className="flex justify-center flex-col-reverse items-center" target="_blank" rel="noopener noreferrer" href="https://youtube.com/@sahil_suryavanshi?si=IYGOcTNLBVoQxxQV">
          <FaYoutube className="w-10 h-10 md:w-12 md:h-12 bg-white text-red-500 rounded-full p-1.5 md:p-2 hover:scale-110 transition-transform duration-300 mb-2 shadow-lg border border-black" />

        </a>
      </div>
    </>
  )
}

export default Socialmedia
