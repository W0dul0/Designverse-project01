import { AboutUs } from "./MainPage_Components/AboutUs";
import { Headings, TitleIcon } from "./MainPage_Components/Headings";
import { Announcement } from "./MainPage_Components/Announcement";
import "./MainPage.css";
import { useState, useEffect } from "react";

export default function MainPage() {
  return (
    <>
    <Headings/>

      <div id="Announcement-Section">
        <Announcement />
      </div>

      <div id="AboutUs-Section">
        <AboutUs />
      </div>
    </>
  );
}
