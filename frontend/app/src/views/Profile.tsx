export default function(props:any){
    <div>
        <table>
            <tr><td>ID</td><td>{props.id}</td></tr>
            <tr><td>メールアドレス</td><td>{props.mail}</td></tr>
            <tr><td>アイコン</td><td><img src = {props.image}/></td></tr>
            <tr><td>利用者権限</td><td>{props.authentication}</td></tr>
        </table>
        
    </div>
}