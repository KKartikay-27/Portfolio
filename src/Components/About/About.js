import './About.css'
import Pic from '../Photos/profile.png'

export default function About(){

    return(
        <div className='page'>
            <div className='top'>About</div>
            <div className='center'>
                <div className='para'>
                    <p>Hello! My name is Kumar Kartikay, and I am from the vibrant city of Lucknow.
                    I love learning and always try to improve myself. Every day is a chance to gain new knowledge and skills, 
                    helping me grow both personally and professionally.</p>
                    <p>Besides work, I have hobbies that keep me inspired and balanced. 
                    I enjoy connecting with nature and staying active. I love visiting new places for fresh perspectives. 
                    Watching movies and listening to music help me relax and express myself.
                    </p>
                    <p>Thank you for visiting my portfolio. I hope you enjoy exploring my work and learning more about me.</p>
                </div>
                <img className='picture' src={Pic} alt='profile'/>
            </div>
        </div>
        
    );
}