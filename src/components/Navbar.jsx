import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <header>
        {/* Website Logo */}
        <a href="/" className='logo'>
            Etech.
        </a>

        {/* Page Links */}
        <nav className='navbar'>
            <ul>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#teachers">Teachers</a></li>
                <li><a href="#offers">Offers</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar