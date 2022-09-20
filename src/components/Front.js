import React,{useState} from 'react'
import './front.css'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import profile from './pictures/profile.jpeg'
import profile1 from './pictures/profile1.jpeg'
import profile2 from './pictures/profile2.jpeg'
import { nextPagefunc } from '../api'

const Front = () => {
  const [rotate,setRotate]= useState(false)
  const [currentvalue,setCurrentvalue]= useState(false)
  const [changedirection,setChangedirection]= useState(false)
  const nextPicture=()=>{
  setCurrentvalue(!currentvalue)
 }

const rotateFunc=()=>{
 setRotate(!rotate)
}
const pictures=[profile,profile1,profile2]

return (
 

 <div className='front'>
    <div className="allfront" >
      

              <div className='frontnav'>
                <div className='foricondiv'> < FaBars className={rotate?'fabars':'nofabars'}  size="40px" onClick={rotateFunc}/></div>
                   {/* <div> <article className='navarticle'>About Binyam Tafesse</article> </div>*/}
              </div>

                <div className={rotate?'sidenav':'nosidenav'}>
              <div className='sidelist1'>
                 <li className='list'>Hello</li>
                  <li className='list'>Welcome</li>
                  <li className='list'>to the Home</li>
                  <li className='list'> Page of the</li>
                  <li className='list'>Fault Tracker</li>
                  <li className='list'> Log in with Google</li>
              </div>
              <div className='sidelist2'>
                
                  <li className='list'>or create </li>
                  <li className='list'>Account </li>
                   <li className='list'>to use the  </li>
                  <li className='list'> Aircraft </li>
                  <li className='list'>Fault Tracker</li>
                  <li className='list'>Web App</li>
              </div>
                 
                 
                 
              </div>
              <div className='upperfrontcontainer'>
              <div  className='profileandside'>
             
               
             
                   <div className='slider' onClick={nextPicture}>
                
                        <div className='profiledetail'> 
                             <div className='frontskills'>

                                 <div className='frontskillsdetail'>
                                       <div className='profiletitle'>
                                            <h4 style={{margin:'2px'}}>About </h4> 
                                        <div className='foropacity'> <p  className='profiletitlep'  style={{ paddingLeft:'2vw'}}>An experienced Full Stack Developer with more 
                                                                              than four years of experience working on both frontend and back 
                                                                               end application development.Strong problem-solving abilities, self-motivated, 
                                                                               team player. Excellent understanding of different debugging 
                                                                               techniques. Very good in adapting new technical environments and new technologies. Skilled at implementing best 
                                                                               practices and latest technologies and frameworks with a strong and solid understanding of all phases of software
                                                                                development life cycle.
                                                                            
                                                                               
                                                     </p>  </div>
                                        </div>
                                         <div className='frontskillslist'>
                                                      <h4 style={{margin:'2px'}}>Technical Skills </h4>
                                                        <li>Javascript, Java,HTML&CSS</li>
                                                            <li>React,Nodejs, Express</li>
                                                            <li>MsSQLserver, Mongodb</li>
                                                            <li>ReactTesting Library, Mocha</li>
                                                            <li>JWT, JSON, Oauth</li>
                                                            <li>Agile/Scrum, Docker, </li>
                                                            <li>GIT, Github, Postman</li>
                                                            <li>Mac OS, Linux, Window</li>
                                                            <li>AWS,spring</li>
                        </div>
                                          <div className='frontpersonalproject' >
                                                             <h4 style={{margin:'2px'}}>Personal Project</h4>
                                                             <Link style={{textDecoration:'none'}}  to='/home'> <p className='frontpersonalprojectp'> Created a web app to store maintenance problems encountered and 
                                                              any maintenance action performed to fix the problem 
                                                              by the maintenance personnel so the solution 
                                                             would be stored and documented to be referred 
                                                             by authorized person whenever needed. The entries can be modified 
                                                              and deleted and can also accept illustrative pictures.
                                                              </p> </Link> 
                                             
                                          </div>
                                </div>
                               <div className= {currentvalue ?'frontworkexperience':'frontworkexperiencereverse'}>
                                 <h4 style={{margin:'2px'}}>Work Experience</h4>
     <div className='workexperiencelist'>
<li>   Integrated third-party services and external APIs on companys website home and Sub-pages using RESTful API  </li>
<li>   Decreased code complexity and improved maintainability of shared libraries and components. </li>
<li>   Developed the portal pages according to designers PSD specifications using HTML5, CSS3, Bootstrap and Node.js/JavaScript.</li>
<li>   Created  compex multi-layered inter-related react components and modules using Redux and context PI along with Node.js</li>
<li>   Developed an interactive and dynamic online electronics shopping page using Node.js/JavaScript, jQuery, MySQL and Express.js. </li>
<li>   and more ....... </li>
     </div>          
                       
                                  </div>   
                 </div>

                   
                { /*<div className={currentvalue?'image':'imagereverse'} > 
                 <img src={pictures[2]} alt="new"  width='600' height='400'/> </div> */}
                 </div>
              </div>
               </div>
        </div>
                                  
           <div className='footerfront'>
                <div className='footer'>
                    <div className='leftfooter'> <a  href ='https://www.linkedin.com/in/biniyamtafese' target="blank"> <div className='forlinkedin'>< FaLinkedin className='falinkedin'   size="2.5vw" style={{color:'black'}}/></div> </a> </div>
                    <div className='rightfooter'> Contact - <span> E-mail: tafessebinyam51@gmail.com </span> <span style={{marginLeft:'2vw'}}>Mob:615-6095699  </span></div>
               </div>
          </div>
    </div>
 </div>
  )
}       
                       
      export default Front                                  
                                                          
                                         
                    
                

        
             
                
      





