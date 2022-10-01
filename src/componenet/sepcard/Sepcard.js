import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './sepcard.css'
import DOMPurify from 'dompurify'


const Sepcard = () => {
  const [card,setcard]=useState({})
  const param = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${param.coid}`
  const fetchdata = async (url)=>{
    const response =  await fetch(url);
    const data = await response.json();
    setcard(data);
  }
  useEffect(()=>{
    fetchdata(url);
    
  },[])
  return (
   <div className='stepcontainer'>
    <div  className='step-content'>
      <h1>{card.name}</h1>
      <div className='step-content2'>
        <h4>Rank <br/>#{card.market_cap_rank}</h4>
        {card.image ?  <img src={card.image.small} alt=''/>: null }
        <p>{card.name}</p>
        {card.market_data?.current_price ? <h1>${card.market_data.current_price.usd.toLocaleString()}</h1> : null}
      </div>
      <div className='tables'>
        <table>
          <thead>
            <tr>
            <th>1h</th>
            <th>24hr</th>
            <th>7d</th>
            <th>14d</th>
            <th>38d</th>
            <th>1yr</th>
            </tr>
          </thead>
          <tbody>
          <tr>
                                <td>{card.market_data?.price_change_percentage_1h_in_currency ? <p>{card.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{card.market_data?.price_change_percentage_24h_in_currency ? <p>{card.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{card.market_data?.price_change_percentage_24h_in_currency ? <p>{card.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{card.market_data?.price_change_percentage_24h_in_currency ? <p>{card.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{card.market_data?.price_change_percentage_24h_in_currency ? <p>{card.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{card.market_data?.price_change_percentage_24h_in_currency ? <p>{card.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>       
          </tr>
          </tbody>
        </table>
      </div>
      <div className='main-cont'>
        <div className='left'>
          <div className='left-up'>
            <h3>24 Hour Low:</h3>
            {card.market_data?.low_24h ? <p>${card.market_data.low_24h.usd.toLocaleString()}</p> : null}
          </div>
          <div className='left-down'>
            <h3>24 Hour High:</h3>
            {card.market_data?.high_24h ? <p>${card.market_data.high_24h.usd.toLocaleString()}</p> : null}         
          </div>
        </div>
        <div className='right'>
        <div className='right-up'>
            <h3>MarketCap:</h3>
            {card.market_data?.market_cap ? <p>${card.market_data.market_cap.usd.toLocaleString()}</p> : null}
          </div>
          <div className='right-down'>
            <h3>Circulation Supply:</h3>
            {card.market_data ? <p>{card.market_data.circulating_supply}</p> : null}
          </div>
        </div>
        </div>
       
      </div>
    </div>
   
  )
}

export default Sepcard