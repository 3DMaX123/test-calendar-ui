import React from 'react';
import './App.css';
import "./fonts/SourceSansPro-Bold.otf"
import "./fonts/SourceSansPro-Regular.otf"
import NavBar from './components/NavBar';
import Control from './components/Control';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <Control />
        <Calendar />
      </main>
    </div>
  );
}

export default App;
