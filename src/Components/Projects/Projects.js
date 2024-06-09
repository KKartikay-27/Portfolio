import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    id: 1,
    title: 'Quiz App',
    description: 'Crafted with HTML, CSS, and JS, this interactive app features three engaging questions, with the potential to expand your quiz experience further.',
    link: 'https://github.com/KKartikay-27/Quiz-App'
  },
  {
    id: 2,
    title: 'Portfolio',
    description: 'Showcasing my skills in ReactJS, this portfolio elegantly presents my professional journey and projects, providing a comprehensive view of my expertise.',
    link: 'https://github.com/KKartikay-27/Portfolio'
  },
  {
    id: 3,
    title: 'Music Player',
    description: 'Seamlessly designed using HTML, CSS, and JS, this music player houses a curated collection of ten songs, ready to transport you into a world of melodious experiences.',
    link: 'https://github.com/KKartikay-27/Music-Player'
  }
];

export default function Projects() {
  return (
    <div className='page'>
      <div className='top'>Projects</div>
      <div className='upperP'>
        {projects.slice(0, 2).map(project => (
          <div key={project.id} className='project'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faPaperclip} />
            </a>
          </div>
        ))}
      </div>
      <div className='bar'></div>
      <div className='lowerP'>
        {projects.slice(2).map(project => (
          <div key={project.id} className='project'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faPaperclip} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
