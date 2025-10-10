# CID OC Shop

## 概要

CID OC Shopは、オンラインショップの管理システムです。

## 機能

- 商品管理
- 注文管理
- 顧客管理
- 在庫管理

## 技術スタック

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: MySQL
- Version Control: Git

## セットアップ

### 必要な環境

- Node.js (v16以上)
- MySQL (v8.0以上)
- Git

### インストール手順

```bash
# リポジトリをクローン
git clone https://github.com/your-username/cid_oc_shop.git
cd cid_oc_shop

# 依存関係をインストール
npm install

# 環境設定ファイルを作成
cp .env.example .env

# データベースをセットアップ
mysql -u root -p < database/schema.sql

# アプリケーションを起動
npm start
```

## 使用方法

1. サーバーを起動
2. ブラウザで `http://localhost:3000` にアクセス
3. 管理者アカウントでログイン
4. 商品や注文を管理

## API エンドポイント

- `GET /api/products` - 商品一覧取得
- `POST /api/products` - 商品登録
- `GET /api/orders` - 注文一覧取得
- `POST /api/orders` - 注文作成

## ライセンス

MIT License

## 貢献

プルリクエストやイシューの報告を歓迎します。

## 作者

- GitHub: [your-username](https://github.com/your-username)
- Email: your-email@example.com
