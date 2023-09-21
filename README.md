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

### backend  

## 脆弱性一覧
### XSS  

### SQLインジェクション
