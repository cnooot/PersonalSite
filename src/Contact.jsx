import React from "react";


function Contact(){

    return(   
        <div className="Tit">
            <div className="projectstitle">
                <h2>Get in touch!</h2>
            </div>
            <div className="contactbox">
                <div className="topcontact">
                    <input type="text" className="name" placeholder="Your Name" />  
                    <input type="text" className="phone" placeholder="Your phone number"/>
                    <input type="text" className="email" placeholder="Your email"/>
                </div>
                <div className="botcontact">
                    <textarea name="" id="txtarea" cols="30" rows="10" placeholder="Leave ur message here!"></textarea>
                    <div className="buttonsubmit">
                        <button className="submitbutton">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>


);
}

export default Contact;