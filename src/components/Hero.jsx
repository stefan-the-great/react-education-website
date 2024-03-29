import React from 'react';
import heroImg from '../images/hero-pic.png';
import '../css/hero.css';

function Hero() {
  return (
    <section id='hero'>
        <div className="left">
            <h1>Develop your skills in a new and unique way</h1>
            <p>Explore a transformative approach to skill development on our online learning platform. Uncover a new relm of learnng experiences and elevate your expertise in unique ways.</p>
            <div className="action-buttons">
                <div id="enroll-btn" className='gradient-btn'>
                    <a href="#popular-courses">Enroll Now</a>
                </div>
                <div id="whatIs-btn">
                    What's Etech?
                </div>
            </div>
        </div>

        <div className="right">
            <img src={heroImg} alt=""  style={{height: '80vh', width: 'auto'}}/>
        </div>
    </section>
  )
}

export default Hero