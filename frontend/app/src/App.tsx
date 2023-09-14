import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './router/index';
import {Navbar} from './components/Navbar';

function App() {
  return (
    <div>
      <h1>Worst Todo</h1>
      <Navbar loggedIn={true} isAdmin={true}/>
      <Router isAdmin={true} loggedIn={true}/>
    </div>
  );
}

export default App;
