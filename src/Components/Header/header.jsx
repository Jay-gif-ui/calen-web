import React, { useState } from 'react';
import calendly from '../../Assets/Untitled (1).png';
import './header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isProductOpen, setProductOpen] = useState(false);
    const [isResourcesOpen, setResourcesOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleProductDropdown = () => {
        setProductOpen(!isProductOpen);
    };

    const toggleResourcesDropdown = () => {
        setResourcesOpen(!isResourcesOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative">
                <div className="flex items-center">
                    <img src={calendly} alt="Calendly Logo" className={`w-12 h-12 mr-2 ${isMenuOpen ? 'bg-white' : ''}`} />


                    <span className={`logo  font-bold text-lg ${isMenuOpen ? 'text-black' : ''}`} style={{ background: 'linear-gradient(to right, rgb(174, 103, 250), rgb(244, 152, 103))', backgroundClip: 'text', color: 'transparent' }}>Calendly</span>
                </div>

                {/* Hamburger Menu Icon */}
                <div className='style bg-blue-500'></div>
                <button className="btn3 block lg:hidden text-white focus:outline-none" onClick={toggleMenu}>

                    <svg className="w-6 h-6 fill-current text-blue-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>


                {/* Navigation Links */}
                <ul className={`lg:flex items-center space-x-6 ${isMenuOpen ? 'block' : 'hidden lg:flex'}`}>
                    <li className="text-white hover:text-gray-300 cursor-pointer">Individual</li>
                    <li className="text-white hover:text-gray-300 cursor-pointer">Team</li>
                    <li className="text-white hover:text-gray-300 cursor-pointer">Enterprise</li>
                    <li className="text-white hover:text-gray-300 cursor-pointer relative" onClick={toggleProductDropdown}>
                        Product <span className="ml-1">&#8250;</span>
                        {/* Product Dropdown */}
                        {isProductOpen && (
                            <ul className="absolute top-full left-0 w-36 bg-gray-800 p-2 rounded-md shadow-lg">
                                <li className="text-white hover:text-gray-300 cursor-pointer">Product 1</li>
                                <li className="text-white hover:text-gray-300 cursor-pointer">Product 2</li>
                                <li className="text-white hover:text-gray-300 cursor-pointer">Product 3</li>
                            </ul>
                        )}
                    </li>
                    <li className="text-white hover:text-gray-300 cursor-pointer">Pricing</li>
                    <li className="text-white hover:text-gray-300 cursor-pointer relative" onClick={toggleResourcesDropdown}>
                        Resources <span className="ml-1">&#8250;</span>
                        {/* Resources Dropdown */}
                        {isResourcesOpen && (
                            <ul className="absolute top-full left-0 w-36 bg-gray-800 p-2 rounded-md shadow-lg">
                                <li className="text-white hover:text-gray-300 cursor-pointer">Resource 1</li>
                                <li className="text-white hover:text-gray-300 cursor-pointer">Resource 2</li>
                                {/* Add more resource options as needed */}
                            </ul>
                        )}
                    </li>
                </ul>

                {/* Login and Get Started */}
                <div className={`lg:flex items-center space-x-4 mt-4 lg:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <button className="text-white hover:text-gray-300">Login</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r from-purple-500 to-yellow-500 hover:text-black">Get Started</button>


                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Get Started</button> */}
                </div>
            </div>
        </nav>
    );
};

export default Header;
