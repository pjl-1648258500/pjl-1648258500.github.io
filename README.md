# 平景龙个人主页

这是一个使用 Hexo 和 Acorn 主题搭建的个人展示主页，定位为“平景龙的个人主页，展示数据科学与空间规划方向的教育背景、研究兴趣和代表项目”。

核心标签：`Data Science × Spatial Planning`。

核心表达：用数据工程和计算方法理解城市、交通与乡村空间。

## 技术栈

- Node.js
- npm
- Git
- Hexo
- Acorn 主题

## 项目目录

- `_config.yml`：Hexo 项目主配置文件，当前主题配置为 `acorn`
- `source`：网站内容目录，页面、项目详情、图片和数据配置主要在这里
- `themes/acorn`：Acorn 主题文件目录
- `backup/source_initial`：Hexo 初始 `source` 目录备份
- `backup/acorn_sample_before_personalization`：个人主页改造前的 Acorn 示例内容备份
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

当前主要页面：

- 首页：`http://localhost:4000/`
- 关于：`http://localhost:4000/about/`
- 代表项目：`http://localhost:4000/stories/`
- OD交通项目：`http://localhost:4000/projects/od-transport/`
- 乡村文旅项目：`http://localhost:4000/projects/rural-tourism/`

## 线上访问

- 网站地址：`https://pjl-1648258500.github.io/`
- 源代码仓库：`https://github.com/pjl-1648258500/pjl-1648258500.github.io`

## 生成静态网站

```powershell
cd "D:\dataset\lpl\my_page"
npx --no-install hexo clean
npx --no-install hexo generate
```

生成结果会输出到 `public` 目录。

也可以使用 npm 脚本：

```powershell
cd "D:\dataset\lpl\my_page"
npm run build
```

## 发布方式

当前使用 GitHub Actions 发布 GitHub Pages。推送 `main` 分支后，工作流会自动安装依赖、生成 Hexo 静态网站，并将 `public` 目录发布到 GitHub Pages。

```powershell
cd "D:\dataset\lpl\my_page"
git status
git add .
git commit -m "update: revise website content"
git push
```

## 当前阶段状态

- 已安装并启用 Acorn 主题
- 已从 Acorn 官方示例站改造为第一版个人主页
- 已完成本地生成和访问验证
- 已配置 GitHub Pages 自动发布工作流
- 尚未绑定域名
- 当前不提供完整简历下载
- 当前不提供 PDF 简历文件

## 当前页面结构

- 首页：Hero、个人概览、代表项目、页脚联系方式
- 关于：个人简介、教育经历、研究兴趣、技术与方法、组织与服务、部分荣誉、邮箱
- 代表项目：两个项目卡片，链接到对应详情页
- 项目详情页：项目概述、我的工作、技术路线或技术方向、数据规模、关键难点、解决方式、项目成果、反思与后续方向

## 内容主要文件

- `_config.yml`：站点标题、作者、描述、关键词和正式网站地址
- `themes/acorn/_config.yml`：导航、Hero 文案、Logo、favicon、首页背景图等主题配置
- `source/about/index.md`：关于页面正文
- `source/stories/index.md`：代表项目列表页面入口
- `source/projects/od-transport/index.md`：OD交通项目详情页
- `source/projects/rural-tourism/index.md`：乡村文旅项目详情页
- `source/_data/index.yml`：首页板块顺序
- `source/_data/culture.yml`：首页个人概览三卡片
- `source/_data/stories.yml`：代表项目卡片内容
- `source/_data/contact.yml`：页脚邮箱联系方式
- `source/_data/links.yml`：页脚友情链接
- `source/images/banner/personal-banner.svg`：首页背景图
- `source/images/brand.svg`：站点 Logo
- `source/images/projects/`：项目封面图
- `themes/acorn/source/css/_custom/index.styl`：少量自定义视觉优化
- `.github/workflows/pages.yml`：GitHub Pages 自动构建与发布工作流

## 公开隐私原则

当前公开页面只展示中文姓名、英文姓名、教育背景、研究兴趣、项目经历、部分校园经历、部分荣誉和学校邮箱。

不公开：

- 手机号码
- 籍贯、民族、政治面貌、家庭信息、身份证件信息
- 带完整个人信息的原始简历
- PDF 简历或简历下载入口
- 未确认的个人 GitHub 地址

## 后续更新位置

- 正式入学后，修改 `source/about/index.md` 中北京大学硕士阶段表述。
- 如需替换个人照片或校园照片，优先替换 `source/images/banner/personal-banner.svg` 或在 `themes/acorn/_config.yml` 中修改 `hero.image`。
- 如需添加 GitHub、LinkedIn 等链接，先确认真实公开地址，再修改 `source/_data/contact.yml` 或 `source/_data/links.yml`。
- 如需更换公网域名，再修改 `_config.yml` 的 `url` 并在 GitHub Pages 中单独配置自定义域名。
