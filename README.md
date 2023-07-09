# FontPrototypeSVGViewer
## これは何？
フォント製作のための試作ツール。
フォントファイルを制作する前に各文字（グリフ）のsvgファイルを並べて文字組の状態を確認できる。
input欄に文字を打つとその下に対応する文字列が繰り返し並ぶ。
デフォルト（input欄が空）では存在する文字がランダムに並ぶ。
日本語横書き専用。文字は正方形に限る。カーニング等未対応。

## 導入方法

### 準備
```
cd FontPrototypeSVGViewer
npm install
```

`public/font_svg` に`{グリフ名（1文字で）}_0.svg`というファイル名で100px*100pxサイズのSVGファイルの文字を配置。

### 使い方
```
npm start
```
するとブラウザの
`localhost:3000`
へのアクセスで開始できる。
デフォルト（input欄が空）では`public/font_svg`フォルダに存在する文字が横書きでランダムに画面端まで並ぶ。
input欄に文字入力するとその下に対応する文字列が横書きで繰り返し並ぶ。
最上部の`-`と`+`ボタンで文字サイズを2倍単位で小さくできて表示できる文字数が増える。
