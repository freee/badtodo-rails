import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './router/index';
import {Navbar} from './components/Navbar';

function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
  return (
    <div>
      <h1>Worst Todo</h1>
      <Navbar loggedIn={loggedIn} isAdmin={isAdmin}/>
      <Router loggedIn={loggedIn} isAdmin={isAdmin} setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin}/>
    </div>
  );
}

export default App;
