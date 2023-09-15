import React from "react"
import {useEffect} from "react";
import { AxiosResponse } from "axios";
import {useState} from "react"
import api from '../api/axios'
import { userInfo } from "os";
import {useParams} from 'react-router'
interface userInformation{
    id:number,
    mail:string,
    password:string,
    icon:string,
    is_admin:boolean
}
type Params={
    id?:string;
}
const InitialuserInformation : userInformation = {
    id:1,
    mail:'',
    password:'',
    icon:'',
    is_admin:false
}
interface userInformationList{
    users:userInformation[];
}
export default function Profile(props:any){
    const {id} = useParams<Params>();;
    const [formData,setFormData] = useState<userInformation>(InitialuserInformation);
    useEffect(()=>{
        fetch('http://localhost:3001/todos',{method:'GET'})
        .then(res=>res.json())
        .then(data=>{
            let information = data.map((todo:userInformation,index:number)=>
                {if(todo.id == Number(id)){ setFormData(todo)}}
        )
        })
        },
    []);
    return(
        <div>
            <table>
                <tbody>
                <tr><td>ID</td><td>{formData.id}</td></tr>
                <tr><td>メールアドレス</td><td>{formData.mail}</td></tr>
                <tr><td>パスワード</td><td>{formData.password}</td></tr>
                 <tr><td>アイコン</td><td><img src = {formData.icon}/></td></tr> 
                <tr><td>利用者権限</td><td>{formData.is_admin}</td></tr>
                </tbody>
            </table>
        </div>
    );
}
///