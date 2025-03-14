import React from "react";
import Headroom from 'react-headroom';
import logo from './hearts_of_truth.png';
import menu from './menu-burger.jpg'


const Header = () => {

    return (
        <Headroom >
            
            <div className="App-header">
                <img src={menu} className="menu" alt=""/>
                <img src={logo} className="mainLogo" id="logo_og"alt=""/>                
                
                </div>
                
        </Headroom>
    );
};

export default Header;