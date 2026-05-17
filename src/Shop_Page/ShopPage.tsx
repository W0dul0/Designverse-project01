import Header from "../Components/Headings";
import { ContactUs } from "../Components/ContactUs";
import LeafletMapWithLocations from "./ShopPage_Components/LeafletMapWithLocations";
import { MiniStore } from "./ShopPage_Components/MiniStore"

export default function Shop(){
    return(
        <>
        <Header/>
<div id="ShopLayout">
  <div id="ShopLeft">
    <LeafletMapWithLocations/>
  </div>

  <div id="ShopRight">
    <MiniStore />
  </div>
</div>

        <ContactUs/>
        </>
    )
}