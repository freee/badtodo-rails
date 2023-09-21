
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
    // for(let cols of ToDoTable.table){
    //     //if(cols.props.children[0].checked){todoTable.push(cols.props.children[1].props.children);
    //     console.log(cols.props.children[0].props.children[1].props.checked);
    // }
    const deleteTodo = async (data:number[]) => {
        console.log("deletelist");
        console.log(ToDoTable.deletelist);
        // for(let i = 0;i<ToDoTable.deletelist.length;i++){
        //     let col = ToDoTable.table[ToDoTable.deletelist[i]];
        //     todoTable.push(col.props.children[1].props.children);
        // }
        // for(let todo of todoTable){
        //     try{
        //         const response = await api.delete('/todos/'+todo);
        //         console.log(response);
        //     }catch(e){
        //         console.error(e);
        //     }
        // }
    }
    return (<button onClick={()=>deleteTodo(todoTable)}>削除</button>);
}

export default DeleteToDo;