import React from 'react'
import './testimonial.styles.css'
import images from '../../images/testimonial.png';
import images1 from '../../images/quotation1.png';
import images2 from '../../images/Groupstar.png';
import images3 from '../../images/segment3.png';

const Testimonialcomponent = () => {
  return (
    <div className='containter'>
    <div className='testimonial-content'>
     <span>Testimonials</span>
     <h1>Check what our clients are saying</h1>
    </div>
    <div className='testimonial-wrapper'>
      <div className='testimonial-left'>
      <img src={images} />
      </div>
      <div className='testimonial-right'>
        <img src={images1} /><br/>
        <img src={images2} />
        <p>Is be upon sang fond must shew. Really<br/> boy law county she unable her sister.<br/> Feet you off its like like six. Among sex<br/> are leave law built now.</p>
        <div className='segment-wrapper'>
          <div className='segment-left'>
        <span>AR Shakir</span>
        <h6>CEO GetNextDesign</h6>
      </div>
      <div className='segment-right'>
       <img src={images3} />
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Testimonialcomponent