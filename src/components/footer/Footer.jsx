import React from 'react'
import './footer.css'
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {

  return (
    <footer>
      <a href="#" className='footer__logo'>Shubham Goyal</a>

      <ul className="permalinks">
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#services">Services</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#testimonials">Testimonials</a> </li>
        <li> <a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/ShubhamGoyal7125/" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/shubham-goyal-7987461b8/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://www.instagram.com/shubhamgoyal7125/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
        <a href="https://twitter.com/057Goyal" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
      </div>

      <div className="footer__copywright">
        <small>&copy; Shubham Goyal. All Rights Reserved.</small>
      </div>
    </footer>
  )

}

export default Footer