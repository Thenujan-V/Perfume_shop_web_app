// 
import React, { useEffect, useState } from 'react';
import './OrderDetails.css';
import { Container, Row, Col } from 'react-bootstrap';

const orderId = "ORD123456789";

const OrderDetails = () => {

    // const [products, setProducts] = useState([]);
    // const deliveryCharge = 42
    // const totalPrice = () => {

    //     const subtotal = products.reduce((total, product) => total + product[1].price, 0);
    //     const totalDiscount = products.reduce((total, product) => total + product[1].discount, 0);
    //     const finalSubtotal = subtotal - totalDiscount;

    //     return finalSubtotal + deliveryCharge;
    // };

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h5> <i>Order Details</i></h5>
                        <p>Order ID: {orderId}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Order Placed on: </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Estimated Delivery period:</p>

                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                       
                        {/* <div className='ProductDetails'>
                            
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
                        </div> */}
                        {/* <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-12">

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Subtotal</th>
                                                <th>Discount</th>
                                                <th>Discounted Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product, index) => (
                                                <tr key={index}>
                                                    <td>{product[1].pname}</td>
                                                    <td>({product[1].price}*{product[0].quantity}) <br></br> = ${product[1].price * product[0].quantity}</td>
                                                    <td style={{ color: "red" }}>{product[1].discount}%</td>
                                                    <td>${(product[1].price - (product[1].discount * product[1].price / 100)) * product[0].quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="3" style={{ color: "green" }}>Subtotal:</td>
                                                <td style={{ color: "green" }}></td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3" style={{ color: "red" }}>Delivery Charge:</td>
                                                <td style={{ color: "red" }}>${deliveryCharge}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3" style={{ color: "green" }}>Total Price:</td>
                                                <td style={{ color: "green" }}>${totalPrice()}</td>
                                            </tr>

                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div> */}

                    </Col>

                </Row>
                {/* <Row>
                    <Col>
                        <h5><i>Delivery detials</i></h5>

                    </Col>

                </Row>
                <br />
                <Row>
                    <Col>
                        <h5><i>Tracking Process</i></h5>
                        {/* Tracking process component */}
                    {/* </Col>
                </Row> */} 
            </Container>
        </div>
    );
};

export default OrderDetails;
