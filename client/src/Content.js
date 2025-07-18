import mainImage from "./photos/houseBrown.jpg"
import community from "./photos/community.png"
import construction from "./photos/construction.png"
import mission from "./photos/mission.png"


const Content = () => {

    return (
        <div className="content-container">
            <h2>The New House we will Build</h2>
            <blockquote> The first house we will be build with the help of people and unity </blockquote>
            <img src={mainImage} className="content-image" alt="helkjalisdjf" />

            <h2>Community</h2>
            <blockquote>"From Comunity we build for comunity we give, one house at it time"</blockquote>
            <img src={community} className="content-image" alt="helkjalisdjf" />

            <h2>Construction</h2>
            <blockquote>"From Comunity we build for comunity we give, one house at it time"</blockquote>
            <img src={construction} className="content-image" alt="helkjalisdjf" />

            <h2>Mission</h2>
            <blockquote>"From Comunity we build for comunity we give, one house at it time"</blockquote>
            <img src={mission} className="content-image" alt="helkjalisdjf" />

        </div>
        
    ) 
};


export default Content;