import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  "Script tattoo",
  "Spiritual tattoo",
  "Line art",
  "Black tattoo",
  "Color tattoo",
  "Mandala tattoo",
  "Geometric tattoo",
  "Human portraits",
  "Animal portraits",
  "Water color tattoo",
  "Dot work",
  "Black and grey realism",
  "Piercing",
  "Tattoo removal",
  "Temporary tattoos",
  "Vitiligo",
  "Tattoo training",
  "Female tattoo artist",
  "Micro pigmentation",
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-slate-950 border-b border-white/10 py-2">
      <div className="lg:max-w-[1300px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-[120px] h-[60px] transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/logowhite.png"
              alt="Ink City Tattoo Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/aboutus" },
              { name: "Our Services", href: "/services" },
              { name: "Gallery", href: "/gallery" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold tracking-[0.2em] text-white/90 hover:text-theme2 transition-colors duration-200 uppercase"
              >
                {link.name}
              </Link>
            ))}

            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="text-sm font-bold tracking-[0.2em] text-white/90 hover:text-theme2 transition-colors duration-200 uppercase inline-flex items-center gap-2">
                Categories
                <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category}
                      href={{
                        pathname: "/components/CategoryImages",
                        query: { category },
                      }}
                      className="block px-6 py-2.5 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/blogs"
              className="text-sm font-bold tracking-[0.2em] text-white/90 hover:text-theme2 transition-colors duration-200 uppercase"
            >
              Blog
            </Link>
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link
              href="/contactus"
              className="px-8 py-3 rounded-full bg-theme2 text-theme1 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-theme1 transition-all duration-300 shadow-lg shadow-theme2/20"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 top-2" : "top-0"}`}></span>
              <span className={`absolute h-0.5 w-full bg-white top-2 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-2" : "top-4"}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-[350px] bg-slate-950 border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-out md:hidden z-[110] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="relative w-[100px] h-[50px]">
              <Image src="/images/logowhite.png" alt="Logo" fill className="object-contain" />
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/aboutus" },
              { name: "Gallery", href: "/gallery" },
              { name: "Our Services", href: "/services" },
              { name: "Blog", href: "/blogs" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold tracking-widest text-white/90 hover:text-theme2 uppercase border-b border-white/5 pb-2"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4">
              <p className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase mb-4">
                Categories
              </p>
              <div className="grid grid-cols-1 gap-4 max-h-[30vh] overflow-y-auto pr-2 custom-scrollbar">
                {CATEGORIES.map((category) => (
                  <Link
                    key={category}
                    href={{
                      pathname: "/components/CategoryImages",
                      query: { category },
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium text-white/60 hover:text-theme2 transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contactus"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 w-full py-4 rounded-xl bg-theme2 text-theme1 text-center font-bold tracking-widest uppercase hover:bg-white transition-all shadow-xl shadow-theme2/10"
            >
              Book Appointment
            </Link>
          </div>
          
          <div className="mt-auto pt-8">
            <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase text-center">
              Ink City Tattoo Studio • Ujjain
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
