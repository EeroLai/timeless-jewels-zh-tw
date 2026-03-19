# timeless-jewels-zh-tw [![push](https://github.com/EeroLai/timeless-jewels-zh-tw/actions/workflows/push.yml/badge.svg)](https://github.com/EeroLai/timeless-jewels-zh-tw/actions/workflows/push.yml) ![GitHub go.mod Go version](https://img.shields.io/github/go-mod/go-version/EeroLai/timeless-jewels-zh-tw) ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/EeroLai/timeless-jewels-zh-tw) [![GitHub license](https://img.shields.io/github/license/EeroLai/timeless-jewels-zh-tw)](https://github.com/EeroLai/timeless-jewels-zh-tw/blob/main/LICENSE)

這是一個永恆珠寶計算器與技能樹檢視工具的繁體中文 fork 版本。

線上版本: [https://eerolai.github.io/timeless-jewels-zh-tw](https://eerolai.github.io/timeless-jewels-zh-tw)

## 原作者

本專案基於 [Vilsol/timeless-jewels](https://github.com/Vilsol/timeless-jewels) fork 而來。

原始專案作者:
- [Vilsol](https://github.com/Vilsol)

資料來源仍使用原專案相同的資料抽取流程:
- [Vilsol/go-pob-data](https://github.com/Vilsol/go-pob-data)

## 這個 fork 做了什麼

目前這個版本主要做了以下調整:

- 調整為 `timeless-jewels-zh-tw` 專用的 GitHub Pages 部署設定
- 更新 repo 路徑、README 連結與前端網站來源連結，對應目前 fork
- 將前端靜態介面文案改為繁體中文
- 新增 stat 顯示翻譯層，讓前端畫面可顯示繁體中文，但保留英文 raw value 供排序與邏輯使用
- 新增永恆珠寶與征服者名稱的顯示翻譯層，畫面顯示使用繁中名稱，但不改動實際 value

## 注意事項

每逢新聯盟或版本更新，天賦樹與永恆珠寶資料可能會變動。
在遊戲資料尚未完整更新前，本專案的結果不保證完全正確。

本專案主要依賴以下資料表:

- Alternate Passive Additions
- Alternate Passive Skills
- Passive Skills
- Stats
- Translations
