import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <p>
                THANK YOU, please feel free to contact me, through my social handels
              </p>
              <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaPinterest className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
