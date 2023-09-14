import '../assets/TextArea.css'
export default function Inquery(){
    return (
   <div>
    <table>
    <tr>
    <td>件名</td><td><input name="subject" placeholder="件名を入力してください（必須）"/></td>
    </tr>
    <tr>
    <td>Eメール</td><td><input name="email" placeholder="メールアドレス（必須）"/></td>
    </tr>
    <tr>
    <td>氏名</td><td><input name="name" placeholder="氏名（必須）"/></td>
    </tr>
    <tr>
    <td>質問内容</td><td><textarea className = "TextArea" name="question" placeholder="お問い合わせ内容（必須）"></textarea></td>
    </tr>
    <tr>
    <td></td><td><input type="submit" value="送信"/></td>
    </tr>
    </table>
   </div> 
   );
}