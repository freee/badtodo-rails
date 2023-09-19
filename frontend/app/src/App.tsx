import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './router/index';
import {Navbar} from './components/Navbar';
import api from './api/axios';
import { resolveTripleslashReference } from 'typescript';

function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
  const [userId,setUserId] = useState(0);
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
            setUserId(response.data.data.id);
            setIsAdmin(response.data.data["is_admin"]);
            setLoggedIn(true);
          };
        }
      }catch(e){
        console.error(e);
      }
    })();
  },[]);
  

  return (
    <div className="Sub">
      <h1>Worst Todo</h1>
      <Navbar loggedIn={loggedIn} isAdmin={isAdmin} />
      <Router loggedIn={loggedIn} isAdmin={isAdmin} userId={userId} setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} setUserId={{setUserId}}/>
    </div>
  );
}

export default App;
