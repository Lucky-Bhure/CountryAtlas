import { Form } from "react-router-dom";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {

  const handleSubmit = (formData) => {
    const data= Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <main>
      <div className="contact-container">
      <h1>Contact Us</h1>
      <form action={handleSubmit} className="contact-form">
        <input
          type="text"
          name="username"
          placeholder="Enter Your Name"
          autoComplete="off"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          autoComplete="off"
          required
        />
        <textarea
          name="message"
          placeholder="Enter Your Message"
          rows={10}
          autoComplete="off"
          required
        ></textarea>
        <button type="submit" >Send</button>
      </form>
      </div>
    </main>
  );
};

export default Contact;
