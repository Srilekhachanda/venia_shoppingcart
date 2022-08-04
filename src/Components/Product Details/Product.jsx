import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import "../../Style/Product.scss";
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
const Product = (props) => {
    const { onAdd, onRemove, cartItems } = props;
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        console.log({ cartItems });
        return (
            <>
                <div className='container'>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--12 onepr">
                            <img src={product.image} alt={product.title} height="70px" width="60px" />
                            <img src={product.image} alt={product.title} height="70px" width="60px" />
                            <img src={product.image} alt={product.title} height="70px" width="60px" />
                            <img src={product.image} alt={product.title} height="70px" width="60px" />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 oneprice">
                            <img src={product.image} alt={product.title} height="380px" width="320px" />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 rating-one">
                            <p>Clothing / Women’s / Outerwear</p>
                            <h2>{product.title}</h2>
                            <p className='price-one'>  $ {product.price} </p>
                            <p className="lead fw-bolder">
                                <div className='star'>
                                    <ul>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FiStar /></i>
                                        <i><a href='#'>(175)</a></i>
                                    </ul>
                                </div>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br /> do eiusmod tempor labore et dolore magna. Read more</p>
                            <hr />
                          
                           <h3>Quantity</h3>
                           <div className="input-group w-auto align-items-center">
                                <input
                                    type="button"
                                    value="-"
                                    className="button-minus border rounded-circle"
                                    data-field="quantity"
                                    onClick={() => onRemove(product)}
                                />&nbsp;&nbsp;
                                <h6 className="quant">{cartItems?.find((x) => x.id === product.id)?.qty || 1}</h6>&nbsp;&nbsp;
                                <input
                                    type="button"
                                    value="+"
                                    className="button-plus border rounded-circle"
                                    data-field="quantity"
                                    onClick={() => onAdd(product)}
                                />
                            </div>
                          
                            <button className="addtocart"
                                onClick={() => onAdd(product)}
                            >Add to Cart</button>
                            <div className='save'>

                                <a href="#">< AiOutlineHeart />save</a>
                                <a href="#"><BiShareAlt />share</a>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='Producttitle'>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 Sweat-wicking">
                            <h4>{product.title}</h4>
                            <h5>Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor labore dolore magna lorem ipsum dolor sit amet ipsum dolor sit amet, consectetur.
                                Duis tristique sollicitudin nibh sit amet. Tellus integer feugiat scelerisque varius morbi enim nunc
                                faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore
                                magna lorem ipsum dolor sit amet ipsum dolor sit amet, consectetur.
                                Duis tristique sollicitudin nibh sit amet.
                                Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.</p>
                            <div className='lines-two'>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct onAdd={onAdd} />}
                </div>
            </div>
        </div>
    )
}

export default Product