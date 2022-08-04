import React from 'react'

import { Link } from "react-router-dom";
import "../Style/Checkoutthree.scss"
import { FiEdit2 } from "react-icons/fi"


function Checkoutthree() {
    return (
        <div className='container'>
            <h2 className='checkouttext'>Checkout</h2>
            <div className='line'>
                <hr />
            </div>
            <div className="aem-Grid aem-Grid--12">
                <h4>Guest Checkout</h4>
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                <div className='shipping-one'>
                   <div className="aem-Grid aem-Grid--12 shippingtwo">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 ">
                            <h6 >
                                Shipping Information
                            </h6>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 text-right aem-GridColumn--phone--12">
                            <p className='edit'><FiEdit2 />Edit</p>
                        </div>
                        </div>
                        <div className="aem-Grid aem-Grid--12 shippingtwo">
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <p className='fgmail'>q_farhan@gmail.com <br />+1 (555) 229-3367</p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <p className='fgmail'>
                                    Qadim Farhan<br /> 1098 Wapello Street <br />Altadena, California 91001<br /> United States
                                </p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12"> &nbsp;</div>
                        </div>
                   </div>
                   <br/>
                   <div className='shipping-one'>
                   <div className="aem-Grid aem-Grid--12 shippingtwo">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <h6 >
                                Shipping Information
                            </h6>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 text-right aem-GridColumn--phone--12">
                            <p className='edit'><FiEdit2 />Edit</p>
                        </div>
                        </div>
                        <div className="aem-Grid aem-Grid--12 shippingtwo">
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <p className='fgmail'>q_farhan@gmail.com <br />+1 (555) 229-3367</p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <p className='fgmail'>
                                    Qadim Farhan<br /> 1098 Wapello Street <br />Altadena, California 91001<br /> United States
                                </p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12"> &nbsp;</div>
                        </div>
                   </div>
                   <br/>  <div className='shipping-one'>
                   <div className="aem-Grid aem-Grid--12 shippingtwo">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 ">
                            <h6 >
                                Shipping Information
                            </h6>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 text-right aem-GridColumn--phone--12">
                            <p className='edit'><FiEdit2 />Edit</p>
                        </div>
                        </div>
                        <div className="aem-Grid aem-Grid--12 shippingtwo">
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <p className='fgmail'>q_farhan@gmail.com <br />+1 (555) 229-3367</p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <p className='fgmail'>
                                    Qadim Farhan<br /> 1098 Wapello Street <br />Altadena, California 91001<br /> United States
                                </p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4"> &nbsp;</div>
                        </div>
                   </div><br/>
                    
                    <div className="aem-Grid aem-Grid--12 shipping-one shippingtwo">
                        <p>3 items in your order</p>
            <div className="aem-GridColumn aem-GridColumn--default--3 shipping-two">
            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" height="80" width="60"/>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 shipping-three aem-GridColumn--phone--12">
            <p>Electric Leggings</p>
           <p>Size: Medium</p>
           <p>Color: Storm</p>
           <p>Quantity: 2</p>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 shipping-two aem-GridColumn--phone--12">
            <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" height="80" width="60"/>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 shipping-three">
            <p>Signature Sports Bra</p>
           <p>Size: Medium</p>
           <p>Color: Red</p>
           <p>Quantity: 1</p>
            </div>
        </div>
        <br/>
                    <div className='order'>
                        <button type="button" className="placeorder">
                            <Link to="/ordersucessful">PLACE ORDER</Link>
                        </button>
                    </div>
                    <br />
                    <p className='ship'>By clicking confirm order you agree to our Terms and Conditions</p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    <div className="aem-Grid aem-Grid--12 button-btnone">
                        <p>Pricing Summary</p>

                        <div className="aem-GridColumn aem-GridColumn--default--6 ">
                            <p>Subtotal</p>
                            <p>Coupon</p>
                            <p>Gift Card</p>
                            <p>Estimated tax</p>
                            <p>Estimated shipping</p>
                            <p><strong>Estimated Total</strong></p>

                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 text-right ">
                            <p>$ 388.00</p>
                            <p>- $ 77.60</p>
                            <p>- $ 100.00 </p>
                            <p>$ 23.28</p>
                            <p>FREE</p>
                            <p><strong>$ 233.68</strong></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkoutthree