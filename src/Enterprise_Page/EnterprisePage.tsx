import LeafletMapWithLocations from "./EnterprisePage_Components/LeafletMapWithLocations";
import {CompanyForm} from "./EnterprisePage_Components/CompanyForm"
import Header from "../components/ContactUs";
import ContactUs from "../components/ContactUs";


export default function Enterprise(){
    return(
        <>
        <Header/>

        <h1 id="Enterprise-Title">Enterprise</h1>

        <h1 id="BusinessMap-Heading"> Find Partners</h1>
        <LeafletMapWithLocations/>

        <CompanyForm/>

        <ContactUs/>
        </>
    )
}