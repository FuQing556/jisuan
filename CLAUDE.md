# 数字组合查找器 (Subset Sum Solver)

纯前端工具页面，输入一组数字和一个目标值，找出所有加起来等于目标值的数字组合。

## 项目结构

```
.
├── combination-finder.html   # 主页面（HTML + CSS + JS）
├── index.html                # combination-finder.html 的副本，GitHub Pages 入口
└── CLAUDE.md
```

## 技术栈

- 纯 HTML/CSS/JS，零外部依赖，单文件自包含
- 算法：迭代 DFS + 回溯，带剪枝（排序后超过目标值的分支直接跳过）

## 部署

### 生产环境

GitHub Pages：`https://fuqing556.github.io/jisuan/`

- Settings → Pages → Source: Deploy from branch → `master` / `/ (root)`
- `index.html` 作为入口页，与 `combination-finder.html` 内容一致

### 本地开发

直接浏览器打开 `combination-finder.html` 即可，无需服务器。

## 历史

- Railway 部署已废弃（国内 IP 被 GFW 封锁）。相关文件 `server.js`、`package.json` 已删除。
- 曾尝试 Cloudflare Pages / Workers，因 workers.dev 域名在国内同样被墙，放弃。

## 关键配置

- 最多输入 100 个数字（`MAX_NUMS = 100`）
- 最多显示 5000 组结果（`MAX_RESULT = 5000`），超出截断并警告
- 浮点数比较容差 `1e-12`
- 搜索过程中按 `Esc` 可取消
- 单击结果组合可复制算式到剪贴板
