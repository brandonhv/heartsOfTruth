import { useState } from 'react';
import Header from './Header';
import BurgerSlideMenu from './BurgerSlideMenu';
import Content from './Content';
import Footer from './Footer';    
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewHouse from './NewHouse';
import Community from './Community';
import Construction from './Construction';
import Mission from './Mission';  



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div id="App">
        <BurgerSlideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <Header onBurgerClick={() => setIsMenuOpen(true)} />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/newhouse" element={<NewHouse />} />
          <Route path="/community" element={<Community />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/mission" element={<Mission />} />
      
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


