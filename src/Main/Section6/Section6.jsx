import React from 'react'
import './Section6.css'
import cardImg from '../../../public/IMAGE (4).png'
const Section6 = () => {
  return (
    <div>
      <div className="section-six">
        <div className="deg">
            <h4>360-degree</h4>
        </div>
        <div className="cards">
            <ul>
                <li><img src={cardImg} alt="" /><p>Text recognition</p></li>
                <li><img src={cardImg} alt="" /><p>Bulk Payments</p></li>
                <li><img src={cardImg} alt="" /><p>Split payments</p></li>
                <li><img src={cardImg} alt="" /><p>Recurring payments</p></li>
                <li><img src={cardImg} alt="" /><p>Approval rules</p></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Section6
