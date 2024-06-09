import React from 'react';
import Typing from '../Typing/Typing';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './Home.css';

export default function Center() {
    const handleGitHubClick = () => {
        window.location.href = "https://github.com/KKartikay-27";
    };
    const handleLinkedInClick = () => {
        window.location.href = "https://www.linkedin.com/in/kumarkartikay7224";
    };
    return (
        <div className="main">
            <div className="name">Kumar Kartikay</div>
            <div className="desc">
                <div className="iline">I'm a&nbsp;</div>
                <Typing text={["programmer.","developer.","student.",]}/>
            </div>
            <div className="quicklinks">
                <div className="qLinks github" onClick={handleGitHubClick}>
                    <FontAwesomeIcon icon={faGithub} size='2xl'/>
                </div>
                <div className="qLinks linkedin" onClick={handleLinkedInClick}>
                    <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
                </div>
                <Tippy content="Email : kumarkartikay005@gmail.com">
                    <div className="qLinks mail">
                        <FontAwesomeIcon icon={faEnvelope} size='2xl'/>
                    </div>
                </Tippy>
            </div>
        </div>
    );
}
