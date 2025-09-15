# 📝 React Todo App with Components (v3 - 重構版)

一個使用 React Functional Components 構建的現代化待辦事項管理應用程式，採用**組件獨立性設計**，具有簡潔的 UI 設計和直觀的用戶體驗。

> **🔄 重構特色**：本版本將狀態管理推送到各個組件中，提高組件獨立性和可重用性，避免 props drilling 問題。

## ✨ 功能特色

### 🎯 核心功能

- **新增待辦事項**：快速添加新的待辦項目
- **詳細描述**：為每個待辦事項添加詳細描述
- **完成狀態切換**：一鍵標記完成/未完成
- **展開/收起描述**：點擊待辦事項查看詳細描述
- **刪除功能**：移除不需要的待辦事項
- **鍵盤快捷鍵**：支援 Enter 鍵快速添加

### 🎨 UI/UX 特色

- **簡潔設計**：採用極簡主義設計風格
- **響應式布局**：適配不同螢幕尺寸
- **直觀互動**：清晰的視覺回饋和動畫效果
- **自定義滾動條**：美觀的滾動條樣式
- **懸停效果**：按鈕和列表項目的懸停動畫

## 🏗️ 技術架構

### 前端技術棧

- **React 19.1.1** - 現代化 UI 框架
- **Vite 7.1.2** - 快速建構工具
- **ESLint** - 代碼品質檢查
- **CSS3** - 現代化樣式設計

### 組件架構

```
src/
├── components/           # 模組化組件
│   ├── AddTodo.jsx      # 新增待辦事項組件
│   ├── TodoItem.jsx     # 單個待辦事項組件
│   └── TodoList.jsx     # 待辦事項列表組件
├── App.jsx              # 主應用組件
├── App.css              # 主樣式檔案
└── main.jsx             # 應用程式入口點
```

## 🚀 快速開始

### 環境要求

- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器

### 安裝步驟

1. **克隆專案**

   ```bash
   git clone https://github.com/ric2k1/wp-1141-todo-app-react-components.git
   cd wp-1141-todo-app-react-components
   ```

2. **安裝依賴**

   ```bash
   npm install
   # 或
   yarn install
   ```

3. **啟動開發服務器**

   ```bash
   npm run dev
   # 或
   yarn dev
   ```

4. **開啟瀏覽器**
   訪問 `http://localhost:5173` 查看應用程式

### 建構生產版本

```bash
npm run build
# 或
yarn build
```

## 📖 使用指南

### 基本操作

1. **新增待辦事項**

   - 在輸入框中輸入待辦事項標題
   - 在描述框中輸入詳細描述（可選）
   - 點擊 "add" 按鈕或按 Enter 鍵添加

2. **管理待辦事項**

   - 點擊核取方塊標記完成/未完成
   - 點擊待辦事項文字展開/收起描述
   - 點擊 "delete" 按鈕刪除項目

3. **鍵盤快捷鍵**
   - `Enter`：在標題輸入框中快速添加
   - `Ctrl + Enter`：在描述輸入框中快速添加

### 組件說明

#### AddTodo 組件

- **獨立狀態管理**：管理自己的輸入框狀態（標題和描述）
- **完整功能封裝**：包含新增待辦事項的完整邏輯
- **鍵盤快捷鍵支援**：支援 Enter 和 Ctrl+Enter 快速添加
- **組件間通信**：通過 onAddTodo prop 與 TodoList 通信

#### TodoItem 組件

- **純展示組件**：專注於渲染單個待辦事項
- **事件處理優化**：包含優化的事件處理函數
- **Props 驅動**：通過 props 接收數據和回調函數
- **可重用性高**：易於在其他項目中重用

#### TodoList 組件

- **狀態管理中心**：管理所有待辦事項的狀態
- **完整 CRUD 操作**：包含新增、刪除、切換完成狀態等功能
- **Ref 暴露**：使用 forwardRef 和 useImperativeHandle 暴露方法
- **組件整合**：整合 TodoItem 組件並處理分隔線

## 🎨 設計特色

### 視覺設計

- **配色方案**：採用簡潔的黑白配色，背景為米色 (#f5f5dc)
- **字體**：使用 Arial 字體，確保跨平台一致性
- **邊框**：所有元素使用 1px 黑色邊框，營造簡潔感
- **圓角**：適度的圓角設計 (4px-8px) 增加現代感

### 互動設計

- **懸停效果**：按鈕和列表項目具有懸停背景色變化
- **點擊回饋**：所有可點擊元素都有視覺回饋
- **動畫過渡**：使用 CSS transition 提供流暢的動畫效果

### 響應式設計

- **最大寬度**：容器最大寬度 600px，居中顯示
- **滾動處理**：列表區域支援垂直滾動
- **自適應高度**：根據內容自動調整高度

## 🔧 開發指南

### 代碼結構

- **組件獨立性**：每個組件管理自己的狀態，提高可重用性
- **狀態分離**：狀態管理分散到各個組件中，避免 props drilling
- **Ref 通信**：使用 useRef 和 forwardRef 進行組件間通信
- **React Hooks**：使用 useState, useImperativeHandle 等現代 React 特性
- **最佳實踐**：遵循 React 組件設計最佳實踐

### 樣式管理

- 使用 CSS 模組化設計
- 採用 BEM 命名規範
- 響應式設計原則
- 自定義滾動條樣式

### 性能優化

- **組件隔離**：狀態變更只影響相關組件，減少不必要的重新渲染
- **Ref 通信**：避免 props drilling，提高組件間通信效率
- **狀態本地化**：狀態管理更接近使用位置，提高代碼可讀性
- **React 19 特性**：使用最新的 React 功能和 Hooks
- **Vite 熱重載**：快速開發和調試體驗

## 📝 待辦事項數據結構

```javascript
{
  id: number,           // 唯一識別符
  text: string,         // 待辦事項標題
  description: string,  // 詳細描述
  completed: boolean,   // 完成狀態
  expanded: boolean     // 描述展開狀態
}
```

## 🤝 貢獻指南

1. Fork 本專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權條款

本專案採用 MIT 授權條款 - 查看 [LICENSE](LICENSE) 檔案了解詳情。

## 📞 聯絡資訊

如有任何問題或建議，請透過以下方式聯絡：

- GitHub Issues: [專案 Issues 頁面](https://github.com/ric2k1/wp-1141-todo-app-react-components/issues)
- 電子郵件: [您的聯絡信箱]

---

⭐ 如果這個專案對您有幫助，請給我們一個 Star！
