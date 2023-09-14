import '../assets/TextArea.css'
import React, { useState } from 'react';

interface FormState {
	todo: string;
    due:string;
	public: boolean;
	memo: string;
	attach: File | null;
	url: string;
    url_title:string;
}

type RegisterProps = {
	isAdmin: boolean
}

const initialFormState: FormState = {
	todo: "todoを入力してください（必須）",
    due:'',
	public: false,
	memo: '',
	attach: null,
    url:"補足URL（任意）",
    url_title:"URLの表示文字列（任意）"
};
export default function NewToDo(){
    const [formData, setFormData] = useState<FormState>(initialFormState);

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
    return (
    <div>
    todo新規登録
    <table>
    <tr>
    <td>todo</td><td><input className = "Text" name="todo" placeholder={formData.todo} onChange={handleInputChange}/></td>
    </tr>
    <tr>
    <td>期限</td><td><input name="expire" type="date"/>{formData.due}</td>
    </tr>
    <tr>
    <td><label>公開</label></td><td><input name="public" id="public" type="checkbox" checked={formData.public}onChange={handleInputChange}/></td>
    </tr>
    <tr>
    <td>メモ</td><td><textarea className = "TextArea" name="memo" placeholder={formData.memo}onChange={handleInputChange}/></td>
    </tr>
    <tr>
    <td>添付ファイル</td><td><input type="file" name="attachment"onChange={handleFileChange}/></td>
    </tr>
    <tr>
    <td>URL</td><td><input className = "Text" type="text" name="url" placeholder={formData.url} id="input-url"onChange={handleInputChange}/></td>
    </tr>
    <tr>
    <td>URL（タイトル）</td><td><input className = "Text" type="text" name="url_text" id="input-linktext" placeholder="URLの表示文字列（任意）"onChange={handleInputChange}/></td>
    </tr>
    <tr>
    <td></td><td><input type="submit" value="登録"/></td>
    </tr>
    </table>
    </div>
    );
}