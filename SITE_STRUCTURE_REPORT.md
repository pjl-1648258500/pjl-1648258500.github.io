# 个人主页 v1 结构报告

本报告记录当前 Hexo + Acorn 网站改造后的实际结构。当前站点定位为：平景龙的个人主页，展示数据科学与空间规划方向的教育背景、研究兴趣和代表项目。

## 当前导航

| 导航项 | 路径 | 控制文件 |
| ---- | ---- | ---- |
| 首页 | `/` | `themes/acorn/_config.yml` |
| 项目 | `/stories` | `themes/acorn/_config.yml` |
| 关于 | `/about` | `themes/acorn/_config.yml` |

导航渲染模板为 `themes/acorn/layout/_partial/menu.ejs`，移动端导航复用同一份 `menu` 配置。

## 首页结构

首页入口为 `source/index.md`，指定使用 `layout: index`。首页布局由 `themes/acorn/layout/index.ejs` 渲染，当前板块由 `source/_data/index.yml` 控制：

| 首页区域 | 内容来源 | 说明 |
| ---- | ---- | ---- |
| Hero | `themes/acorn/_config.yml` | 主标题、标签、副标题和背景图路径 |
| 个人概览 | `source/_data/culture.yml` | 教育路径、研究兴趣、技术方向三张卡片 |
| 代表项目 | `source/_data/stories.yml` | 两个代表项目卡片和关键数字 |
| 页脚 | `_config.yml`、`source/_data/contact.yml`、`source/_data/links.yml` | 站点描述、邮箱和友情链接 |

## 页面与内容文件

| 页面 | 路径 | 控制文件 |
| ---- | ---- | ---- |
| 首页 | `/` | `source/index.md`、`source/_data/index.yml` |
| 关于我 | `/about/` | `source/about/index.md` |
| 代表项目 | `/stories/` | `source/stories/index.md`、`source/_data/stories.yml` |
| OD交通项目 | `/projects/od-transport/` | `source/projects/od-transport/index.md` |
| 乡村文旅项目 | `/projects/rural-tourism/` | `source/projects/rural-tourism/index.md` |

## 图片资源

| 图片 | 用途 |
| ---- | ---- |
| `source/images/brand.svg` | 顶部和页脚个人标识 |
| `source/images/banner/personal-banner.svg` | 首页 Hero 抽象背景 |
| `source/images/profile/education.svg` | 个人概览：教育路径 |
| `source/images/profile/research.svg` | 个人概览：研究兴趣 |
| `source/images/profile/data.svg` | 个人概览：技术方向 |
| `source/images/projects/od-network.svg` | OD交通项目封面 |
| `source/images/projects/rural-digital-footprint.svg` | 乡村文旅项目封面 |

## 后续修改入口

- 修改站点名称、作者、描述：`_config.yml`
- 修改导航和 Hero：`themes/acorn/_config.yml`
- 修改首页板块顺序：`source/_data/index.yml`
- 修改个人概览：`source/_data/culture.yml`
- 修改项目卡片：`source/_data/stories.yml`
- 修改项目详情：`source/projects/*/index.md`
- 修改 About 页面：`source/about/index.md`
- 修改邮箱和友情链接：`source/_data/contact.yml`、`source/_data/links.yml`
- 微调视觉：`themes/acorn/source/css/_custom/index.styl`

## 当前边界

当前版本不提供完整简历下载，不配置 GitHub Pages，不展示未确认的个人 GitHub 地址，不公开手机号等敏感信息。
