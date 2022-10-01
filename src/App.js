import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Hero from './componenet/hero/Hero';
import Navbar from './componenet/navbar/Navbar';
import Sepcard from './componenet/sepcard/Sepcard';


const App = () => {
  const url =  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';
  const [coin, setcoin] = useState([]);
  const fetchdata = async (url)=>{
    const response = await fetch(url);
    const data =await response.json();
    setcoin(data);
   
  }
  
  useEffect(()=>{
   fetchdata(url);
  }, [])
  return (
   <> 
   <Navbar/>
   <Routes>
    <Route path='/' element={<Hero res= {coin}/>}/>
    <Route path='/coin/:coid' element={<Sepcard/>}>
  
    </Route>
   </Routes>
   </>
  )
}



export default App;
