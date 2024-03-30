import React from 'react';
import Person1 from '../images/person1.png';
import Person2 from '../images/person2.png';
import Person3 from '../images/person3.png';
import Person4 from '../images/person4.png';

import { PiGraduationCap } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";

import '../css/courses.scss'

function Courses() {
  return (
    <section id='courses'>
        <div className="left">
            <div className="outer-box">
                <div className="inner-box">
                    <img src={Person1} alt="" style={{borderBottomRightRadius: '45%'}} />
                    <img src={Person2} alt="" style={{borderBottomLeftRadius: '45%'}} />
                    <img src={Person3} alt="" style={{borderTopRightRadius: '45%'}} />
                    <img src={Person4} alt="" style={{borderTopLeftRadius: '45%'}} />
                </div>
            </div>
        </div>
        <div className="right">
            <h2><span className='color-word'>Benefits</span> From Our Online Learning</h2>
            <div className="row">
                <div className="icon">
                    <PiGraduationCap fontSize={'36px'} color='white' />
                </div>
                <div className="text">
                    <h3>Online Degrees</h3>
                    <p>Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities.</p>
                </div>
            </div>
            <div className="row">
                <div className="icon">
                    <GoBook fontSize={'30px'} color='white' />
                </div>
                <div className="text">
                    <h3>Short Courses</h3>
                    <p>Enhance your skills with our concise and focused short courses, designed for quick and effective learning.</p>
                </div>
            </div>
            <div className="row">
                <div className="icon">
                    <IoPersonSharp fontSize={'26px'} color='white' />
                </div>
                <div className="text">
                    <h3>Training From Experts</h3>
                    <p>Immerse yourself in knowledge with industry experts guiding you through hands-on experience.</p>
                </div>
            </div>
            <div className="row">
                <div className="icon">
                    <IoPlay fontSize={'30px'} style={{paddingLeft: '5px'}} color='white' />
                </div>
                <div className="text">
                    <h3>1.5k + Video Courses</h3>
                    <p>Dive into a vast library of over 1.5k video courses covering many subjects, offering a visual learning experience.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Courses