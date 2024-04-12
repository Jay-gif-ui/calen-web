import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import brookeImage from '../../Assets/brooke.jpg';
import './content.css'

const AutoTypingText = ({ text, delay }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        console.log('useEffect called');
        console.log('displayText:', displayText);
        console.log('text:', text);

        const interval = setInterval(() => {
            if (displayText.length === text.length) {
                clearInterval(interval);
            } else {
                setDisplayText((prevText) => prevText + text[displayText.length]);
            }
        }, delay);

        return () => clearInterval(interval);
    }, [displayText, text, delay]);

    return (
        <h1 className=" head text-4xl font-bold text-center" style={{
            backgroundImage: 'linear-gradient(to right, rgb(174, 103, 250), rgb(244, 152, 103))',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
        }}>
            {displayText}
        </h1>
    );
};

const App = () => {
    return (
        <div className="min-h-screen flex justify-center items-center" style={{ background: 'linear-gradient(rgb(34, 31, 31), rgb(0, 0, 90))' }}>
            <div className="fl flex flex-col justify-center items-center">
                <AutoTypingText text="Calendly  for the work you do" delay={100} />
                <p className="para text-lg mt-4 text-[#81afdd]">Across the range of users, Calendly helps people and teams build <br />
                    efficiency, professionalism, and results into the works they do.</p>

                <button className="btn  bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-yellow-500">Get Started</button>

            </div>
            <img src={brookeImage} alt="Brooke Image" className="image ml-8" style={{ width: '403px' }} />
        </div>
    );
};

export default App;
