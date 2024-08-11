import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/portfolio_img-removebg-preview.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Shubham Goyal</h1>

        <h2 className="wordCarousel">
          <div>
            <ul className="flip5">
              <li className='text-light'>Fullstack Developer</li>
              <li className='text-light'>College Gold Medalist</li>
              <li className='text-light'>Software Development Engineer</li>
              <li className='text-light'>Enthusiastic</li>
              <li className='text-light'>Team Leader</li>
            </ul>
          </div>
        </h2>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header