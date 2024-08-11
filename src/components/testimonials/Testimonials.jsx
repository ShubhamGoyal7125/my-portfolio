import React from 'react'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import './testimonials.css'
import Avatar1 from '../../assets/salesCaptain.jfif'
import Avatar2 from '../../assets/sdcusict.jfif'


const data = [
  {
    avatar: Avatar1,
    name: 'SalesCaptain',
    review: 'During his internship, he was exposed to the various activities related to Backend Development and was actively involved in the projects and tasks assigned to him. During the span, we found him punctual and hardworking person. His learning powers are good. His feedback and evolution proved that he learned keenly. Moreover, his interpersonal and communication skills are brilliant. His association with us was very fruitful and we wish him all the best with the future endeavors.'
  },
  {
    avatar: Avatar2,
    name: 'SDC-USICT, Guru Gobind Singh Indraprastha University',
    review: 'In this internship, he is currently exposed to the various activities related to Project Management and Frontend Development and he is actively involved in the projects of University. He is a hardworking person. His leadership skills are great. Moreover, his communication skills are brilliant. His association with us is very fruitful.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (

              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>

            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials