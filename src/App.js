import React,{useState} from 'react';
import Default from './components/Default'
import {Link} from 'react-router-dom';
import './App.css';
import {BrowserRouter ,Routes, Route, Navigate} from 'react-router-dom'
import {authAction} from './store/faults'
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate} from 'react-router'
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
import One from './components/One'
function App() {
 
  const userisAuthenticated= useSelector(state=>state.authentication.isauthenticated)
  const currentUser= useSelector(state=>state.authentication.username)
  const[menu,setMenu] =useState(false)
  const dispatch= useDispatch()
 const showMenu=()=>{
  setMenu(!menu)
}


  return (
    
    
    <BrowserRouter>
<div className="App" >
<div className='navbarcontainer'> 
  <div className={userisAuthenticated ?'showuser':'nologedinuser'}> 
   <Link style={{textDecoration:'none'}} to= {userisAuthenticated? '/signedin':'/home'}>
    <p style={{color:'white'}}>  {currentUser} </p> </Link> </div>
    <div className='uppernavcontainer'>
    
   <div className='item'> <Link style={{textDecoration:'none'}} to ='/home'> <li  className='li'>Home</li></Link> </div>
   <div className='item'><Link style={{textDecoration:'none'}} to   =  {userisAuthenticated? '/signedin': '/home'}  > <li  className='li'>Tracker</li></Link></div>
   <div className='item'><Link style={{textDecoration:'none'}} to ='/about'> <li  className='li'>About</li></Link></div>
   <div className='item plus' onClick={showMenu}> <FaAngleDown className='downcaret' /> <li className='li' onClick={showMenu} >  Help</li></div>
 
    <div className={menu?'helpdropdown':'noshowmenu'} onMouseLeave={()=>{setMenu(false)}}> 
    <div className='helplist'> <Link style={{textDecoration:'none'}} to={'/helpdetail/instruction'}><li> Instruction</li></Link></div>
   <div className='helplist'><Link style={{textDecoration:'none'}} to ={'/helpdetail/enteredata'}> <li> Inserting</li> </Link></div>
   <div className='helplist'><Link style={{textDecoration:'none'}}  to={'helpdetail/getdata'}><li>Extracting</li> </Link> </div>
   <div className='helplist'> <Link style={{textDecoration:'none'}} to={'/helpdetail/signup'}><li> Signup</li> </Link></div>
   <div className='helplist'> <Link style={{textDecoration:'none'}} to={'/helpdetail/contact'}><li>Contact</li></Link></div>
   <div className='helplist'> <Link style={{textDecoration:'none'}} to={'/helpdetail/contact'}><li >Adress</li></Link> </div>
   <div className='helplist'> <Link style={{textDecoration:'none'}} to={'/helpdetail/contact'}><li>Direct </li></Link></div>
   <div className='helplist'> <Link style={{textDecoration:'none'}} to={'/helpdetail/contact'}> <li> More</li></Link></div>
   </div>
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
  <Route exact path='/onedetail/:id' element={<One/>}/>

</Routes>
</div>
    </BrowserRouter>

    
  )
}

export default App;
