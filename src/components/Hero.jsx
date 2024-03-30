import React from 'react';
import heroImg from '../images/hero-pic.png';
import '../css/hero.scss';
import { useState, useEffect } from 'react';

function Hero() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <section id='hero'>
        <div className="left">
            <h1>Develop your skills in a new {width > 600 ? "and" : "&"} unique way</h1>
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
            <img src={heroImg} alt=""/>
        </div>
    </section>
  )
}

export default Hero