import React from 'react'
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({card,inde}) => {
  return (
  
    <div className='card-content'>
        <p>{inde}</p>
        <img src={card.image} alt=''/>
        <p>${card.current_price}</p>
        <p>{card.price_change_percentage_24h}%</p>
        <p>{card.total_volume.toLocaleString()}</p>
        <p>{card.market_cap.toLocaleString()}</p>
        <Link to={`/coin/${card.id}`}>Check.</Link>
    </div>
  
  )
}

export default Card