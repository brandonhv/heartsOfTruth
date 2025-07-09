import React from "react";
import mainImage from "./photos/houseBrown.jpg"
import community from "./photos/community.png"
import construction from "./photos/construction.png"
import mission from "./photos/mission.png"







const Content = () => {

    return (
        <div>
            <img src={mainImage} className="App-logo" alt="helkjalisdjf" />,
            <img src={community} className="App-logo" alt="helkjalisdjf" />
            <img src={construction} className="App-logo" alt="helkjalisdjf" />
            <img src={mission} className="App-logo" alt="helkjalisdjf" />
        </div>
        
    ) 
};


export default Content;