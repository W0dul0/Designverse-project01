import { AboutUs } from './AboutUs.tsx'
import { Headings, TitleIcon } from './Headings.tsx'
import { Announcement } from './Announcement.tsx'
import './MainPage.css'
import { useState, useEffect } from "react";

export function MainPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="WebHeadings" className={scrolled ? "scrolled" : ""}>
        <TitleIcon />

        {!scrolled && (
          <div id="HeadingLinks">
            <Headings />
          </div>
        )}

        {scrolled && (
          <div id="Hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        )}
      </div>

      {menuOpen && (
        <div id="DropdownMenu">
          <Headings />
        </div>
      )}

      <div id="Announcement-Section"> 
      <Announcement/>
    </div>

    <div id="AboutUs-Section">
      <AboutUs/>
    </div>
    </>
  )
}