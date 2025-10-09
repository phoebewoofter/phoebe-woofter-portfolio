import React from "react";
import impulse from '../assets/impulse.jpeg';
import './Dev.css';

export default function Dev() {
  return (
    <div>
      <h1>Development Projects</h1>
      <p>Explore my software engineering projects and GitHub repositories.</p>
      <div>
        <div className="impulse" style={{backgroundImage: `url(${impulse})`}}></div>
      </div>
    </div>
  );
}