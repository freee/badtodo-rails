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
import '../assets/ImagePreview.css'

interface ToDoformData{
    id:number;
    todo:string;
    c_date:string;
    due_date:string;
    done:string;
    memo:string;
    attach:File|null;
    url:string;
    url_text:string;
    public:boolean;
    user_id:number;
}
type Params={
    id?:string;
}
const initialToDoformData: ToDoformData={
    id:1,
    todo:'',
    c_date:'',
    due_date:'',
    done:'',
    memo:'',
    attach:null,
    url:'',
    url_text:'',
    public:false,
    user_id:1
}
export default function UpdateToDo(){
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
    },[]);
	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]:value,
		});
	};
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
		const file = event.target.files && event.target.files[0];
        console.log(file);
		setFormData({
			...formData,
			attach:file || null,
		});
	};
    const handleTodoCreate = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData)
		try{
			const response: AxiosResponse<any> = await api.put('/todos/'+formData.id,{
				"todo": formData
			});

			console.log(response.data);
			navigate('/');
		}catch (error){
			console.error(error);
		}
	};

    const imagePreview = formData.attach ? <tr><td>プレビュー</td><td><img src={URL.createObjectURL(formData.attach)} className="imagePreview"alt="" /></td></tr>: <></>;

    return (
    <form onSubmit = {handleTodoCreate}>
        ToDo編集
        <table className="formTable">
            <tbody>
                <tr>
                <td>todo</td><td><input className = "Text" name="todo" placeholder={"todoを入力してください"} onChange={handleInputChange} defaultValue = {formData.todo}/></td>
                </tr>
                <tr>
                <td>期限</td><td><input name="due_date" type="date" defaultValue = {formData.due_date} onChange={handleInputChange}/></td>
                </tr>
                <tr>
                <td><label>公開</label></td><td><input name="public" id="public" type="checkbox" defaultChecked={formData.public} onChange={(e) => setFormData({...formData, public: e.target.checked })}/></td>
                </tr>
                <tr>
                <td>メモ</td><td><textarea className = "TextArea" name="memo" placeholder={"補足事項(任意)"} onChange={handleInputChange} defaultValue= {formData.memo}/></td>
                </tr>
                <tr>
                <td>添付ファイル</td><td><input type="file" name="attach_url"onChange={handleFileChange}/></td>
                </tr>
                {imagePreview}
                <tr>
                <td>URL</td><td><input className = "Text" type="text" name="url" placeholder={"補足URL(任意)"} id="input-url"onChange={handleInputChange} defaultValue = {formData.url}/></td>
                </tr>
                <tr>
                <td>URL（タイトル）</td><td><input className = "Text" type="text" name="url_text" id="input-linktext" placeholder="URLの表示文字列（任意）"onChange={handleInputChange} defaultValue = {formData.url_text}/></td>
                </tr>
                <tr>
                <td></td><td><input type="submit" defaultValue="登録"/></td>
                </tr>
            </tbody>
        </table>
    </form>
    );
}