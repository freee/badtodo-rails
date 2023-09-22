import { prependOnceListener } from "process";
import React from 'react';
import {useState,useEffect} from 'react';
import '../assets/TextArea.css'
import axios from 'axios';
import e from "express";
import {Link} from 'react-router-dom'
import WhatToDo from "./WhatToDo"
import DeleteToDo from "../components/DeleteToDo";
import { isConstructorDeclaration } from "typescript";

interface ToDoInformationList{
    todos:ToDoInformation[];
    todoTable:JSX.Element[];
}
interface ToDoInformation{
    id:string;
    todo:string;
    c_date:string;
    due_date:string;
    done:string;
    attach_url:string;
    public:boolean;
    isChecked:boolean;
}
const initialToDoInformation: ToDoInformation={
    id:'',
    todo:'',
    c_date:'',
    due_date:'',
    done:'',
    attach_url:'',
    public:false,
    isChecked:false
}
export const ToDoList: React.FC = () => {
	const [formData, setFormData] = useState<ToDoInformationList>({todos:[],todoTable:[]});
    const [isChecked,setIsChecked] = useState<number[]>([]);
    useEffect(()=> {
        fetch('http://localhost:3001/todos',{method:'GET'})
        .then(res=>res.json())
        .then(data=>{
            let information = data.map((todo:ToDoInformation,index:number)=>
            <tr key={index}>
                <td> <input
                        type="checkbox"
                        checked={isChecked.includes(index)} onChange={(e)=>handleCheck(e,index)}
                    /></td>
                <td>{todo.id}</td>
                <td><Link to ={'/what-todo/'+todo.id} state={todo.id}>{todo.todo}</Link></td>
                <td>{todo.c_date}</td>
                <td>{todo.due_date}</td>
                <td>{todo.done?"完了":""}</td>
                <td>{todo.attach_url && (<a href={todo.attach_url}>{todo.attach_url.match(/([^/]+?)?$/)?.[0].slice(0,25)}</a>)}</td>
                <td>{todo.public?"OK":""}</td>
            </tr>
        )
        setFormData({
            ...formData,
            todoTable: information,
            todos: data
        })
        })
    },[isChecked]);
	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]:value,
		});
	};
const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  const updatedTodos = isChecked;//[...isChecked]; // isChecked配列のコピーを作成
  if (!updatedTodos.includes(index)) {
    updatedTodos.push(index);
  } else {
    const indexToRemove = updatedTodos.indexOf(index);
    updatedTodos.splice(indexToRemove, 1);
  }
  console.log(updatedTodos);
  console.log(e.target);
  e.target.checked = !e.target.checked; // チェックボックスの状態を更新
  setIsChecked(updatedTodos);
};
    return(
        <form className="Sub">
            <div className="search"><input type="text"/><button>検索</button>あいまい検索<input type="checkbox"/></div>
            <table id="data-table">
                <thead><tr><th><input type="checkbox"/></th><th>ID</th><th>todo</th><th>登録日</th><th>期限</th><th>完了</th><th>添付ファイル</th><th>公開</th></tr></thead>
            <tbody>{formData.todoTable}</tbody>
            </table><br/>
                    <DeleteToDo table={formData.todoTable} deletelist={isChecked}/> 
                    {/* <button type="button" name="process" value="dellist" onClick = {()=>DeleteToDo(formData.todoTable)}>削除</button> */}
                    <button type="submit" name="process" value="donelist">完了</button>
                    <button type="submit" name="process" value="exportlist">エクスポート</button>
        </form>
    );
}

export default ToDoList;