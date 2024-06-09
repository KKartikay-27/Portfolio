import './Education.css'
import ca from '../Photos/ca.png'
import bits from '../Photos/bits.png'
import sst from '../Photos/sst.png'

export default function Education(){
    return (
        <div className='page'>
            <div className="top">Education</div>
            <div className='edu-container'>
                <div className='school box'>
                    <div className='edu-name'>Central Academy</div>
                    <div className='desc-photo'>
                        <div className='edu-p'>2011 - 2023</div>
                        <div className='img-div'><img alt='ca' className='edu-pics' src={ca}/></div>
                    </div>
                </div>
                <div className='sst box'>
                    <div className='edu-name'>Scaler School of Technology</div>
                    <div className='desc-photo'>
                        <div className='edu-p'>2023 - present</div>
                        <div className='img-div'><img alt='sst' className='edu-pics' src={sst}/></div>
                    </div>
                </div>
                <div className='bits box'>
                    <div className='edu-name'>BITS Pilani</div>
                    <div className='desc-photo'>
                        <div className='edu-p'>2023 - present</div>
                        <div className='img-div'><img alt='bits' className='edu-pics' src={bits}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}