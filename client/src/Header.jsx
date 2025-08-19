import Headroom from 'react-headroom';
import logo from './hearts_of_truth.png';
import './App.css';

import { useNavigate } from 'react-router-dom';

const Header = ({ onBurgerClick }) => {

const navigate = useNavigate();

    return (
        <Headroom>

            <nav className="header-desktop">
                <ul className="nav-left">
                    <li><a href="/collaborate">How to Collaborate?</a></li>
                </ul>

                
                <img src={logo} className="nav-logo-desktop" onClick={() => navigate('/')} alt="logo" />
                

                <ul className="nav-right">
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>


            <div className="App-header">
                <img src={logo} className="nav-logo" onClick={() => navigate('/')} alt="logo" />
                <button className="custom-burger-button" onClick={onBurgerClick}>☰</button>
            </div>
        </Headroom>
    );
};

export default Header;