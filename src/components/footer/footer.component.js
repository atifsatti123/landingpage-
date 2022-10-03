import React from 'react'
import './footer.styles.css';

const Footercomponent = () => {
  return (
    <div className='container'>
     <div className='row'>
        <div className='column'>
          <div className='column-content1'>
            <h6>AR SHAKIR</h6>
            <p>Finance helps companies<br/> manage payments easily.</p>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-facebook-messenger"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-solid fa-infinity"></i>
          </div>
        </div>
        <div className='column1'>
          <div className='column-content'>
            <ul className="listing">
            <h5>Company</h5>
                <li href="#">About Us</li>
                <li href="#">Careers</li>
                <li href="#">Blog</li>
                <li href="#">Pricing</li>
            </ul>
          </div>
     </div>
     <div className='column1'>
          <div className='column-content'>
            <ul className="listing">
            <h5>Product</h5>
                <li>Invoicing</li>
                <li>Contract</li>
                <li>Accounting</li>
                <li>Proposal</li>
            </ul>
          </div>
     </div>
     <div className='column1'>
          <div className='column-content'>
           
            <ul className="listing">
            <h5>Resources</h5>
                <li>Proposal Template</li>
                <li>Invoice Template</li>
                <li>Tutorial</li>
                <li>How to write a contract</li>
            </ul>
          </div>
     </div>
     <div className='column1'>
          <div className='column-content'>
            <ul className="listing">
            <h5>Contact Us</h5>
            
                <li> <i className="fa-light fa-envelope"></i>shakir260@gmail.com</li>
                <li><i className="fa-light fa-phone-volume"></i>+92-300-848-8985</li>
                
            </ul>
          </div>
     </div>
    </div>
    <div className='footer'>
        <p>Copyright @ AR SHAKIR 2022. All Rights Reserved</p>
      </div>
    </div>
  )

}


export default  Footercomponent;