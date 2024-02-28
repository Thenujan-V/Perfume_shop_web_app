import React from 'react'
import HomeDp from '../Components/HomeDp/HomeDp'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import ExclusiveOffers from '../Components/ExclusiveOffers/ExclusiveOffers'
import BestSales from '../Components/BestSales/BestSales'
import FreeCharge from '../Components/FreeCharge/FreeCharge'


import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'


import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'


const Home = () => {
  return (
    <div className='home'>
        <HomeDp />
        <NewArrivals />
        <ExclusiveOffers />
        <BestSales />
        <FreeCharge />

        <Footer />



    </div>

  )
}

export default Home