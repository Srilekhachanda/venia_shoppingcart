import React from 'react'
import { Link } from "react-router-dom";
import "../Style/Checkoutone.scss"
import { FiEdit2 } from "react-icons/fi"

function Checkoutone() {
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
                   <div className="aem-Grid aem-Grid--12  shippingtwo">
                        <div className="aem-GridColumn aem-GridColumn--default--6 ">
                            <h6 >
                                Shipping Information
                            </h6>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12  text-right">
                            <p className='edit'><FiEdit2 />Edit</p>
                        </div>
                        </div>
                        <div className="aem-Grid aem-Grid--12 shippingtwo ">
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
                   
                    <p className='shopone'>2. Shipping Method</p>
                    <div >
                        <div>
                            <input type="radio" value="Male" name="gender" /> <label>Standard Shipping (4-8 business days via USPS) FREE</label>
                        </div>
                        <div>
                            <input type="radio" value="Female" name="gender" /> <label>Express Delivery (2-5 business days via USPS) $17.95</label>
                        </div>
                        <div>
                            <input type="radio" value="Other" name="gender" /><label> Next Day Delivery (Next business days via FedEx) $53.61</label>
                        </div>
                    </div>
                    <br />
                    <div className='continuepayment'>
                        <button type="button" className="continuetopayment">
                            <Link to="/checkouttwo">CONTINUE TO PAYMENT</Link>
                        </button>
                    </div>
                    <hr />
                    <p>3. Payment Information</p>
                    <hr />
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

export default Checkoutone