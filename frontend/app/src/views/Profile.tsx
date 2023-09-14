import React from "react"
import {useEffect} from "react";
export default function Profile(props:any){
    const password = Array(props.password.length).fill('*');
    return(
        <div>
            <table>
                <tr><td>ID</td><td>{props.id}</td></tr>
                <tr><td>メールアドレス</td><td>{props.mail}</td></tr>
                <tr><td>パスワード</td><td>{password}</td></tr>
                 <tr><td>アイコン</td><td><img src = {props.icon}/></td></tr> 
                <tr><td>利用者権限</td><td>{props.authentication}</td></tr>
            </table>
        </div>
    );
}
///