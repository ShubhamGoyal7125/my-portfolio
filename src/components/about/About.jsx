import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { RiFolderChartLine } from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="about-me-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Internship Experience</h5>
              <small>1+ year Working</small>
            </article>

            <article className="about__card">
              <BsBuilding className='about__icon' />
              <h5>Internships</h5>
              <small>3 Completed</small>
            </article>

            <article className="about__card">
              <RiFolderChartLine className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>I'm Shubham Goyal, an accomplished Software Engineer. Leading the Web Development Team at SDC-USICT, I delivered the official GGSIPU website, showcasing my tech and leadership skills. As a Backend Developer at SalesBook Technologies Pvt. Ltd, I contributed significantly to the team's success.

During my internship at Utkrisht - USICT, GGSIPU, I built an innovative Metaverse mall with AR and VR, pushing web development boundaries. Recognized by the Vice Chancellor for website work and with over 750 solved Data Structures and Algorithms questions. <b>Let's connect and collaborate on impactful projects.</b> </p>
        </div>

      </div>
    </section>
  )
}

export default About