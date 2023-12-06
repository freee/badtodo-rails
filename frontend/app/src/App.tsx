import { useState, useEffect } from 'react';
import './App.css';
import Router from './router/index';
import {Navbar} from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import api from './api/axios';

function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
  const [userId,setUserId] = useState(0);
  const navigate = useNavigate();
  useEffect(()=>{
    (async()=>{
      try {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
          const token = JSON.parse(atob(storedToken));

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
        navigate('/');
      }catch(e){
        console.error(e);
      }
    })();
  },[loggedIn]);
  

  return (
    <div className="Sub">
      <h1>Worst Todo</h1>
      <Navbar loggedIn={loggedIn} isAdmin={isAdmin} />
      <Router loggedIn={loggedIn} isAdmin={isAdmin} userId={userId} setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} setUserId={{setUserId}}/>
      <br/>
    </div>
  );
}

export default App;
