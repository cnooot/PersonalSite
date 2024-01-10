import React from "react";
import emailjs from "@emailjs/browser";

function Contact(){

    const sendEmail = (e)=>{
        e.preventDefault();
        alert("submitted");
        emailjs.sendForm('service_yd6ktyg', 'template_b4vcked', e.target, 'w0ta3B_1ZxcmAOvPS')
    };
    return(   
        <div className="Tit">
            <div className="projectstitle">
                <h2>Get in touch!</h2>
            </div>
            <form className="contactform" onSubmit={sendEmail}>
            <div className="contactbox">
                <div className="topcontact">
                    <input type="text" id="name" name="name" className="name" placeholder="Your Name" required/>  
                    <input type="text" id="phone" className="phone" placeholder="Your phone number" required/>
                    <input type="email" id="email" className="email" placeholder="Your email" required/>
                </div>
                <div className="botcontact">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Leave ur message here!"></textarea>
                    <div className="buttonsubmit">
                        <button className="submitbutton">SUBMIT</button>
                    </div>
                </div>
            </div>
            </form>
        </div>


);
}

export default Contact;