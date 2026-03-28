# CodeCheck

一个基于 TypeScript 的命令行工具。

## 功能特性

- 📊 **代码统计**: 统计代码行数、字符数、函数数等信息
- 🛡️ **XSS 检查**: 检查 HTML 文件中的 XSS 漏洞
- 🎯 **灵活配置**: 支持自定义检查路径
- ⚡ **快速高效**: 基于 Glob 模式匹配，快速定位文件

## 安装

```bash
npm install -g codecheck
```

## 使用

### 基本语法

```bash
codecheck <command> [options]
codecheck stat --path packages # 统计代码行数
codecheck xss --path packages # 检查 XSS 漏洞
```