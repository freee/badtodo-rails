import UserField from "../components/UserField"
import {useState} from "react"

interface FormState {
	userID: string;
	password: string;
    isKeep: boolean;
}

const initialFormState: FormState = {
	userID: "ユーザID",
	password: "パスワ-ド",
    isKeep: false,
};

export const Login=()=>{
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
    return(
    <div className="loginContainer">
        <form>
        <table>
            <tr><td>ログインしてください</td></tr>
            <tr>
                <td><UserField name={formData.userID} type="text" onChange={handleInputChange}/></td>
            </tr>
            <tr>
                <td><UserField name={formData.password} type="text" onChange={handleInputChange}/></td>
            </tr>
            <tr>
                <td><button type="button">ログイン</button></td>
            </tr>
            <tr><td><input type="checkbox" checked = {formData.isKeep} onChange={handleInputChange}/>ログインしたままにする</td></tr>
            <tr><td> <a href ="http://www.yahoo.com">パスワードを忘れた場合</a>
                </td></tr>
            <tr><td>初めての方は<a href ="http://www.yahoo.com">こちら</a>から会員登録してください</td></tr>
        </table>
        </form>
    </div>
    );
}

export default Login;