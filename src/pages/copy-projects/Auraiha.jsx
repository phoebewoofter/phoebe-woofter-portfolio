import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Auraiha.css";
import serumImg from "../../assets/auraiha/brightening-serum.jpeg";
import emailHere from "../../assets/auraiha/email-here.jpeg";
import emailReview from "../../assets/auraiha/email-review.jpeg";
import emailVroom from "../../assets/auraiha/email-vroom.jpeg";
import emailThanks from "../../assets/auraiha/email-thanks.jpeg";
import mistingImg from "../../assets/auraiha/misting.jpeg";
import heroDeck from "../../assets/auraiha/deck-hero.jpeg";
import sumDeck from "../../assets/auraiha/deck-sum.jpeg";
import audienceDeck from "../../assets/auraiha/deck-audience.png";
import brandDeck from "../../assets/auraiha/deck-brand-id.png";
import competitorDeck from "../../assets/auraiha//deck-competitors.png";
import numbersDeck from "../../assets/auraiha/deck-numbers.png";
import whyDeck from "../../assets/auraiha/deck-why.jpeg";
import preRevampOne from "../../assets/auraiha/first-pre-revamp.jpeg";
import preRevampTwo from "../../assets/auraiha/pre-revamp.jpeg";
import threePillarsPage from "../../assets/auraiha/three-pillars.jpeg";
import hybridApproach from "../../assets/auraiha/hybrid-approach.jpeg";
import moreWithLess from "../../assets/auraiha/more-with-less.jpeg";
import heroImg from "../../assets/auraiha/hero-img.jpeg";
import heroHydration from "../../assets/auraiha/hero-hydration.jpeg";
import heroGlow from "../../assets/auraiha/hero-glow-on.jpeg";
import blogImg from "../../assets/auraiha/rachaelle.jpeg";

export default function Auraiha() {
  const [expanded, setExpanded] = useState({
    overview: true,
    website: false,
    email: false,
    product: false,
    social: false,
    pitch: false,
    blog: false,
  });

  const toggle = (section) =>
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));

  return (
    <motion.div
      className="auraiha-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>auraiha</h1>
      <h3 className="tagline">Beyond skincare, better than makeup…</h3>

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
                I transformed auraiha from an unknown name in an oversaturated
                skincare market into a brand with a clear, confident voice and a
                growing community. By defining a distinct tone, optimizing
                website copy and CTAs, and producing SEO‑driven blogs, social
                campaigns, and product copy, I built a foundation for long‑term
                growth.
              </p>
              <ul>
                <li>Email open rates jumped from 21% → 56% in 30 days</li>
                <li>Transactional emails rose from 49% → 111% in 90 days</li>
                <li>Sales increased by 17% in 90 days</li>
              </ul>
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
              <h3>Before website revamp:</h3>
              <img src={preRevampOne} alt="Auraiha website" />
              <img src={preRevampTwo} alt="Auraiha website" />
              <h3>After website revamp:</h3>
              <img src={heroImg} alt="Auraiha website" />
              <img src={heroHydration} alt="Auraiha website" />
              <img src={heroGlow} alt="Auraiha website" />
              <img src={moreWithLess} alt="Auraiha website" />
              <img src={hybridApproach} alt="Auraiha website" />
              <img src={threePillarsPage} alt="Auraiha website" />
              <p>Optimized navigation, CTAs, and copy to reflect brand values and improve conversions.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Email */}
      <section>
        <h2 onClick={() => toggle("email")} className="collapsible-header">
          📧 Email
        </h2>
        <AnimatePresence>
          {expanded.email && (
            <motion.div className="collapsible-content">
              <img src={emailThanks} alt="Auraiha email campaign" />
              <img src={emailVroom} alt="Auraiha email campaign" />
              <img src={emailHere} alt="Auraiha email campaign" />
              <img src={emailReview} alt="Auraiha email campaign" />
              <p>
                Boosted open rates from 21% to 56% in 30 days with new campaigns
                and optimized transactional flows.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Product Copy */}
      <section>
        <h2 onClick={() => toggle("product")} className="collapsible-header">
          🧴 Product Copy
        </h2>
        <AnimatePresence>
          {expanded.product && (
            <motion.div className="collapsible-content">
              <img src={mistingImg} alt="Misting product" className="product-img"/>
              <h3>naturally luminous mist and set spray</h3>
              <h4>a multi-purpose mist for less money and more results</h4>
              <p>experience hours of hydration with a single spritz
              <br/>
              <br/>
              <span style={{fontWeight: 'bold' }}>what:</span> a facial toner, refreshing mist, and setting spray. this powerful blend of papaya, witch hazel, hydrating elixir, and betaine locks in moisture, enhancing your natural glow.
              <br/>
              <br/>
              <span style={{fontWeight: 'bold' }}>why:</span> would you buy three products if you could buy just one? less research and less money for more results. naturally luminous mist & set spray puts your skin first while enhancing your glow. its clean ingredients work together to tone and refresh your skin, lock in moisture, and set your makeup.  
              <br/>
              <br/>
              <span style={{fontWeight: 'bold' }}>where:</span> face, neck, and chest
              <br/>
              <br/>
              <span style={{fontWeight: 'bold' }}>how:</span> hold about 6 inches from face, close eyes, then gently press down to spray. repeat whenever you need a refresh
              <br/>
              <br/>
              <span style={{fontWeight: 'bold' }}>if you want to use as a toner...</span>
              <br/>
              apply after cleanser with a single spritz. leave to dry or pat with a reusable facial pad. your pores will tighten and be prepared to absorb your brightening serum (or any other skincare product). 
              <br/>
              <br/>
              <span style={{fontWeight: 'bold' }}>if you want to use as a refreshing mist…</span>
              <br/>
              apply throughout the day with a single spritz as needed. 
              <br/>
              <br/>
              <span style={{fontWeight: 'bold'}}>if you want to use as a setting spray…</span>
              <br/>
              apply under or over makeup with a single spritz. leave to dry. 
              <br/>
              <br/>
              <span style={{fontWeight: 'bold'}}>*pro tip for dry skin: apply under makeup to help blend your foundation and get rid of flakey or rough textures.</span>
              </p>
              <img src={serumImg} alt="Serum product" className="product-img"/>
              <h3>glass face brightening serum</h3>
              <h4>a superfood serum for a glass-like finish</h4>
              <p>
                gentle exfoliation, instant results
                <br/>
                <br/>
                <span style={{fontWeight: 'bold' }}>what:</span> a unique mixture of squalane, AHA fruit acids, aloe, green tea & cucumber.
                <br/>
                <br/>
                <span style={{fontWeight: 'bold' }}>when:</span> apply twice daily, once in the morning and at night; before moisturizing or after cleansing for soft glowing skin
                <br/>
                <br/>
                <span style={{fontWeight: 'bold' }}>why:</span> using minimal ingredients with easy-to-understand benefits, this plant-based emollient is intensely moisturizing. it’s also suitable for sensitive and blemish-prone skin. the AHA fruit acids gently exfoliate the outermost layer of the skin. with regular use, glass face brightening serum will give you glowing skin. why cover your face with foundation when your skin glows? and say goodbye to highlighter.
                <br/>
                <br/>
                <span style={{fontWeight: 'bold' }}>where:</span> face, neck, and chest
                <br/>
                <br/>
                <span style={{fontWeight: 'bold' }}>how:</span> one pump onto clean, almost dry skin. always apply in an upward motion until absorbed by the skin.
              </p>
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
                Built a consistent brand voice across Instagram and TikTok,
                growing a loyal following in a crowded market.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Pitch Deck */}
      <section>
        <h2 onClick={() => toggle("pitch")} className="collapsible-header">
          📊 Pitch Deck
        </h2>
        <AnimatePresence>
          {expanded.pitch && (
            <motion.div className="collapsible-content">
              <img src={heroDeck} alt="Auraiha pitch deck" />
              <img src={whyDeck} alt="Auraiha pitch deck" />
              <img src={brandDeck} alt="Auraiha pitch deck" />
              <img src={competitorDeck} alt="Auraiha pitch deck" />
              <img src={numbersDeck} alt="Auraiha pitch deck" />
              <img src={audienceDeck} alt="Auraiha pitch deck" />
              <p>
                Crafted investor‑ready messaging that highlighted auraiha’s
                unique positioning: affordable, clean skincare for all.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Blog */}
      <section>
        <h2 onClick={() => toggle("blog")} className="collapsible-header">
          ✍️ Blog
        </h2>
        <AnimatePresence>
          {expanded.blog && (
            <motion.div className="collapsible-content">
              <blockquote>
                “Healthy, glowing skin shouldn’t be a luxury. In an oversaturated
                market filled with expensive brands that lack transparency,
                auraiha provides affordable clean skincare for everyone…”
              </blockquote>
              <img src={blogImg} alt="Auraiha blog" />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </motion.div>
  );
}
