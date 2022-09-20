import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className='about'>
         <div className='innerabout'>
             <div>
                 <h2 className='abouth1'> ABOUT AIRPLANE FAULT TRACKER</h2>
             </div>
            
    
              <div className='innerdiv1'>

                <div className='innerdiv2'>
                  <h3>App Objective</h3>
                     <p className='innerp'>
         Airplane Fault  Tracker is a web app developed to solve the problems of aircraft maintenance personel encounter.
         This web app gives access to store airplane maintainance problems,and the procedures followed to fix those maintainance issues.
         by doing so all the maintainance problems are archived in a single database this in turn gives the owner or who ever performs maintenance 
          an easy access for the previous maintainnace issues and the actions taken to fix those defects. 
             </p>
                </div>
             
             
         
           <div className='innerdiv3'>
              <h3> App Feautures</h3>
               <li> Add faults encountered</li>
               <li> record detail description of the problem to give who ever is reading a good understanding of the problem </li>
                <li>get all the fault records </li>
                <li>review all the solutions for the maintainance issues</li>
               <li>get the time the fault occured</li>
                <li>get the person who created the record</li>
           </div>
        
       </div>
        
    </div>

</div>
  )
}

export default About