import React from 'react';
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
import Registered from './components/Registered'
import Test from './components/Test'
import Front from './components/Front'
import SinglePlane from './components/SinglePlane';
function App() {
  const userisAuthenticated= useSelector(state=>state.authentication.isauthenticated)
  const currentUser= useSelector(state=>state.authentication.username)

  return (
    <BrowserRouter>
<div className="App" >
  <div className='navbarcontainer'> 
  <div className={userisAuthenticated ?'showuser':'nologedinuser'}>  <Link style={{textDecoration:'none'}} to= {userisAuthenticated? '/signedin': '/home'}>     <p style={{color:'white'}}>  {currentUser} </p> </Link> </div>
  <div className='item'> <Link style={{textDecoration:'none'}} to ='/'> <li  className='li'>home</li></Link> </div>
   <div className='item'><Link style={{textDecoration:'none'}} to   =  {userisAuthenticated? '/signedin': '/home'}  > <li  className='li'>fault tracker</li></Link></div>
   <div className='item'><Link style={{textDecoration:'none'}} to ='/about'> <li  className='li'>about</li></Link></div>
   <div className='item'><Link style={{textDecoration:'none'}} to ='/help'> <li  className='li'>help</li></Link></div>
 
 
  </div>
<Routes>
  <Route exact path='/' element= {<Front/>}/>
  <Route exact path='/home' element= { <Home/> } /> 
  <Route exact path='/signup' element= {<Signup/> }/>
  <Route exact path='/signedin' element= { !userisAuthenticated? <Navigate to = '/home'/>: <Default/> }/>
  <Route exact path='/singleplane' element={<SinglePlane/>}/>
  <Route exact path='/help' element={<Help/>}/>
  <Route exact path='/about' element={<About/>}/>

</Routes>
</div>
    </BrowserRouter>

    
  )
}

export default App;
