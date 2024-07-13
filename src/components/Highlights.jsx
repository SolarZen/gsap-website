import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
  // GSAP Hook
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    // Highlights component
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      {/* Highlights container */}
      <div className="screen-max-width">
        {/* Title */}
        <div className="md:flex mb-12 w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the Highlights.
          </h1>

          {/* Links */}
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the Film{" "}
              <img src={watchImg} alt="watch icon" className="ml-2" />
            </p>
            <p className="link">
              Watch the Event
              <img src={rightImg} alt="watch icon" className="ml-2" />
            </p>
          </div>
        </div>
        {/* Video Carousel Component */}
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
