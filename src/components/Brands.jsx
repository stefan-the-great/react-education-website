import React from 'react';
import Duolingo from '../images/duolingo-logo.svg';
import Microsoft from '../images/microsoft-logo.svg';
import Codecov from '../images/codecov.svg';
import Magicleap from '../images/magic-leap-seeklogo.svg';
import Apple from '../images/apple.svg';
import '../css/brands.css'

function Brands() {
  return (
    <section id='brands'>
        <img src={Duolingo} alt="" />
        <img src={Microsoft} alt="" />
        <img src={Magicleap} alt="" />
        <img src={Codecov} alt="" />
        <img src={Apple} style={{stroke: '#e8e1ef'}} alt="" />
    </section>
  )
}

export default Brands