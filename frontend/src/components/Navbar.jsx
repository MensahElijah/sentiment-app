import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-brand"><Link to="/">SentimentAI</Link></div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
