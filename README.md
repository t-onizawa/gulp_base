# Gulp

## 初期構築
Gulpがグローバルにインストールされているか確認
```
gulp -v
```
インストールされていなかったら
```
npm install gulp -g
```
必要なパッケージをインストール
```
npm install
```

## 起動
- HTML、Sass、JavaScriptのコンパイル。
- HTML、Sass、JavaScriptの変更監視
- ローカルホスト（browsersync）立ち上げ、live Reload
```
gulp
```

- HTML、Sass、JavaScriptのコンパイルのみ。
```
gulp build
```

## 各セッティングについて
gulp/config/setting.jsにセッティングに関する情報を記載できます。
HTML、CSSはそれぞれテンプレートエンジンやコンパイルのプリプロセッサーを設定できます。
jsについてはWebpackを使用することが出来ます。