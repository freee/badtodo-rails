import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './router/index';
import {Navbar} from './components/Navbar';
import api from './api/axios';

function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
  useEffect(()=>{
    (async()=>{
      try {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
          const token = JSON.parse(atob(storedToken));
          console.log(token);

          const response = await api.get('/auth/validate_token', {
              params: {
                  uid: `${token["uid"]}`,
                  client: `${token["client"]}`,
                  "access-token": `${token["access-token"]}`
              }
          });
          if(response.data.success){
            setLoggedIn(true);
          };
        }
      }catch(e){
        console.error(e);
      }
    })();
  },[]);
  

  return (
    <div>
      <h1>Worst Todo</h1>
      <Navbar loggedIn={loggedIn} isAdmin={isAdmin}/>
      <Router loggedIn={loggedIn} isAdmin={isAdmin} setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin}/>
    </div>
  );
}

export default App;
