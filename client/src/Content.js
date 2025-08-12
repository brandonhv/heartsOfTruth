import mainImage from "./photos/houseBrown.jpg"
import community from "./photos/community.png"
import construction from "./photos/construction.png"
import mission from "./photos/mission.png"
import ArrowIcon from "./ArrowIcon";

import { useNavigate } from 'react-router-dom';


const Content = () => {

    const navigate = useNavigate();

        return (
            <div className="content-container">

                <h2 className="content-title">What are we currently working on?</h2>
                <blockquote> " Launching our first home in Cagayan de Oro City, Philippines... "</blockquote>
                <div className="image-section">
                <img src={mainImage} className="content-image" alt="Main House" />
                    <button className="learn-more-btn" onClick={() => navigate('/newhouse')}>
                    Learn More <ArrowIcon />
                    </button>
                </div>
                <hr className="section-divider" />

                

                <h2 className="content-title">Community</h2>
                <blockquote>" Building homes for the people in the Philippines... "</blockquote>
                <div className="image-section">
                <img src={community} className="content-image" alt="Main House" />
                    <button className="learn-more-btn" onClick={() => navigate('/community')}>
                    Learn More <ArrowIcon />
                    </button>
                </div>
                <hr className="section-divider" />


                <h2 className="content-title">Construction</h2>
                <blockquote> " Creating homes from the ground up... " </blockquote>
                <div className="image-section">
                <img src={construction} className="content-image" alt="Main House" />
                    <button className="learn-more-btn" onClick={() => navigate('/construction')}>
                    Learn More <ArrowIcon />
                    </button>
                </div>
                <hr className="section-divider" />

                <h2>Mission</h2>
                <blockquote>" Making an impact by changing people's trajectory of life, one home at a time... "</blockquote>
                <div className="image-section">
                <img src={mission} className="content-image" alt="Main House" />
                    <button className="learn-more-btn" onClick={() => navigate('/mission')}>
                    Learn More <ArrowIcon />
                    </button>
                </div>

            </div>
            
        ) 
};


export default Content;