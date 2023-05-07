import React from 'react'
import styles from './Feature.module.css'
import icononline from '../../images/icon-online.svg'
import iconbudgeting from '../../images/icon-budgeting.svg'
import icononboarding from '../../images/icon-onboarding.svg'
import iconapi from '../../images/icon-api.svg'
import Eachfeatures from './Eachfeatures'


const Features = () => {
  const data =[{
    image: icononline,
    heading:'Online banking',
    paragraph: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'

  },
  {
    image:iconbudgeting,
    heading: 'Simple budgeting',
    paragraph: 'See exactly where your money goes each month. Receive notification when youre close to hitiing your limits.'

  },
  {
    image: icononboarding,
    heading: 'Fast onboarding',
    paragraph: 'We dont do branches. Open your account in minutes online and start taking control of your finances right away.'
  },
  {
    image: iconapi,
    heading: 'Open API',
    paragraph: 'Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.'
  }
  
]


  return (
  <div className={styles.featuresection}>
    <div className={styles.heading}>
      <h1>Why choose Easybank?</h1>
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