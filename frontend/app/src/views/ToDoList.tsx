import { prependOnceListener } from "process";
import React from 'react';
import {useState,useEffect} from 'react';
import '../assets/TextArea.css'
import axios from 'axios';
import e from "express";
import {Link} from 'react-router-dom'
import WhatToDo from "./WhatToDo"

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
    attach:string;
    public:boolean
}
const initialToDoInformation: ToDoInformation={
    id:'',
    todo:'',
    c_date:'',
    due_date:'',
    done:'',
    attach:'',
    public:false
}
export const ToDoList: React.FC = () => {
	const [formData, setFormData] = useState<ToDoInformationList>({todos:[],todoTable:[]});
    useEffect(()=> {
        fetch('http://localhost:3001/todos',{method:'GET'})
        .then(res=>res.json())
        .then(data=>{
            let information = data.map((todo:ToDoInformation,index:number)=>
            <tr key={index}>
                <td><input type="checkbox"/></td>
                <td>{todo.id}</td>
                <td><Link to ={'/what-todo/'+todo.id} state={todo.id}>{todo.todo}</Link></td>
                <td>{todo.c_date}</td>
                <td>{todo.due_date}</td>
                <td>{todo.done?"完了":""}</td>
                <td>{todo.attach}</td>
                <td>{todo.public?"OK":""}</td>
            </tr>
        )
        setFormData({
            ...formData,
            todoTable: information,
            todos: data
        })
        })
    });
	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]:value,
		});
	};
    return(
    <div>
        <form>
            <div className="search"><input type="text"/><button>検索</button>あいまい検索<input type="checkbox"/></div>
            <table id="data-table">
                <thead><tr><th><input type="checkbox"/></th><th>ID</th><th>todo</th><th>登録日</th><th>期限</th><th>完了</th><th>添付ファイル</th><th>公開</th></tr></thead>
            <tbody>{formData.todoTable}</tbody>
            </table><br/>
                    <button type="submit" name="process" value="dellist">削除</button>
                    <button type="submit" name="process" value="donelist">完了</button>
                    <button type="submit" name="process" value="exportlist">エクスポート</button>
        </form>
        <br/>
    </div>
    );
}

export default ToDoList;