import React from 'react';
import Typing from '../Typing/Typing';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import './Home.css';

export default function Center() {
    const handleGitHubClick = () => {
        window.open("https://github.com/KKartikay-27", "_blank");
    };
    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/kumarkartikay7224", "_blank");
    };
    const handleResumeClick = () => {
        window.open("https://drive.google.com/drive/folders/1oM5fxIHAunxH6TtixStDw-TmbsNmpYaC?usp=sharing","_blank");
    }
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
                <div className="qLinks resume" onClick={handleResumeClick}>
                    <FontAwesomeIcon icon={faFile} size='2xl'/>
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
