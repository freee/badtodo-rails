
import api from '../api/axios'
import {useState,useLayoutEffect} from 'react';
interface ToDoformData{
    table:JSX.Element[];
    deletelist:number[];
}

const DeleteToDo:React.FC<ToDoformData> = (ToDoTable) => {
    const todoTable :number[]= [];
    console.log("this time ");
    console.log(ToDoTable.table);
    console.log(ToDoTable.deletelist);
    const deleteTodo = async (data: number[]) => {
        console.log("deletelist");
        console.log(ToDoTable.deletelist);
        const promises = ToDoTable.deletelist.map((index) => {
          let col = ToDoTable.table[index];
          const todo = col.props.children[1].props.children;
          return api.delete('/todos/' + todo);
        });
        await Promise.all(promises);
        console.log("All todos deleted");
      };
    return (<button onClick={()=>deleteTodo(todoTable)}>削除</button>);
}

export default DeleteToDo;