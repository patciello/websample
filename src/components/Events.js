/* src/components/Contact.js */
import React from "react";

function Contact() {
  return (
    <div className="container">
      <h1>Contato</h1>
      <form>
        <label>Nome:</label>
        <input type="text" name="name" />
        <label>Mensagem:</label>
        <textarea name="message"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
