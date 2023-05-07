import React from 'react'
import styles from './Feature.module.css'

const Eachfeatures = (props) => {
  return (
    <div className={styles.eachfeature} >
        <img src={props.image} alt='image' />
        <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default Eachfeatures