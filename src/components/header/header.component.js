import React from 'react'
import images from '../../images/Image12.png';
// import './header.styles.css';
 import '../css/styles.css';

const Headercomponent = () => {
  return (
    <div className='container'>
    <div className='header-wrapper'>
      <div className='header-left'>
        <div className='header-left-content'>
            <h5>Product Growth Solution in Single Platform.</h5>
            <h1>Managing business <br/> payments has never<br/> been easier</h1>
            <p>Never at water me might. On formed merits hunted unable<br/> merely by mr whence or. Possession the unpleasing simplicity<br/>her uncommonly.</p>
            <button>Try for free</button>
            </div>
            
            <div className='header-subscribe'>
                <div className='header-user'>
                <span>195k+ Users</span>
                <p>Delightful remarkably mr on<br/> announcing themselves entreaties<br/> favourable.</p>
            </div>
            <div className='saved'>
                <span>$400m+ Saved</span>
                <p>About to in so terms voice at. Equal<br/> an would is found seems of and<br/> concluded.</p>
            </div>
        </div>
        </div>
    <div className='header-right'>
        <img src={images} />
    </div>
    </div>
    </div>
    
  )
}

export default Headercomponent