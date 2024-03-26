import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import heroImg from './images/hero-pic.png';
// Brand Logos
import Duolingo from './images/duolingo-logo.svg';
import Microsoft from './images/microsoft-logo.svg';
import Codecov from './images/codecov.svg';
import Magicleap from './images/magic-leap-seeklogo.svg';
import Apple from './images/apple.svg'
import Person1 from './images/person1.png';
import Person2 from './images/person2.png';
import Person3 from './images/person3.png';
import Person4 from './images/person4.png';

import { PiGraduationCap } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";

import Course1 from './images/course1.png';
import Course2 from './images/course2.jpg';
import Course3 from './images/course3.jpeg';

import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

import TeacherPic from './images/teacher-pic.png'

import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";




function App() {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div id='container'>
            <Navbar />
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

            <section id='brands'>
                <img src={Duolingo} alt="" />
                <img src={Microsoft} alt="" />
                <img src={Magicleap} alt="" />
                <img src={Codecov} alt="" />
                <img src={Apple} style={{stroke: '#e8e1ef'}} alt="" />
            </section>

            <section id='search-courses'>
                <h2>Search Courses</h2>
                <form action="" method="">
                    <input type="search" name="course-search" id="course-search" placeholder='Search for over 50+ courses' />
                    <button type="" className='gradient-btn'>Search</button>
                </form>
            </section>
            
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
                    {/* <div className="row">
                        <div className="icon">
                            <PiGraduationCap />
                        </div>
                        <div className="text">
                            <h3></h3>
                            <p></p>
                        </div>
                    </div> */}
                </div>
            </section>

            <section id='popular-courses'>
                <h2>Our Popular Courses</h2>
                <p>Discover our most sought-after courses, carefully curated to meet the demands of today's learners. Dive into engaging content crafted for sucess in every step of your educational journey</p>
                <div className="card-wrapper">
                    <div className="card">
                        <img className='thumbnail' src={Course1} alt="" />
                        <div className="tags">
                            <div className="category">
                                <GoDotFill />
                                <div className="text">Web Design</div>
                            </div>
                            <div className="rating">
                                <FaStar color='yellow' />
                                <div className="text">4.4</div>
                            </div>
                        </div>
                        <div className="title">
                            <h3>Web Design & Development</h3>
                        </div>
                        <div className="stats">
                            <div className="class-count">
                                <div className="icon"><GoBook /></div>
                                <div className="text">25 Classes</div>
                            </div>
                            <div className="student-count">
                                <div className="icon"><BsPerson /></div>
                                <div className="text">85 Students</div>
                            </div>
                        </div>
                        <div className="details">
                            <div className="price">
                                <h3>$560.00</h3>
                            </div>
                            <div className="instructor">
                                <img src={Person2} alt="" />
                                <div className="instructor-name">
                                    J. Morgan
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className='thumbnail' src={Course2} alt="" />
                        <div className="tags">
                            <div className="category">
                                <GoDotFill />
                                <div className="text">Data Science</div>
                            </div>
                            <div className="rating">
                                <FaStar color='yellow' />
                                <div className="text">4.6</div>
                            </div>
                        </div>
                        <div className="title">
                            <h3>Python For Data Science</h3>
                        </div>
                        <div className="stats">
                            <div className="class-count">
                                <div className="icon"><GoBook /></div>
                                <div className="text">18 Classes</div>
                            </div>
                            <div className="student-count">
                                <div className="icon"><BsPerson /></div>
                                <div className="text">160 Students</div>
                            </div>
                        </div>
                        <div className="details">
                            <div className="price">
                                <h3>$423.00</h3>
                            </div>
                            <div className="instructor">
                                <img src={Person1} alt="" />
                                <div className="instructor-name">
                                    Alex Tylor
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className='thumbnail' src={Course3} alt="" />
                        <div className="tags">
                            <div className="category">
                                <GoDotFill />   
                                <div className="text">Ul/UX Design</div>
                            </div>
                            <div className="rating">
                                <FaStar color='yellow' />
                                <div className="text">5.0</div>
                            </div>
                        </div>
                        <div className="title">
                            <h3>Wireframing & Prototyping</h3>
                        </div>
                        <div className="stats">
                            <div className="class-count">
                                <div className="icon"><GoBook /></div>
                                <div className="text">8 Classes</div>
                            </div>
                            <div className="student-count">
                                <div className="icon"><BsPerson /></div>
                                <div className="text">400 Students</div>
                            </div>
                        </div>
                        <div className="details">
                            <div className="price">
                                <h3>$160.00</h3>
                            </div>
                            <div className="instructor">
                                <img src={Person4} alt="" />
                                <div className="instructor-name">
                                    Jordan Rae
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

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

            <div id='bottom-section'>
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

                <section id='contact'>
                    <div className="box">
                        <h2>Get In Touch!</h2>
                        <p>Subscribe to get in touch and to enjoy discounts, promos and much more!</p>
                        <form action="" method="">
                            <input type="search" name="contact" id="contact-form" placeholder='Enter your email...' />
                            <button type="" className='gradient-btn'>Subscribe</button>
                        </form>
                    </div>
                </section>

                <section id='footer'></section>
            </div>
        </div>
    );
}

export default App;