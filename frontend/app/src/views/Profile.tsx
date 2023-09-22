import {useEffect} from "react";
import { AxiosResponse } from "axios";
import {useState} from "react"
import api from '../api/axios'
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

export default function Profile(props:any){
    const [formData,setFormData] = useState<userInformation>(InitialuserInformation);
    useEffect(()=>{
        async function fetchData(){
            const response: AxiosResponse<any> = await api.get('/users/'+props.userId);
            setFormData(response.data);
            return response;
        }
        fetchData();
    },[]);
    return(
            <form className="Sub"> 
            <table id="data-table">
                <tbody>
                <tr><td>ID</td><td>{formData.id}</td></tr>
                <tr><td>メールアドレス</td><td>{formData.email}</td></tr>
                <tr><td>パスワード</td><td>{formData.password}</td></tr>
                 <tr><td>アイコン</td><td><img src = {formData.image}/></td></tr> 
                <tr><td>利用者権限</td><td>{formData.is_admin?"管理者":"一般"}</td></tr>
                </tbody>
            </table>
            </form>
    );
}
