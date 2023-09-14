import UserField from "../components/UserField"
import React from "react"
export default function Login(){
    return(
    <div className="loginContainer">
        <table>
            <tr><td>ログインしてください</td></tr>
            <tr>
                <td><UserField name="ユーザID" type="text"/></td>
            </tr>
            <tr>
                <td><UserField name="パスワ-ド" type="text"/></td>
            </tr>
            <tr>
                <td><button type="button">ログイン</button></td>
            </tr>
            <tr><td><input type="checkbox"/>ログインしたままにする</td></tr>
            <tr><td> <a href ="http://www.yahoo.com">パスワードを忘れた場合</a>
                </td></tr>
            <tr><td>初めての方は<a href ="http://www.yahoo.com">こちら</a>から会員登録してください</td></tr>
        </table>
    </div>
    );
}