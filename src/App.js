import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;