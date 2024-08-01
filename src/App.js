// src/App.js
import React, { useState } from 'react';
import ShuttleStatus from './ShuttleStatus';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('shuttle');

  const handleMenuItemClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <Sidebar onMenuItemClick={handleMenuItemClick} />
      <header className="App-header">
        <h1>Server Monitoring System</h1>
      </header>
      {selectedOption === 'shuttle' && <ShuttleStatus />}
      {selectedOption === 'zippy' && <div>Zippy Content</div>}
      {selectedOption === 'tunnel' && <div>Tunnel Content</div>}
    </div>
  );
}

export default App;
