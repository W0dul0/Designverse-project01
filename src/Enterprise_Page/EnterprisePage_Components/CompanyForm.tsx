export function CompanyForm(){
    return(
        <>
        <h1 id="CompanyForm-Heading"> Reach Out to Us!</h1>
        <p id="CompanyForm-Paragraph">
        If you are an enterprise that are interested in supporting our cause of saving unsold bread, reducing waste, and want another opportunity to earn more sales 
        through out shop, fill out the shop application 
        form below and we will evaluate your form
        </p>
    <div id="CompanyFormSection">
  <h2>Company Inquiry Form</h2>

  <form id="CompanyForm">
    <label>Company Name</label>
    <input type="text" placeholder="Enter your company name" required />

    <label>Contact Person</label>
    <input type="text" placeholder="Who should we speak with?" required />

    <label>Email</label>
    <input type="email" placeholder="name@company.com" required />

    <label>Phone Number</label>
    <input type="tel" placeholder="(555) 123‑4567" />

    <label>Message</label>
    <textarea placeholder="Tell us how we can work together…" required />

    <button type="submit">Submit Inquiry</button>
  </form>
</div>

        </>
    )
}