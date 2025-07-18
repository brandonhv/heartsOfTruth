import { slide as Menu } from 'react-burger-menu';
import './App.css';

const BurgerSlideMenu = ({ isOpen, setIsOpen }) => {
  const handleStateChange = ({ isOpen }) => {
    setIsOpen(isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  };

  return (
    <Menu
      isOpen={isOpen}
      onStateChange={handleStateChange}
      width={'100%'}
      customBurgerIcon={false}
      right
    >
      <a className="bm-item" href="/">Home</a>
      <a className="bm-item" href="/about">About</a>
      <a className="bm-item" href="/contact">Contact</a>
    </Menu>
  );
};

export default BurgerSlideMenu;