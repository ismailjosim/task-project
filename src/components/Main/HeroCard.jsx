import React from 'react';

const HeroCard = ({ product }) => {
    const { discount, name, picture, price } = product

    return (
        <div className="flex flex-col items-center">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="font-medium">{name}</h2>
                <div className="flex justify-between items-center">
                    <span>{price}</span>
                    <span className='text-[#FF3232]'>-{discount}% Off</span>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
