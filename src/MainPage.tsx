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

  {/* Show full links if NOT scrolled OR if menu is open */}
  {(!scrolled || menuOpen) && (
    <div id="HeadingLinks" className={menuOpen ? "fade-in" : ""}>
      <Headings />
    </div>
  )}

  {/* Show hamburger only when scrolled AND menu is closed */}
  {scrolled && !menuOpen && (
    <div id="Hamburger" onClick={() => setMenuOpen(true)}>
      <img src="/icons8-menus.svg" />
    </div>
  )}

  {/* Close button when menu is open */}
  {menuOpen && (
    <div id="CloseMenu" onClick={() => setMenuOpen(false)}>
      <img src="/icons8-close.svg"/>
    </div>
  )}
</div>


      <div id="Announcement-Section"> 
      <Announcement/>
    </div>

    <div id="AboutUs-Section">
      <AboutUs/>
    </div>
    </>
  )
}