import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./styles/Contact.css";

function Contact() {
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rvu2w8x", // Your EmailJS service ID
        "template_yau9t6n", // Your EmailJS template ID
        e.target, // The form element
        "xJh1MF3UPME4vYCKx" // Your EmailJS public key
      )
      .then(
        (result) => {
          setNotification({ type: "success", message: "Message Sent!" });
          e.target.reset(); // Clear the form
        },
        (error) => {
          setNotification({ type: "error", message: "Something went wrong!" });
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-left">
        <h1>Let’s Get Social!</h1>
      </div>
      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="user_name">Name</label>
            <input type="text" id="user_name" name="user_name" placeholder="Enter your name" required />
          </div>
          <div className="input-group">
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="topic">Subject / Topic</label>
            <input type="text" id="topic" name="topic" placeholder="Subject / Topic" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
          {notification && (
            <div className={`notification ${notification.type === "success" ? "success" : "error"}`}>
              {notification.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
