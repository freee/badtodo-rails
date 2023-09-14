import React from 'react';
import logo from './logo.svg';
import Login from './views/Login'
import './App.css';
import Router from './router/index';
import Inquery from './views/Inquery'
import Profile from './views/UserList'
import { addSyntheticLeadingComment } from 'typescript';
interface PeopleInformation{
  id:string;
  password:string;
  mail:string;
  icon:string;
  authentication:string;
}
function App() {
  const firstPeople :PeopleInformation    = { id:"admin",  mail:"root@example.jp",password:"password",icon:"../../../materials/man1.png",authentication:"管理者"};
  const secondPeople :PeopleInformation   = { id:"normal", mail:"notroot@example.jp",password:"password",icon:"../../../materials/man2.png",authentication:"一般"};
  const People :PeopleInformation[] = [firstPeople,secondPeople];
  return (
    <div>
      <Profile people = {People}/>
      {/* <h1>Worst Todo</h1> */}
     {/* <Router></Router> */}
    </div>
  );
}

export default App;
