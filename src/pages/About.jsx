import React from "react";
import './About.css';
import PhotoPlayer from "../PhotoPlayer";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
        <p className="about-section">I’m a Portland‑based copywriter with five years of professional experience and a B.A. in English from the University of San Diego. My work spans email marketing, landing pages, campaigns, blogs, style guides, brochures, social media, and more — always with an eye toward blending storytelling with strategy.
        <br/><br/>
        I’ve partnered with brands across industries, from architecture and wellness to publishing and retail. Whether I’m crafting a punchy headline, a long‑form article, or a conversion‑driven email sequence, I focus on creating copy that connects authentically with its audience while driving measurable results.
        <br/>
        <br/>
        Alongside my copywriting career, I’m also building a foundation in software development. On my GitHub, you’ll find projects that reflect my curiosity for front‑end development and gamification — from HTML/CSS practice to mapping out interactive tools that make complex topics more engaging. I’m currently learning TypeScript, sharpening my skills in user‑centered design, and exploring how code and copy can work together to create intuitive, conversion‑friendly digital experiences.<br/><br/>
        Aside from my work, my life includes playing with my three cats, Suh, Honeycomb, and Pancho, traveling with my partner, training for marathons, skate skiing, gaming, and more!</p>
        <PhotoPlayer/>
    </div>
  );
}
