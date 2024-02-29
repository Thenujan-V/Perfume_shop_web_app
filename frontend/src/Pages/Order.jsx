import React from 'react'
import OrderDetails from '../Components/OrderDetails/OrderDetails'
import Tracking from '../Components/Tracking/Tracking'
import DelivDetails from '../Components/DelivDetails/DelivDetails'
import ProdDetails from '../Components/ProdDetails/ProdDetails'

const Order = () => {
  return (
    <div>
        <OrderDetails />
        <ProdDetails />
        <DelivDetails />
        <Tracking />



    </div>
  )
}

export default Order