import React from 'react'
import "../../Style/Navbarone.scss"
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import venia from "../../Images/venialogo.png";

const categories = [
    {
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
        displayName: <NavLink to='/home'>Smart Gear</NavLink>
    }, {
        filter: "electronics",
        displayName: <NavLink to='/home'>Accessories</NavLink>
    },
]
const Navbarone = ({ setCategory, selectedCategory, ...props }) => {
    return (
        <div className='navbar-one-one'>
            <div className="navbar">
                <div className="nav-container">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <div className="logo">
                        <div className='veniaicon'>
                            <NavLink className="" to="/"><img src={venia} width="80" /></NavLink>
                        </div>
                        <NavLink to="/login" className="searchicicon"> < FiSearch /></NavLink>&nbsp;&nbsp;&nbsp;
                        <NavLink to="/signin" className="searchicicon" >< FiShoppingBag /></NavLink>
                        <NavLink to="/cart" className="cart">
                            {' '}
                            {props.countCartItems ? (
                                <p className="btn">{props.countCartItems}</p>
                            ) : (
                                ''
                            )}
                        </NavLink>{' '}
                    </div>
                    <div className="menu-items">
                        <ul className="">
                            {
                                categories?.map(category =>
                                    <li className={`nav-link ${category.filter === selectedCategory ? 'active' : ''} `} aria-current="page" onClick={() => setCategory(category.filter)}>{category.displayName}
                                    </li>
                                )
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbarone
