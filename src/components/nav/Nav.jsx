import React, {useState} from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBookBookmark} from 'react-icons/bi';
import {MdOutlineMiscellaneousServices} from 'react-icons/md';
import { TbMessageCircle } from 'react-icons/tb';
import { Tooltip } from 'react-tooltip'
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>

      <a href="#" onClick={() => { setActiveNav('#') }} className={activeNav === '#' ? 'active' : ''} data-tooltip-id="nav-home"
        data-tooltip-content="Home"><AiOutlineHome /></a>
      <Tooltip
        id="nav-home"
      />
    
      <a href="#about" onClick={() => { setActiveNav('#about') }} className={activeNav === '#about' ? 'active' : ''} data-tooltip-id="nav-about"
        data-tooltip-content="About Me"><AiOutlineUser /></a>
      <Tooltip
        id="nav-about"
      />

      <a href="#experience" onClick={() => { setActiveNav('#experience') }} className={activeNav === '#experience' ? 'active' : ''} data-tooltip-id="nav-experience"
        data-tooltip-content="My Experience"><BiBookBookmark/></a>
      <Tooltip
        id="nav-experience"
      />

      <a href="#services" onClick={() => { setActiveNav('#services') }} className={activeNav === '#services' ? 'active' : ''} data-tooltip-id="nav-services"
        data-tooltip-content="Services"><MdOutlineMiscellaneousServices/></a>
      <Tooltip
        id="nav-services"
      />

      <a href="#contact" onClick={() => { setActiveNav('#contact') }} className={activeNav === '#contact' ? 'active' : ''} data-tooltip-id="nav-contact"
        data-tooltip-content="Contact Me"><TbMessageCircle/></a>
      <Tooltip
        id="nav-contact"
      />

    </nav>
  )
}

export default Nav