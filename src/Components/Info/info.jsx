import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faGraduationCap, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import BullseyeIcon from '../icons/bullseye-solid (2).svg';
import usergraduate from '../icons/user-graduate-solid.svg';
import chalkboard from '../icons/person-chalkboard-solid.svg';
import market from '../icons/store-solid.svg';
import chart from '../icons/chart-simple-solid.svg'
import person from '../icons/person-solid.svg'
const Card = ({ icon, heading, description }) => {
    return (
        <div className="rounded-lg shadow-lg p-6 mx-4 my-4" style={{ width: '288px', background: 'linear-gradient(45deg, rgb(34, 31, 31), #3F51B5)' }}>
            <div className="flex items-center justify-center mb-4">
                <img src={icon} alt="Icon" className="w-12 h-12 mr-3" />
                <h2 className="text-xl font-bold" style={{
                    backgroundImage: 'linear-gradient(to right, rgb(174, 103, 250), rgb(244, 152, 103))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                }}>{heading}</h2>
            </div>
            <p className="text-[#81afdd]" style={{ color: '' }}>{description}</p>
            <div className="text-blue-500 mt-4">
                <a href="#">Learn more <span>></span> </a>
            </div>
        </div>
    );
};

const App = () => {
    const cardsData = [
        {
            icon: BullseyeIcon,
            heading: 'Sale',
            description: 'Spend more time selling, and less time on admin. Shorten your sales cycle by letting prospects schedule whie  they are in peak buying mode ',
        },
        {
            icon: usergraduate,
            heading: 'Education',
            description: 'Control your office hours,and empower students and parents to schadule appointments easily.',
        },
        {
            icon: market,
            heading: 'Marketing',
            description: 'Convert intrested prospects into schaduled meetings and demos faster.skip steps that cause customer friction.',
        },
        {
            icon: chart,
            heading: 'Revenue Operations',
            description: 'Streamline meeting and activity data.Calendly is  native  integrations with Salesforce and  HubSpot ensure up-to-date reporting.',
        },
        {
            icon: chalkboard,
            heading: 'Recruiting',
            description: 'Simplify recruitment by smoothing every aspects the interview schaduling process, including automated  follow-ups.',
        },
        {
            icon: person,
            heading: 'Customer Success',
            description: 'Offer exceptional support: your  clients will be delighted with one- click schaduling and increased responsiveness.',
        },
    ];

    // Splitting the cardsData array into two arrays
    const firstThreeCards = cardsData.slice(0, 3);
    const lastThreeCards = cardsData.slice(3);

    return (
        <div style={{ background: 'rgb(34, 31, 31)', paddingTop: '20px', textAlign: 'center' }}>
            <h1 style={{
                backgroundImage: 'linear-gradient(to right, rgb(174, 103, 250), rgb(244, 152, 103))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontSize: '25px',
                fontWeight: 'bold'
            }}>Calendly can solve your specific pain points</h1>

            <div className="container">
                <div className="flex flex-wrap justify-center">
                    {firstThreeCards.map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            heading={card.heading}
                            description={card.description}
                        />
                    ))}
                </div>
                <div className="flex flex-wrap justify-center mt-8">
                    {lastThreeCards.map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            heading={card.heading}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
