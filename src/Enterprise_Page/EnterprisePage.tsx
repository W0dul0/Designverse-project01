import Header from "./EnterprisePage_Components/Headings"
import LeafletMapWithLocations from "./EnterprisePage_Components/LeafletMapWithLocations";
import {CompanyForm} from "./EnterprisePage_Components/CompanyForm"
import { ContactUs } from "./EnterprisePage_Components/ContactUs";

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