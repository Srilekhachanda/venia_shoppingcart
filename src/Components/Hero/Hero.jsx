import React from 'react'
import "../../Style/Her.scss"
import shopping from "../../Images/cart.png";
const getCategoryName = (cat) => {
  if (cat == "women's clothing") return "Women's";
  if (cat == "men's clothing") return "Men's clothing";
  if (cat == "jewelery") return "Smart Gear";
  if (cat == "lectronics") return "Accessories";
  return cat;
}
function Hero({ category }) {
  console.log({ category })
  return (
    <div>
      <div className='mnb'>
        <div className=''>
          <div className='herosection'>
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--4">
                <div className="cardone">
                  <div className="card-body">
                    <h5 className="card-title">{getCategoryName(category)}</h5>
                    <div className='lines'>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--8">
                <div className="card-img">
                  <img src={shopping} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='awq herosection'>
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div className="card-img">
              <img src={shopping} />
            </div>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 card--black">
            <div className="cardone">
              <div className="card-body">
                <h5 className="card-title">{getCategoryName(category)}</h5>
                <div className='lines'>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero