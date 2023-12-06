import React from 'react';
import {useState,useEffect} from 'react';
import '../assets/TextArea.css'
import {AxiosResponse} from 'axios'
import {useParams} from 'react-router'
import api from '../api/axios'
import {useNavigate} from 'react-router'
import {ConvertMarkdown} from '../components/ConvertMarkdown';
interface ToDoformData{
    id:string;
    todo:string;
    icon:string;
    c_date:string;
    due_date:string;
    done:string;
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
    c_date:'',
    due_date:'',
    done:'',
    memo:'',
    attach:'',
    url:'',
    public:''
}
export const WhatToDo: React.FC = () => {
    const {id} =  useParams<Params>();
    const [formData, setFormData] = useState<ToDoformData>(initialToDoformData);
    const [imageUrl,setImageUrl] = useState<string>('');
    const navigate = useNavigate();
    useEffect(()=>{
        async function fetchData(){
            const response: AxiosResponse<any> = await api.get('/todos/'+id);
            setFormData(response.data);
            if(response.data.attach_url !== null){
                setImageUrl(response.data.attach_url);
            }
            return response;
        }
    fetchData();
    },[]);
    const edit =()=>{
        navigate('/update-todo/'+id);
    }
    return(
    <div>
        <form>
            <table><tbody>
                <tr><td>ID</td><td>{id}<img src={formData.icon}/></td></tr>
                <tr><td>todo</td><td>{formData.todo}</td></tr>
                <tr><td>登録日</td><td>{formData.c_date}</td></tr>
                <tr><td>期限</td><td>{formData.due_date}</td></tr>
                <tr><td>完了</td><td>{formData.done}</td></tr>
                <tr><td>添付ファイル</td><td><a href={imageUrl}>{imageUrl.match(/([^/]+?)?$/)?.[0].slice(0,25)}</a></td></tr>
                <tr><td>メモ</td><td><ConvertMarkdown markdownText={formData.memo}/></td></tr>
                <tr><td>URL</td><td>{formData.url}</td></tr>
                <tr><td>公開</td><td>{formData.public}</td></tr>
                </tbody>
            </table><br/>
                <button type="submit" name="process" value="dellist" onClick = {edit}>編集</button>
        </form>
        <br/>
    </div>
    );
}

export default WhatToDo;
