import UserList from '../components/UserList';
import React from 'react';

const UserListView:React.FC = () => {

    //todo 値を取ってくる処理
    const testusers = [{id:"test1",password:"test1",email:"test1@example.com",icon:"aaaa",isAdmin:true},{id:"test2",password:"test2",email:"test2@example.com",icon:"aaaaaa",isAdmin:false}]

    return(
        <UserList users={testusers}/>
    );
}
export default UserListView;