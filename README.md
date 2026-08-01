# 个人主页本地样例

这是一个使用 Hexo 搭建的个人主页本地样例项目。本阶段仅完成本地运行环境、Acorn 主题安装和 Acorn 官方示例数据导入，尚未改成个人资料内容。

## 技术栈

- Node.js
- npm
- Git
- Hexo
- Acorn 主题
- Acorn 官方示例数据

## 项目目录

- `_config.yml`：Hexo 项目主配置文件，当前主题配置为 `acorn`
- `source`：网站内容目录，示例文章、页面、图片数据主要在这里
- `themes/acorn`：Acorn 主题文件目录
- `backup/source_initial`：Hexo 初始 `source` 目录备份
- `public`：执行生成命令后输出的静态网站目录
- `scaffolds`：Hexo 文章模板目录
- `node_modules`：项目本地依赖目录

## 常用命令

```powershell
cd "D:\dataset\lpl\my_page"
npm install
npx --no-install hexo clean
npx --no-install hexo generate
npx --no-install hexo server -p 4000
```

如需使用标准 `npx` 写法，也可以在依赖已安装后运行：

```powershell
cd "D:\dataset\lpl\my_page"
npx hexo clean
npx hexo generate
npx hexo server -p 4000
```

## 本地访问

启动本地服务器后访问：

```text
http://localhost:4000
```

## 生成静态网站

```powershell
cd "D:\dataset\lpl\my_page"
npx --no-install hexo clean
npx --no-install hexo generate
```

生成结果会输出到 `public` 目录。

## 当前阶段状态

- 已安装并启用 Acorn 主题
- 已导入 Acorn 官方示例数据
- 已完成本地生成和访问验证
- 尚未配置 GitHub Pages
- 尚未上传到 GitHub
- 尚未绑定域名
