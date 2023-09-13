import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './router/index';
import {Navbar} from './components/Navbar';


function App() {
  return (
    <div>
      <h1>Worst Todo</h1>
      {/* loginしてる時は trueを渡す */}
      <Navbar loggedIn={true} isAdmin={true}/>
      <Router></Router>
    </div>
  );
}

export default App;
