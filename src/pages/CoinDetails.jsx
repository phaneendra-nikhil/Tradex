import React from 'react'
import HistoryChart from '../components/HistoryChart'
import Details from '../components/Details'

const CoinDetails = () => {
  return (
    <>
        <div className="wrapper-container">
           <div className="details"><Details /></div>
           <div className="chart"><HistoryChart /></div>
        </div>
    </>
  )
}

export default CoinDetails