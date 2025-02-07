# APTAPT（あぱつ）

韓国発の飲みゲームをウェブアプリケーション化したプロジェクトです。シンプルな操作性と美しい UI で、パーティーやイベントを盛り上げます。

## 機能

- 参加人数の入力機能
- ゲームルールの表示
- 多言語タイトル表示（日本語・英語・韓国語）
- アクセシビリティ対応（キーボード操作、スクリーンリーダー対応）

## 技術スタック

- [Next.js](https://nextjs.org) - React フレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な開発
- [Tailwind CSS](https://tailwindcss.com/) - スタイリング
- [Turbopack](https://turbo.build/pack) - 高速な開発環境

## 開発環境のセットアップ

```bash
# パッケージのインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

[http://localhost:3000](http://localhost:3000)にアクセスして開発環境を確認できます。

## ビルドと本番環境での実行

```bash
# プロダクションビルド
pnpm build

# 本番サーバーの起動
pnpm start
```

## プロジェクト構成

```
src/
├── app/           # アプリケーションのメインコード
│   ├── layout.tsx # レイアウト設定
│   └── page.tsx   # メインページ
├── components/    # 再利用可能なコンポーネント
└── styles/       # グローバルスタイル
```

## ライセンス

このプロジェクトはプライベートです。すべての権利は留保されています。
