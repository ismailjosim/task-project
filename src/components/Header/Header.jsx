import React from 'react';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <section className="navbar bg-base-100 border-b-2">
                <div className="flex-1">
                    <a href='/' className="text-2xl"><span className='font-bold'>shop</span>cart</a>
                </div>
                <div className="flex gap-2 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Sign In</span>
                </div>
            </section>
            <section className="flex justify-between items-center my-3">
                <div className="btn btn-primary rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                    <span className=" ">Dhaka, 1212</span>

                </div>
                <div>
                    <input type="text" placeholder="Search" className="input input-bordered w-full max-w-lg" />
                </div>

            </section>
            <section className="">
                <div className="container flex justify-between">
                    <ul className="items-stretch hidden lg:flex gap-2">
                        <li className="flex">
                            <button>Fresh</button>
                        </li>
                        <li className="flex">
                            <button>Today’s Deals</button>
                        </li>
                        <li className="flex">
                            <button>Gift Cards</button>
                        </li>
                        <li className="flex">
                            <button>Women Clothing</button>
                        </li>
                        <li className="flex">
                            <button>Men Clothing</button>
                        </li>
                        <li className="flex">
                            <button>Kids Clothing</button>
                        </li>
                        <li className="flex">
                            <button>Health</button>
                        </li>
                        <li className="flex">
                            <button>Pet corner</button>
                        </li>
                        <li className="flex">
                            <button>Pet corner</button>
                        </li>
                        <li className="flex">
                            <button>Pet corner</button>
                        </li>
                        <li className="flex">
                            <button>Books</button>
                        </li>
                        <li className="flex">
                            <button>Beauty</button>
                        </li>
                        <li className="flex">
                            <button>Bed Room</button>
                        </li>
                        <li className="flex">
                            <button>Sport</button>
                        </li>
                        <li className="flex">
                            <button>Sport</button>
                        </li>
                    </ul>

                    <button title="Open menu" type="button" className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Header;
