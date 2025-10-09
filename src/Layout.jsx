import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import dayBg from './assets/day.png';
import nightBg from './assets/night.png';
import github from './assets/github.png';
import email from './assets/email.png';
import play from './assets/play.png';
import pause from './assets/pause.png';
import skip from './assets/skip.png';
import home from './assets/home.png';
import linkedin from './assets/linkedin.png';
import about from './assets/about.png';
import copywriting from './assets/copywriting.png';
import "./Layout.css";

export default function Layout() {
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Map routes to display names
  const routeNames = {
    "/": "Home",
    "/copywriting": "Copywriting",
    "/dev": "Dev",
    "/about": "About",
    "/contact": "Contact"
  };

  const currentPage = routeNames[location.pathname] || "Portfolio";

  return (
    <div className={`app ${theme}`}>
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* Animated Background */}
      <AnimatePresence mode="wait">
      <motion.div
        className="background"
        style={{ backgroundImage: `url(${theme === 'light' ? dayBg : nightBg})` }}
      />
      </AnimatePresence>

      {/* Navigation */}
      <nav className="music-player-nav">
        <div className="player-header">Phoebe’s Playlist</div>
        <ul className="playlist">
          <li>
            <span className="album-art" style={{ backgroundImage: `url(${home})` }}></span>
            <Link to="/">Home</Link>
            <Link to="/" className="play-btn" style={{ backgroundImage: `url(${play})` }} />
          </li>

          <li>
            <span className="album-art" style={{ backgroundImage: `url(${copywriting})` }}></span>
            <Link to="/copywriting">Copywriting</Link>
            <Link to="/copywriting" className="play-btn" style={{ backgroundImage: `url(${play})` }} />
          </li>

          <li>
            <span className="album-art" style={{ backgroundImage: `url(${github})` }}></span>
            <Link to="/dev">Dev</Link>
            <Link to="/dev" className="play-btn" style={{ backgroundImage: `url(${play})` }} />
          </li>

          <li>
            <span className="album-art" style={{ backgroundImage: `url(${about})` }}></span>
            <Link to="/about">About</Link>
            <Link to="/about" className="play-btn" style={{ backgroundImage: `url(${play})`}} />
          </li>

          <li>
            <span className="album-art" style={{ backgroundImage: `url(${email})`}}></span>
            <Link to="/contact">Contact</Link>
            <Link to="/contact" className="play-btn" style={{ backgroundImage: `url(${play})`}}/>
          </li>
        </ul>

        {/* Now Playing Bar */}
        <div className="now-playing">
          <span className="now-label">Now Playing:</span>
            <span className="track-name">{currentPage}</span>
            {/* Progress Bar */}
            <div className="progress-container">
              <div key={location.pathname} className="progress-bar"></div>
            </div>
        </div>
    </nav>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
