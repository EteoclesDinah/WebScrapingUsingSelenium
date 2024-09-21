import React from "react";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    return (
        <div className="container">
            <div className="contactContainer">
                <h1>Feel Free to Contact Us.</h1>
                <p>Reach out through our social media platforms:</p>
            

            <div className="socialIcons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=raikamala219@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGoogle} />
                </a>


            </div>
            </div>
            
        </div>
    );
};

export default Contact;