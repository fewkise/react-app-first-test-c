import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <nav>
        <ul>
            <li><a href="">Products</a></li>
            <li><a href="">Solutions</a></li>
            <li><a href="">Pricing</a></li>
        </ul>
        <ul>
            <li><button>DE</button><button>EN</button></li>
            <li><a href="">Log In</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
