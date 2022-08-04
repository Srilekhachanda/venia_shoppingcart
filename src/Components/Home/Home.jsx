import React from 'react'
import Products from '../Product list/Products';
import Filter from '../Filter/Filter';
import Hero from '../Hero/Hero';
import Breadcrum from '../Breadcrum/Breadcrum';

function Home(props) {
    const { category } = props;
    return (
        <>
            <Hero category={category} />
            <div>
                <Breadcrum />
            </div>
            <div className="aem-Grid aem-Grid--12 container">
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <Filter />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                    <Products {...props} />
                </div>
            </div>
        </>

    )
}

export default Home
