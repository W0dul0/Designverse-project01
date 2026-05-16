import { AboutUs } from './AboutUs.tsx'
import { Headings, TitleIcon } from './Headings.tsx'
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

    <div id="AboutUs-Section">
      <AboutUs/>
    </div>
    </>
  )
}


export default App
