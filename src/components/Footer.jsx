import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import '../css/footer.css'

function Footer() {
  return (
    <section id='footer'>
        <div className="logo-section">
            <h2>Etech.</h2>
            <p>Explore a transformative approach to skill development on our online learning platform.</p>
            <div className="socials">
                <a href="http://www.facebook.com/Stefan.Fernando.FB"><FaFacebook /></a>
                <BsWhatsapp />
                <a href="https://github.com/stefan-the-great"><FaGithub /></a>
            </div>
        </div>
        <div className="company">
            <h3>Company</h3>
            <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Community</li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
        </div>
        <div className="support">
            <h3>Support</h3>
            <ul>
                <li>Help Center</li>
                <li>Tweet @ Us</li>
                <li>Webinars</li>
                <li>Feedback</li>
            </ul>
        </div>
        <div className="links">
            <h3>Links</h3>
            <ul>
                <li><a href="#search-courses">Courses</a></li>
                <li><a href="teachers">Become Teacher</a></li>
                <li>Service</li>
                <li>All in One</li>
            </ul>
        </div>
        <div className="contact-links">
            <h3>Contact Us</h3>
            <ul>
                <li><a href="tel:+94123456789">+94 77 123 4567</a></li>
                <li><a href="mailto:etechinfo@gmail.com">etechinfo@gmail.com</a></li>
            </ul>
        </div>
    </section>
  )
}

export default Footer