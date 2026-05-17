import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Headings.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScrolled(isScrolled);

      // Auto-close menu when scrolling back up
      if (!isScrolled) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="WebHeadings" className={scrolled ? "scrolled" : ""}>
      <div id="TitleIcon">Save Bread</div>

      {/* Full links when not scrolled OR menu is open */}
      {(!scrolled || menuOpen) && (
        <div id="HeadingLinks" className={menuOpen ? "fade-in" : ""}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/enterprise">Enterprise</Link>
        </div>
      )}

      {/* Hamburger */}
      {scrolled && !menuOpen && (
        <div id="Hamburger" onClick={() => setMenuOpen(true)}>
          <img src="/icons8-menu.svg" />
        </div>
      )}

      {/* Close icon */}
      {menuOpen && (
        <div id="CloseMenu" onClick={() => setMenuOpen(false)}>
          <img src="/icons8-close.svg" />
        </div>
      )}
    </div>
  );
}


export function TitleIcon(){
    return(
        <h1 id= "TitleIcon"> Save Bread</h1>
    )
}