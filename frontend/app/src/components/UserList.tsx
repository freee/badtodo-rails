import React from 'react';
import '../assets/TextArea.css';
import {Link} from 'react-router-dom'
type User = {
    id:string;
    password:string;
    email:string;
    icon:string;
    is_admin:boolean;
}

interface UserListProps {
    every: User[]
}




const UserList:React.FC<UserListProps> = (users) => {
    const information = users.every.map((user,index)=>
    <tr key={index}>
        <td><Link to = {'/mypage/'+user.id}>{user.id}</Link></td>
        <td>{user.password}</td>
        <td>{user.email}</td>
        <td><img src = {user.icon}/>変更</td>
        <td>{user.is_admin ? "管理者" : "一般"}</td>
    </tr>
    );
    return(
        <form>
            <table id="data-table">
                <thead><tr><th>ID</th><th>パスワード</th><th>メールアドレス</th><th>アイコン</th><th>種別</th></tr></thead>
            <tbody>{information}</tbody>
            </table><br/>
            <Link to ='/new-todo'>新規追加</Link><br/>
        </form>
    );
}
export default UserList;
