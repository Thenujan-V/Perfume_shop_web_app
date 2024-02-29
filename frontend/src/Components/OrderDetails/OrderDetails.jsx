// 
import React from 'react';
import './OrderDetails.css';
import { Container, Row, Col } from 'react-bootstrap';

const orderId = "ORD123456789";

const OrderDetails = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10, imageUrl: 'https://img.lazcdn.com/g/p/22d7e7be3174c18109982a8853d3fb46.jpg_720x720q80.jpg', quantity: 5 },
        { id: 2, name: 'Product 2', price: 20, imageUrl: 'https://img.lazcdn.com/g/p/22d7e7be3174c18109982a8853d3fb46.jpg_720x720q80.jpg', quantity: 10 },
        { id: 3, name: 'Product 3', price: 30, imageUrl: 'https://img.lazcdn.com/g/p/22d7e7be3174c18109982a8853d3fb46.jpg_720x720q80.jpg', quantity: 3 }
    ];

    // Calculate total price
    const totalPrice = products.reduce((acc, product) => {
        return acc + (product.price * product.quantity);
    }, 0);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <h5> <i>Order Details</i></h5>
                        <h5>Order ID: {orderId}</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Order Placed on: </h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>
                            Estimated Delivery period:
                        </h5>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <div className='ProductDetails'>
                            <h5><i>Order Details</i></h5>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>ID</th>
                                        <th>Name</th>

                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr key={product.id}>
                                            <td><img src={product.imageUrl} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.quantity}</td>
                                            <td>${product.price}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col>
                        <h5>Total Price- ${totalPrice}</h5>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Delivery Address</h5>
                        {/* Delivery address component */}
                    </Col>
                  
                </Row>
                <br />
                <Row>
                    <Col>
                        <h5><i>Tracking Process</i></h5>
                        {/* Tracking process component */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OrderDetails;
