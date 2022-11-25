import React from 'react';
import Card from '../Card/Card';
import SearchCard from '../Card/SearchCard';

const Product = ({ products }) => {
    const dealProduct = products.slice(6, 11);
    const searchProduct = products.slice(11);


    return (
        <div>
            <div className='w-11/12 mx-auto my-5'>
                <h2 className='border-b-2 border-primary leading-10 border-dashed text-center lg:text-left md:text-left text-xl capitalize font-semibold'>Today's hot deals</h2>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-10'>
                    {
                        dealProduct?.map(product => <Card key={product._id} product={product}></Card>)

                    }
                </div>
            </div>
            <div className='w-11/12 mx-auto my-5'>
                <h2 className='border-b-2 border-primary leading-10 border-dashed text-center lg:text-left md:text-left text-xl capitalize font-semibold'>Your Searched items</h2>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-10'>
                    {
                        searchProduct?.map(product => <SearchCard key={product._id} product={product}></SearchCard>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Product;
