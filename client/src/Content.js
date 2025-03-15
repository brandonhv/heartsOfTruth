import React from "react";
import mainImage from "./photos/IMG_8763.JPG";
import community from "./photos/community.png";
import construction from "./photos/construction.png"
// import mission from "./photos/mission.png"


const Content = () => {

    return (

        <div>
            <img src={mainImage} className="App-logo" alt="" />
            <img src={community} className="community" alt="" />
            <img src={construction} className="construction" alt="" />
            {/* <img src={mission} className="mission" alt="" /> */}
        </div>
        
    ) 
};


export default Content;