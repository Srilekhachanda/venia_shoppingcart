import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { FiSliders } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";
import "../../Style/Filter.scss"

function Breadcrum() {
  return (
    <div className='container bread'>
      <div className="aem-Grid aem-Grid--12 desk">
        <div className="aem-GridColumn aem-GridColumn--default--3">
          <div><Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="text.primary" href="/">
              Clothing
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/"
            >
              Women’s
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/"
            >
              Outerwear
            </Link>
          </Breadcrumbs></div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--9">
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--10">
              <h6>38 Results</h6>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--2">
              <select name="Sort by Latest" id="Sort by Latest">
                <option value="Sort by Latest">Sort by Latest</option>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Smart Gear">Smart Gear</option>
                <option value="rAccessories">Accessories</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="cato">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="text.primary" href="/">
              Clothing
            </Link>
            <Link underline="hover" color="text.primary" href="/">
              Women’s
            </Link>
            <Link underline="hover" color="text.primary" href="/">
              Outerwear
            </Link>
          </Breadcrumbs>
        </div>

        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--6">
            <h5><FiSliders />&nbsp;&nbsp;&nbsp;Filter Results</h5>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--6">
            <h5><RiArrowUpDownLine />&nbsp;&nbsp;&nbsp;Sort by Latest</h5>
          </div>
        </div>

        <h6>38 Results</h6>
      </div>
    </div>
  )
}

export default Breadcrum