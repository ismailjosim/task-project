import React from 'react';

const Footer = () => {
    return (
        <footer className="footer items-center p-4 py-10 bg-[#404040] text-white">
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 items-center justify-between w-11/12 m-auto">
                <div>
                    <a href='/' className="text-2xl"><span className='font-bold'>shop</span>cart</a>
                </div>
                <ul className='flex gap-5 items-center font-medium'>
                    <li><button>About us</button></li>
                    <li><button>Contact</button></li>
                    <li><button>Help</button></li>
                </ul>
                <select className="select bg-transparent">
                    <option>English</option>
                    <option>বাংলা</option>
                </select>
            </div>
        </footer>
    );
};

export default Footer;
