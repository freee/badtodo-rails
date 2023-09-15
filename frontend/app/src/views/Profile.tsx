import React from "react"
import {useEffect} from "react";
import { AxiosResponse } from "axios";
import {useState} from "react"
import api from '../api/axios'
import { userInfo } from "os";
import {useParams} from 'react-router'
import '../assets/TextArea.css'
interface userInformation{
    id:number,
    email:string,
    password:string,
    image:string,
    is_admin:boolean
}
type Params={
    id?:string;
}
const InitialuserInformation : userInformation = {
    id:1,
    email:'',
    password:'',
    image:'',
    is_admin:false
}
interface userInformationList{
    users:userInformation[];
}
export default function Profile(props:any){
    const {id} = useParams<Params>();;
    const [formData,setFormData] = useState<userInformation>(InitialuserInformation);
    useEffect(()=>{
        console.log(id);
        fetch('http://localhost:3001/users',{method:'GET'})
        .then(res=>res.json())
        .then(data=>{
            let information = data.map((todo:userInformation,index:number)=>
                {
                if(Number(todo.id) == Number(id)){ setFormData(todo)}
                else {console.log(todo.id)}
                }
        )
        })
        },
    []);
    return(
        <div>
            <form>
            <table id="data-table">
                <tbody>
                <tr><td>ID</td><td>{formData.id}</td></tr>
                <tr><td>メールアドレス</td><td>{formData.email}</td></tr>
                <tr><td>パスワード</td><td>{formData.password}</td></tr>
                 <tr><td>アイコン</td><td><img src = {formData.image}/></td></tr> 
                <tr><td>利用者権限</td><td>{formData.is_admin}</td></tr>
                </tbody>
            </table>
            </form>
        </div>
    );
}
///