import React from 'react'
import logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="nav-container">
        <section className="nav-logo">
          <img src={logo} alt="logo-image" />
          <h3 className="heading" onClick={()=>navigate('/')}>Trade<span> X</span></h3>
        </section>
        <section className="nav-btn">
          <button className="navbtn login-btn">Login</button>
          <button className="navbtn get-started">Get Started</button>
        </section>
      </nav>
    </>
  )
}

export default Navbar