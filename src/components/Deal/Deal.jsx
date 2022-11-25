import React from 'react';
import Card from '../Card/Card';

const Deal = ({ products }) => {
    const searchProduct = products.slice(11);

    return (
        <div className='w-11/12 mx-auto my-5'>
            <h2 className='border-b-2 border-primary leading-10 border-dashed text-center lg:text-left md:text-left text-xl capitalize font-semibold'>Deals on furniture</h2>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-10'>
                {
                    searchProduct?.map(product => <Card key={product._id} product={product}></Card>)

                }
            </div>
        </div>
    );
};

export default Deal;
