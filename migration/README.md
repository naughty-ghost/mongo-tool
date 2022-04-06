# package.jsonの用意
```
npm init
```
# Typescript 導入
- typescript install
```
npm install --save typescript
```
- コンパイル設定ファイル`tsconfig.json`作成
```
npx tsc --init
```
# ESLint 導入&実行
- ESLint install
```
npm install --save-dev eslint
```
- `npx eslint --init`コマンドで対話式で構成ファイル作成
1. How would you like to use ESLint?  
`To check syntax, find problems, and enforce code style`
2. What type of modules does your project use?  
`JavaScript modules (import/export)`
3. Which framework does your project use?  
開発に合わせて選ぶ
```
React
Vue.js
None of these
```
4. Does your project use TypeScript?  
`Yes`
5. Where does your code run?  
開発に合わせて選ぶ
```
√ Browser
√ Node
```
6. How would you like to define a style for your project?  
`Use a popular style guide`
7. Which style guide do you want to follow?  
`Airbnb: https://github.com/airbnb/javascript`
8. What format do you want your config file to be in?  
`Javascript`
9. Would you like to install them now with npm?  
`Yes`
- .eslint.jsが生成されます
# Prettier 導入&実行
- Prettier install
```
npm install --save-dev prettier eslint-config-prettier
```
- .eslint.jsにPrettierの項目を追加する
```
module.exports = {
  /* 中略 */
  extends: [
    /* 中略 */
    "prettier", // 追加。他の設定の上書きを行うために、必ず最後に配置する。
  ],
};
```
- Prettier 設定ファイル作成
フォーマット設定はここに記述
```
echo "{}"> .prettierrc.json
```
- prettierの対象外になるファイルを設定する`.prettierignore`を作成
```
touch .prettierignore
# Ignore artifacts:
/dist
node_modules
package.json
package-lock.json
tsconfig.json
tsconfig.eslint.json
```

# package.json
scriptに実行コマンドをまとめる
```
    "eslint": "eslint src/**/*.ts",
    "eslint:fix": "eslint src/**/*.ts --fix",
    "format": "prettier --write src/**/*.{js,ts,json}",
    "lint": "npm-run-all eslint check-types",
    "lint:fix": "npm-run-all eslint:fix check-types format"
```