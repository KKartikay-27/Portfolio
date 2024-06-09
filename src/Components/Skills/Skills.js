import './Skills.css'
import bash from '../Photos/Bash.png'
import css from '../Photos/css.svg'
import html from '../Photos/html.png'
import java from '../Photos/java.jpg'
import js from '../Photos/javascript.jpg'
import mysql from '../Photos/mysql.png'
import python from '../Photos/Python.png'
import react from '../Photos/react.png'

export default function Skills(){
    return (
        <div className='page'>
            <div className="top">Skills</div>
            <div className='logos'>
                <div className='top'>
                    <img alt='java' className='pic ' src= {java} />
                    <img alt='html' className='pic ' src= {html} />
                    <img alt='css' className='pic ' src= {css} />
                    <img alt='js' className='pic ' src= {js} />
                </div>
                <div className='bottom'>
                    <img alt='react' className='pic ' src= {react} />
                    <img alt='mysql' className='pic ' src= {mysql} />
                    <img alt='bash' className='pic ' src= {bash} />
                    <img alt='python' className='pic ' src= {python} />
                </div>
            </div>
        </div>
    );
}