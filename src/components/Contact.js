import React, { useRef } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    emailjs
      .sendForm(
        'service_fstag1n', // Replace with your EmailJS service ID
        'template_t2hylqz', // Replace with your EmailJS template ID
        form.current, // The form reference
        'Y7VexVN2DN85Y3Ue_' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent!");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="container mt-5">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
