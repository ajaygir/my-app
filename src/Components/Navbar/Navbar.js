import React from 'react'
import logo from '../../images/easybank.jpg.svg'
import styles from './style.module.css'
import Button from '../Button/Button'


const Navbar = () => {
  return (
    <div className= {styles.navbar}>
        <img src={logo} alt= 'Logo' />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Career</li>
        </ul>
          <Button />

    </div>
  )
}

export default Navbar