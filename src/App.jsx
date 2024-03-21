import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import heroImg from './images/hero-pic.png'
import Duolingo from './images/duolingo_logo.svg'


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
                            <a href="#courses">Enroll Now</a>
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
                <img src={Duolingo} alt="" />
                <img src={Duolingo} alt="" />
                

            </section>


            <section id='search-courses'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis perferendis tempore omnis nesciunt voluptas odio natus quam optio earum animi pariatur, accusantium aspernatur temporibus ex corrupti fuga officiis quia?
            </section>
            
            <section id='courses'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis perferendis tempore omnis nesciunt voluptas odio natus quam optio earum animi pariatur, accusantium aspernatur temporibus ex corrupti fuga officiis quia?
            </section>
        </div>
    );
}

export default App;