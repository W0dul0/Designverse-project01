import { AboutMe } from './AboutMe.tsx'
import { Headings, TitleIcon } from './Headings.tsx'
import './App.css'

function App() {

  return (
    <>
    //Website Headings
    <div id="WebHeadings">
    <TitleIcon/>
    <div id="HeadingLinks">
    <Headings/>
    </div>
    </div>

    <div id="AboutMe-Section">
      <AboutMe/>
    </div>
    </>
  )
}


export default App
