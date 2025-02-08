import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full pt-8 lg:pt-[40px] relative z-10 overflow-hidden bg-[#0039a6] border-t border-white ">
      <div className="w-full px-4 lg:w-[95%] xl:container lg:mx-16 mb-2">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Logo & Contact Section */}

          <div className="w-full lg:w-1/4 px-2 lg:px-0">
            <div className="w-full lg:w-[80%] mb-5">
              <div className="w-60 max-w-full mb-5">
                <Link href="/" className="w-full block">
                  <Image
                    src="/images/logowhite.png"
                    alt="Logo"
                    width={200}
                    height={50}
                    className="w-[200px] h-[50px] object-cover"
                  />
                </Link>
              </div>

              <p className="text-base text-white mb-7 mt-4">Your premier destination for artistic tattoos and piercings.</p>
              <div className="text-white">
                <p className="flex items-center text-sm font-medium group">
                  <span className="text-white/90 group-hover:text-[#F7A600] transition-all duration-300 mr-3">
                    <svg width="19" height="23" viewBox="0 0 19 21" className="fill-current">
                      <path d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z"></path>
                      <path d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z"></path>
                      <path className="group-hover:-rotate-6 transition-transform duration-300" d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z"></path>
                    </svg>
                  </span>
                  <span className="hover:text-[#F7A600] transition-colors duration-300">095163 62594</span>
                </p>
              </div>

              <div className="flex mb-10 mt-8 justify-start gap-4">
              
                <a href="https://youtube.com/@sahil_suryavanshi?si=IYGOcTNLBVoQxxQV" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transform hover:scale-110 transition-all duration-300">
                  <FaYoutube className="w-6 h-6 text-white hover:text-[#F7A600] transition-colors duration-300" />
                </a>
                <a href="https://www.instagram.com/ink_city_the_tattoo_studio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transform hover:scale-110 transition-all duration-300">
                  <FaInstagram className="w-6 h-6 text-white hover:text-[#F7A600] transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Company Info */}
          <div className="w-full lg:w-3/4 flex flex-col sm:flex-row lg:ml-16">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
              <div className="w-full mb-10">
                <h4 className="text-white text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-[#F7A600] after:left-0 after:bottom-[-8px]">Quick Links</h4>
                <ul className="space-y-3">
                  <li><Link href="/" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">Home</Link></li>
                  <li><Link href="/components/About" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">About Us</Link></li>
                  <li><Link href="/components/Services" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">Services</Link></li>

                  <li><Link href="/components/Gallery" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">Gallery</Link></li>

                </ul>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
              <div className="w-full mb-10">
                <h4 className="text-white text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-[#F7A600] after:left-0 after:bottom-[-8px]">Our Services</h4>
                <ul className="space-y-3">
                  <li><Link href="/components/Services" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">Customized Tattoo</Link></li>
                  <li><Link href="/components/Services" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">Tattoo Removal</Link></li>
                  <li><Link href="/components/Services" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">Tattoo Consultation</Link></li>


                  <li><Link href="/components/Services" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">Piercings</Link></li>

                  <li><Link href="/components/Services" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">Body Art</Link></li>
                </ul>
              </div>
            </div>


            <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
              <div className="w-full mb-10">
                <h4 className="text-white text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-[#F7A600] after:left-0 after:bottom-[-8px]">Other Services</h4>
                <ul className="space-y-3">
                  <li><Link href="/components/Services" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">Tattoo Aftercare</Link></li>

                  <li><Link href="/components/Services" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">Coverup Tattoo</Link></li>
                  <li><Link href="/components/Services" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">Tattoo Training</Link></li>

                  <li><Link href="/components/Services" className="inline-block text-[15px] text-gray-50 hover:text-[#F7A600] hover:translate-x-1 transition-all duration-300">Temporary Tattoo</Link></li>

                </ul>
              </div>
            </div>

            <div className="w-full sm:w-full lg:w-1/3 px-4">
              <div className="w-full mb-10">
                <h4 className="text-white text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-[#F7A600] after:left-0 after:bottom-[-8px]">Contact Now</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="tel:09516362594" className="flex items-center group hover:translate-x-1 transition-all duration-300">
                      <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white/10 group-hover:bg-[#F7A600]/20 transition-colors duration-300">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-[15px] text-white/90 font-medium">+919516362594</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@tattoo.com" className="flex items-center group hover:translate-x-1 transition-all duration-300">
                      <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white/10 group-hover:bg-[#F7A600]/20 transition-colors duration-300">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-[15px] text-white/90 break-all">inkcitythetattoostudio22@gmail.com</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://goo.gl/maps" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:translate-x-1 transition-all duration-300">
                      <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white/10 group-hover:bg-[#F7A600]/20 transition-colors duration-300">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-[15px] text-white/90">Mini chopati ki gali, near gurudwara</p>
                        <p className="text-[15px] text-white/90">Freeganj, Ujjain</p>
                        <p className="text-[15px] text-white/90">Madhya Pradesh 456010</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700/50">
        <div className="lg:max-w-[1300px] mx-auto py-6 px-5 flex flex-wrap flex-col text-center">
          <p className="text-white font-semibold text-base mb-2">
            © {new Date().getFullYear()} <span className="font-medium">Ink City</span> - The Tattoo Studio. All rights reserved.
          </p>
          <p className="text-white font-semibold text-base">

            Designed and Developed by <a href="https://www.noxalgo.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7A600] transition-colors duration-300">Noxalgo LLP</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
