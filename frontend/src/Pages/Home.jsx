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
<<<<<<< HEAD
    <div className='home'>   


=======

    <div className='home'>   

>>>>>>> 550da99557e08d8e2a887786f53a65098e3d5cdd
        <HomeDp />
        <NewArrivals />
        <ExclusiveOffers />
        <BestSales />
        <FreeCharge />
    </div>
    </div>
  )
}

export default Home