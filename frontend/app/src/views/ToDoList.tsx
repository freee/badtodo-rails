import { prependOnceListener } from "process";
import React from 'react';
import {useState} from 'react';
import '../assets/TextArea.css'
interface ToDoInformationList{
    todos:ToDoInformation[];
}
interface ToDoInformation{
    id:string;
    todo:string;
    register:string;
    expire:string;
    complete:string;
    attach:string;
    public:string
}
const initialToDoInformation: ToDoInformation={
    id:'',
    todo:'',
    register:'',
    expire:'',
    complete:'',
    attach:'',
    public:''
}
export const ToDoList: React.FC<ToDoInformationList> = (props) => {
	const [formData, setFormData] = useState<ToDoInformation>(initialToDoInformation);

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]:value,
		});
	};
// function ToDoList(props:any){
    var todos : ToDoInformation[] = props.todos; 
    // const firstToDo :ToDoInformation    = { id:"admin",  todo:"パソコンを買う",register:"2023-09-12",expire:"2023-09-13",complete:false, attach:"",public:"OK"};
    // const secondToDo :ToDoInformation   = { id:"normal", todo:"依頼の原稿を書く",register:"2023-09-12",expire:"2023-0919",complete:false,attach:"",public:"OK"};
    // const todos :ToDoInformation[] = [firstToDo,secondToDo];
    const information = todos.map((todo,index)=>
    <tr key={index}>
        <td><input type="checkbox"/></td>
        <td>{todo.id}</td>
        <td>{todo.todo}</td>
        <td>{todo.register}</td>
        <td>{todo.expire}</td>
        <td>{todo.complete}</td>
        <td>{todo.attach}</td>
        <td>{todo.public}</td>
    </tr>
    );
    return(
    <div>
        <form>
            <div className="search"><input type="text"/><button>検索</button>あいまい検索<input type="checkbox"/></div>
            <table id="data-table">
                <thead><tr><th><input type="checkbox"/></th><th>ID</th><th>todo</th><th>登録日</th><th>期限</th><th>完了</th><th>添付ファイル</th><th>公開</th></tr></thead>
            <tbody>{information}</tbody>
            </table><br/>
                    <button type="submit" name="process" value="dellist">削除</button>
                    <button type="submit" name="process" value="donelist">完了</button>
                    <button type="submit" name="process" value="exportlist">エクスポート</button>
        </form>
        <br/>
    </div>
    );
}

export default ToDoList;