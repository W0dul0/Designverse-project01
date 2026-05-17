import Header from "../Components/Headings";
import { ContactUs } from "../Components/ContactUs";
import LeafletMapWithLocations from "./ShopPage_Components/LeafletMapWithLocations";

export default function Shop(){
    return(
        <>
        <Header/>
        <LeafletMapWithLocations/>

        <ContactUs/>
        </>
    )
}