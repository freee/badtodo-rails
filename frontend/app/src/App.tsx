import React from 'react';
import logo from './logo.svg';
import Login from './views/Login'
import './App.css';
import Router from './router/index';
import Inquery from './views/Inquery'
import ToDoList from './views/NewToDo'
import { addSyntheticLeadingComment } from 'typescript';
import {Navbar} from './components/Navbar';
interface ToDoInformation{
  id:string;
  todo:string;
  register:string;
  expire:string;
  complete:string;
  attach:string;
  public:string
}
interface ToDoInformationList{
  todos:ToDoInformation[];
}

function App() {
  const firstToDo :ToDoInformation    = { id:"admin",  todo:"パソコンを買う",register:"2023-09-12",expire:"2023-09-13",complete:"", attach:"",public:"OK"};
  const secondToDo :ToDoInformation   = { id:"normal", todo:"依頼の原稿を書く",register:"2023-09-12",expire:"2023-0919",complete:"",attach:"",public:"OK"};
  return (
    <div>
      <ToDoList/> {/*todos={[firstToDo,secondToDo]}/> */}
      {/* <Profile todos = {todos}/> */}
      {/* <h1>Worst Todo</h1> */}
     {/* <Router></Router> */}
      <h1>Worst Todo</h1>
      {/* loginしてる時は trueを渡す */}
      {/* <Navbar loggedIn={true} isAdmin={true}/> */}
      <Router></Router>
    </div>
  );
}

export default App;
