import { AboutUs } from "./MainPage_Components/AboutUs";
import { Headings } from "./MainPage_Components/Headings";
import { Announcement } from "./MainPage_Components/Announcement";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
    <TitleIcon/>
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
