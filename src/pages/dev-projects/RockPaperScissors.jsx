import React, { useState } from "react";
import { motion } from "framer-motion";
import "./RockPaperScissors.css";

export default function RockPaperScissors() {
  const [expanded, setExpanded] = useState({
    features: true,
    install: false,
    tech: false,
  });

  const toggle = (section) =>
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));

  return (
    <motion.div
      className="rps-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <h1>Rock Paper Scissors ✊✋✌️</h1>
      <p>
        A simple <code>React</code> game that pits the player against the
        computer in the classic battle of Rock, Paper, Scissors. Built with
        clean UI and straightforward game logic.
      </p>

      <h2>🌟 Try It Here</h2>
      <div className="iframe-wrapper">
        <iframe
          src="https://rock-paper-scissors-game-pw.netlify.app/"
          title="Rock Paper Scissors App"
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
              <strong>Player vs Computer:</strong> Randomized computer choices
              for fair play.
            </li>
            <li>
              <strong>Score Tracking:</strong> Keeps track of wins, losses, and
              ties.
            </li>
            <li>
              <strong>Replay:</strong> Reset and play again anytime.
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
              git clone https://github.com/phoebewoofter/rock-paper-scissors.git{"\n"}
              cd rock-paper-scissors{"\n"}
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
              src="https://skillicons.dev/icons?i=html,css,js,react,vite,git,vscode,github&perline=8"
              alt="Tech stack"
              className="tech-icons"
            />
          </div>
        )}
      </section>
    </motion.div>
  );
}
