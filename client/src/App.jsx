import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './views/Home/Home'
import Landing from './views/Landing/Landing'
import Detail from './views/Detail/Detail'
import Form from './views/Form/Form'

import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

function App() {
 

  const {pathname} =useLocation(); 
  // {/* con este hook  puedo saber en que ruta se encuentra */}
  return (

      <div className="App">
  
          {pathname !== '/' && <NavBar />} 
          {/* cuanto se encuentre en la landing page no se renderizara la NavBar */}

        <Routes >

          <Route path='/' element={<Landing />} />
          
          <Route path='/home' element={<Home />}/>
  
          <Route path='/detail/:id' element={<Detail />}/>
  
          <Route path='/form' element={<Form />}/>
    
        </Routes>
      </div>
  )
}

export default App
