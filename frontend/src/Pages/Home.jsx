import React from 'react'
import HomeDp from '../Components/HomeDp/HomeDp'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import ExclusiveOffers from '../Components/ExclusiveOffers/ExclusiveOffers'
import BestSales from '../Components/BestSales/BestSales'
import FreeCharge from '../Components/FreeCharge/FreeCharge'
import Nav from '../Components/Nav/Nav'



const Home = () => {
  return (
    <div className='home'>
        <Nav />
        <HomeDp />
        <NewArrivals />
        <ExclusiveOffers />
        <BestSales />
        <FreeCharge />
    </div>
  )
}

export default Home