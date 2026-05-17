import { AboutUs, AboutUs2} from './AboutUs.tsx'
import { Headings, TitleIcon } from './Headings.tsx'
import { Announcement } from './Announcement.tsx'
import './App.css'

function App() {

  return (
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


export default App
