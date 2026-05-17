import { Link } from "react-router-dom";

export function Headings() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/enterprise">Enterprise</Link>
    </>
  );
}

export function TitleIcon(){
    return(
        <h1 id= "TitleIcon"> Save Bread</h1>
    )
}