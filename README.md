# non_business_use_template
業務用途外のリポジトリを作成する際のテンプレートリポジトリです

業務用途外のリポジトリの場合は、リポジトリのtopic に `non-business-use` を必ずつけてください。

topicの付け方については [Adding topics to your repository](https://docs.github.com/en/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics#adding-topics-to-your-repository) を参照してください。


## 重要事項

業務用途外のリポジトリは Repository Governance の対象外です。
つまり、 https://github.com/C-FO/freee-developers-auth (terraform）では管理しません。
何かあっても誰も責任は取れませんので、リポジトリオーナーが自己責任で管理してください。


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
