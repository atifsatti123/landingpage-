import React from 'react'
import './aboutcard.css';



const Aboutcardcomponent = ({value}) => {
    const {id,title,subtitle,img,}= value;
    return (
      
      
       <div className='abt-card-content'>
        <span className='circle'>{id}</span>
          <div><img src={img} /></div>
          <div className='abt-card-title'><h3>{title}</h3></div>
             
          <div className='abt-card-subtitle'>
        {subtitle}
       </div>
       </div>
      
    )
  }

export default Aboutcardcomponent