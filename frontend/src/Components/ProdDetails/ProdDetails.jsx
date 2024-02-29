import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';


const ProdDetails = () => {
    const [products, setProducts] = useState([]);
    const deliveryCharge = 42
    const totalPrice = () => {

        const subtotal = products.reduce((total, product) => total + product[1].price, 0);
        const totalDiscount = products.reduce((total, product) => total + product[1].discount, 0);
        const finalSubtotal = subtotal - totalDiscount;

        return finalSubtotal + deliveryCharge;
    };
    return (
        <div>
            <Container>
                <h5><i>Product Details</i></h5>

                <div className="col-md-5">
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

                </div>
            </Container>
        </div>);
};

export default ProdDetails;