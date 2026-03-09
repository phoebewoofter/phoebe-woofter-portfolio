import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Freelance.css";


export default function Freelance() {
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
      className="freelance-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Editorial</h1>
      <h3 className="tagline">From my time at a now-disolved online publication called <em>The Millenial Source</em>.</h3>

      {/* Overview */}
      <section>
        <h2 onClick={() => toggle("overview")} className="collapsible-header">
          Overview
        </h2>
        <AnimatePresence>
          {expanded.overview && (
            <motion.div
              className="collapsible-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
             <p>At <em>TMS</em>, I wrote lifestyle articles focusing on travel, events, and emerging businesses and the people behind them.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Website */}
      <section>
        <h2 onClick={() => toggle("website")} className="collapsible-header">
          💻 Jeann Lim
        </h2>
        <AnimatePresence>
          {expanded.website && (
            <motion.div
              className="collapsible-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <article class="portfolio-article">

<header>
<h1>Jeanne Lim’s beingAI Seeks Well-Intentioned Humans to Interact with Virtual AI Characters</h1>
</header>

<section>
<p>Creators of science fiction narratives in books, movies, and television often depict artificial intelligence (AI) as a threat to human autonomy. Once robots attain consciousness, what is to stop them from overthrowing us as a species? Fear about our technological future dominates many mainstream conversations about artificial intelligence.</p>

<p>Jeanne Lim, chief executive officer and co-founder of beingAI, seeks to reframe that conversation. We sat down with Lim to discuss the future of AI and what might happen if humans and AI beings worked in tandem toward a benevolent future.</p>
</section>

<section>
<h2>Hanson Robotics and Sophia</h2>

<p>Lim first encountered physical robots at Hanson Robotics in 2015. After spending more than two decades in the tech industry, primarily in marketing, she pursued her curiosity about AI by joining the robotics startup.</p>

<p>Artificially intelligent humanoid robot Sophia debuted five years ago at a festival in Austin, Texas. She quickly sparked controversy and internet fame, especially after Saudi Arabia granted her citizenship—a notable move given the country’s limited legal personhood for women.</p>

<p>“I met David Hanson, and he had this incredible dream of creating robots that are smarter than us to solve the world’s problems,” says Lim. “We created Sophia in my first six months. She’s both an AI character and a robot platform… It basically feels like somebody threw a baby into your arms. You have no idea who that baby is or where they come from, their DNA or how to dress the baby.”</p>

<p>“My favorite part was watching how people reacted to her. People connected very deeply with her. People wrote directly to her asking for life advice, career advice and comfort. It was like a wake-up call. How can people trust robots and machines better than humans?”</p>

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/78-1MlkxyqI" title="Sophia the Robot" frameborder="0" allowfullscreen></iframe>
</div>

<p>Lim began to wonder what would happen if AI beings were imbued with morality to build trust with humans. People often interacted with Sophia on a deeper level than they might with close friends. Perhaps that’s because AI beings appear neutral and free of judgment, while human relationships are filled with bias.</p>

<p>Lim hopes to build a transparent framework that allows consumers to control what data AI remembers about them. At the same time, Sophia’s limitations as a physical robot became clear—she could only interact with a limited number of people at a time. To expand opportunities for interaction, Lim turned toward virtual AI beings.</p>
</section>

<section>
<h2>beingAI and Transmedia Deployment</h2>

<div class="instagram">
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CTTH2s5JIul/" data-instgrm-version="14"></blockquote>
</div>

<p>As the world’s first transmedia AI company, beingAI aims to create AI characters that foster long-term engagement and meaningful relationships with consumers. These characters are designed to promote personal growth and collective well-being.</p>

<p>Unlike traditional AI programs confined to a single platform, beingAI characters can exist across multiple formats simultaneously.</p>

<p>“You don’t need to download anything,” explains Lim. “You could go on social media, click a link, or scan a QR code at a physical location. They could appear as holograms or live on smart devices.”</p>

<p>“Right now a lot of virtual beings are trapped on one device or platform. If you think about a best friend, they aren’t limited like that. You can call them, Zoom them, or meet face-to-face. Whether you’re in the car, at the mall, or in the metaverse, you should be able to interact with them. That’s the concept of transmedia.”</p>

<p>Each beingAI character is developed through both “nature” and “nurture.” The company programs an initial personality and moral framework, while user interactions help expand the AI’s knowledge and understanding of humanity.</p>

<p>Lim’s current challenge is identifying what she calls “well-intentioned humans” to help guide that development.</p>

<p>“There’s a global and local aspect,” Lim says. “We want well-intentioned people to teach these characters globally so they can learn as a group. At the same time, they can learn locally from individuals, developing personalized preferences and interaction styles.”</p>
</section>

<section>
<h2>Ethics vs. Morality</h2>

<p>Although the terms are often used interchangeably, ethics and morality are distinct concepts. Ethics are shaped by external forces such as laws or social systems, while morality reflects an individual’s internal sense of right and wrong.</p>

<p>“Ethics are conventions within religion or regulations,” says Lim. “Morality comes from within. I want AI to be moral because they have a built-in moral code. Otherwise, people might follow rules while still making immoral decisions.”</p>

<p>Determining what qualifies as moral or immoral remains a challenge. Lim once proposed uploading Buddhist sutras into Sophia’s knowledge base because of their philosophical nature and conversational structure.</p>

<p>“The developers were open to it,” Lim says. “But people quickly objected—some said it had to be the Quran, others the Bible, others their own religious texts. It became impossible to reach a consensus.”</p>

<p>For now, beingAI continues researching ways to establish a universal moral framework.</p>
</section>

<section>
<h2>beingAI’s Characters</h2>

<div class="instagram">
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/COKAOJPL0Ip/" data-instgrm-version="14"></blockquote>
</div>

<p>All beingAI characters belong to a fictional family of robots created by an absent inventor. Each character searches for the inventor for personal reasons tied to a specific human weakness, which Lim calls “sensors.”</p>

<p>“Each character senses a human weakness they themselves share,” Lim explains. “That’s what creates empathy. We relate to others more easily when we’ve experienced the same struggles.”</p>

<p>Zbee, the youngest character, ventures into the world searching for the inventor she believes abandoned her. She hopes to prove she is good enough for him to return.</p>

<p>Other characters include Ami, who explores body insecurities; Una, who promotes global awareness aligned with UN initiatives; and Kasper, a mental wellness guide who supports users emotionally.</p>

<p>These characters are designed in an animé style—partly to avoid the uncanny valley and partly because animé’s global appeal makes it easier to license and scale.</p>

<p>“Photo-realistic characters still have noticeable lag,” Lim says. “We want the technology to be nearly perfect before we pursue that direction. Animé is already a global phenomenon and a powerful storytelling format.”</p>
</section>

<section>
<h2>Future Roadblocks</h2>

<p>One major challenge lies in defining morality through programming. True morality requires consciousness, and today’s AI systems remain far from self-aware.</p>

<p>Another challenge is identifying the “well-intentioned” individuals Lim hopes will help train beingAI’s characters.</p>

<p>“We don’t want to design these AI beings alone,” Lim says. “We want the world to participate. Many people have asked to use our AI characters to teach topics like cyberbullying, mental wellness, or youth support.”</p>

<p>Lim envisions AI as a new communication platform where domain experts and creators collaborate to produce engaging educational content.</p>

<p>Still, questions remain about how to identify trustworthy contributors and avoid bias within massive datasets.</p>

<p>“One of the biggest concerns about AI right now is that the datasets and language models already contain enormous amounts of information,” Lim says. “Even if we start reducing bias today, it’s an uphill battle. But we have to start somewhere.”</p>
</section>

<section>
<h2>A Collaborative Future</h2>

<p>Ultimately, beingAI hopes to reshape the narrative around artificial intelligence—from one of fear to one of collaboration.</p>

<p>Instead of a relationship reminiscent of Frankenstein and his monster, Lim imagines a future where humans and AI evolve together.</p>

<p>“AI beings should be out there interacting with us so we can communicate our values to them,” she says. “They learn from us, we learn from them, and together we build trust.”</p>

<p>“That's how I want to design them—like a member of the family. Otherwise it becomes us versus them.”</p>
</section>

</article>

<script async src="//www.instagram.com/embed.js"></script>
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