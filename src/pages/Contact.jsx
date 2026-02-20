import "./InfoPages.css";

function Contact() {
  return (
    <div className="info-container">
      <h1>Contact Us</h1>

      <div className="contact-card">
        <p>If you have any queries regarding Encrypted File Vault, feel free to reach out.</p>

        <div className="contact-item">
          📧 Email: support@efv.com
        </div>

        <div className="contact-item">
          📞 Phone: +91 98765 43210
        </div>

        <div className="contact-item">
          📍 Location: Bangalore, India
        </div>
      </div>
    </div>
  );
}

export default Contact;
