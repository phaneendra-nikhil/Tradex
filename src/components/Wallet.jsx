import React from 'react'

import person from '../assets/images/person.png'
const Wallet = () => {
  return (
    <>
        <div className="wallet-container">
            <section className="wallet-text">
                <h1 className="wallet-heading">Built on a robust and powerful platform</h1>
            </section>
                <img src={person} alt="" />
        </div>
    </>
  )
}

export default Wallet