import { AboutUs } from "./MainPage_Components/AboutUs";
import { Headings, TitleIcon } from "./MainPage_Components/Headings";
import { Announcement } from "./MainPage_Components/Announcement";
import "./MainPage.css";
import { useState, useEffect } from "react";

export default function MainPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScrolled(isScrolled);

      if (!isScrolled) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="WebHeadings" className={scrolled ? "scrolled" : ""}>
        <TitleIcon />

        {(!scrolled || menuOpen) && (
          <div id="HeadingLinks" className={menuOpen ? "fade-in" : ""}>
            <Headings />
          </div>
        )}

        {scrolled && !menuOpen && (
          <div id="Hamburger" onClick={() => setMenuOpen(true)}>
            <img src="/icons8-menu.svg" />
          </div>
        )}

        {menuOpen && (
          <div id="CloseMenu" onClick={() => setMenuOpen(false)}>
            <img src="/icons8-close.svg" />
          </div>
        )}
      </div>

      <div id="Announcement-Section">
        <Announcement />
      </div>

      <div id="AboutUs-Section">
        <AboutUs />
      </div>
    </>
  );
}
