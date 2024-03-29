import { useState, useEffect } from 'react'
import '../css/navbar.scss'
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [modal, setModal] = useState(false);
    useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);


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

  const navLinks = () => {
    return (
      <ul>
          <li><a href="#search-courses">Courses</a></li>
          <li><a href="#teachers">Teachers</a></li>
          <li><a href="#popular-courses">Offers</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>)
  }

  function handleMobileNav() {
    setModal(value => !value);
    console.log(modal);
  }
  
  return (
    <header id='header'>
        {/* Website Logo */}
        <a href="/" className='logo'>
            Etech.
        </a>

        {/* Page Links */}
        <nav className='navbar'>
          {width > 700 ? 
            navLinks() :
            <div className="icon">
              <GiHamburgerMenu fontSize={30} cursor={'pointer'} onClick={handleMobileNav} />
            </div>
          }
        </nav>
        {/* {modal ? 
          <div className="modal" onClick={handleMobileNav}>
            {navLinks()}
          </div> : 
          <div className="modal" onClick={handleMobileNav} style={{opacity: 0}}>
            {navLinks()}
          </div>
        } */}
        <div className="modal" onClick={handleMobileNav} style={modal ? {opacity: 1, zIndex: 20} : {opacity: 0, pointerEvents: 'none'}}>
          {navLinks()}
        </div>
    </header>
  )
}

export default Navbar