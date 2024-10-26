import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contato</h1>
      <form>
        <label>Nome:</label>
        <input type="text" name="name" />
        <br />
        <label>Mensagem:</label>
        <textarea name="message"></textarea>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
