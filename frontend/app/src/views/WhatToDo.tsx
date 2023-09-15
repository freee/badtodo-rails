import { prependOnceListener } from "process";
import React from 'react';
import {useState,useEffect} from 'react';
import '../assets/TextArea.css'
import {AxiosResponse} from 'axios'
import e from "express";
import ToDoList from "./ToDoList";
import {useParams} from 'react-router'
import api from '../api/axios'
import {useNavigate} from 'react-router'
interface ToDoformData{
    id:string;
    todo:string;
    icon:string;
    register:string;
    expire:string;
    complete:string;
    memo:string;
    attach:string;
    url:string;
    public:string;
}
type Params={
    id?:string;
}
const initialToDoformData: ToDoformData={
    id:'',
    todo:'',
    icon:'',
    register:'',
    expire:'',
    complete:'',
    memo:'',
    attach:'',
    url:'',
    public:''
}
export const WhatToDo: React.FC = () => {
    const {id} =  useParams<Params>();
    const [formData, setFormData] = useState<ToDoformData>(initialToDoformData);
    const navigate = useNavigate();
    useEffect(()=>{
        async function fetchData(){
            const response: AxiosResponse<any> = await api.get('/todos/'+id);
            setFormData(response.data);console.log(response.data);
            return response;
        }
    fetchData();
    });
    return(
    <div>
        <form>
            <table><tbody>
                <tr><th>ID</th><td>{id}<img src={formData.icon}/></td></tr>
                <tr><th>todo</th><td>{formData.todo}</td></tr>
                <tr><th>登録日</th><td>{formData.register}</td></tr>
                <tr><th>期限</th><td>{formData.expire}</td></tr>
                <tr><th>完了</th><td>{formData.complete}</td></tr>
                <tr><th>メモ</th><td>{formData.memo}</td></tr>
                <tr><th>添付ファイル</th><td>{formData.attach}</td></tr>
                <tr><th>URL</th><td>{formData.url}</td></tr>
                <tr><th>公開</th><td>{formData.public}</td></tr>
                </tbody>
            </table><br/>
                <button type="submit" name="process" value="dellist">削除</button>
        </form>
        <br/>
    </div>
    );
}

export default WhatToDo;