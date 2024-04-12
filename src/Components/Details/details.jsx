import React from 'react';

const BlueSection = () => {
    return (
        <div className='relative py-36 px-19' style={{ background: 'rgb(34, 31, 31)' }}>
            <div className="mx-auto max-w-lg text-center rounded-lg p-10" style={{ background: 'linear-gradient(45deg, rgb(34, 31, 31), #3F51B5)' }}>
                <h1 className="text-3xl font-bold mb-4" style={{
                    backgroundImage: 'linear-gradient(to right, rgb(174, 103, 250), rgb(244, 152, 103))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                }}>Easy access for easy booking</h1>
                <p className="para text-lg mt-4 text-[#81afdd]">Share your Calendly link right from your browser, so you can schedule meetings without the back and forth.</p>

                <div className="flex justify-center gap-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-yellow-500">
                        Get Started
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-yellow-500">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BlueSection;
