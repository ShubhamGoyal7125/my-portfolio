import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/college_buddy_project.png'
import IMG2 from '../../assets/iNotebook_project.png'
import IMG3 from '../../assets/todolist_project.png'
import IMG4 from '../../assets/blog_project.png'
import IMG5 from '../../assets/newsapp_project.png'
import IMG6 from '../../assets/anugoonj_project.png'
import IMG0 from '../../assets/debatehub.jpg'

const data = [
  {
    id: 0,
    image: IMG0,
    title: 'DebateHub',
    github: "",
    description: "A MERN stack platform facilitating real-time debates with integrated hate speech detection and detailed history tracking, ensuring a safe and inclusive environment."
  },
  {
    id: 1,
    image: IMG1,
    title: 'College Buddy',
    github: 'https://github.com/ShubhamGoyal7125/College_Buddy',
    description: "A web app designed to enhance college workflows by enabling file sharing, attendance tracking, and interactive learning within a collaborative digital environment."
  },
  {
    id: 2,
    image: IMG2,
    title: 'NoteHive',
    github: 'https://github.com/ShubhamGoyal7125/NoteHive',
    description: "A secure web application allowing users to manage notes with features for login, creation, updates, and deletions, built with React.js and Node.js."
  },
  {
    id: 3,
    image: IMG5,
    title: 'News-Daily',
    github: 'https://github.com/ShubhamGoyal7125/News-Daily',
    description: "A news app displaying the latest headlines in categories like sports and entertainment, with infinite scroll to load more articles as users browse."
  },
  {
    id: 4,
    image: IMG6,
    title: 'Anugoonj',
    github: 'https://github.com/Anugoonj-Website/anugoonj',
    description: "Developed a responsive website for the university’s cultural fest, featuring dynamic content like videos and galleries, attracting 15,000+ users, and hosted on AWS."
  },
  {
    id: 5,
    image: IMG3,
    title: 'To Do List',
    github: 'https://github.com/ShubhamGoyal7125/toDoList',
    description: "A task manager that lets users create, organize, and delete custom to-do lists, with a default list automatically generated for each day."
  },
  {
    id: 6,
    image: IMG4,
    title: 'Daily Journal',
    github: 'https://github.com/ShubhamGoyal7125/Blog-Website',
    description: "A platform built with EJS where users read news, and admins add new articles, enabling easy content management."
  }

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, description }) => {
            return (
              <div key={id} className="flip__card">
                <div className="flip__card__inner">

                  <article className="portfolio__item flip__card__front">
                    <div className="portfolio__item__image">
                      <img src={image} alt={image} />
                    </div>
                    <h3>{title}</h3>
                  </article>

                  <div className="flip__card__back">
                    <h3>{title}</h3>
                    <div className='project__description'>{description}</div>
                    <div className="portfolio__item__cta">
                      {github.length > 0 && <a href={github} target="_blank" rel="noopener noreferrer" className='portfolio__btn'>Github</a>}
                    </div>
                  </div>

                </div>
              </div>
            )
          })
        }



      </div>
    </section>
  )
}

export default Portfolio