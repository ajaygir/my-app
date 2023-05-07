import React from 'react'
import styles from './Articles.module.css'

const Eacharticle = (props) => {
  return (
    <div className={styles.eachfeature} >
        <img src={props.image} alt='image' />
        <h2>{props.heading}</h2>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default Eacharticle