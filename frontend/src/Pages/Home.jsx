import React from 'react'
import HomeDp from '../Components/HomeDp/HomeDp'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import ExclusiveOffers from '../Components/ExclusiveOffers/ExclusiveOffers'
import BestSales from '../Components/BestSales/BestSales'

const Home = () => {
  return (
    <div className='home'>
        <HomeDp />
        <NewArrivals />
        <ExclusiveOffers />
        <BestSales />
    </div>
  )
}

export default Home