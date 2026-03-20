import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Copywriting from "./pages/Copywriting";
import Dev from "./pages/Dev";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login page (public) */}
        <Route path="/login" element={<Login />} />

        {/* Protected app */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Homepage />} />
          <Route path="writing" element={<Copywriting />} />
          <Route path="dev" element={<Dev />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;