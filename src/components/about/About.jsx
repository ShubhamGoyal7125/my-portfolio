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
              <h5>Experience</h5>
              <small>1 year Working</small>
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

          <p>Hi, I'm Shubham Goyal, a passionate and results-driven Software & Data Engineer with a strong foundation in C++, JavaScript, and hands-on experience in full-stack development, data engineering, and cloud technologies. I've built and deployed multiple real-world projects ranging from scalable MERN apps like DebateHub to dynamic data-driven solutions using PySpark, SQL, and AWS EC2.
I hold a Gold Medal in B.Tech (CSE) and currently work at TCS, where I contribute to master data management and data integration using platforms like Reltio Cloud MDM, AWS EC2. My strength lies in solving complex problems, building intuitive solutions, and constantly learning. </p>
        </div>

      </div>
    </section>
  )
}

export default About