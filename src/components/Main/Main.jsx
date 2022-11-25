import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Deal from '../Deal/Deal';
import Product from '../Product/Product';
import Review from '../Review/Review';
import Hero from './Hero';
import HomeBanner from './HomeBanner';

const Main = () => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('fakeApi.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])




    return (
        <div>
            <Hero products={products} />
            <HomeBanner />
            <Product products={products} />
            <Banner />
            <Deal products={products} />
            <Review />
        </div>
    );
};

export default Main;
