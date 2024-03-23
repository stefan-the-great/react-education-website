import React from 'react'
import './navbar.css'

function Navbar() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
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
    </header>
  )
}

export default Navbar