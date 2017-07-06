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

- その他
```
gulp html   (HTMLコンパイルのみ)
gulp css    (cssコンパイルのみ)
gulp js     (jsコンパイルのみ)
gulp img    (img minのみ)
gulp server (server立ち上げのみ)
gulp del    (distフォルダの削除のみ)
```

## 各セッティングについて
- gulp/config/setting.jsにセッティングに関する情報を記載できます。
- HTML、CSSはそれぞれテンプレートエンジンやコンパイルのプリプロセッサーを設定できます。
    - html, jade, pug, ejs, ect
    - css, sass, scss, stylus
- jsについてはWebpackを使用することが出来ます。babelなどはインストール済みですがcss-loaderなどを使用する際は、インストールを行ったあとにsetting -> js -> optionsに追加してください。
- copyに拡張子を追加することでコンパイルを必要としないファイルを出力先フォルダにコピーします。

## npm scripts
使いそうなscripts個別でを設定しています。
```
npm start       =   gulp
npm run dev     =   gulp
npm run build   =   gulp build 
npm run imgmin  =   gulp img
npm run server  =   gulp server
npm run clean   =   gulp del
```