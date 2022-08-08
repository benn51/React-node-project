import React from 'react';
import Default from './components/Default'
import './App.css';
import {BrowserRouter ,Routes, Route, Navigate} from 'react-router-dom'
import {authAction} from './store/faults'
import { useDispatch,useSelector } from 'react-redux';
import Signup from './components/Signup'
import Home from './components/Home'
import Registered from './components/Registered'
import Test from './components/Test'
import {arrFunc} from './api/index.js'
function App() {
  const userisAuthenticated= useSelector(state=>state.authentication.isauthenticated)
const num= false
  return (
    <BrowserRouter>
<div className="App" >
  <div className='header'>
    <p className='headerp'>Aircraft Fault Tracker</p>
  </div>
<Routes>
    <Route exact path='/' element= { <Home/> } /> 
  <Route exact path='/signup' element= {<Signup/> }/>
  <Route exact path='/signedin' element= { !userisAuthenticated? <Navigate to = '/'/>: <Default/> }/>
</Routes>
   </div>
    </BrowserRouter>

    
  )
}

export default App;
