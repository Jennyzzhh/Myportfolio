import React, { useState } from "react";
import {validateEmail } from "../utils/helpers";

function ContactForm(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage,setErrorMessage] = useState("")
  

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage("Email or name or message is invalid");

      return;
    }
    alert(`Hello ${name}`);

    //clear out the input
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
 <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <form onSubmit={handleFormSubmit}>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" onChange={handleInputChange}/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email" onChange={handleInputChange}/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject" onChange={handleInputChange}/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}onChange={handleInputChange}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        </div>
                    </form>
                </div>
</>
  )



    {/* // <div>
    //   <form className="form">
    //     <input
    //       value={name}
    //       name="name"
    //       onChange={handleInputChange}
    //       type="text"
    //       placeholder="name"
    //     />
    //     <input
    //       value={email}
    //       name="email"
    //       onChange={handleInputChange}
    //       type="email"
    //       placeholder="email"
    //     />
    //     <input
    //       value={message}
    //       name="message"
    //       onChange={handleInputChange}
    //       type="message"
    //       placeholder="message"
    //     />
    //     <button type="button" onClick={handleFormSubmit}>
    //       Submit
    //     </button>
    //   </form> */}
      {/* {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
            </div>
      )} */}

    }
export default ContactForm;
