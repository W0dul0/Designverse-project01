import { AboutUs } from "./MainPage_Components/AboutUs";
import Header, { Headings } from "./MainPage_Components/Headings.tsx";
import { Announcement } from "./MainPage_Components/Announcement";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
    <Header/>

      <div id="Announcement-Section">
        <Announcement />
      </div>

      <div id="AboutUs-Section">
        <AboutUs />
      </div>
    </>
  );
}
