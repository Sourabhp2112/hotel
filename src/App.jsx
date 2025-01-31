import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Hotel from './pages/singleHotel/Hotel'
import List from './pages/ListOfHotels/List'

function App() {
  return (
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/hotels' element={<List/>}/>
    <Route path='/hotels/:id' element={<Hotel/>}/>
  </Routes>

  </BrowserRouter>
  )
}

export default App
