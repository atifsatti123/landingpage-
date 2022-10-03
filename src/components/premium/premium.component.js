import React from 'react'
import './premium.styles.css';
import Premiumcardcomponent from '../premiumcard/premiumcard.component';
import { useSelector } from "react-redux";


const Premium = () => {
  const { premiums} = useSelector((state) => state.premiums);
       
  return (
    <div className='vector-bg'>
    <span className='vector'></span>
    <div className='premium-content'>
     <h2>Start today, with free or<br/> premium plan, you choose</h2>
     <p>With lots of unique and useful features, you can easily manage<br/> your wallet easily without any problem.</p>
     <div className="Premium-wrapper">
     {premiums && premiums.map((premium)=> (
        < Premiumcardcomponent key={premium.id} premium ={premium}/>
        ))}
      </div>
      
    </div>
    </div>
  )
}

export default Premium;
