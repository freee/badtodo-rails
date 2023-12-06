
import api from '../api/axios'
import {useState,useLayoutEffect} from 'react';
interface ToDoformData{
    table:JSX.Element[];
    deletelist:number[];
}

const DeleteToDo:React.FC<ToDoformData> = (ToDoTable) => {
    const todoTable :number[]= [];
    const deleteTodo = async (data: number[]) => {
        const promises = ToDoTable.deletelist.map((index) => {
          let col = ToDoTable.table[index];
          const todo = col.props.children[1].props.children;
          return api.delete('/todos/' + todo);
        });
        await Promise.all(promises);
      };
    return (<button onClick={()=>deleteTodo(todoTable)}>削除</button>);
}

export default DeleteToDo;