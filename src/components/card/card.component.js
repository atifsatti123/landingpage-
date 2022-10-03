import React from 'react'
import './card.styles.css';

const Cardcomponent = ({service}) => {
    const {id,title,subtitle,img,color}= service;
  return (
    
    <div className={`${color}`}>
     <div className='card-content'>
        <img src={img} />
        <h3>{title}</h3>
           
        <span>{subtitle}</span>
     </div>
    </div>
  )
}

export default Cardcomponent