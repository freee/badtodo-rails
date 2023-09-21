import { prependOnceListener } from "process";
import React from 'react';
import {useState,useEffect} from 'react';
import '../assets/TextArea.css'
import axios from 'axios';
import e from "express";
import {Link} from 'react-router-dom'
import WhatToDo from "./WhatToDo"
import getHeaders from "../utils/getHeaders";

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
    public:boolean
}
const initialToDoInformation: ToDoInformation={
    id:'',
    todo:'',
    c_date:'',
    due_date:'',
    done:'',
    attach_url:'',
    public:false
}

interface queryInterface {
    todo: string,
    isLike : boolean
}

const initialquery: queryInterface = {
    todo: "",
    isLike: false
}
export const ToDoList: React.FC = () => {
	const [formData, setFormData] = useState<ToDoInformationList>({todos:[],todoTable:[]});
    const [queryData, setQueryData] = useState<queryInterface>(initialquery);

    useEffect(()=> {
        fetch('http://localhost:3001/todos',{
            method:'GET',
            headers: getHeaders()
        })
        .then(res=>{
            if (res.status == 401){
                // エラーを投げる
                throw new Error("Unauthorized")
            }
            else{
                return res.json()
            }
        })
        .then(data=>{
            let information = data.map((todo:ToDoInformation,index:number)=>
            <tr key={index}>
                <td><input type="checkbox"/></td>
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
                todoTable: information,
                todos: data
            })
        })
        .catch((error: any) => {
            window.location.href = "/login"
        })

        
    },[]);

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value} = event.target;
        setQueryData({
            ...queryData,
            [name]: value
        });
    };

    const handleQuerySubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        fetch('http://localhost:3001/todos?todo='+queryData.todo+'&isLike='+queryData.isLike,{
            method:'GET',
            headers: getHeaders()
        })
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
                <td>{todo.attach_url && (<a href={todo.attach_url}>{todo.attach_url.match(/([^/]+?)?$/)?.[0].slice(0,25)}</a>)}</td>
                <td>{todo.public?"OK":""}</td>
            </tr>
        )
        setFormData({
            todoTable: information,
            todos: data
        })
        })
    }

    return(
        <form className="Sub">
            <div className="search">
                <input name="todo" type="text" onChange={handleQueryChange}/>
                <button onClick={handleQuerySubmit}>検索</button>
                あいまい検索
                <input name="isLike" type="checkbox" onChange={(e) => setQueryData({...queryData, isLike: e.target.checked })}/>
            </div>
            <table id="data-table">
                <thead><tr><th><input type="checkbox"/></th><th>ID</th><th>todo</th><th>登録日</th><th>期限</th><th>完了</th><th>添付ファイル</th><th>公開</th></tr></thead>
            <tbody>{formData.todoTable}</tbody>
            </table><br/>
                    <button type="submit" name="process" value="dellist">削除</button>
                    <button type="submit" name="process" value="donelist">完了</button>
                    <button type="submit" name="process" value="exportlist">エクスポート</button>
        </form>
    );
}

export default ToDoList;