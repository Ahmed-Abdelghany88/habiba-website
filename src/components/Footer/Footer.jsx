import React, { useState } from "react";
import "./Footer.css";
import logo2 from "../../assets/images/logo2.png";
import useForm from "../../hooks/useForm"; // <-- your hook
import validate from "../../hooks/validate"; // <-- validation logic

const Footer = () => {
  const [status, setStatus] = useState("");

  // callback when form is valid
  const sendMail = async () => {
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setTimeout(() => setStatus(""), 3000);
        values.name = "";
        values.email = "";
        values.phone = "";
        values.message = "";
      } else {
        setStatus("❌ Failed: " + data.message);
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (err) {
      setStatus("❌ Error: " + err.message);
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useForm(sendMail, validate);

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <img className="footer-logo" src={logo2} alt="MyBrand" />
          <p style={{ color: "#fff", padding: "10px 0", margin: 0 }}>
            Your WhatsApp number
          </p>
          <p style={{ color: "#fff", padding: "10px 0", margin: 0 }}>
            Your phone number
          </p>
        </div>

        <div className="footer-mailform">
          <form className="mail-form" onSubmit={handleSubmit} noValidate>
            <h3>Contact Us:</h3>

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter a valid email"
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <label>Message:</label>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              style={{ height: "100px" }}
            />
            {errors.message && <p className="error">{errors.message}</p>}

            <button className="send-button" type="submit">Send</button>
          </form>

          {status && (
            <div className="popup-status">
              <p>{status}</p>
            </div>
          )}
        </div>
      </div>

      <div className="footer-info">
        <p>&copy; 2025 Habiba-Bahaa. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
