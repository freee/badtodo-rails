import React from 'react';
import '../assets/TextArea.css';
import {Link} from 'react-router-dom'
type User = {
    id:string;
    password:string;
    email:string;
    icon:string;
    is_admin:boolean;
}

interface UserListProps {
    every: User[]
}




const UserList:React.FC<UserListProps> = (users) => {
    const information = users.every.map((user,index)=>
    <tr key={index}>
        <td><Link to = {'/mypage/'+user.id}>{user.id}</Link></td>
        <td>{user.password}</td>
        <td>{user.email}</td>
        <td><img src = {user.icon}/>変更</td>
        <td>{user.is_admin ? "管理者" : "一般"}</td>
    </tr>
    );
    return(
    <div>
        <table id="data-table">
            <thead><tr><th>ID</th><th>パスワード</th><th>メールアドレス</th><th>アイコン</th><th>種別</th></tr></thead>
        <tbody>{information}</tbody>
        </table><br/>
        <Link to ='/new-todo'>新規追加</Link><br/>
    </div>
    );
}
export default UserList;

/*
import React from 'react';
import '../assets/TextArea.css';
import { prependOnceListener } from "process";
import {useState,useEffect} from 'react';
import '../assets/TextArea.css'
import axios from 'axios';
import e from "express";
import {Link} from 'react-router-dom'
import api from '../api/axios'
import {useNavigate} from 'react-router'
import { AxiosResponse } from 'axios';
type User = {
    id:string;
    todo:string;
    c_date:string;
    due_date:string;
    complete:false;
    attach:string;
    public:boolean;
}

interface UserListProps {
    users: User[]
}




const UserList:React.FC<UserListProps> = ({users}) => {
    const [formData, setFormData] = useState<UserListProps>({users:[]});
    const navigate = useNavigate();
    useEffect(()=>{
        async function fetchData(){
            const response: AxiosResponse<any> = await api.get('/users');
            setFormData(response.data);console.log(response.data);
            return response;
        }
    fetchData();
    },[]);
    const makeTable=()=>{
        const information = formData.users.map((user,index)=>
        <tr key={index}>
            <td>{user.id}</td>
            <td>{user.todo}</td>
            <td>{user.c_date}</td>
            <td>{user.due_date}</td>
            <td>{user.complete}</td>
            <td>{user.attach}</td>
            <td>{user.public}</td>
        </tr>
        )
        return information;
    };
    return(
    <div>
        <table id="data-table">
            <thead><tr><th>ID</th><th>パスワード</th><th>メールアドレス</th><th>アイコン</th><th>種別</th></tr></thead>
        <tbody>{makeTable()}</tbody>
        </table><br/>
        新規追加<br/>
    </div>
    );
}
export default UserList;
*/