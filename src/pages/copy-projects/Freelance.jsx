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

      {/* beingAI */}
      <section>
        <h2 onClick={() => toggle("website")} className="collapsible-header">
          💻 Jeanne Lim’s beingAI Seeks Well-Intentioned Humans to Interact with Virtual AI Characters
        </h2>
        <AnimatePresence>
          {expanded.website && (
            <motion.div
              className="collapsible-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >

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
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Dune Article */}
      <section>
        <h2 onClick={() => toggle("email")} className="collapsible-header">
        🏜️ Review: What's the fuss about "Dune"? A guide to the inspiration for "Star Wars"
        </h2>
        <AnimatePresence>
          {expanded.email && (
            <motion.div className="collapsible-content">
              
              <article>

  <p>For as long as I can remember, “Dune” has consistently ranked as the No. 1 fiction bestseller at Powell’s City of Books. The bold vertical title standing amid sunset-colored sand dunes caught my eye, even as a kid when I had to crane my neck to see the top shelf of bestsellers. Little did I know that the author happened to live and work in my hometown of Portland, Oregon, while he researched and created his galactic saga.</p>

  <p>Many of you are probably wondering like I was, what’s the fuss about “Dune?” Come to think of it, what is “Dune?” Read on for answers to your questions and a brief guide to writer Frank Herbert’s sci-fi world.</p>

  <p>If you’ve heard whispers of the density of “Dune,” both in terms of plot and length, rest assured the initial slog rewards you. And after all, many cultural classics ripped off Herbert’s epic tale, including “Star Wars.” Yes, “Dune” preceded your precious galaxy far, far away… Though I wouldn’t classify myself as a die-hard “Dune” fan, I can appreciate it for its cultural impact and its masterful writing. Here’s why you should read the first of Herbert’s six “Dune” books.</p>

  <h2>The premise of “Dune”</h2>

  <p>Herbert’s “Dune” takes place thousands of years from now in a feudal interstellar society. At this point, humans have colonized space and eradicated artificial intelligence. In the series, a collective of royal houses referred to as the Imperium answer to the galactic Padishah Empire.</p>

  <p>The majority of the first book unfolds on the desert planet known as Arrakis, which alone produces the galaxy’s most precious natural resource, spice. When consumed in massive amounts, its hallucinogenic properties allow individuals to make inhuman calculations necessary for space travel. Without it, the galactic economy would collapse.</p>

  <p>“Dune” begins amid a transition of power initiated by the Emperor. The greedy and ruthless House Harkonnen has governed Arrakis for 80 years, all while exploiting the rich spice reserves and the Indigenous peoples known as the Fremen. Now House Atreides has accepted stewardship of Arrakis at the Emperor’s invitation.</p>

  <p>With any transition of power comes turmoil and violence, especially when it involves the control of the sole source of a coveted resource. Though the Harkonnens have retreated as commanded under imperial order, they plan to retake Arrakis. The twist? The Emperor will secretly provide soldiers to the Harkonnen cause. He fears the power of the Atreides and thus uses the transition of power as a guise to send them to their demise.</p>

  <p>Enter the protagonist of “Dune,” 15-year-old Paul, the heir to House Atreides. His uncanny prescience and his heritage mark him as a potential candidate for a long-awaited savior figure. Upon his arrival, the Fremen refer to him in messianic terms, calling him “Mahdi” and “Lisan al Gaib,” words derived from Arabic. After the fall of House Atreides, the Fremen accept Paul as one of their own and prepare for a jihad (another Arabic term that translates to crusade), one Paul has dreaded in his visions.</p>

  <p>Some argue “Dune’s” categorization as science fiction distills the complexity of its political and religious commentary. For that reason, before embarking on your journey into the “Dune” universe, you’ll need a basic understanding of the world’s social, economic and environmental issues around 1965, when “Dune” was published.</p>

  <h2>Political background in our world</h2>

  <p>Let’s keep this brief. Does Arrakis sound similar to the name of another country, perhaps one in the Middle East? Yes, Iraq. And while spice enables the galactic economy, oil enables our global economy.</p>

  <p>In terms of a timeline, “Dune” came out on the market just three years after the Algerian War, and Herbert’s research and writing took six years. Algerians had endured colonial cruelty at the hands of the French for a century before the Algerian War. Herbert even said he wrote Paul as a critique of T.E. Lawrence and other figures like him. Many academics accept “Dune” as an allegory for the collapse of the Ottoman Empire and Western imperialism.</p>

  <h2>Do I need to read the book to understand the movie?</h2>

  <p>The easy answer is no; however, the movie abandons much of Herbert’s original vision, especially when it comes to the Fremen. To fully appreciate “Dune” and how it has influenced science fiction as a genre and shaped popular media, you need to read the book.</p>

  <p>Wouldn’t you like to know how this series shaped the world’s most famous space opera franchise? The parallels might stun you to the point of accusing George Lucas of plagiarism (think Tatooine as Arrakis and Anakin and Padme as Paul and Chani).</p>

  <p>Villeneuve’s 2021 adaptation boasts striking (though appropriative) music, in addition to stellar acting and beautiful cinematography. It’s worth a watch if only to be able to engage in conversations about its faults. However, if you can’t fathom reading 800 pages just to watch a movie, don’t worry! The movie only covers the first half of the book. But the book demands to be consumed, while the movie is only fleetingly relevant in comparison.</p>
</article>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Disruptive Women */}
      <section>
        <h2 onClick={() => toggle("product")} className="collapsible-header">
        ⚡️ Can Innovation in Diversity Catch Up to Technological Innovation? Disruptive Women Powering Our Autonomous Future
        </h2>
        <AnimatePresence>
          {expanded.product && (
            <motion.div className="collapsible-content">
             <article>
  <p>Women’s History Month makes space for summits like <em>Disruptive Women Powering Our Autonomous Future</em> to take place. Velodyne Lidar and the Association for Unmanned Vehicle Systems International (AUVI) – both tech companies known for their autonomous vehicle advancements – brought together a formidable ensemble of women on March 25 to discuss their roles in the autonomous vehicle (AV) industry. The increasingly ubiquitous nature of autonomous technology promises to revolutionize our society and its infrastructure, and with that growing ubiquity comes ample opportunities for employment in the AV industry.</p>

  <p>Though women represent about 50% of the population, only 8% of top executives and 16% of all workers in the automotive industries and 20% of all college engineering students identify as women. These disproportionate statistics speak to a yawning gap in gender equity, especially in STEM fields. <em>Disruptive Women Powering Our Autonomous Future</em> discussed female representation in the AV industry, how gender inequality manifests in tech and how to support young women who aspire to work in AV technology.</p>

  <h2>Making a Place for Women in STEM</h2>

  <p>We had the privilege of speaking with two women involved in the summit about what diversity means to them and how it impacts tech industries. Sally Frykman, Velodyne Lidar’s Chief Marketing Officer, began as a social worker and an educator working with people with disabilities and then worked her way into administration.</p>

  <p>Velodyne organizes summits on autonomous vehicles and safety to demystify the industry by addressing safety issues and public concerns. They aim for transparency, and ultimately argue that autonomous vehicles are an integral part of reducing harm caused by the 94% of collisions as a result of human error. These summits inspired <em>Disruptive Women Powering Our Autonomous Future</em>.</p>

  <blockquote>
    “When we were planning the world safety summit, it just so happened that one of our panels was all women, and we thought, gosh, this is amazing … This should not be unique,” says Frykman. “And born from that reflection is Disruptive Women Powering Our Autonomous Future … There is not a dearth of female leadership, there is a dearth of female representation, and we want to bring these female leaders forward.”
  </blockquote>

  <p>These leaders don’t pop up in the workforce; they emerge in classrooms.</p>

  <blockquote>
    “It’s critical to open STEM opportunities for young women and young girls really, really early,” explains Frykman. “I also think that from the industry perspective, and this is what we’re trying to do with our event, is show the women leaders there so that there are role models for anyone to look up to. And I’m talking anyone from the age of five to if you want to enter the career later in life.”
  </blockquote>

  <p>Frykman also emphasized the importance of diversity in innovation:</p>

  <blockquote>
    “I think what happens, too, is that companies get hyper focused on innovation, and wanting to put out the very best technology. And something that fortunately now is becoming more prominent, but has been an afterthought, is the importance of diversity. As long as we’re committed to innovation, we need to be committed to being innovative in diversity as well.”
  </blockquote>

  <h2>Diversity and Representation in Tech</h2>

  <p>How does a lack of diversity impact technology, and what does it mean when you are not represented by tech developers, algorithms or data sets? Genevieve Smith, Associate Director of the Berkeley Haas Center for Equity, Gender &amp; Leadership (EGAL), moderated the “Eliminating Hidden Bias in Autonomy and Beyond” panel at the summit. Her work at Berkeley focuses on advancing inclusive artificial intelligence (AI) by mitigating bias.</p>

  <blockquote>
    “I think it helps, when thinking about bias and AI, to recognize that AI systems are biased because they are created by humans,” says Smith. “They’re ultimately decisions around what data is for an AI system and what the AI system should be thinking about, different kinds of variables that it should consider. Those are decisions made by humans.”
  </blockquote>

  <blockquote>
    “And so who is making the decisions, forming AI systems, who is on the team developing AI systems really matters because it’s their perspective, values, etc. that are integrated into these different technologies. There’s a huge gender gap with who’s represented in computing and within AI. A crazy statistic that I like to think about is there are less women in computing today than there were in 1960.”
  </blockquote>

  <p>The gendered associations of industries, activities and even colors shift throughout history, which speaks to the arbitrary act of assigning gender. Just as pink was once considered a masculine color, data collection was once a feminized occupation.</p>

  <p>UNESCO examined how tech developers gender AI technology in a series of think pieces entitled <em>“I’d Blush If I Could: Closing Gender Divides in Digital Skills Through Education.”</em> The report discusses digital voice assistants like Apple’s Siri and Amazon’s Alexa. Their feminine names and synthetic voices reinforce gender bias and perpetuate the idea of women as subservient by making women the default virtual assistants, thus linking women to the errors that result from the flaws of hardware and software designed predominantly by men.</p>

  <p>Gender bias also infiltrates AI in more inconspicuous ways.</p>

  <blockquote>
    “Bias comes into AI systems on a more granular level based on the data the AI systems are fed,” explains Smith. “There are really large gender data gaps, and one way to think about this is there's a really big gender digital divide. 300 million fewer women than men access the internet on a mobile phone.”
  </blockquote>

  <p>Many technologies generate user data, but if fewer women have access to the technologies producing that data, the data sets will be inherently skewed toward male users.</p>

  <blockquote>
    “Algorithms are told what data sets to learn from and what variables to consider when making decisions,” says Smith.
  </blockquote>

  <p>Smith offers an example of how bias can appear in hiring algorithms.</p>

  <blockquote>
    “A really good example is an online tech hiring platform called Guild, which enabled employers to use ‘social data’ and other resources like resumes to rank candidates. Social data refers to how integral a programmer is in the digital community.”
  </blockquote>

  <blockquote>
    “Guild drew from time individuals spent sharing and developing code on platforms like GitHub. But because women often face greater expectations on their time, they may have less time to participate online. Additionally, research shows women sometimes assume male identities on platforms like GitHub because of online harassment or safety concerns. By prioritizing social data in the hiring process, the system ended up being biased against women.”
  </blockquote>

  <p>Bias in data, algorithms and AI extends beyond gender. Race, disability and sexual orientation all reveal gaps in representation within the tech industry. When the teams creating technology do not reflect the diversity of the population, the resulting tools may exclude marginalized experiences—or even pose risks to those communities.</p>

  <blockquote>
    “Diversity is good for everyone,” says Frykman, “and it’s critical for us in this particular industry to not just recognize that, but see that there is space for it already.”
  </blockquote>

</article>
            </motion.div>
          )}
        </AnimatePresence>
        </section>
    </motion.div>
  );
}