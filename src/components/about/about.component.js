import React from 'react'
import './about.styles.css'
import Aboutcardcomponent from '../aboutcard/aboutcard.component';
import images from '../../images/star.png';
import images3 from '../../images/appstore3.jpg';
import images2 from '../../images/setting2.jpg';


const Aboutcomponent = () => {
    const about1 = [
        {
          'id': 1,
          'title': "Register",
          'subtitle': 'It more shed went up is roof if loud case.Delay music in lived noise an',
          'img': images3,
          
        },
        {
          'id': 2,
          'title': 'Complete Setup',
          'subtitle': 'It more shed went up is roof if loud case.Delay music in lived noise an',

          'img': images3,
    
          
        },
        {
            'id': 3,
            'title': 'Utilize App',
            'subtitle': 'It more shed went up is roof if loud case.Delay music in lived noise an',
            'img': images3,
            
        },
    ]
  return (
    <div className='about-content'>
        <div className='about-content-image'>
        <img src={images} />
        </div>
        <h1>Learn More About Process</h1>
        <p>Was are delightful solicitude discovered collecting man<br/>day. Resolving neglected sir tolerably.</p>
        <div className='about-wrapper'>
        {about1.map((value)=> (
        <Aboutcardcomponent key={value.id} value = {value}/>
        ))}
        </div>


    </div>
  )
}

export default Aboutcomponent;