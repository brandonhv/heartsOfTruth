import { slide as Menu } from 'react-burger-menu';
import logo from './hearts_of_truth.png';
import { useNavigate } from 'react-router-dom';



const BurgerSlideMenu = ({ isOpen, setIsOpen }) => {
  const handleStateChange = ({ isOpen }) => {
    setIsOpen(isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  };


  const navigate = useNavigate()

  return (
    <Menu
      isOpen={isOpen}
      onStateChange={handleStateChange}
      width={'100%'}
      customBurgerIcon={false}
      right
    >
      <div className="bm-header">
          <img src={logo} className="bm-mainLogo" id="logo_og" onClick={() => {navigate('/'); setIsOpen(false);}} alt="logo" />
      </div>

      <div className="bm-items">
        <a className="bm-item" href="/collaborate">How to Collaborate?</a>
        <a className="bm-item" href="/about">About</a>
        <a className="bm-item" href="/contact">Contact</a>
      </div>

    </Menu>
  );
};

export default BurgerSlideMenu;