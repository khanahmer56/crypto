import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
   <div className='nav-container'>
    <div className='nav-content'>
      <Link to='/'><img src='https://cdn.pixabay.com/photo/2017/12/26/21/43/blockchain-3041480_1280.jpg' alt=''/></Link> 
       <h1>$ Crypto Exchange</h1>
    </div>
   </div>
  )
}

export default Navbar