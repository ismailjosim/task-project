import React from 'react';
import Card from '../Card/Card';


const Hero = ({ products }) => {
    const heroProduct = products.slice(0, 6);
    // console.log(heroProduct);



    return (
        <div className="w-11/12 mx-auto my-5">
            <div className="hero-content flex-col lg:flex-row">
                <h1 className="text-5xl font-bold text-center lg:text-left md:text-left">We picked some <span className='text-primary'>cool things</span>  for you!</h1>
                <div>
                    <h2 className='border-b-2 border-primary leading-10 border-dashed text-center lg:text-left md:text-left text-xl capitalize font-semibold'>hot deals for you</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                        {
                            heroProduct?.map(product => <Card key={product._id} product={product}></Card>)

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
