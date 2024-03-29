import React from 'react';
import '../css/contact.css';

function Contact() {
  return (
    <section id='contact'>
        <div className="box">
            <h2>Get In Touch!</h2>
            <p>Subscribe to get in touch and to enjoy discounts, promos and much more!</p>
            <form action="" method="">
                <input type="search" name="contact" id="contact-form" placeholder='Enter your email...' />
                <button type="button" className='gradient-btn'>Subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Contact