import React from 'react'
import './Section2.css'

const Section2 = ({nazv, opis, imgSec}) => {
  return (
    <div>
        <div className='section-two'>
      <div className="sectionLeft">
        <ul>
            <li><h2>{nazv}</h2></li>
            <li><p>{opis}</p></li>
            <li><button>Learn more</button></li>
        </ul>
      </div>
      <div className="sectionRight">
        <img src={imgSec} alt="" />
      </div>

    </div>
    </div>
    
  )
}

export default Section2
