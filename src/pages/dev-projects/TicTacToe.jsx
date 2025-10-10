import React, { useState } from "react";
import { motion } from "framer-motion";
import "./TicTacToe.css";

export default function TicTacToe() {
  const [expanded, setExpanded] = useState({
    features: true,
    install: false,
    tech: false,
  });

  const toggle = (section) =>
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));

  return (
    <motion.div
      className="tictactoe-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <h1>Tic Tac Toe 🎮</h1>
      <p>
        A simple <code>React</code> implementation of the classic Tic Tac Toe
        game. Includes a welcoming start screen with animation, winner
        detection, and replay functionality.
      </p>

      <h2>🌟 Try It Here</h2>
      <div className="iframe-wrapper">
        <iframe
          src="https://pw-tic-tac-toe.netlify.app/"
          title="Tic Tac Toe App"
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
              <strong>Welcome Screen:</strong> Simple CSS animation with a play
              button.
            </li>
            <li>
              <strong>Game Logic:</strong> Determines winner or draw.
            </li>
            <li>
              <strong>Replay:</strong> “Play Again” button after a win or draw.
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
              git clone https://github.com/phoebewoofter/tic-tac-toe.git{"\n"}
              cd tic-tac-toe{"\n"}
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
              src="https://skillicons.dev/icons?i=html,css,js,react,vscode,vite,git,github&perline=8"
              alt="Tech stack"
              className="tech-icons"
            />
          </div>
        )}
      </section>
    </motion.div>
  );
}
