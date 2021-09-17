import React, { useState } from "react";
import "./Contact.css";
import db from "./BoardComponents/firebase";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs.sendForm(
      "service_oc9yixa",
      "template_2jfa8zu",
      e.target,
      "user_Unie1Gg32L2w8e8IN6kpu"
    );
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        subject: subject,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us </h1>
      <div className="form_row">
        <input
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form_row">
        <input
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form_row">
        <input
          placeholder="Subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <textarea
        placeholder="Message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      
      <button
        type="submit"
        className="contact_form_button"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
