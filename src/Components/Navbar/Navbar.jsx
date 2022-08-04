import React from 'react';
import "../../Style/Nav.scss"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import  venia from "../../Images/venialogo.png";


import {  FiShoppingBag } from "react-icons/fi";

const categories = [{
        displayName: <Link to="/">Home</Link>
    },
    {
    filter: "women's clothing",
    displayName: <NavLink to='/home'>Women</NavLink>,
},
{
    filter: "men's clothing",
    displayName: <NavLink to='/home'>Men</NavLink>
}, {
    filter: "jewelery",
    displayName:  <NavLink to='/home'>Smart Gear</NavLink>
}, {
    filter: "electronics",
    displayName: <NavLink to='/home'>Accessories</NavLink>
},
]
const Navbar = ({ setCategory, selectedCategory, ...props }) => {
    return (
      
        <div className='nav-bar' >
          <div className="container new">
            <nav className="navbar navbar-expand-lg">
                    <NavLink className="" to="/"><img src={venia} width="80"/></NavLink>
                  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
                            {
                                categories?.map(category =>
                                    <li 
                                    className={`nav-link ${category.filter === selectedCategory ? 'active' : ''} `} 
                                    aria-current="page"
                                     onClick={() => setCategory(category.filter)}>{category.displayName}
                                    </li>
                                )
                            }
                        </ul>
                        <div className="buttons">
                            <NavLink to="/cart" className="cart"> <FiShoppingBag />
                                {' '}
                                {props.countCartItems ? (
                                    <button className="btn btn-success">{props.countCartItems}</button>
                                ) : (
                                    ''
                                )}
                            </NavLink>{' '}
                        </div>
                    </div>
              
            </nav>
        </div>
        </div>

    )
}

export default Navbar