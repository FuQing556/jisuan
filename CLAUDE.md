# 数字组合查找器 (Subset Sum Solver)

纯前端工具页面，输入一组数字和一个目标值，找出所有加起来等于目标值的数字组合。

## 项目结构

```
.
├── combination-finder.html   # 主页面（HTML + CSS + JS）
├── server.js                 # 最小 Node.js HTTP 服务（Railway 部署用）
├── package.json              # Node 项目配置，start 脚本启动 server.js
└── CLAUDE.md
```

## 技术栈

- **前端**：纯 HTML/CSS/JS，零外部依赖，单文件自包含
- **算法**：迭代 DFS + 回溯，带剪枝（排序后超过目标值的分支直接跳过）
- **后端**：`server.js` 是一个极简 Node.js HTTP 服务，仅用内置 `http`/`fs`/`path` 模块，预加载 HTML 到内存并缓存 5 秒

## 部署

### 本地开发

直接浏览器打开 `combination-finder.html` 即可，无需服务器。

或本地启动服务器：`node server.js`，然后访问 `http://localhost:3000`。

### Railway

1. 项目已关联 GitHub 仓库 `FuQing556/jisuan`
2. Railway 检测 `package.json` → 识别为 Node.js → 执行 `npm start`
3. `server.js` 监听 `process.env.PORT`（Railway 自动注入），绑定 `0.0.0.0`

## 关键配置

- 最多输入 100 个数字（`MAX_NUMS = 100`）
- 最多显示 5000 组结果（`MAX_RESULT = 5000`），超出截断并警告
- 浮点数比较容差 `1e-12`
- 搜索过程中按 `Esc` 可取消
- 单击结果组合可复制算式到剪贴板
