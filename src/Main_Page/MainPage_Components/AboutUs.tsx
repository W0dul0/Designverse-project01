export function AboutUs(){

    return(
  <div id="AboutUs-Section">

  <h1 id="AboutUs-Heading">About Us</h1>

  <p id="AboutUs-Paragraph">
    Save Bread is a web application that allows bakeries and restaurants to sell
    unsold bread at the end of the day. Customers can pick up bread before it is
    thrown away, helping reduce food waste and support local businesses.
  </p>

  <div id="AboutUs-Cards">

    <div className="about-card">
      <h2>Customers</h2>
      <p>Press the SHOP button to find available bread. Sign up to create an account and order bread.</p>
      <button className="about-btn">Shop</button>
    </div>

    <div className="about-card">
      <h2>Enterprises</h2>
      <p>Create an enterprise account to sell unsold bread. Wait for verification to begin posting items.</p>
      <button className="about-btn">Enterprise Sign Up</button>
    </div>

  </div>

</div>
    )
}