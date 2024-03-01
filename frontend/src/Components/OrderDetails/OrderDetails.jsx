import React, { useState, useEffect } from 'react'
import './OrderDetails.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

const OrderDetails = () => {
    const [completedOrders, setCompletedOrders] = useState([]);
    const [ongoingOrders, setOngoingOrders] = useState([]);
    const [pendingOrders, setPendingOrders] = useState([]);
  
    // Function to fetch orders from the backend
    const fetchOrders =async  () => {
      // Assuming you have an API endpoint to fetch orders
      // You can replace this with your actual API call
      // Fetch completed orders
      // Fetch ongoing orders
      // Fetch pending orders
      try {
        // Assuming you have separate endpoints to fetch completed, ongoing, and pending orders
        const completedResponse = await axios.get('your-backend-url/completed-orders');
        const ongoingResponse = await axios.get('your-backend-url/ongoing-orders');
        const pendingResponse = await axios.get('your-backend-url/pending-orders');
    
        // Assuming each response contains data in the format { orders: [...] }
        const completedOrders = completedResponse.data.orders;
        const ongoingOrders = ongoingResponse.data.orders;
        const pendingOrders = pendingResponse.data.orders;
    
        // Assuming you want to combine all orders into a single array
        const allOrders = [...completedOrders, ...ongoingOrders, ...pendingOrders];
    
        return allOrders;
      } catch (error) {
        console.error('Error fetching orders:', error);
        return []; // Return an empty array in case of an error
      }
    };
    useEffect(() => {

        fetchOrders();
      }, []);
  return (
    <div>OrderDetails 
<div>
      <h2>Completed Orders</h2>
      {completedOrders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}

      <h2>Ongoing Orders</h2>
      {ongoingOrders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}

      <h2>Pending Orders</h2>
      {pendingOrders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
    </div>
  )
}
const OrderCard = ({ order }) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Order ID: {order.id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Placed on: {order.date}</Card.Subtitle>
          <Card.Img variant="top" src={order.product.image} />
          <Card.Text>Product: {order.product.name}</Card.Text>
          <Card.Text>Quantity: {order.quantity}</Card.Text>
          <Card.Text>Total Price: {order.totalPrice}</Card.Text>
          <Card.Text>Delivery Address: {order.deliveryAddress}</Card.Text>
          <Card.Text>Estimated Delivery Days: {order.estimatedDeliveryDays}</Card.Text>
          <Card.Text>Tracking Process: {order.trackingProcess}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  
export default OrderDetails