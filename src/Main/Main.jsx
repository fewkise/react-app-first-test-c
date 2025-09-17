import React from 'react'
import './Main.css'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section5 from './Section5/Section5'
import Section6 from './Section6/Section6'
import Section7 from './Section7/Section7'
import Section8 from './Section8/Section8'
import section2Img from '../../public/IMAGE (1).png'
import section3Img from '../../public/IMAGE (2).png'
import section4Img from '../../public/Frame.png'
const nazv1 = 'Complete cash visibility'
const opis1 = 'Integrate with banks, e-money and accounting apps, and automate invoice discovery to get a real-time view of all cash balances, outstanding payments and fees.'
const nazv2 = 'Automated payment workflows'
const opis2 = 'Your money movements in one place. Monitor customer payments, generate invoices, and automate payouts at scale. Report into the right accounting system seamlessly.'
const nazv3 = 'Smart transaction reconciliation'
const opis3 = 'Every document on Denario is turned into a standard format and added to your master file. Our system reconciles transactions automatically across all your accounts.'
const Main = () => {
  return (
    <div className='main'>
      <Section1/>
      <Section2 nazv={nazv1} opis={opis1} imgSec={section2Img}/>
      <Section2 nazv={nazv2} opis={opis2} imgSec={section3Img}/>
      <Section2 nazv={nazv3} opis={opis3} imgSec={section4Img}/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
    </div>
  )
}

export default Main
