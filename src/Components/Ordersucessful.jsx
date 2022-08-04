import React from 'react'
import "../Style/Ordersucessful.scss"
import { FaInstagram } from "react-icons/fa"
import { FiFacebook, FiTwitter } from "react-icons/fi"

function Ordersucessful() {
    return (
        <div className='container'>
            <h3 className='checkouttext'>Order Successful!</h3>
            <div className='line'>
                <hr />
            </div>
            <div className="aem-Grid aem-Grid--12">
                <h6>Order Number #1700834</h6>
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--phone--12 shipping-three">
                            <div>
                                <h6 className="info">Shipping Information</h6>
                                <p>q_farhan@gmail.com <br/>+1 (555) 229-3367</p>
                            </div>
                            <div>
                                <p>Qadim Farhan<br/> 1098 Wapello Street<br/> Altadena, California 91001<br/> United States</p>
                            </div>
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--phone--12 shipping-three">
                           <div>
                           <h6 className="info">Shipping Method</h6>
                            <p>Standard Shipping Est. delivery in 4 - 8 business days FREE</p>
                            </div>
                            <div>
                            <p> Payment Information</p>
                            <p>Credit Card Visa ending in 4567</p>
                        </div>
                        </div>
                        
                       
                    </div>

                    <div className="aem-Grid aem-Grid--12">
                        <p  className='shipping'>3 items in your order</p>
                        <div className="aem-GridColumn aem-GridColumn--default--3 shipping-two aem-GridColumn--phone--12">
                            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" height="80" width="60" />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 shipping-three ">
                            <p>Electric Leggings</p>
                            <p>Size: Medium</p>
                            <p>Color: Storm</p>
                            <p>Quantity: 2</p>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 shipping-two ">
                            <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" height="80" width="60" />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 shipping-three ">
                            <p>Signature Sports Bra</p>
                            <p>Size: Medium</p>
                            <p>Color: Red</p>
                            <p>Quantity: 1</p>
                        </div>
                    </div>

                    <div className='shipping-three'>
                        <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    <div className="one-cards">
                        <div className="two-cards">
                            <h5 className="three-card">Give us a follow <br />to SAVE 20% <br />on your next order.</h5>
                            <div className="social-links-one">
                                <a href='#'><FaInstagram /></a> &nbsp;&nbsp;
                                <a href='#'><FiFacebook /></a> &nbsp;&nbsp;
                                <a href='#'><FiTwitter /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ordersucessful