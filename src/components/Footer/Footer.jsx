import React, { useState } from 'react';
import './Footer.css'; 
import logo2 from "../../assets/images/logo2.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed: " + data.message);
      }
    } catch (err) {
      setStatus("❌ Error: " + err.message);
    }
  };

  return (
    <div className="footer">
      <div className='footer-container'>
        <div className='logo-container'>
          <img className="footer-logo" src={logo2} alt="MyBrand" />
          <p style={{ color: '#fff', padding: '10px 0', margin: 0 }}>Your WhatsApp number</p>
          <p style={{ color: '#fff', padding: '10px 0', margin: 0 }}>Your phone number</p>
        </div>

        <div className="footer-mailform">
          <form className="mail-form" onSubmit={handleSubmit}>
            <h3>Contact Us:</h3>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter a valid email" required />
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
            <button type="submit">Send</button>
          </form>
          {status && <p style={{ color: "white" }}>{status}</p>}
        </div>
      </div>
      <div className="footer-info">
        <p>&copy; 2025 Habiba-Bahaa. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
