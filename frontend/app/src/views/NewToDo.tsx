import '../assets/TextArea.css'
export default function NewToDo(){
    return (
    <div>
    todo新規登録
    <table>
    <tr>
    <td>todo</td><td><input className = "Text" name="todo" placeholder="todoを入力してください（必須）"/></td>
    </tr>
    <tr>
    <td>期限</td><td><input name="due_date" type="date"/></td>
    </tr>
    <tr>
    <td><label>公開</label></td><td><input name="public" id="public" type="checkbox" value="1"/></td>
    </tr>
    <tr>
    <td>メモ</td><td><textarea className = "TextArea" name="memo" placeholder="補足事項（任意）"/></td>
    </tr>
    <tr>
    <td>添付ファイル</td><td><input type="file" name="attachment"/></td>
    </tr>
    <tr>
    <td>URL</td><td><input className = "Text" type="text" name="url" placeholder="補足URL（任意）" id="input-url"/></td>
    </tr>
    <tr>
    <td>URL（タイトル）</td><td><input className = "Text" type="text" name="url_text" id="input-linktext" placeholder="URLの表示文字列（任意）"/></td>
    </tr>
    <tr>
    <td></td><td><input type="submit" value="登録"/></td>
    </tr>
    </table>
    </div>
    );
}