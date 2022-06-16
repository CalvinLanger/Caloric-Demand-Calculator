import React from 'react';

import './App.css';
import './MediaQuerys.css';
import CalorieDemandCalc from './components/CalorieDemandCalc';
import Footer from './components/Footer';
import MenuButton from './components/MenuButton';



function App() {
  return (
    <div>
      <div className="container">
        <CalorieDemandCalc />
        <div className="menu-button">
          <MenuButton />
        </div>
      </div>
      <Footer />
    </div>
  );

}

export default App;
