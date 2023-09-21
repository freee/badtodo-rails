##  インストール手順
任意のディレクトリに移動し、リポジトリをcloneしてください。
その後、下記コマンドを実行し、dockerコンテナを起動します。
```
docker compose up -d
```
dockerコンテナが起動されていることを確認したのちに、下記コマンドを実行します。
このコマンドは、DBの初期化および初期値の設定を行います。
```
docker compose exec api rails db:create
docker compose exec api rails db:migrate
docker compose exec api rails db:seed
```

##  システム構成
このアプリケーションは、以下の構成で動作します。

frontend: localhost:3000で動作するReactアプリケーション  
api:      localhost:3001で動作するrailsアプリケーション(APIモードで動作します)  
db:       localhost:3307で動作するmysqlデータベース  

##  機能説明
### frontend
#### ナビゲーションバー
- ログイン前：一覧、新規追加、お問い合わせ、ログイン
- ログイン後：一覧、新規追加、お問い合わせ、マイページ、ログアウト
#### ログイン処理
- 登録したメールアドレスとパスワードを入力して認証する。
アクセストークンを発行する
#### アクセス制御
- ログイン処理で発行したアクセストークンを使用してアクセスの制御をする
#### ログアウト処理
- 発行したアクセストークンを破棄する
#### 問い合わせ画面
- 画面だけ作成
#### Todo新規作成画面
- todo,期限、他ユーザに公開するかどうか、メモ、添付ファイル、URL,URLの表示タイトルを入力して登録する
#### MyPage画面
- 画面だけ作成
#### TodoList画面
- 自分のtodo一覧や公開設定している他ユーザのtodo一覧を表示する
#### UserList画面
- 管理者権限を持っている場合に限り、登録している全ユーザのID,パスワード、メールアドレス、アイコン、種別
#### Todo show
- todoのID、todoの内容、todoの登録日、todoに設定している期限、完了しているかどうか、todoに関する添付ファイル、todoに関するメモ、todoを説明するためのURL、登録したtodoを他ユーザに登録するかどうかを表示する
### backend  
- GET /todos : 一覧表示アクション (index)
- POST /todos : 新規作成アクション (create)
- GET /todos/:id : 詳細表示アクション (show)
- PATCH/PUT /todos/:id : 更新アクション (update)
- DELETE /todos/:id : 削除アクション (destroy)
## 脆弱性一覧
### XSS
### SQLインジェクション
