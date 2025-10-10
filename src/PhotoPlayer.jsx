import React, { useState, useEffect, useRef } from "react";
import "./PhotoPlayer.css";

import honeycomb from "./assets/about-me/honeycomb.JPG";
import pancho from "./assets/about-me/pancho.jpeg";
import suh from "./assets/about-me/suh.jpeg";
import boiz from "./assets/about-me/the-boiz.jpeg";
import me from "./assets/about-me/me.jpg";
import vietnamOne from "./assets/about-me/vietnam-1.jpeg";
import vietnamTwo from "./assets/about-me/vietnam-2.jpeg";
import vietnamThree from "./assets/about-me/vietnam-3.jpeg";
import vietnamFour from "./assets/about-me/vietnam-4.jpeg";
import vietnamSix from "./assets/about-me/vietnam-6.jpeg";
import canmore from "./assets/about-me/canmore.jpeg";
import cincoDeMayo from "./assets/about-me/cinco-de-mayo.jpg";
import pause from "./assets/pause.png";
import play from "./assets/play.png";
import skip from "./assets/skip.png";

const photos = [
  { src: honeycomb, caption: "Honeycomb" },
  { src: pancho, caption: "Pancho" },
  { src: suh, caption: "Suh" },
  { src: boiz, caption: "Our babies" },
  { src: me, caption: "Me" },
  { src: vietnamTwo, caption: "My partner and me in cafe in Vietnam" },
  { src: vietnamOne, caption: "My partner walking along the train street in Hanoi" },
  { src: vietnamThree, caption: "Aarden in Hanoi" },
  { src: vietnamFour, caption: "A church in Hanoi at night" },
  { src: vietnamSix, caption: "My partner and me in Ha Long Bay" },
  { src: canmore, caption: "My dad and me skate skiing in Canmore" },
  { src: cincoDeMayo, caption: "My second half marathon finish line" },
];

export default function PhotoPlayer() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  // Auto-play effect
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % photos.length);
      }, 3000); // 3s per slide
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const next = () => setCurrent((prev) => (prev + 1) % photos.length);
  const prev = () => setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className="photo-player">
      <div className="photo-frame">
        <img src={photos[current].src} alt={photos[current].caption} />
      </div>
      <div className="caption">{photos[current].caption}</div>

      <div className="controls">
      <button onClick={prev} className="icon-btn">
        <img src={skip} alt="Previous" className="icon-inverse" />
        </button>

      <button onClick={() => setIsPlaying(!isPlaying)} className="icon-btn">
        <img
            src={isPlaying ? pause : play}
            alt={isPlaying ? "Pause" : "Play"}
            className="icon"
        />
      </button>

      <button onClick={next} className="icon-btn">
        <img src={skip} alt="Next" className="icon" />
      </button>
      </div>
    </div>
  );
}
