import React from 'react';

import Person2 from '../images/person2.png';

import { FaStar } from "react-icons/fa";

import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

import '../css/testimonials.scss'

function Testimonials() {
  return (
    <section id='testimonials'>
        <h2>Student Testimonials</h2>
        <p>Here's what our students have to say about their transformative learning experience: Real stories, real growth. Discover firsthand the impact our courses have had on their lives.</p>
        <div className="carosel-container">
            <div className="block">
                <div className="top">
                    <img src={Person2} alt="" />
                    <div className="details">
                        <h3>Alexa Rodriguez</h3>
                        <p>Web Developer</p>
                        <div className="rating">
                            <FaStar color='yellow' /> 
                            <FaStar color='yellow' /> 
                            <FaStar color='yellow' /> 
                            <FaStar color='yellow' /> 
                            <FaStar color='yellow' /> 
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p>Enrolling in courses at this eLearning platform was a game-changer for me. Absolutely transformative experience!</p>
                </div>
            </div>
            <div className="block">
                <div className="top">
                    <img src={Person2} alt="" />
                    <div className="details">
                        <h3>Alexa Rodriguez</h3>
                        <p>Web Developer</p>
                        <div className="rating">
                            <FaStar color='yellow' /> 
                            <FaStar color='yellow' /> 
                            <FaStar color='yellow' /> 
                            <FaStar color='yellow' /> 
                            <FaStar color='yellow' /> 
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p>Enrolling in courses at this eLearning platform was a game-changer for me. Absolutely transformative experience!</p>
                </div>
            </div>
            <div className="block">
                <div className="top">
                    <img src={Person2} alt="" />
                    <div className="details">
                        <h3>Alexa Rodriguez</h3>
                        <p>Web Developer</p>
                        <div className="rating">
                            <FaStar color='yellow' /> 
                            <FaStar color='yellow' /> 
                            <FaStar color='yellow' /> 
                            <FaStar color='yellow' /> 
                            <FaStar color='yellow' /> 
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p>Enrolling in courses at this eLearning platform was a game-changer for me. Absolutely transformative experience!</p>
                </div>
            </div>
        </div>
        <div className="carosel-controls" style={{color: 'white', display: 'flex'}}>
            <button className="prv-btn"><IoChevronBackOutline color='white' /></button>
            <div className="page">01/15</div>
            <button className="nxt-btn"><IoChevronForward  color='white'  /></button>
        </div>
        {/* CREATE FUNCTIONALITY IN THIS CAROSEL AREA */}

    </section>
  )
}

export default Testimonials