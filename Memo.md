# ReactでSocket.IOサーバと通信しグラフに表示してみた

Reactの勉強をはじめたので、Socket.IOと通信するコードを参考に、取得したデータをRechartsで表示しました。

## 参考にしたサイト

1. ReactとSocket.IOのチュートリアル
https://www.valentinog.com/blog/socket-react/

1. Rechartsの紹介
https://qiita.com/quzq/items/8dc0ab885ab6a3c9cd77

1. React Hookの解説
https://qiita.com/keiya01/items/fc5c725fed1ec53c24c5
https://gotohayato.com/content/509/

1. useEffectにて値を更新するときの問題が解決したサイト
https://www.366service.com/jp/qa/ab82022d7ab06870a68911c84fbd5dc1

## 使用したバージョン
2020年10月時点の最新版を使用しています。

| Component | version |
| ---- | ---- |
| React | 16.13.1 |
| Recharts | 1.8.5 |
| socket.io-client | 2.3.1 |
| express | 4.17.1 |
| socket.io | 2.3.0 |
| npm | 6.14.8 |
| node | 14.10.1 |

ちなみにOSは、Ubuntu 18.04.5 LTS　です。

## インストール

### サーバ
参考サイト１の通りに行いました。
```shell
mkdir socket-io-server && cd $_
npm init -y
npm i express socket.io
```
### クライアント
npm i -g typescript
npm i @types/socket.io @types/socket.io-client @types/express @types/node

npm i recharts

