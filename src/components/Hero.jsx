import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  // GSAP Hook
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, delay: 2, y: 0 });
  }, []);

  // State Hook for Video Source
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  // HandleScrSet will change the video src based
  // on the window width
  const handleSrcSet = () => {
    window.innerWidth < 760
      ? setVideoSrc(smallHeroVideo)
      : setVideoSrc(heroVideo);
  };

  // Use Effect Hook to listen for window resize events
  useEffect(() => {
    window.addEventListener("resize", handleSrcSet);

    return () => {
      window.removeEventListener("resize", handleSrcSet);
    };
  }, []);

  return (
    // Hero Section
    <section className="w-full nav-height relative">
      {}
      {/* Hero Section Container */}
      <div className="h-5/6 w-full flex-center flex-col">
        {}
        {/* Title + fade-in  */}
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>

        {/* Video Container */}
        <div className="md:w-10/12 w-9/12">
          {/* Video element */}
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        {/* Call to Action Container */}
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          {/* CTA Button and Flair */}
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
