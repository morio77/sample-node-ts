# sample-node-ts

## 前提ソフト（Macを想定）

### Homebrew

```bash
bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

```bash
brew -v
Homebrew 3.2.16
```

### nodebrew

```bash
brew install nodebrew
```

```bash
nodebrew -v
nodebrew 1.1.0
```

### node

**バージョンは各Prjに依る**

```bash
nodebrew install v14.18.0
```

```bash
nodebrew use v14.18.0
```

## Node + TypeScript 環境を構築（ついでにExpressも）

### プロジェクトディレクトリ作成

```bash
mkdir sample-node-ts
cd sample-node-ts
```

### `package.json`を作成

```bash
npm init -y
```

### TypeScriptパッケージを追加

**バージョンは各Prjに依る**

```bash
npm install typescript @types/node tslint express　@types/express
```

### `tsconfig.json`を作成

```bash
npx tsc --init
```

### `tsconfig.json`に`outDir`を記載

```diff
- // "outDir": "./",
+ "outDir": "./dist",
```

### ソースファイルを作成

```bash
mkdir src
touch src/index.ts
```

中身を適用に書く

### ビルドする

```bash
npx tsc
```

→　`dist`フォルダにjsファイルが出力される

## 開発効率を上げる

T.B.D.

## git管理するなら

### giboを使って`.gitignore`を作成

```bash
brew install gibo
gibo dump macos linux windows node > .gitignore
```

### `.gitigonre`で`dist`フォルダ配下を管理から外す

`.gitignore`に以下を追加

```diff
+ dist/
```

## 参考

* [Typescriptでノードプロジェクトをセットアップする方法](https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript-ja)
* [TypeScript + Node.js プロジェクトのはじめかた2020](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49)
* [gibo](https://github.com/simonwhitaker/gibo)
