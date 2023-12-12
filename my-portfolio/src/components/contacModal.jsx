import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          to_name: name,
          from_email: email,
          message: message,
        },
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          console.log(
            "Email envoyé avec succès!",
            response.status,
            response.text
          );
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'email:", error);
        }
      );
    //NOTE: empty form fields after use
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <li>
        <button className="navAnchor" onClick={() => setShowModal(true)}>
          Contact
        </button>
      </li>
      {showModal && (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Envoyer un email</h2>
            <form onSubmit={handleSubmit}>
              <label>Nom</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
