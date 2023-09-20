import '../assets/TextArea.css'
import React, { useState } from 'react';
import { imagesApi } from '../api/axios';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router';
import currentDate from '../utils/currentDate';

interface FormState {
	todo: string;
    due_date:string;
	public: boolean;
	memo: string;
	attach: File | null;
	url: string;
    url_title:string;
    c_date:string;
}


const initialFormState: FormState = {
	todo: "todoを入力してください（必須）",
    due_date:'',
	public: false,
	memo: '',
	attach: null,
    url:"補足URL（任意）",
    url_title:"URLの表示文字列（任意）",
    c_date:currentDate(),
};
export default function NewToDo(props:any){
    const [formData, setFormData] = useState<FormState>(initialFormState);

    const navigate = useNavigate();

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
		setFormData({
			...formData,
			attach:file || null,
		});
	};

    const handleTodoCreate = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		try{
            Object.assign(formData,{user_id:props.userId})
			const response: AxiosResponse<any> = await imagesApi.post('/todos',{
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
        <form onSubmit={handleTodoCreate}>
        todo新規登録
            <table className="formTable">
                <tbody>
                <tr>
                <td>todo</td><td><input className = "Text" name="todo" placeholder={formData.todo} onChange={handleInputChange}/></td>
                </tr>
                <tr>
                <td>期限</td><td><input name="due_date" type="date" onChange={handleInputChange}/>{formData.due_date}</td>
                </tr>
                <tr>
                <td><label>公開</label></td><td><input name="public" id="public" type="checkbox" checked={formData.public}onChange={(e) => setFormData({...formData, public: e.target.checked })}/></td>
                </tr>
                <tr>
                <td>メモ</td><td><textarea className = "TextArea" name="memo" placeholder={formData.memo} onChange={handleInputChange}/></td>
                </tr>
                <tr>
                <td>添付ファイル</td><td><input type="file" name="attach_url" onChange={handleFileChange}/></td>
                </tr>
                {imagePreview}
                <tr>
                <td>URL</td><td><input className = "Text" type="text" name="url" placeholder={formData.url} id="input-url"onChange={handleInputChange}/></td>
                </tr>
                <tr>
                <td>URL（タイトル）</td><td><input className = "Text" type="text" name="url_text" id="input-linktext" placeholder="URLの表示文字列（任意）"onChange={handleInputChange}/></td>
                </tr>
                <tr>
                <td></td><td><input type="submit" value="登録"/></td>
                </tr>
                </tbody>
            </table>
        </form>
    );
}