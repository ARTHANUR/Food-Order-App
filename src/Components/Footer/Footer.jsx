import React from 'react'
import "./Footer.css"
import { assets } from '../../Assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-left'>
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod temporibus aliquid consequuntur, itaque hic rerum! Nemo omnis perspiciatis voluptatibus sunt.</p>
        <div className="socials">
          <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1713896532/Food%20Delivery%20App/facebook_icon_uoqhfk.png" alt="logo" />
          <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1713896501/Food%20Delivery%20App/linkedin_icon_iqz2va.png" alt="" />
          <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1713896522/Food%20Delivery%20App/twitter_icon_asreme.png" alt="" />
        </div>
      </div>
      <div className="footer-center">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About Us </li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-right">
        <h2>GET IN TOUCH</h2>
        <ul>+91 6363117574</ul>
        <ul>sarthanur@gmail.com</ul>
      </div>
    </div>
  )
}

export default Footer
