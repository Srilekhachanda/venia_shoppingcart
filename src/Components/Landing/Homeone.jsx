import React from 'react'
import "../../Style/Homeone.scss"
import boyone from "../../Images/boyone.png"
import boytwo from "../../Images/boytwo.png"
import { BiMap } from "react-icons/bi";
import Carousel from 'react-bootstrap/Carousel';
import cover from "../../Images/cardone.png"
import landing from "../../Images/Carousel-image.jpg"

function Homeone() {
    return (
        <>
            <div className="collectionsign collection-desktop">
                <Carousel>
                    <Carousel.Item>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--6 header-one">
                                <div className='text'>
                                    <h1>Shop the new <br />Signature Collection</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.
                                        Lobortis mattis <br />aliquam faucibus purus.</p>
                                    <input type="button" className="buttonone" value="SHOP NOW" />
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 header--two">
                                <img src="https://thumbs.dreamstime.com/b/happy-family-shopping-bags-goes-shopping-shopping-family-shopping-mall-155318546.jpg" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--6 header-one">
                                <div className='text'>
                                    <h1>Shop the new <br />Signature Collection</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.
                                        Lobortis mattis <br />aliquam faucibus purus.</p>
                                    <input type="button" className="buttonone" value="SHOP NOW" />
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 header--two">
                                <img src="https://thumbs.dreamstime.com/b/happy-family-shopping-bags-goes-shopping-shopping-family-shopping-mall-155318546.jpg" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--6 header-one">
                                <div className='text'>
                                    <h1>Shop the new <br />Signature Collection</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.
                                        Lobortis mattis <br />aliquam faucibus purus.</p>
                                    <input type="button" className="buttonone" value="SHOP NOW" />
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 header--two aem-GridColumn--phone--12">
                                <img src="https://thumbs.dreamstime.com/b/happy-family-shopping-bags-goes-shopping-shopping-family-shopping-mall-155318546.jpg" />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className='text---one'>
                    <div className='container newone'>
                        <div className="aem-Grid aem-Grid--12 ">
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='card--box women'>
                                    <div className="wq">
                                        <h6>Shop Women</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='card--box men'>
                                    <div className="wq">
                                        <h6>Shop Men</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='card--box smart'>
                                    <div className="wq">
                                        <h6>Jewellery</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>

                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='card--box assess'>
                                    <div className="wq">
                                        <h6>Electronics</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className="aem-Grid aem-Grid--12 takeoffone">
                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                            <div className='take-off'>
                                <h1>Take off in the new <br />Signature Legging</h1>
                                <h6>Lorem Ipsum Dolor Tempor</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor <br />labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                            </div>
                            <br />
                            <div className='btn-three'>
                                <input type="button" className="btn-one" value="SHOP COLLECTION " />&nbsp;&nbsp;&nbsp;
                                <input type="button" className="btn-two" value="SHOP NOW" />
                                <div className='lines-one'>
                                    <hr />
                                </div>
                            </div>

                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                            <div className='take-off-one'>
                                <img src={boytwo} />

                            </div>
                        </div>
                    </div>
                </div>



                <div className='container'>

                    <div className="aem-Grid aem-Grid--12 boy-img-one">
                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                            <div className="card-img">
                                <img src={boyone} />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                            <div className="one-card">
                                <div className="two-card">
                                    <h1 className="three-card">Conquer your <br />next adventure</h1>
                                    <p className='card-ab'>Lorem Ipsum Dolor Tempor</p>
                                    <input type="button" className="btn-four" value="SHOP DEVICES" />
                                    <a href="#" className='map1'><BiMap /></a>
                                    <div className='map2'>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* mobile */}
            <div className="collectionsign collection-mobile">
                <div class="aem-Grid aem-Grid--12">
                    <div class="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                        <div className='newcollection'>
                            <img src={landing} />
                        </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                        <div className='singnature'>
                            <h1>Shop the new Signature Collection</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod
                            </p>
                            <input type="button" className="shop-btn" value="SHOP NOW" />
                        </div>
                    </div>

                </div>
                <div className='shopwomen'>
                    <div className=''>
                        <div className="aem-Grid aem-Grid--12 ">
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='card--box women'>
                                    <div className="wq">
                                        <h6>Shop Women</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='card--box men'>
                                    <div className="wq">
                                        <h6>Shop Men</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='card--box smart'>
                                    <div className="wq">
                                        <h6>Jewellery</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>

                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='card--box assess'>
                                    <div className="wq">
                                        <h6>Electronics</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className=''>
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                            <div className='Dolor'>
                                <img src={boytwo} />

                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                            <div className='newtemp'>
                                <h1>Take off in the new Signature Legging</h1>
                                <h6>Lorem Ipsum Dolor Tempor</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                            </div>
                            <br />
                            <div className='onebtn'>
                                <div>
                                    <input type="button" className="btnone" value="SHOP COLLECTION " />
                                </div>
                                <br />
                                <div>
                                    <input type="button" className="btntwo" value="SHOP NOW" />
                                </div>
                                <div className='lines'>
                                    <hr />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className=''>
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                            <div className="foot">
                                <img src={boyone} />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 nextadventure">
                            <div className="one-card">
                                <div className="two-card">
                                    <h1 className="three-card">Conquer your <br />next adventure</h1>
                                    <p className='card-ab'>Lorem Ipsum Dolor Tempor</p>
                                    <input type="button" className="btn-four" value="SHOP DEVICES" />
                                    <a href="#" className='location'><BiMap /></a>
                                    <div className='locationone'>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Homeone