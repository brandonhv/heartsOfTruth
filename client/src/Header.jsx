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
                    <li><a href="/collaborate" data-text="How to Collaborate?">How to Collaborate?</a></li>
                </ul>

                
                <img src={logo} className="nav-logo-desktop" onClick={() => navigate('/')} alt="logo" />
                

                <ul className="nav-right">
                    <li><a href="/about" data-text="About Us">About Us</a></li>
                    <li><a href="/contact" data-text="Contact">Contact</a></li>
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