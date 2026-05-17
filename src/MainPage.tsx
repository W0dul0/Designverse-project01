import { AboutUs } from './AboutUs.tsx'
import { Headings, TitleIcon } from './Headings.tsx'
import { Announcement } from './Announcement.tsx'
import './MainPage.css'
export function MainPage(){
    return(
    <>
    <div id="WebHeadings">
    <TitleIcon/>
    <div id="HeadingLinks">
    <Headings/>
    </div>
    </div>

    <div id="Announcement-Section"> 
      <Announcement/>
    </div>

    <div id="AboutUs-Section">
      <AboutUs/>
      <AboutUs2/>
    </div>
    </>
    )
}