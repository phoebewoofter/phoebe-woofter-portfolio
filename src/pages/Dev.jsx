import React from "react";
import PoemGenerator from "./dev-projects/Poems.jsx";
import Impulse from './dev-projects/Impulse.jsx';
import TicTacToe from "./dev-projects/TicTacToe.jsx";
import RockPaperScissors from "./dev-projects/RockPaperScissors.jsx";
import './Dev.css';

export default function Dev() {
  return (
    <div>
      <h1>Development Projects</h1>
      <p>Explore my software engineering projects and <a href="https://github.com/phoebewoofter" target="_blank" rel="noopener noreferrer">GitHub</a> repositories.</p>
      <Impulse/>
      <PoemGenerator/>
      <TicTacToe/>
      <RockPaperScissors/>
    </div>
  );
}