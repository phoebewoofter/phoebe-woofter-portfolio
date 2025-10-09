import React, { useState } from "react";
import { motion } from "framer-motion";
import impulse from '../../assets/impulse.jpeg';
import "./Impulse.css";

export default function Impulse() {
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
      className="impulse-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <a href="https://impulsepro.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={impulse} alt="Playlist creation project" className="impulse" /></a>
      </div>
      <h1>IMPULSE 🎧</h1>
      <p>
        Impulse is a <code>React</code> project developed by Phoebe Woofter, an aspiring developer and current Codecademy student. The application prompts users to log in to Spotify so they can search for music in the Spotify library, listen to track previews, create personalized playlists, and save them to their Spotify account.
      </p>

      <h2>📝 Note</h2>
      <p>Impulse is currently in development mode with the Spotify API.</p>

      <section>
        <h2 onClick={() => toggle("features")} className="collapsible-header">
          🎤 Features
        </h2>
        {expanded.features && (
          <ul className="collapsible-content">
            <li><strong>Authentication:</strong> Users can log in to Spotify.</li>
            <li><strong>Search:</strong> Users can search for songs through the Spotify Web API.</li>
            <li><strong>Playlist Management:</strong> Users can create, name, edit, and upload playlists to Spotify.</li>
          </ul>
        )}
      </section>

      <section>
        <h2 onClick={() => toggle("install")} className="collapsible-header">
          🛠️ Installation
        </h2>
        {expanded.install && (
          <pre className="collapsible-content">
            <code>
              git clone https://github.com/phoebewoofter/pulse.git{'\n'}
              npm install{'\n'}
              npm start
            </code>
          </pre>
        )}
      </section>

      <section>
        <h2 onClick={() => toggle("tech")} className="collapsible-header">
          💻 Technologies
        </h2>
        {expanded.tech && (
          <div className="collapsible-content">
            <img
              src="https://skillicons.dev/icons?i=html,css,js,react,vscode,git,github,storybook&perline=7"
              alt="Tech stack"
              className="tech-icons"
            />
          </div>
        )}
      </section>
    </motion.div>
  );
}
