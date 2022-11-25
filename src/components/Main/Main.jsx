import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
        </div>
    );
};

export default Main;
