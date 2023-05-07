import React from 'react'
import styles from './Footer.module.css'
import Button from '../Button/Button'
import logo from '../../images/easybank.jpg.svg'
import facebook from '../../images/icon-facebook.svg'
import youtube from  '../../images/icon-youtube.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'
import instagram from '../../images/icon-instagram.svg'


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.icons}>
       
        <img  src={logo} alt='Logo' />
        
        <div className={styles.social}>
          <img src={facebook} alt ='Facebook' />
          <img src={youtube} alt ='youtube' />
          <img src={twitter} alt ='twitter' />
          <img src={pinterest} alt ='pinterest' />
          <img src={instagram} alt ='instagram' />

        </div>
      </div>
     <ul>
      <li>About us</li>
      <li>Contact us</li>
      <li>Blog</li>

     </ul>
     <ul>
     <li>Careers</li>
      <li>Support</li>
      <li>Privacy Policy</li>
     </ul>

     <Button />

    </div>
  )
}

export default Footer