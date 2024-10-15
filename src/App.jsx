import Home from './Pages/Home/Home'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css'
import { useState } from 'react'
import Gmail_Login from './Pages/Gmail_Login/Gmail_Login' 
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="178907091963-0j7q13flvn87ss99tqkb1cgur3vjivs5.apps.googleusercontent.com">
      
      <Routes>
        <Route path='/' element={ <Gmail_Login />}/>
        <Route path='/Home' element={<Home /> }/>
      </Routes>
      </GoogleOAuthProvider>

    </>
  )
}

export default App
