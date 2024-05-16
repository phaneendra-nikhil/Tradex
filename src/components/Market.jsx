import React from 'react'
import useAxios from '../hooks/useAxios'
import Coins from './Coins'

const Market = () => {
    const { response } = useAxios(`coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en`);
    console.log(response);
  return (
    <>
        <div className="market-container">
            <div className="coin-search">
              <input type="search" className='coin-input' placeholder='Search Coins'/>
            </div>
            <div className="coins-market">
              {response && response.map(coins => <Coins key={coins.id} coins={coins}/>)}
            </div>
        </div>
    </>
  )
}

export default Market