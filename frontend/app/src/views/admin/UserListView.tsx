import UserList from '../../components/UserList';
import React from 'react';
import {useState,useEffect} from 'react';
import '../../assets/TextArea.css'
import api from '../../api/axios'
import { AxiosResponse } from 'axios';
type User = {
    id:string;
    password:string;
    email:string;
    icon:string;
    is_admin:boolean;
}

const UserListView:React.FC = () => {
    //todo 値を取ってくる処理
    const [formData,setFormData] = useState<User[]>([]);
    useEffect(()=>{
        async function fetchData(){
            const response: AxiosResponse<any> = await api.get('/users');
            setFormData(response.data);
            return response;
        }
        fetchData();
    },[]);
    return(
        <UserList every={formData}/>
    );
}
export default UserListView;