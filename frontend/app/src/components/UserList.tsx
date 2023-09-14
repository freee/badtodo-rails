import React from 'react';
import '../assets/TextArea.css';

type User = {
    id:string;
    password:string;
    email:string;
    icon:string;
    isAdmin:boolean;
}

interface UserListProps {
    users: User[]
}




const UserList:React.FC<UserListProps> = ({users}) => {
    const information = users.map((user,index)=>
    <tr key={index}>
        <td>{user.id}</td>
        <td>{user.password}</td>
        <td>{user.email}</td>
        <img src = {user.icon}/>変更
        <td>{user.isAdmin ? "管理者" : "一般"}</td>
    </tr>
    );
    return(
    <div>
        <table id="data-table">
            <thead><tr><th>ID</th><th>パスワード</th><th>メールアドレス</th><th>アイコン</th><th>種別</th></tr></thead>
        <tbody>{information}</tbody>
        </table><br/>
        新規追加<br/>
    </div>
    );
}
export default UserList;