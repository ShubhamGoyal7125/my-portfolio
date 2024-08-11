import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/shubham-goyal-7987461b8/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/ShubhamGoyal7125/" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://www.instagram.com/shubhamgoyal7125/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials