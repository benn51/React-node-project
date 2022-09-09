import React,{useState} from 'react'
import './front.css'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
const Front = () => {
  const [rotate,setRotate]= useState(false)
const rotateFunc=()=>{
setRotate(!rotate)
}
return (
 

 <div className='front'>
    <div className="allfront" >
      <div className='upperfrontcontainer'>

              <div className='frontnav'>
                <div className='foricondiv'> < FaBars className={rotate?'fabars':'nofabars'}  size="40px" onClick={rotateFunc}/></div>
                    <div> <article className='navarticle'>About Binyam Tafesse</article> </div>
              </div>
              <div className={rotate?'sidenav':'nosidenav'}>
              
                  <li className='list'>hello</li>
                  <li className='list'>welcome</li>
                  <li className='list'>to the</li>
                  <li className='list'>home </li>
                  <li className='list'>page of</li>
                  <li className='list'>the app</li>
                  <li className='list'>tracker</li>
                  <li className='list'>log in</li>
                  <li className='list'>or</li>
                  <li className='list'>sign up</li>
                  <li className='list'>to keep</li>
                  <li className='list'>track</li>
                  <li className='list'>of your </li>
              </div>
                
       </div>
             
      
 

          <div className='footerfront'>
                <div className='footer'>
                    <div className='leftfooter'> <a  href ='https://www.linkedin.com/in/biniyamtafese' target="blank"> < FaLinkedin size="2.5vw" style={{color:'black'}}/></a> </div>
                    <div className='rightfooter'> Binyam Tafesse</div>
               </div>
          </div>
    </div>
 </div>
  )
}

export default Front

