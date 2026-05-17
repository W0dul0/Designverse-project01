import { AboutUs } from "./MainPage_Components/AboutUs";
import Header from "./MainPage_Components/Headings.tsx";
import { Announcement } from "./MainPage_Components/Announcement";
import { ContactUs } from "./MainPage_components/ContactUs";
import "./MainPage.css";

export default function Main() {
  return (
    <>
    <Header/>

      <div id="Announcement-Section">
        <Announcement />
      </div>

      <div id="AboutUs-Section">
        <AboutUs />
      </div>

      <ContactUs/>
    </>
  );
}
