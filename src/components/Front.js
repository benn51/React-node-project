import React from 'react'
import './front.css'
import { FaLinkedin } from 'react-icons/fa'
const Front = () => {
  return (
    <div className='front'>
  
           <div className='uppercontainer'>
          <div className='bodycontainer'>
        
          <div className='box two'> now it is 11.30 central</div>
          <div className='box three'>item 3</div>
          </div>

          <div className='lowercontainer'>
            <div className='box four'>item 4</div>
          <div className='box five'>item 5</div>
          <div className='box six'>item 6</div>
            </div>
          
          
          </div>
        
          <div className='footer'>
              <div className='leftfooter'> < FaLinkedin size="2.5vw"/> </div>
              <div className='rightfooter'> Binyam Tafesse@copyrigh</div>
      </div>

    
     </div>
  )
}

export default Front