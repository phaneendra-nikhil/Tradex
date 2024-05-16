import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Hompage from './pages/Hompage'
import CoinDetails from './pages/CoinDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hompage />}/>
          <Route path='/coins/:id' element={<CoinDetails />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
