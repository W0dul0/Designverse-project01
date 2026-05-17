import Header from "../Components/Headings";
import { ContactUs } from "../Components/ContactUs";
import LeafletMapWithLocations from "./ShopPage_Components/LeafletMapWithLocations";

export default function Shop(){
    return(
        <>
        <Header/>
    <div id="ShopPage-Container">
    <div id="ShopPage-Left">
    <LeafletMapWithLocations/>
    </div>

    <div id="ShopPage-Right">
    <MiniStore />
  </div>
</div>

        <ContactUs/>
        </>
    )
}