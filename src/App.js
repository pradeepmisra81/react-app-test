import React from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import Navbar from './Components/Navbar';


const App = () => {

  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
