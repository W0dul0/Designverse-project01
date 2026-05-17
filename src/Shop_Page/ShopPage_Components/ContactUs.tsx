import "./ContactUs.css";

export function ContactUs() {
  return (
    <footer id="ContactUs-Footer">
      <h2 className="footer-heading">Contact Us</h2>

      <p className="footer-description">
        We’re always open to hearing your questions about our mission, our work,
        and how we operate. Reach out to us anytime.
      </p>

      <div className="footer-info">
        <p><strong>Email:</strong> support@designverse.com</p>
        <p><strong>Phone:</strong> (555) 123‑4567</p>
        <p>
          <strong>Directory:</strong>{" "}
          <a href="/contact-directory">View Company Directory</a>
        </p>
      </div>
    </footer>
  );
}
