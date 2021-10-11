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

```bash
npm install typescript @types/node tslint express　@types/express
```

### `tsconfig.json`を作成

```bash
npx tsc -init
```

### `tsconfig.json`の`outDir`を記載

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

