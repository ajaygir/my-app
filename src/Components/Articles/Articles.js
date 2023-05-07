import React from 'react'
import styles from './Articles.module.css'
import imageconfetti from '../../images/image-confetti.jpg'
import imagecurrency from '../../images/image-currency.jpg'
import imageplane from '../../images/image-plane.jpg'
import imagerestaurant from '../../images/image-restaurant.jpg'

import Eachfeatures from './Eacharticle'


const Features = () => {
  const data =[{
    image: imagecurrency,
    heading:'Receive money in any currency with no fees',
    paragraph: 'The world is getting smaller and we are becoming more mobile.So why should you be forced to only receive money in a single...'

  },
  {
    image: imagerestaurant,
    heading: 'Treat yourself without worrying about money',
    paragraph: 'Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month.That means your...'

  },
  {
    image: imageplane,
    heading: 'Take your Easybank card wherever you go',
    paragraph: 'We want you to enjoy your travels.This is why we dont charge any fees on purchase while you are abroad.We will even show you...'
  },
  {
    image: imageconfetti,
    heading: 'Our invite-only Beta account are now live!',
    paragraph: 'After a lot of hard work by the whole team.We are excited to launch our closed beta.It is easy to request an invite through the site...'
  }
  
]


  return (
  <div className={styles.featuresection}>
    <div className={styles.heading}>
      <h1>Latest Articles</h1>
       <p>We leverge open banking to turn your bank account into your finaancial hub.
       Control youy finances like never before.
       </p> 
    </div>

   <div className={styles.features}>
    {data.map((eachf)=>{
      return <Eachfeatures 
      heading={eachf.heading} 
      image={eachf.image} 
      paragraph={eachf.paragraph}/>
      
    
    })}


   </div>
  </div>
  )
}

export default Features