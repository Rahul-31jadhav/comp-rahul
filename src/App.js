// src/App.js
import React from 'react';
import CountDown from './components/CounterDown/CountDown'; // Import the countdown component
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <div>
      <Navigation/>
    <div className="app-container">
      <main className="main-content">
 <CountDown />
         </main>
    </div>
    </div>
  );
}
export default App; // Export the App component
