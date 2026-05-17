import Header from "../Components/Headings";
import { ContactUs } from "../Components/ContactUs";
import './LoginPage.css'


export default function Login(){
    
    return (
    <>
      <Header />

      <div id="LoginPage-Wrapper">
        <div id="LoginCard">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Let's Check Out What's New!</p>

          <form id="LoginForm">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <button type="submit" className="login-btn">Log In</button>
          </form>

          <div className="divider"></div>

          <button className="register-btn">
            New here? Create an account
          </button>
        </div>
      </div>

      <img src="toast.svg" id="login-img"/>

      <ContactUs />
    </>
  );
}