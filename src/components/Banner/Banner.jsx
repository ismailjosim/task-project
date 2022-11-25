import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-[600px] w-11/12 mx-auto rounded-lg" style={{ backgroundImage: `url("https://i.ibb.co/jhCCq7f/Rectangle-3.png")` }}>
            <div className="hero-overlay bg-opacity-10 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="text-accent">
                    <p className="mb-5">Special Offer on</p>
                    <h1 className="mb-5 text-6xl font-bold">Furniture</h1>
                    <button className="">Check it out</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
