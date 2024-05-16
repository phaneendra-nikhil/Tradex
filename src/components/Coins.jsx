import React from 'react'
import { Link } from 'react-router-dom';


const Coins = ({coins}) => {
  console.log(coins);

  const percentageChange = coins.price_change_percentage_24h.toFixed(2);
  const colorStyle = {
    color: percentageChange < 0 ? '#ff4d4d' : 'rgb(151, 244, 12)',
    backgroundColor: percentageChange < 0 ? 'rgba(255, 0, 0, 0.234)' : 'rgba(13, 131, 39, 0.779)',
    padding: '1px 10px',
    borderRadius: '3px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', 
  };

  return (
    <>
        <div className='coins-container'>
          
          <div className='coin-list'>
             
            <div className='coin'>
              <div className="coin-nav">
                <p className='rank'>{coins.market_cap_rank}</p>
                <p style={colorStyle}>{percentageChange}</p>
              </div>

              <div className="coin-text-1">
                <img src={coins.image} alt="" />
                <span className='name'>{coins.name}</span>
                <span className="market-cap"><span className="format">₹ </span>{coins.market_cap}</span>
                <div className="btn-area">
                 <Link to={`/coins/${coins.id}`} className='link'>
                  <button className="coin-btn">view Details</button>
                 </Link>
                </div>
              </div>

           </div>


          </div>
              
        </div>
    </>
  )
}

export default Coins