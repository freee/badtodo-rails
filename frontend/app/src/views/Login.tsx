import UserField from "../components/UserField"
import {useState} from "react"
import api from "../api/axios";
import { AxiosResponse } from "axios";
import { useNavigate, Link } from "react-router-dom";

interface FormState {
	email: string;
	password: string;
    isKeep: boolean;
}

const initialFormState: FormState = {
	email: "",
	password: "",
    isKeep: false,
};



export const Login:React.FC<any>=({setLoggedIn,setIsAdmin,setUserId})=>{
    const [formData,setFormData] = useState<FormState>(initialFormState);
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

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		try{
			const response: AxiosResponse<any> = await api.post('/auth/sign_in',{
				"email": formData.email,
                "password": formData.password
			})
            localStorage.setItem("token",response.headers["authorization"].slice(7));
            setLoggedIn(true);
            setIsAdmin(response.data.data["is_admin"]);
            setUserId(response.data.data.id);
			navigate('/');
		}catch (error){
			console.error(error);
		}
	};


    return(
    <div className="loginContainer">
        <form onSubmit={handleLogin}>
            <table>
                <tr><td>ログインしてください</td></tr>
                <tr>
                    <td><input type="text" name="email" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                    <td><input type="password" name="password" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                    <td><button type="submit">ログイン</button></td>
                </tr>
                <tr><td><input type="checkbox" checked = {formData.isKeep} onChange={handleInputChange}/>ログインしたままにする</td></tr>
                <tr><td> <a href ="http://www.yahoo.com">パスワードを忘れた場合</a>
                    </td></tr>
                <tr><td>初めての方は<Link to="/register">こちら</Link>から会員登録してください</td></tr>
            </table>
        </form>
    </div>
    );
}

export default Login;