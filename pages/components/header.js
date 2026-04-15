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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-white bg-slate-950 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="lg:max-w-[1300px] mx-auto px-4">
        <div className="flex items-center justify-between h-[70px] sm:h-[100px]">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-[120px] sm:w-[210px] h-[70px] sm:h-[80px] mx-2 sm:mx-0"
          >
            <Image
              src="/images/logowhite.png"
              alt="Logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-sm"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-base font-bold  tracking-widest relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#F7A600] after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 uppercase"
            >
              Home
            </Link>
            <Link
              href="/components/aboutus"
              className="text-base font-bold  tracking-widest relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#F7A600] after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 uppercase"
            >
              About Us
            </Link>

            <Link
              href="/components/services"
              className="text-base font-bold  tracking-widest relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#F7A600] after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 uppercase"
            >
              Our Services
            </Link>

            <div className="relative group">
              <button className="text-base font-bold tracking-widest uppercase inline-flex items-center gap-2">
                Categories
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full mt-3 w-72 bg-white text-black rounded-md shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-80 overflow-y-auto">
                {CATEGORIES.map((category) => (
                  <Link
                    key={category}
                    href={{
                      pathname: "/components/CategoryImages",
                      query: { category },
                    }}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blogs"
              className="text-base font-bold  tracking-widest relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#F7A600] after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 uppercase"
            >
              Blog
            </Link>
          </div>

          {/* Book Now Button - Desktop */}
          <Link
            href="/components/Contact"
            className="hidden md:block relative overflow-hidden group px-6 py-2 rounded-full uppercase text-base font-bold tracking-widest"
          >
            <span className="absolute inset-0 bg-[#F7A600] transform transition-transform duration-300 group-hover:scale-x-0"></span>

            <span className="absolute inset-0 bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            <span className="relative text-black group-hover:text-[#ffffff] transition-colors duration-300">
              Contact Us
            </span>
            <span className="absolute inset-0 border-2 border-[#F7A600] rounded-full transform scale-105 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
          </Link>
        </div>

        {/* Mobile Menu - Sidebar */}
        <div
          className={`fixed border-t border-[#52504d]/30 top-0 left-0 h-screen w-[280px] bg-[#4B9CD3] text-black shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
          style={{ marginTop: "70px" }}
        >
          <div className="flex flex-col p-6">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-xs font-semibold tracking-widest uppercase px-2 py-3 hover:text-[#F7A600] border-b border-black"
            >
              Home
            </Link>
            <Link
              href="/components/Theexperience"
              onClick={() => setIsMenuOpen(false)}
              className="text-xs font-semibold tracking-widest uppercase px-2 py-3 hover:text-[#F7A600] border-b border-black"
            >
              The Experience
            </Link>
            <Link
              href="#studio"
              onClick={() => setIsMenuOpen(false)}
              className="text-xs font-semibold tracking-widest uppercase px-2 py-3 hover:text-[#F7A600] border-b border-black"
            >
              The Studio
            </Link>
            <Link
              href="/components/Services"
              onClick={() => setIsMenuOpen(false)}
              className="text-xs font-semibold tracking-widest uppercase px-2 py-3 hover:text-[#F7A600] border-b border-black"
            >
              Our Services
            </Link>
            <div className="border-b border-black pb-2">
              <p className="text-xs font-bold tracking-widest uppercase px-2 py-3">
                Categories
              </p>
              <div className="max-h-44 overflow-y-auto">
                {CATEGORIES.map((category) => (
                  <Link
                    key={category}
                    href={{
                      pathname: "/components/CategoryImages",
                      query: { category },
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xs px-4 py-2 hover:text-[#F7A600]"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/components/Blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-xs font-semibold tracking-widest uppercase px-2 py-3 hover:text-[#F7A600] border-b border-black"
            >
              Blog
            </Link>

            <Link
              href="/components/Contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#F7A600] text-black text-xs font-semibold tracking-widest px-6 py-2 rounded-full hover:bg-[#E69500] transition-all uppercase text-center mt-6 border border-black"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            style={{ marginTop: "70px" }}
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
