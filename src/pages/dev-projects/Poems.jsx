import React, { useState } from "react";
import { motion } from "framer-motion";
import home from '../../assets/ed-home.jpeg';
import loading from "../../assets/ed-loading.jpeg";
import loaded from "../../assets/ed-loaded.jpeg";
import "./Poems.css";

export default function PoemGenerator() {
  const [expanded, setExpanded] = useState({
    features: true,
    install: false,
    tech: false,
    contact: false,
  });

  const toggle = (section) =>
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));

  return (
    <motion.div
      className="poem-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <h1>Which Emily Dickinson Poem Are You? 📜</h1>
      <p>
        A simple random Emily Dickinson poem generator. It fetches an array of
        poems from <code>poetrydb.org</code> and randomly selects one to display.
        Includes a hand‑drawn violet loading spinner for a whimsical touch.
      </p>

      <h2>📝 Note</h2>
      <p>
        This project was built with <strong>React + Vite</strong> and deployed on
        Netlify.
      </p>

      {/* Interactive Window */}
      <h2>🌸 Try It Here</h2>
      <div className="iframe-wrapper">
        <iframe
          src="https://which-emily-dickinson-poem-are-you.netlify.app/"
          title="Which Emily Dickinson Poem Are You?"
          width="100%"
          height="500"
          style={{
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          }}
        ></iframe>
      </div>

      {/* Features */}
      <section>
        <h2 onClick={() => toggle("features")} className="collapsible-header">
          ✨ Features
        </h2>
        {expanded.features && (
          <ul className="collapsible-content">
            <li>
              <strong>Random Poem Generator:</strong> Fetches poems from
              poetrydb.org and displays one at random.
            </li>
            <li>
              <strong>Custom Loading Spinner:</strong> Hand‑drawn violet animation
              while fetching.
            </li>
            <li>
              <strong>Minimalist UI:</strong> Clean, simple design focused on the
              poetry.
            </li>
          </ul>
        )}
      </section>

      {/* Installation */}
      <section>
        <h2 onClick={() => toggle("install")} className="collapsible-header">
          🛠️ Installation
        </h2>
        {expanded.install && (
          <pre className="collapsible-content">
            <code>
              git clone https://github.com/phoebewoofter/which-emily-dickinson-poem-are-you.git{"\n"}
              cd which-emily-dickinson-poem-are-you{"\n"}
              npm install{"\n"}
              npm run dev
            </code>
          </pre>
        )}
      </section>

      {/* Tech Stack */}
      <section>
        <h2 onClick={() => toggle("tech")} className="collapsible-header">
          💻 Technologies
        </h2>
        {expanded.tech && (
          <div className="collapsible-content">
            <img
              src="https://skillicons.dev/icons?i=html,css,js,react,vite,vscode,git,github&perline=8"
              alt="Tech stack"
              className="tech-icons"
            />
          </div>
        )}
      </section>
    </motion.div>
  );
}
