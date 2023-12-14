// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Modal, Button } from "antd";

const ContactModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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

  return (
    <div>
      <li className="modalButton">
        <Button className="contactButton" type="text" onClick={showModal}>
          CONTACT
        </Button>
      </li>
      <div className="modal">
        <Modal
          title="Formulaire de Contact"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          styles={{
            header: { "background-color": "#1a1a1a" },
            body: { "background-color": "#1a1a1a" },
            footer: { "background-color": "#1a1a1a" },
          }}
          footer={[null]}
        >
          <div className="modalContent">
            <h2>Envoyer un email</h2>
            <form onSubmit={handleSubmit}>
              <label>Nom</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Doe"
              />
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="John.Doe@gmail.com"
              />
              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Votre message"
              />
              <input type="submit" value="Envoyer" />
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ContactModal;
