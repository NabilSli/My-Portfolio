// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactModal = () => {
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5xxbpd8",
        "template_9a0udzr",
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "Hfarmy03JYAWYCtcr"
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <li>
        <button className="navAnchor" onClick={() => setShowModal(true)}>
          Contact
        </button>
      </li>
      {showModal && (
        <div className="modal">
          <div className="modalContent" ref={modalRef}>
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
