import './NavBar.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faK } from '@fortawesome/free-solid-svg-icons'; 

export default function NavBar() {
    return (
        
        <div className='nav'>
            <div className='left'>
                <FontAwesomeIcon icon={faK} beat />
                <FontAwesomeIcon icon={faK} beat />
            </div>
            <div className='right'>
                <a href="/" className='item home'>Home</a>
                <a href="/about" className='item about'>About</a>
                <a href="/skills" className='item skills'>Skills</a>
                <a href="/education" className='item education'>Education</a>
                <a href="/experience" className='item experience'>Experience</a>
                <a href="/projects" className='item projects'>Projects</a>
            </div>
        </div>
    );
}

