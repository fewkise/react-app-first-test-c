import React from 'react'
import './Section7.css'
import cardImg1 from '../../../public/IMAGE (5).png'
import cardImg2 from '../../../public/IMAGE (6).png'
import cardImg3 from '../../../public/IMAGE (7).png'
const Section7 = () => {
  return (
    <div>
        <div className="section-seven">
            <div className="cardContainer">
                <img src={cardImg1} alt="" />
                <p>Cash visibility</p>
                <p>Get a real-time view of your money movements across all your accounts down to the transaction level.</p>
                <button>Learn more</button>
            </div>
            <div className="cardContainer">
                <img src={cardImg2} alt="" />
                <p>Cash visibility</p>
                <p>Get a real-time view of your money movements across all your accounts down to the transaction level.</p>
                <button>Learn more</button>
            </div>
            <div className="cardContainer">
                <img src={cardImg3} alt="" />
                <p>Cash visibility</p>
                <p>Get a real-time view of your money movements across all your accounts down to the transaction level.</p>
                <button>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default Section7
