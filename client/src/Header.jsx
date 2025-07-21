import Headroom from 'react-headroom';
import logo from './hearts_of_truth.png';
import './App.css';

import { useNavigate } from 'react-router-dom';

const Header = ({ onBurgerClick }) => {

const navigate = useNavigate();

    return (
        <Headroom>
            <div className="App-header">
                <img src={logo} className="mainLogo" onClick={() => navigate('/')} id="logo_og" alt="logo" />
                <button className="custom-burger-button" onClick={onBurgerClick}>☰</button>
            </div>
        </Headroom>
    );
};

export default Header;