import Headroom from 'react-headroom';
import logo from './hearts_of_truth.png';
import './App.css';

const Header = ({ onBurgerClick }) => {
    return (
        <Headroom>
            <div className="App-header">
                <img src={logo} className="mainLogo" id="logo_og" alt="logo" />
                <button className="custom-burger-button" onClick={onBurgerClick}>☰</button>
            </div>
        </Headroom>
    );
};

export default Header;