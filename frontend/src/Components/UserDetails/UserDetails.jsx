import React, { useState } from 'react'



const UserDetails = () => {
    // const [products, setProducts] = useState([
    //   { name: 'Product 1', subtotal: 100 },
    //   { name: 'Product 2', subtotal: 150 },
    //   { name: 'Product 3', subtotal: 200 },
    // ]);

    // // Calculate total price
    // const totalPrice = products.reduce((total, product) => total + product.subtotal, 0);
    const [products, setProducts] = useState([
        { name: 'Product 1', subtotal: 100, discount: 5 },
        { name: 'Product 2', subtotal: 150, discount: 10 },
        { name: 'Product 3', subtotal: 200, discount: 15 },
    ]);
    const deliveryCharge = 10; // Example delivery charge

    // Calculate total price with delivery charge
    const totalPrice = () => {
        const subtotal = products.reduce((total, product) => total + product.subtotal, 0);
        const totalDiscount = products.reduce((total, product) => total + product.discount, 0);
        const finalSubtotal = subtotal - totalDiscount;
        return finalSubtotal + deliveryCharge;
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    {/* User Details Section */}
                    <h2>User Details</h2>
                    <form>
                        <label htmlFor="Title" className="form-label">Title<span className="required-sign" style={{ color: 'red' }}> *</span></label>

                        <div className="col">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="title" id="titleMr" value="Mr" />
                                <label className="form-check-label" htmlFor="titleMr">Mr</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="title" id="titleMs" value="Ms" />
                                <label className="form-check-label" htmlFor="titleMs">Ms</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="title" id="titleMrs" value="Mrs" />
                                <label className="form-check-label" htmlFor="titleMrs">Mrs</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="title" id="titleDr" value="Dr" />
                                <label className="form-check-label" htmlFor="titleDr">Dr</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="title" id="titleMrMrs" value="Mr. & Mrs" />
                                <label className="form-check-label" htmlFor="titleMrMrs">Mr. & Mrs</label>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name<span className="required-sign" style={{ color: 'red' }}> *</span></label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name<span className="required-sign" style={{ color: 'red' }}> *</span></label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" required />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">Country / Region<span className="required-sign" style={{ color: 'red' }}> *</span></label>
                            <input type="text" className="form-control" id="city" name="city" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="streetAddress" className="form-label">Street Address:</label>
                            <input type="text" className="form-control" id="streetAddress" name="streetAddress" required /> <br />
                            <input type="text" className="form-control" id="streetAddress" name="streetAddress" required />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">Town /City<span className="required-sign" style={{ color: 'red' }}> *</span></label>
                            <input type="text" className="form-control" id="city" name="city" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="postalCode" className="form-label">Postal Code /ZIP<span className="required-sign" style={{ color: 'red' }}> *</span></label>
                            <input type="text" className="form-control" id="postalCode" name="postalCode" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number<span className="required-sign" style={{ color: 'red' }}> *</span></label>
                            <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address<span className="required-sign" style={{ color: 'red' }}> *</span></label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                    </form>
                </div>
                {/* <div className="col-md-5">
  <table className="table">
    <tbody>
        
    
      {products.length === 0 ? (
      <tr>
        <td colSpan="4">No products available</td>
      </tr>
    ) : (
      products.map((product, index) => (
        <React.Fragment key={index}>
          <tr>
            <td>{product.name}</td>
          </tr>
          <tr>
            <td>Quantity: {product.quantity}</td>
          </tr>
          <tr>
            <td>Total Price: ${product.price * product.quantity}</td>
          </tr>
          <tr>
            <td>Delivery Period: {product.deliveryPeriod}</td>
          </tr>
        </React.Fragment>
      ))
    )}
    </tbody>
  </table>
</div> */}
                {/* <div className="col-md-5">
      <div className="row">
        <div className="col-md-12">
          <h2>Order Details</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>${product.subtotal}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total Price:</td>
                <td>${totalPrice}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div> */}
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Order Details</h2>
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
                                            <td>{product.name}</td>
                                            <td>${product.subtotal}</td>
                                            <td>${product.discount}</td>
                                            <td>${product.subtotal - product.discount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="3">Delivery Charge:</td>
                                        <td>${deliveryCharge}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">Total Price:</td>
                                        <td>${totalPrice()}</td>
                                    </tr>
                                    {/* <tr>
                                        <td colSpan="2">
                                            <div className="row justify-content-center">
                                                <div className="col-auto">
                                                    <button onClick={handleCheckout} className="btn btn-primary">Proceed to Checkout</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr> */}
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserDetails