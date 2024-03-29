import React from 'react'
import TeacherPic from '../images/teacher-pic.png';
import '../css/teachers.css'

function Tearchers() {
  return (
    <section id="teachers">
        <div className="left">
            <h2>If You Are A Certified Teacher Then <span className='color-word' >Become An Instructor</span></h2>
            <p>Unlock the opportunity to inspire and educate by joining our team of instructors. If you're a certified teacher, elevate your impact and share your expertise with learners worldwide.</p>
            <div className="perks">
                <h2>Enjoy Many Perks</h2>
                <ul>
                    <li>Global Impact</li>
                    <li>Creative Freedom</li>
                    <li>Flexible Schedule</li>
                    <li>Monetize Your Expertise</li>
                    <li>Innovative Teaching Tools</li>
                    <li>Professional Development</li>
                    <li>Recognition And Reputation</li>
                    <li>Networking Opportunities</li>
                </ul>
            </div>
            <div className="action-btn">
                <div id="become-instructor-btn" className='gradient-btn'>
                    <a href="#courses">Become an Instructor</a>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="outer-wrapper">
                <div className="inner-wrapper">
                    <img src={TeacherPic} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tearchers