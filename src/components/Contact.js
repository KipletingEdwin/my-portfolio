import React,{useState} from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstname :"",
    lastname: "",
    email: "",
    phone: "",
  })

function handleChange(e){
  setFormData({...formData,[e.target.name]: e.target.value});
  console.log(formData);
}

function handleSubmit(){
  console.log("Hey")
}


  return (
    <div className="contact">
      <h1> Get In Touch</h1>
      <div className="contact-div">
        <div className="contact-image"></div>
        <div className="contact-inputs">
          <div className="section-1">
            <form>
              <input type="text" name= "firstname" onChange={handleChange} placeholder="First Name"></input>
              <input type="text" name = "lastname" onChange={handleChange}  placeholder="Last Name"></input>
              <input type="text" name = "email" onChange={handleChange}  placeholder="Email Address"></input>
              <input type="text" name = "phone" onChange={handleChange}  placeholder="Phone Number"></input>
            </form>
          </div>
          <div className="section-2">
            <input type="text" name = "message" onChange={handleChange}  placeholder="Message"></input>
          </div>
        </div>
      </div>
      <div className="my-button">
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default Contact;
