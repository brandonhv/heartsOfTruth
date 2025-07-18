import React, { useState } from 'react';
import Header from './Header';
import BurgerSlideMenu from './BurgerSlideMenu';
import Content from './Content';
import Footer from './Footer';    
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="App">
      <BurgerSlideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <Header onBurgerClick={() => setIsMenuOpen(true)} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;


