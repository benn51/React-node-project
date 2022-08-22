import React,{useState} from 'react';
import Default from './components/Default'
import {Link} from 'react-router-dom';
import './App.css';
import {BrowserRouter ,Routes, Route, Navigate} from 'react-router-dom'
import {authAction} from './store/faults'
import { useDispatch,useSelector } from 'react-redux';
import Signup from './components/Signup'
import Home from './components/Home'
import About from './components/About.js'
import Help from './components/Help.js'
import Helpdetail from './components/Helpdetail'
import {FaAngleDown} from 'react-icons/fa'
import Registered from './components/Registered'
import Test from './components/Test'
import Front from './components/Front'
import SinglePlane from './components/SinglePlane';
function App() {
  const userisAuthenticated= useSelector(state=>state.authentication.isauthenticated)
  const currentUser= useSelector(state=>state.authentication.username)
  const[menu,setMenu] =useState(false)
const showMenu=()=>{
  setMenu(!menu)
}

  return (
    
    
    <BrowserRouter>
<div className="App" >

  <div className='navbarcontainer'> 
  <div className={userisAuthenticated ?'showuser':'nologedinuser'}>  <Link style={{textDecoration:'none'}} to= {userisAuthenticated? '/signedin': '/home'}><p style={{color:'white'}}>  {currentUser} </p> </Link> </div>
  <div className='item'> <Link style={{textDecoration:'none'}} to ='/'> <li  className='li'>Home</li></Link> </div>
   <div className='item'><Link style={{textDecoration:'none'}} to   =  {userisAuthenticated? '/signedin': '/home'}  > <li  className='li'>Fault Tracker</li></Link></div>
   <div className='item'><Link style={{textDecoration:'none'}} to ='/about'> <li  className='li'>About</li></Link></div>
   <div className='item'> <li  className='li' onClick={showMenu} > <FaAngleDown /> Help</li></div>
   <div className={menu?'helpdropdown':'noshowmenu'} onMouseLeave={()=>{setMenu(false)}}> 
    <Link style={{textDecoration:'none'}} to={'/helpdetail/instruction'}><li className='uppermenu'> Instruction</li></Link>
    <Link style={{textDecoration:'none'}} to ={'/helpdetail/enteredata'}> <li>Entering Data</li>  </Link>
   <Link to={'helpdetail/getdata'}><li>Getting data</li>  </Link> 
   <Link style={{textDecoration:'none'}} to={'/helpdetail/signup'}><li> Signup</li> </Link>
   <Link style={{textDecoration:'none'}} to={'/helpdetail/contact'}><li>Contact</li></Link>
   <li>Information</li>
   <li>Adress</li>
   <li>Direct line</li>
   <li>More info</li>
   </div>
  </div>

<Routes>
  <Route exact path='/' element= {<Front/>}/>
  <Route exact path='/home' element= { <Home/> } /> 
  <Route exact path='/signup' element= {<Signup/> }/>
  <Route exact path='/signedin' element= { !userisAuthenticated? <Navigate to = '/home'/>: <Default/> }/>
  <Route exact path='/singleplane' element={<SinglePlane/>}/>
  <Route exact path='/help' element={<Help/>}/>
  <Route exact path='/helpdetail/:type' element={<Helpdetail/>}/>
  <Route exact path='/about' element={<About/>}/>

</Routes>
</div>
    </BrowserRouter>

    
  )
}

export default App;
/** 
 * <div className={menu?'helpdropdown':'noshowmenu'}> 
    <li className='uppermenu'> instruction</li> 
    <Link to ={'/helpdetail/enteredata'}>  <li>entering data</li>  </Link>
    <li>getting data</li>  
   <li>getting data</li>
   <li>getting data</li>
   </div>
 */