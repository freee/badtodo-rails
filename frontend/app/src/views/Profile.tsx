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
    isAdmin:boolean
}
type Params={
    id?:string;
}
const InitialuserInformation : userInformation = {
    id:1,
    mail:'',
    password:'',
    icon:'',
    isAdmin:false
}
export default function Profile(props:any){
    const {id} = useParams<Params>();;
    const [formData,setFormData] = useState<userInformation>(InitialuserInformation);
    useEffect(()=>{
        async function fetchData(){
            const response: AxiosResponse<any> = await api.get('/users/'+id);
            const password = Array(response.data.password.length).fill("*");
            response.data.password = password;
            setFormData(response.data);console.log(response.data);
            return response;
        }
    fetchData();
    },[]);
    return(
        <div>
            <table>
                <tbody>
                <tr><td>ID</td><td>{formData.id}</td></tr>
                <tr><td>メールアドレス</td><td>{formData.mail}</td></tr>
                <tr><td>パスワード</td><td>{formData.password}</td></tr>
                 <tr><td>アイコン</td><td><img src = {formData.icon}/></td></tr> 
                <tr><td>利用者権限</td><td>{formData.isAdmin}</td></tr>
                </tbody>
            </table>
        </div>
    );
}
///