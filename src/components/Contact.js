import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1> Get In Touch</h1>
      <div className="contact-div">
        <div className="contact-image"></div>
        <div className="contact-inputs">
          <div className="section-1">
            <form>
              <input type="text" placeholder="First Name"></input>
              <input type="text" placeholder="Last Name"></input>
              <input type="text" placeholder="Email Address"></input>
              <input type="text" placeholder="Phone Number"></input>
            </form>
          </div>
          <div className="section-2">
            <input type="text" placeholder="Message"></input>
          </div>
        </div>
      </div>
      <div className="my-button">
        <button>Send</button>
      </div>
    </div>
  );
}

export default Contact;
