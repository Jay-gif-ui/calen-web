import React, { useState } from 'react';

import FacebookIcon from '../icons/facebook.svg'; // Check the correct filename
import xIcon from '../icons/x-twitter.svg';
import instaIcon from '../icons/instagram.svg';

import './footer.css'

function Footer() {
    const [language, setLanguage] = useState('Language');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        setShowDropdown(false);
    };

    return (
        <div className="bg-gray-800 py-12">
            <div className="manage-footer container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* First Row */}
                <div>
                    <h1 className="text-white text-3xl font-bold">Easy <span className='text-blue-500'>Head</span></h1>
                    <p className="para-fix text-gray-300 mt-4">We take the work out of connecting with others so you can accomplish more.</p>
                    <div className="flex mt-4">
                        <div className="mr-4 relative">
                            <button onClick={() => setShowDropdown(!showDropdown)} className="text-white hover:text-gray-400 flex items-center">
                                {language} <span className={`ml-1 ${showDropdown ? 'transform rotate-90' : ''}`}>></span>
                            </button>
                            {showDropdown && (
                                <div className="absolute z-10 bg-gray-800 mt-1 p-1 rounded shadow-lg">
                                    <button onClick={() => handleLanguageChange('English')} className="text-white hover:text-gray-400">English</button>
                                    <button onClick={() => handleLanguageChange('Hindi')} className="text-white hover:text-gray-400">हिन्दी</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div className="mr-4">
                            {/* <a href="#" className="text-white hover:text-gray-400"> */}

                            <img style={{ width: '44px' }} src={FacebookIcon} alt="Facebook" />

                            {/* </a> */}
                        </div>
                        <div className="mr-4">
                            <a href="#" className="text-white hover:text-gray-400">
                                <img style={{ width: '44px' }} src={xIcon} alt="x" />
                            </a>
                        </div>
                        <div>
                            <a href="#" className="text-white hover:text-gray-400">
                                <img style={{ width: '44px' }} src={instaIcon} alt="insta" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className='second-row'>
                    <h2 className="text-white text-2xl font-bold">About</h2>
                    <ul className="text-gray-300 mt-4">
                        <li>About Candle</li>
                        <li>About Sales</li>
                        <li>Career</li>
                        <li>Newsroom</li>
                        <li>Security</li>
                    </ul>
                    <p className="text-white font-bold mt-4">Support</p>
                    <ul className="text-gray-300">
                        <li>Help Center</li>
                        <li>Video Tutorial</li>
                        <li>Cookie and Setting</li>
                    </ul>
                </div>
                {/* Third Row */}
                <div className='third-row'>
                    <h2 className="text-white text-2xl font-bold">Solution</h2>
                    <ul className="text-gray-300 mt-4">
                        <li>Customer success</li>
                        <li>sales</li>
                        <li>Recruiting</li>
                        <li>Information Technology</li>
                        <li>Marketing</li>
                    </ul>
                    <p className="text-white font-bold mt-4">Add-ons</p>
                    <p className="text-gray-300">Download for Chrome</p>
                    <p className="text-gray-300">download for Firefox</p>
                </div>
                {/* Fourth Row */}
                <div className='fourth-row'>
                    <h2 className="text-white text-2xl font-bold">Popular Features</h2>
                    <ul className="text-gray-300 mt-4">
                        <li>Embed calendly</li>
                        <li>Availability</li>
                        <li>sending Notifications</li>
                        <li>Using Calendly Mobile</li>

                    </ul>
                    <p className="text-white font-bold mt-4">Developers</p>
                    <p className="text-gray-300">Developer Tools</p>

                </div>
            </div>
        </div>
    );
}

export default Footer;