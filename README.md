# 目次
- [目次](#目次)
- [概要と機能](#概要と機能)
  - [別リポジトリにあるビューワと共通の機能](#別リポジトリにあるビューワと共通の機能)
  - [このエディタで追加した機能(拡張機能利用で作成)](#このエディタで追加した機能拡張機能利用で作成)
- [このアプリを今すぐ使用する方法](#このアプリを今すぐ使用する方法)
  - [オンライン：GitHub Pagesで使用](#オンラインgithub-pagesで使用)
  - [ローカル・オフライン：ビルド済みの単一htmlを開いて使用](#ローカルオフラインビルド済みの単一htmlを開いて使用)
- [グラフデータ(json)のサンプル](#グラフデータjsonのサンプル)
- [このアプリをビルド/実行する方法](#このアプリをビルド実行する方法)
  - [必要となる環境](#必要となる環境)
  - [npmのパッケージのインストール](#npmのパッケージのインストール)
  - [httpプロトコルで動くやつをビルド(デフォルト)](#httpプロトコルで動くやつをビルドデフォルト)
  - [httpプロトコル＋fileプロトコルでも動くやつをビルド](#httpプロトコルfileプロトコルでも動くやつをビルド)
- [参考にしたアプリと記事(先駆者様)](#参考にしたアプリと記事先駆者様)
  - [参考にした記事(Cytoscape.js関係)](#参考にした記事cytoscapejs関係)
  - [参考にしたアプリ(エディタの機能)](#参考にしたアプリエディタの機能)
- [使用しているパッケージ(ライブラリ)とフォントのライセンス](#使用しているパッケージライブラリとフォントのライセンス)
  - [パッケージ(ライブラリ)のライセンス](#パッケージライブラリのライセンス)
  - [フォントのライセンス](#フォントのライセンス)
- [このリポジトリのライセンス](#このリポジトリのライセンス)

<br>

# 概要と機能
Cytoscape.jsを利用したグラフ(ネットワーク図)の、試験的エディタアプリ。  
別リポジトリの「[cy-minimum-graph-viewer](https://github.com/TweeTeaFOX223/cy-minimum-graph-viewer)」に編集機能を追加したもの。  
ビューワに機能追加しようと思ったけど、コードが複雑になったので別にした。  

[diagrams.net](https://www.drawio.com/)のような編集を、Cytoscape.jsのグラフでやりたいと思って作った。  
グループの構造があるネットワーク図をGUIで簡単に作成することができます。  
<br>

## 別リポジトリにあるビューワと共通の機能
  - [Cytoscape.jsのグラフデータのjsonファイル](https://js.cytoscape.org/#notation/elements-json)を読み込み、グラフを表示
  - インスペクタ上で各要素のデータ(ID、ラベル、色、形状)を確認
  - グラフの「エッジの形式([Edge line](https://js.cytoscape.org/#style/edge-line))」、「ノードの配置形式[(layout)](https://js.cytoscape.org/#layouts)」の選択
  - マウスでノードの座標を編集＋編集後のグラフデータをjsonで保存
  - マウスによる座標の編集の、取り消し「Ctrl+z」と、やり直し「Ctrl+y」
  - グラフをPNG画像で出力(画質、背景色、透過有無、対象範囲を設定可)
<br>  

## このエディタで追加した機能(拡張機能利用で作成)
- コンテキストメニューからノード・エッジを新規作成 
- コンテキストメニューからノード・エッジを削除・復元  
- ノードやエッジのプロパティ(ラベル・色・形状など)の編集
- エッジのカーブ(曲がり具合)や屈折するポイントの設定


<br>

# このアプリを今すぐ使用する方法
## オンライン：GitHub Pagesで使用
<b>npmとViteを使ってビルドしたものがGitHub Pagesにあります！</b>  
https://tweeteafox223.github.io/cy-experiment-graph-editor/  
<br>

## ローカル・オフライン：ビルド済みの単一htmlを開いて使用
`dist-offline/index.html`をダウンロードし、  
ブラウザでindex.htmlを開くことで使用可能です。  
ローカルかつオフライン環境でも動作可能です。  
<br>

# グラフデータ(json)のサンプル
「sample-json-data」のディレクトリにjson形式で入っています。  
アプリ内の「データを読み込む(json)」ボタンに入力すると、グラフ表示が可能。  
Cytoscape.jsは、グラフのノードを入れ子構造のグループにできます  
おそらく、グラフ系ライブラリの中では唯一の機能です。
- 「00_simple.json」：三角関係みたいなグラフ
- 「01_group.json」：何かのチームの関係性を表すグラフ
- 「02_group2.json」：何かのチームと所属者の関係性を表すグラフ
- 「03_group3.json」：マトリョーシカのような入れ子構造のグループ
- 「04_group4.json」：入れ子構造のグループ同士の関係性のグラフ  
<br>  

# このアプリをビルド/実行する方法


## 必要となる環境  
  「vite」と「vite-plugin-singlefile」でビルドする仕様です。  
 `node.js v22.2.0`と`npm v10.7.0`のインストールが必要です。  

## npmのパッケージのインストール  
このリポジトリをCloneし、ターミナルを開きます。  
npmのコマンドを実行し必要パッケージをローカルにインストールします。  
```
npm install
```


##  httpプロトコルで動くやつをビルド(デフォルト)  
```
npm run dev
```
：Viteの機能でDEVサーバを起動してアプリを動作させます。  
：コンソールに出てくるローカルホストにアクセスすると動きます。  

```
npm run build
```  
：`./dist`にhtmlとjsとcssが生成されます。  
：それをサーバーに設置してhttpプロトコルでアクセスすると動く。

<br>  
<hr>  

##  httpプロトコル＋fileプロトコルでも動くやつをビルド  
```
npm run build-offline
```
：`./dist-offline`に単一の`index.html`が生成されます。  
：そのindex.htmlをブラウザで開くと動かすことができます。  
：このhtmlはローカルかつオフライン環境でも動作が可能です。  


# 参考にしたアプリと記事(先駆者様)

## 参考にした記事(Cytoscape.js関係)
- Cytoscape.js　Demos  
https://js.cytoscape.org/#demos
- Cytoscape.jsを試してみた  
https://qiita.com/madilloar/items/bb9e9dddd37639998637
- jQuery: Cytoscape.js お試せた  
https://hhsprings.pinoko.jp/site-hhs/2018/01/jquery-cytoscape-js-%E3%81%8A%E8%A9%A6%E3%81%9B%E3%81%9F/
https://cse.google.com/cse?cx=006012754116484472402%3Aic62g4kqloc&ie=UTF-8&q=Cytoscape&sa=%E6%A4%9C%E7%B4%A2

## 参考にしたアプリ(エディタの機能)
- cyeditor(アプリケーション)  
https://github.com/demonray/cyeditor
- diagrams.net(draw.io)  
https://app.diagrams.net/?src=about
- Microsoft PowerPoint  
https://www.microsoft.com/ja-jp/microsoft-365/powerpoint

# 使用しているパッケージ(ライブラリ)とフォントのライセンス
`package.json`も参照してください。  

##  パッケージ(ライブラリ)のライセンス

- cytoscape.js ：MIT  
Copyright (c) 2016-2022, The Cytoscape Consortium.  
https://github.com/cytoscape/cytoscape.js/  
https://www.npmjs.com/package/cytoscape  

- cytoscape-context-menus　：MIT  
Copyright (c) 2019 iVis-at-Bilkent  
https://github.com/iVis-at-Bilkent/cytoscape.js-context-menus  
https://www.npmjs.com/package/cytoscape-context-menus  

- cytoscape-edge-editing ：MIT  
Copyright (c) 2019 iVis-at-Bilkent  
https://github.com/iVis-at-Bilkent/cytoscape.js-edge-editing  
https://www.npmjs.com/package/cytoscape-edge-editing  

- cytoscape-edgehandles ：MIT  
Copyright (c) 2016-2019, 2021, The Cytoscape Consortium.  
https://github.com/cytoscape/cytoscape.js-edgehandles  
https://www.npmjs.com/package/cytoscape-edgehandles  

- cytoscape.js-undo-redo ：MIT    
Copyright (c) 2019 iVis-at-Bilkent  
https://github.com/iVis-at-Bilkent/cytoscape.js-undo-redo  
https://www.npmjs.com/package/cytoscape-undo-redo  

- cytoscape.js-panzoom ：MIT  　　  
Copyright (c) The Cytoscape Consortium  
https://github.com/cytoscape/cytoscape.js-panzoom  
https://www.npmjs.com/package/cytoscape-panzoom  

  - jquery.js ：MIT  
Copyright OpenJS Foundation and other contributors,  
https://openjsf.org/  
https://github.com/jquery/jquery  
https://www.npmjs.com/package/jquery  

- cytoscape.js-dagre ：MIT    
Copyright (c) 2016-2018, 2020, The Cytoscape Consortium.  
https://github.com/cytoscape/cytoscape.js-dagre  
https://www.npmjs.com/package/cytoscape-dagre  

  - dagre.js ：MIT    
Copyright (c) 2012-2014 Chris Pettitt  
https://github.com/dagrejs/dagre  
https://www.npmjs.com/package/dagre  

- FileSaver.js ：MIT    
Copyright © 2016 Eli Grey.  
https://github.com/eligrey/FileSaver.js  
https://www.npmjs.com/package/file-saver

- micromodal.js ：MIT    
Copyright (c) 2017 Indrashish Ghosh  
https://github.com/Ghosh/micromodal  
https://gist.github.com/ghosh/4f94cf497d7090359a5c9f81caf60699  
https://www.npmjs.com/package/micromodal  

## フォントのライセンス
- Font-Awesome：cytoscape.js-panzoomが依存  
アイコンはCC BY 4.0、フォントはSIL OFL 1.1、コードはMIT  
https://github.com/FortAwesome/Font-Awesome  




# このリポジトリのライセンス
MITライセンスです  
 https://opensource.org/license/mit/　