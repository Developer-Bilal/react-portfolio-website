import React, { useState } from "react";
import "./contact.scss";

export const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="shake" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onClick={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP.</span>}
        </form>
      </div>
    </div>
  );
};

// export default Contact;
