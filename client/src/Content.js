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

                <h2>The New House we will Build</h2>
                <blockquote> The first house we will be build with the help of people and unity </blockquote>
                <div className="image-section">
                <img src={mainImage} className="content-image" alt="Main House" />
                    <button className="learn-more-btn" onClick={() => navigate('/newhouse')}>
                    Learn More <ArrowIcon />
                    </button>
                </div>

                

                <h2>Community</h2>
                <blockquote>"From Comunity we build for comunity we give, one house at it time"</blockquote>
                <div className="image-section">
                <img src={community} className="content-image" alt="Main House" />
                    <button className="learn-more-btn" onClick={() => navigate('/community')}>
                    Learn More <ArrowIcon />
                    </button>
                </div>


                <h2>Construction</h2>
                <blockquote>"From Comunity we build for comunity we give, one house at it time"</blockquote>
                <div className="image-section">
                <img src={construction} className="content-image" alt="Main House" />
                    <button className="learn-more-btn" onClick={() => navigate('/construction')}>
                    Learn More <ArrowIcon />
                    </button>
                </div>

                <h2>Mission</h2>
                <blockquote>"From Comunity we build for comunity we give, one house at it time"</blockquote>
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