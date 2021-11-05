import { useState } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";
import { Mail } from "@material-ui/icons";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('service_zz23gpk', 'template_l7rc0v3', e.target, 'user_Ge8ANgSejRo48T71Pxp4i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <div className="contact" id="contact">
      <div className="leftContact">
        <img src="https://storage.googleapis.com/nextivawebsites-wordpressfiles-voip/var/www/virtual/nextiva.com/voip/2019/05/business-communication-feature-image-1.png" alt="" />
      </div>
      <div className="rightContact">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name="email"/>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>

        <div className="details">
          <Mail className="icon" />
          <span>ishbhi007@gmail.com</span>
        </div>
      </div>
    </div>
  );
}