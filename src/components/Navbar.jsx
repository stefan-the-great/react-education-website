import React from 'react'
import '../css/navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  var prevScrollpos = window.scrollY;
  window.onscroll = function() {
  var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  }
  return (
    <header id='header'>
        {/* Website Logo */}
        <a href="/" className='logo'>
            Etech.
        </a>

        {/* Page Links */}
        <nav className='navbar'>
            <ul>
                <li><a href="#search-courses">Courses</a></li>
                <li><a href="#teachers">Teachers</a></li>
                <li><a href="#popular-courses">Offers</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div className="icon" style={{display: 'none'}}>
          <GiHamburgerMenu fontSize={30} cursor={'pointer'} />
        </div>
    </header>
  )
}

export default Navbar