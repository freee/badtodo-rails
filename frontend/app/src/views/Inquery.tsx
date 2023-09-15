import '../assets/TextArea.css'
import React, { useState } from 'react';
interface FormState {
	title: string;
	email: string;
    name: string;
	question: string;
}

const initialFormState: FormState = {
	title: '件名を入力してください（必須）',
	email: 'メールアドレス（必須）',
    name: '氏名（必須）',
	question: 'お問い合わせ内容（必須）',
};

export const Inquery=()=>{
    const [formData,setFormData] = useState<FormState>(initialFormState);
    const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]:value,
		});
	};
    return (
   <form className="Sub">
    <table>
    <tr>
    <td>件名</td><td><input name="subject" placeholder={formData.title} onChange={handleInputChange}/></td>
    </tr>
    <tr>
    <td>Eメール</td><td><input name="email" placeholder={formData.email} onChange={handleInputChange}/></td>
    </tr>
    <tr>
    <td>氏名</td><td><input name="name" placeholder={formData.name} onChange={handleInputChange}/></td>
    </tr>
    <tr>
    <td>質問内容</td><td><textarea className = "TextArea" name="question" placeholder={formData.question} onChange={handleInputChange}></textarea></td>
    </tr>
    <tr>
    <td></td><td><input type="submit" value="送信"/></td>
    </tr>
    </table>
   </form> 
   );
}

export default Inquery;