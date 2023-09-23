## 脆弱性一覧
### XSS
#### 具体例
Todoの編集画面や作成画面のメモ欄において，HTMLタグの中に"&lt;b onmousemove='alert()'>"や&lt;img src='htt' 'onerror=alert()'>"などの属性を埋め込むことができます。終了タグは、必要に応じてつけてください。
#### 原因
<b>HTMLタグ</b>や<b>Markdown</b>の便利機能のせい。

#### 対策
HTMLタグの使用を禁止すれば、ぱっと見は大丈夫に見えるかもしれないが、実際はMarkdownだけでもXSSは起こせる。
構文解析を行いスクリプトを検出するか、Markdownの使用は諦めてください。
### SQLインジェクション
#### 概要
SQLインジェクションとは、Webアプリケーションにおいて、不正なSQL文を実行させる攻撃のことです。クライアントから送られてきたデータをそのままSQL文に埋め込んでしまうと、SQL文を改竄されてしまう可能性があります。

#### 具体例
Todoリスト一覧画面においては公開可能と設定されたTodoリストのみが表示されるようになっています。しかし、検索欄に`' OR 'a'='a`と入力すると、全てのTodoリストが表示されます。

#### 原因
該当の検索欄に入力された文字列をそのままSQL文に埋め込んでいるためです。

Railsのコードは以下のようになっています。
```ruby
@todos = Todo.where("public=true AND title='#{params[:todo]}'")
```
これにより以下のようなSQL文が実行されることになります。
```sql
SELECT "todos".* FROM "todos" WHERE (public=true AND title='検索文字列')
```
そのため検索文字列に`' OR 'a'='a`を入力すると、SQL文が
```sql
SELECT "todos".* FROM "todos" (public=true AND title='' OR 'a'='a')
```
となり、全てのTodoリストが表示されてしまいます。



#### 対策
Railsでは、SQL文に埋め込む文字列を`?`で指定することで、SQLインジェクションを防ぐことができます。
```ruby
@todos = Todo.where("public=true AND  title = ?", params[:todo])
```

この記述方法では内部で文字列がサニタイズされて`'`が`''`に置き換わり攻撃を防ぐことができます。


