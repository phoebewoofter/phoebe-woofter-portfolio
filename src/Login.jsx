import { useState } from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import dayBg from "./assets/day.png";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const correctPassword = "portfolio123"; // CHANGE THIS

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      localStorage.setItem("auth", "true");
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-page">
      {/* Background (default to light theme) */}
      <div
        className="background"
        style={{ backgroundImage: `url(${dayBg})` }}
      />
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="login-title">Enter the Playlist</h2>

        <form onSubmit={handleLogin}>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            className="login-input"
          />

          <button type="submit" className="login-button">
            Play ▶
          </button>
        </form>

        {error && (
          <p className="login-error">Incorrect password</p>
        )}
      </motion.div>
    </div>
  );
}
