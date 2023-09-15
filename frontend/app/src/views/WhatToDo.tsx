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
                <tr><td>ID</td><td>{id}<img src={formData.icon}/></td></tr>
                <tr><td>todo</td><td>{formData.todo}</td></tr>
                <tr><td>登録日</td><td>{formData.register}</td></tr>
                <tr><td>期限</td><td>{formData.expire}</td></tr>
                <tr><td>完了</td><td>{formData.complete}</td></tr>
                <tr><td>メモ</td><td>{formData.memo}</td></tr>
                <tr><td>添付ファイル</td><td>{formData.attach}</td></tr>
                <tr><td>URL</td><td>{formData.url}</td></tr>
                <tr><td>公開</td><td>{formData.public}</td></tr>
                </tbody>
            </table><br/>
                <button type="submit" name="process" value="dellist">削除</button>
        </form>
        <br/>
    </div>
    );
}

export default WhatToDo;