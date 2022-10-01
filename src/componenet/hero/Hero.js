import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../Cards/Card';
import Sepcard from '../sepcard/Sepcard';
import './hero.css';

const Hero = ({res}) => {
  return (
  <div className='hero-container'>
  
    <div className='hero-content'>
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24hr</p>
        <p>Volume</p>
        <p>Mak Cap</p>
    </div>
    {
        res.map((data , index)=>{
            return( <Card card={data} inde={index}/>);
        })
    }
   
      

  </div>
  )
}

export default Hero