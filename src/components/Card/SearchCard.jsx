import React from 'react';

const SearchCard = ({ product }) => {

    return (
        <div className="flex flex-col items-center">
            <figure><img src={product.picture} alt="Shoes" /></figure>
            <div className="card-body">
            </div>
        </div>
    );
};

export default SearchCard;
