import React from 'react'
import './Section1.css'
import logoForbtn from '../../../public/Vector.png'
import logoSecton1 from '../../../public/Group 1 (1).png'
import arrow from '../../../public/IMAGE.png'
const Section1 = () => {
  return (
    <div className='sec'>
        <div className='section-one'>
        <div className="sectionLeft">
            <ul>
                <li><h1>One platform</h1></li>
                <li><h1>to solve</h1></li>
                <li><h1>global payouts.</h1></li>
                <li><p>Hi there!</p></li>
                <li><p>Denario helps companies speed up their operations using an automated bill payments, payouts, and invoicing platform.</p></li>
                
            </ul>
            <ul>
                <li><button>Book a demo</button><button><img src={logoForbtn} alt="" />Axeptio consent</button></li>
            </ul>
            <div className="chat">
                <p>Or chat with us</p>
                <img className='arrow' src={arrow} alt="" />
             </div>
        </div>
        <div className="sectionRight">
            <img className='bigImg' src={logoSecton1} alt="" />
        </div>
        
    </div>
    </div>
    
  )
}

export default Section1
