import React from 'react'
import useAxios from '../hooks/useAxios'
import { useParams } from 'react-router-dom'

const Details = () => {
  
  const {id} = useParams();
  const { response } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`);
  console.log(response);

  if(!response){
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="details-container">
        <section className="container-1">
          <article className="coin-details">
            <img src={response.image.large} alt={response.name} className="image" />
              <div className="coin-text">
                <h2>{response.name}</h2>
                <p dangerouslySetInnerHTML={{__html: response.description.en}}></p>
                <input type="checkbox" className='expand'/>
              </div>
          </article>
        </section>
        <section className="container-2"></section>
      </div>
    </>
  )
}

export default Details