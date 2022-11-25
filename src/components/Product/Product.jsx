import React from 'react';

const Product = ({ products }) => {
    const heroProduct = products.slice(0, 6);
    console.log(heroProduct);
    return (
        <div className='w-11/12 mx-auto my-5'>
            <h2 className='border-b-2 border-primary leading-10 border-dashed text-center lg:text-left md:text-left text-xl capitalize font-semibold'>Today’s hot deals</h2>
        </div>
    );
};

export default Product;
