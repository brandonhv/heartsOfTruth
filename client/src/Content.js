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

                <h2>What we are working on right now?</h2>
                <blockquote> Our first house will be built in Cagayan de Oro City, Philippines. </blockquote>
                <div className="image-section">
                <img src={mainImage} className="content-image" alt="Main House" />
                    <button className="learn-more-btn" onClick={() => navigate('/newhouse')}>
                    Learn More <ArrowIcon />
                    </button>
                </div>
                <hr className="section-divider" />

                

                <h2>Community</h2>
                <blockquote>The Community that we are focusing on helping is in Philipins for our first houses.</blockquote>
                <div className="image-section">
                <img src={community} className="content-image" alt="Main House" />
                    <button className="learn-more-btn" onClick={() => navigate('/community')}>
                    Learn More <ArrowIcon />
                    </button>
                </div>
                <hr className="section-divider" />


                <h2>Construction</h2>
                <blockquote> Building from the ground up, making a new construction be a new home for a family.</blockquote>
                <div className="image-section">
                <img src={construction} className="content-image" alt="Main House" />
                    <button className="learn-more-btn" onClick={() => navigate('/construction')}>
                    Learn More <ArrowIcon />
                    </button>
                </div>
                <hr className="section-divider" />

                <h2>Mission</h2>
                <blockquote>Making the world a better place by helping families build an awesome team.</blockquote>
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