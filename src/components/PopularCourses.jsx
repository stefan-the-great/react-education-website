import React from 'react';
import '../css/popularCourses.css'
import Person1 from '../images/person1.png';
import Person2 from '../images/person2.png';
import Person4 from '../images/person4.png';

import { GoBook } from "react-icons/go";

import Course1 from '../images/course1.png';
import Course2 from '../images/course2.jpg';
import Course3 from '../images/course3.jpeg';

import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

function PopularCourses() {
  return (
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
  )
}

export default PopularCourses