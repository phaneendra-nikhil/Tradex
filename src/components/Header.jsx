import React from 'react'
import Slider from './Slider'
import Coins from './Coins'
import Banner from './Banner'
import Wallet from './Wallet'
import Market from './Market'
import Footer from './Footer'

const Header = () => {
  return (
    <>
      <div className='header-content'>
      <div className='wrapper'>
        
        <div className='text'>
          <h1>Welcome to the Trade<span>X</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className='btn-group'>
            <button className="btn btn-primary">Explore</button>
            <button className="btn btn-primary">View Pricing</button>
          </div>
        </div>

        <div className='image-container'>
          <img src='https://assets-global.website-files.com/5f8f28722b0eae892596eb35/5fac9aa80f78095f831b055d_image-home-hero-1-crypto-template-p-1600.png'></img>
        </div>
        
        <div className='box'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      </div>

      <Slider />
      <Market />
      {/* <Wallet />
      <Banner /> */}
      <Footer />
    </>
  )
}

export default Header