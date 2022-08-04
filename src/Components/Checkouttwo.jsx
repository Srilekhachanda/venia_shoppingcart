import React from 'react'
import "../Style/Checkouttwo.scss"
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi"
function Checkouttwo() {
    return (
        <div className='container'>
            <h3 className='checkouttext'>Checkout</h3>
            <div className='line'>
                <hr />
            </div>

            <div className="aem-Grid aem-Grid--12">
                <h4>Guest Checkout</h4>
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                <div className='shipping-one'>
                   <div className="aem-Grid aem-Grid--12 shippingtwo">
                        <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--phone--12">
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
                        <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--phone--12">
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
                

               

                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <p className='paymentinfo'> 3. Payment Information</p>
                            <div>
                                <input type="radio" value="Male" name="gender" /><label>Credit Card</label>
                            </div>
                            <div>
                                <label for="exampleFormControlInput1">Name on Card</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div>
                                <label for="exampleFormControlInput1">Credit Card Number</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>

                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 "></div>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                            <div>
                                <label for="exampleFormControlInput1">Expiration Date</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                            <div>
                                <label for="exampleFormControlInput1">CVV</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                        </div>
                        <div>
                            <div className="topping">
                                <input type="checkbox" id="topping" name="topping" value="Paneer" />Billing address same as shipping address
                            </div>
                        </div>
                        <hr />
                        <div>
                            <input type="radio" value="Male" name="gender" /> PayPal
                        </div>
                        <hr />
                        <div className='continuepay'>
                            <button type="button" className="paymentcontinue">
                                <Link to="/Checkoutthree">CONTINUE TO PAYMENT</Link>
                            </button>
                        </div>

                    </div>

                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    <div className="aem-Grid aem-Grid--12 button-btnone">
                        <p>Pricing Summary</p>

                        <div className="aem-GridColumn aem-GridColumn--default--6">
                            <p>Subtotal</p>
                            <p>Coupon</p>
                            <p>Gift Card</p>
                            <p>Estimated tax</p>
                            <p>Estimated shipping</p>
                            <p><strong>Estimated Total</strong></p>

                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 text-right">
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

export default Checkouttwo