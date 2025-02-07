import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if loader has been shown before
    if (sessionStorage.getItem('loaderShown')) {
      setIsLoading(false);
      return;
    }

    const tl = gsap.timeline();

    tl.to(".loading-text span", {
      duration: 0,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power2.out",
    });

    tl.to(".loading", {
      duration: 0.5,
      opacity: 0,
      display: "none",
      delay: 1,
      onComplete: () => {
        setIsLoading(false);
        // Set flag in sessionStorage
        sessionStorage.setItem('loaderShown', 'true');
      },
    });
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading ">
      <div className="loading-text">
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
       
      </div>

      <style jsx>{`
        .loading {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #ffffff;
          z-index: 9999;
        }

        .loading-text {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          text-align: center;
          width: 100%;
          height: 100px;
          line-height: 100px;
        }
        .loading-text span {
          display: inline-block;
          margin: 0 5px;
          color: #000000;
          font-family: "Quattrocento Sans", sans-serif;
        }
        .loading-text span:nth-child(1) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0s infinite linear alternate;
          animation: blur-text 1.5s 0s infinite linear alternate;
        }
        .loading-text span:nth-child(2) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0.2s infinite linear alternate;
          animation: blur-text 1.5s 0.2s infinite linear alternate;
        }
        .loading-text span:nth-child(3) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0.4s infinite linear alternate;
          animation: blur-text 1.5s 0.4s infinite linear alternate;
        }
        .loading-text span:nth-child(4) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0.6s infinite linear alternate;
          animation: blur-text 1.5s 0.6s infinite linear alternate;
        }
        .loading-text span:nth-child(5) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0.8s infinite linear alternate;
          animation: blur-text 1.5s 0.8s infinite linear alternate;
        }
        .loading-text span:nth-child(6) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 1s infinite linear alternate;
          animation: blur-text 1.5s 1s infinite linear alternate;
        }
        .loading-text span:nth-child(7) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 1.2s infinite linear alternate;
          animation: blur-text 1.5s 1.2s infinite linear alternate;
        }

        @-webkit-keyframes blur-text {
          0% {
            filter: blur(0px);
          }
          100% {
            filter: blur(4px);
          }
        }

        @keyframes blur-text {
          0% {
            filter: blur(0px);
          }
          100% {
            filter: blur(4px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
