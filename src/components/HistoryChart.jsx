import React from 'react'
import useAxios from '../hooks/useAxios'
import { useParams } from 'react-router-dom'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const HistoryChart = () => {

  const { id } = useParams()
  const {response} = useAxios(`coins/${id}/market_chart?vs_currency=inr&days=7`);
  console.log(response)
  if(!response){
    return <div>Loading...</div>
  }
  const coinData = response.prices.map(value=>({x: value[0], y: value[1].toFixed(2)}));
  
  const options = {
    responsive: true
  }
  const data = {
    labels: coinData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinData.map(val => val.y),
        borderColor: '#6639E4',
        backgroundColor: 'rgb(203, 114, 195, 0.2)'
      }
    ]
  }
     
  return (
    <>
      <Line options={options} data={data}></Line>
    </>
  )
}

export default HistoryChart