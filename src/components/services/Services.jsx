import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Frontend Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list__icon' />
              <p>Responsive Website</p>
            </li>

            <li>
              <BiCheck className='service__list__icon' />
              <p>Unique Design</p>
            </li>

            <li>
              <BiCheck className='service__list__icon' />
              <p>Modern Features and Animations</p>
            </li>

            <li>
              <BiCheck className='service__list__icon' />
              <p>Wordpress Website</p>
            </li>

          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className='service__list__icon' />
              <p>Precise Code</p>
            </li>

            <li>
              <BiCheck className='service__list__icon' />
              <p>Security Features</p>
            </li>

            <li>
              <BiCheck className='service__list__icon' />
              <p>API Integration and Testing</p>
            </li>

            <li>
              <BiCheck className='service__list__icon' />
              <p>Google Cloud APIs</p>
            </li>

            <li>
              <BiCheck className='service__list__icon' />
              <p>Deployment on Heroku and Github</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Database Management</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list__icon' />
              <p>Secure Database</p>
            </li>

            <li>
              <BiCheck className='service__list__icon' />
              <p>Hashing and Salting</p>
            </li>

            <li>
              <BiCheck className='service__list__icon' />
              <p>MySQL Workbench</p>
            </li>

            <li>
              <BiCheck className='service__list__icon' />
              <p>MongoDB Atlas</p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services