import React from 'react'
import '../Style/Checkout.scss'
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <div className='container'>
      <h2 className='checkouttext'>Checkout</h2>
      <div className='line'>
        <hr />
      </div>

      <div className="aem-Grid aem-Grid--12">

        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
          <div className="aem-Grid aem-Grid--12">
            <h3 className='guest'>Guest Checkout</h3>
            <p className="contact">
              Contact information
            </p>
            <p className='details'>
              We’ll use these details to keep you informed on your delivery.
            </p>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">

              <label for="exampleFormControlInput1">Email</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="abc@xyz.com" />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <label for="Phone Number1">Phone Number</label>
              <input type="number" className="form-control" id="Phone Number1" placeholder="(222) 222-2222" />
            </div>
          </div>
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--phone--12 shippinginfo">
              <p>1. Shipping Information</p>
              <label for="exampleFormControlInput1">Country</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=" " />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
            </div>
          </div>
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <label for="exampleFormControlInput1">First Name</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <label for="exampleFormControlInput1">Last Name</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
          </div>
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <label for="exampleFormControlInput1">Street Address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <label for="exampleFormControlInput1">Street Address 2</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
          </div>
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <label for="exampleFormControlInput1">City</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Altadena" />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
              <label for="exampleFormControlInput1">Street Address 2</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12">
              <label for="exampleFormControlInput1">Street Address 2</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="91001" />
            </div>
          </div>
          <br />
          <div className="aem-Grid aem-Grid--12">

            <div className="aem-GridColumn aem-GridColumn--default--12  aem-GridColumn--phone--12 five-btn">
              <div>

                <button type="button" className="btn-five">
                  <Link to="/checkoutone">CONTINUE TO SHIPPING METHOD</Link>
                </button>
              </div>
            </div>

          </div>
          <hr />
          <p> 2. Shipping Method</p>
          <hr />
          <p> 3. Payment Information</p>
          <hr />
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">

          <div className="aem-Grid aem-Grid--12 button-btn">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <p>Sign in for Express <br />Checkout</p>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--phone--12 text-right">
              <button type="button" className='btn-nine'>
                <Link to="/signin">SIGN IN</Link></button>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div className="aem-Grid aem-Grid--12 button-btnone aem-GridColumn--phone--12">
            <p>Pricing Summary</p>

            <div className="aem-GridColumn aem-GridColumn--default--6 ">
              <p>Subtotal</p>
              <p>Coupon</p>
              <p>Gift Card</p>
              <p>Estimated tax</p>
              <p>Estimated shipping</p>
              <p><strong>Estimated Total</strong></p>

            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6  text-right">
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

export default Checkout