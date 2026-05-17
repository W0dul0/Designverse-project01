import Header from "../Components/Headings";
import { ContactUs } from "../Components/ContactUs";
import LeafletMapWithLocations from "./ShopPage_Components/LeafletMapWithLocations";
import { MiniStore } from "./ShopPage_Components/MiniStore"
import './ShopPage.css'

export default function Shop(){
    return(
        <>
        <Header/>
<div id="ShopLayout">
  <div id="Shop-Left">
    <LeafletMapWithLocations/>
  </div>

  <div id="Shop-Right">
    <MiniStore />
  </div>
</div>

        <ContactUs/>
        </>
    )
}