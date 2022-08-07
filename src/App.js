import React from 'react';
import Default from './components/Default'
import './App.css';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Home from './components/Home'
import Registered from './components/Registered'
import Test from './components/Test'
import {arrFunc} from './api/index.js'
function App() {
//arrFunc()
  return (
    <BrowserRouter>
<div className="App" >
  <div className='header'>
    <p className='headerp'>Aircraft Fault Tracker</p>
  </div>
<Routes>
  <Route exact path='/' element= {<Home/> }/>
  <Route exact path='/signup' element= {<Signup/> }/>
  <Route exact path='/signedin' element= {<Default/> }/>
</Routes>
   </div>
    </BrowserRouter>

    
  )
}

export default App;
