import React from 'react';
import logo from './logo.svg';
import Login from './views/Login'
import './App.css';
import Router from './router/index';
import Inquery from './views/Inquery'
import Profile from './views/ToDoList'
import { addSyntheticLeadingComment } from 'typescript';
interface ToDoInformation{
  id:string;
  todo:string;
  register:string;
  expire:string;
  complete:string;
  attach:string;
  public:string
}

function App() {
  const firstToDo :ToDoInformation    = { id:"admin",  todo:"パソコンを買う",register:"2023-09-12",expire:"2023-09-13",complete:"", attach:"",public:"OK"};
  const secondToDo :ToDoInformation   = { id:"normal", todo:"依頼の原稿を書く",register:"2023-09-12",expire:"2023-0919",complete:"",attach:"",public:"OK"};
  const todos :ToDoInformation[] = [firstToDo,secondToDo];
  return (
    <div>
      <Profile todos = {todos}/>
      {/* <h1>Worst Todo</h1> */}
     {/* <Router></Router> */}
    </div>
  );
}

export default App;
