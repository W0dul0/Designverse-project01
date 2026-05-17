import { AboutUs } from "./MainPage_Components/AboutUs";
import { Announcement } from "./MainPage_Components/Announcement";
import Header from "../components/ContactUs";
import ContactUs from "../components/ContactUs";
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
