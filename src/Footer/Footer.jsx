import React from 'react'
import './Footer.css'
import buttonArrow from '../../public/IMAGE (20).png'
import facebookLogo from '../../public/IMAGE (21).png'
import MLogo from '../../public/IMAGE (22).png'
const Footer = () => {
  return (
    <div className='nya'>
      <footer>
        <div className="footerTop">
          <ul>
            <li><a href="">Product</a></li>
            <li><a href="">Roles</a></li>
            <li><a href="">Industry</a></li>
          </ul>
        </div>
        <div className="footerMiddle">
          <div className="middleLeft">
            <p>Join now. No credit card needed!</p>
            <form action=""><input type="text" /><button><img src={buttonArrow} alt="" /></button></form>
          </div>
          <div className="middle">
            <ul>
              <li><a href="">Bill pay</a></li>
              <li><a href="">Invoicing</a></li>
              <li><a href="">Corporate cards</a></li>
              <li><a href="">Accounting automation</a></li>
              <li><a href="">Bank connections</a></li>
              <li><a href="">Partners</a></li>
            </ul>
            <ul>
              <li><a href="">Accountants</a></li>
              <li><a href="">Finance teams</a></li>
              <li><a href="">Operation teams</a></li>
            </ul>
            <ul>
              <li><a href="">E-Commerce</a></li>
            </ul>
            <ul>
              <li><a href="">Resources</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Help center</a></li>
              <li><a href="">Exchange rates</a></li>
            </ul>
            <ul>
              <li><a href="">Company</a></li>
              <li><a href="">About us</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Get in touch</a></li>
            </ul>
          </div>
          <div className="middleRight">
            <button>DE</button><button>EN</button>
          </div>
        </div>
        <div className="footerBottom">
          <div className="footerBtmLeft">
            <ul>
              <li><p>Imprint</p></li>
              <li><p>Terms of service</p></li>
              <li><p>Privacy policy</p></li>
              <li><p>Sales +49 30 54453778 1</p></li>
            </ul>
            <p className='smolText'>The VISA Cards are issued by Transact Payments Malta Limited pursuant to licence by VISA Europe Limited. Transact Payments Malta Limited is duly authorised and regulated by the Malta Financial Services Authority as a Financial Institution under the Financial Institution Act 1994. Registration number C91879.</p>
          </div>
          <div className="footerBtmRight">
            <a href=""><img src={facebookLogo} alt="" /></a>
            <a href=""><img src={MLogo} alt="" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
