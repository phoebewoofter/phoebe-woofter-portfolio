import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Standard.css";

// import your screenshots here, e.g.:
import arom from "../../assets/standard/arom.jpeg";
import digitalSolutions from "../../assets/standard/digital-solutions.jpeg";
import disabilityManagement from "../../assets/standard/disability-management.jpeg";
import bhm from "../../assets/standard/bhm.jpeg";
import countOn from "../../assets/standard/count-on.jpeg";
import eeExperience from "../../assets/standard/ee-experience.jpeg";
import eid from "../../assets/standard/eid.jpeg";
import empatheticSolutions from "../../assets/standard/empathetic-solutions.jpeg";
import erExperience from "../../assets/standard/er-experience.jpeg";
import finLit from "../../assets/standard/fin-lit.jpeg";
import iaTradeshow from "../../assets/standard/ia-tradeshow.jpeg";
import lunarNewYear from "../../assets/standard/lunar-new-year.jpeg";
import napa from "../../assets/standard/napa.jpeg";
import navigateLeave from "../../assets/standard/navigate-leave.jpeg";
import pride from "../../assets/standard/pride.jpeg";
import reachTheBeach from "../../assets/standard/reach-the-beach.jpeg";
import securian from "../../assets/standard/securian.png";
import socialToolkit from "../../assets/standard/social-media-toolkit.jpeg";
import socialMediaToolkit from "../../assets/standard/social-media-toolkit-cont.jpeg";

export default function TheStandard() {
  const [expanded, setExpanded] = useState({
    overview: true,
    website: false,
    ads: false,
    campaigns: false,
    social: false,
  });

  const toggle = (section) =>
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));

  return (
    <motion.div
      className="standard-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>The Standard</h1>
      <h3 className="tagline">
        Leading with empathy, guiding with expertise, designing for ease.
      </h3>

      {/* Overview */}
      <section>
        <h2 onClick={() => toggle("overview")} className="collapsible-header">
          🌟 Overview
        </h2>
        <AnimatePresence>
          {expanded.overview && (
            <motion.div
              className="collapsible-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p>
                As Senior Copywriter at The Standard, I helped translate complex
                insurance topics into clear, approachable messaging that put
                empathy first. By building messaging frameworks, style guides,
                and integrated campaigns, I ensured consistency across channels
                while driving measurable engagement.
              </p>
              <ul>
                <li>
                  Drove a 23.2% lift in social engagement through iterative
                  testing and insights
                </li>
                <li>
                  Partnered with designers and marketers to align copy and
                  visuals seamlessly
                </li>
                <li>
                  Applied UX writing principles to improve clarity and customer
                  trust
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Ads */}
      <section>
        <h2 onClick={() => toggle("ads")} className="collapsible-header">
          📢 Ads
        </h2>
        <AnimatePresence>
          {expanded.ads && (
            <motion.div className="collapsible-content">
              <p>Crafted ad copy that balanced empathy with clarity, ensuring campaigns resonated with audiences while driving conversions.
              </p>
              <img src={iaTradeshow} alt="IA tradeshow ad"/>
              <img src={napa} alt="NAPA blackbook ad"/>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Website */}
      <section>
        <h2 onClick={() => toggle("website")} className="collapsible-header">
          💻 Website
        </h2>
        <AnimatePresence>
          {expanded.website && (
            <motion.div
              className="collapsible-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p>
                Optimized website CTAs and wrote copy to make complex insurance
                products and services easier to understand and more approachable for
                customers. Positioned mergers and acquisitions as an evolution but not a transformation of the brand.
              </p>
              <img src={securian} alt="Securian Financial acquisition"/>
              <img src={countOn} alt="Digital solutions you can count on"/>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Campaigns */}
      <section>
        <h2 onClick={() => toggle("campaigns")} className="collapsible-header">
          📈 Campaigns
        </h2>
        <AnimatePresence>
          {expanded.campaigns && (
            <motion.div className="collapsible-content">
              <p>
                Partnered cross‑functionally to develop integrated campaigns
                across email, social, and web. Built messaging frameworks that
                kept the brand voice consistent while adapting to different
                audiences. The following images are snippets from a new digital absence management experience campaign.
              </p>
                <img src={digitalSolutions} alt="Digital solutions for a seamless experience"/>
                <img src={navigateLeave} alt="Navigate leave with ease"/>
                <img src={erExperience} alt="Employer experience"/>
                <img src={eeExperience} alt="Employee experience"/>
                <img src={empatheticSolutions} alt="Emapthetic solutions, expertly delivered"/>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Social Media */}
      <section>
        <h2 onClick={() => toggle("social")} className="collapsible-header">
          📱 Social Media
        </h2>
        <AnimatePresence>
          {expanded.social && (
            <motion.div className="collapsible-content">
              <p>
                Increased engagement by over 23% through iterative testing,
                audience insights, and empathetic messaging that resonated with
                customers. Created social media toolkits for brokers to share with their clients.
              </p>
              <div className="social-media">
                <img src={disabilityManagement} alt="The Standard social media" className="social-post"/>
                <img src={pride} alt="The Standard social media" className="social-post"/>
                <img src={bhm} alt="The Standard social media" className="social-post" />
                <img src={reachTheBeach} alt="The Standard social media" className="social-post" />
                <img src={arom} alt="The Standard social media" className="social-post"/>
                <img src={eid} alt="The Standard social media" className="social-post"/>
                <img src={lunarNewYear} alt="The Standard social media" className="social-post"/>
                <img src={finLit} alt="The Standard social media" className="social-post"/>
              </div>
              <img src={socialToolkit} alt="The Standard social media toolkit" />
              <img src={socialMediaToolkit} alt="The Standard social media toolkit" />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </motion.div>
  );
}
