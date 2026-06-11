# DESIGN.md — WinWin Fan Hub (董思成 Fan Hub)

## 气质与意象

清晨天空的纯净蓝——一望无际的清爽底色上，白色卡片如云朵般漂浮。首页中央，一个克制的动态小人徽章在纯白背景上挥手致意，如翻开一本装帧精美的偶像写真集，每一页都是惊喜。

关键词：Sky Blue / Cloud-like / Editorial Luxury / Contained Dynamic Badge

## 配色方案

| 角色 | 色值 | 意象来源 |
|------|------|----------|
| 主背景 | `#9CE5F4` | 天蓝色，清爽明亮 |
| Hero区域背景 | `#FFFFFF` | 纯白，让视频小人边界消隐 |
| 卡片/区块背景 | `#FFFFFF` | 纯白卡片，云朵漂浮感 |
| 导航栏背景 | `rgba(156,229,244,0.6)` + blur | 天蓝半透毛玻璃 |
| 深色区域（Stats/Footer） | `#061124` | 深海蓝墨黑，沉浸对比 |
| 品牌高亮色 | `#3A8BCC` | 蔚蓝色，标签/按钮/活动标记 |
| 高亮悬停 | `#2A6FA8` | 蔚蓝加深 |
| 强调红 | `#B93210` | Portrixe焦红，备用 |
| 主文字 | `#061124` | 暗夜海军蓝墨黑，高对比 |
| 次文字 | `#3a4a5c` | 辅助描述 |
| 弱化文字 | `#6b7d8f` | 标签/注释 |

## 字体排版

- 标题字体：`Playfair Display` + `Noto Serif SC` — 社论衬线体，加宽字距
- 正文字体：`Inter` + `Noto Serif SC` — 无衬线极简可读
- 标题字重：700/900，大字号 48–80px
- 正文字重：400/500，字号 13–16px
- 排版节奏：标题大幅留白，正文紧凑，强对比

## 视觉策略

- 天蓝底色 + 白色卡片：清爽漂浮感
- Hero纯白底：视频小人边界消隐，max-width 320px 居中
- 图片优先：卡片以图片为主视觉
- 5列网格：Categories内容卡片极致紧凑单排5列
- 非对称布局：首页分类卡5列，Gallery预览4列
- 圆角 10–16px：友好现代
- 阴影层次：卡片柔和阴影，hover加深

## 动效与交互

- Hero错落入场：Editorial Fade Up，视频先升→标签→标题→副标题→CTA，递增delay
- 导航下拉：点击展开，translateY + opacity 过渡
- 卡片 hover：translateY(-6px) + 阴影加深 + 图片 scale(1.05)
- 页面切换：fadeInUp 入场 (page-enter class)
- 导航栏：滚动后天蓝半透→白色半透 + backdrop-blur
- 滚动揭示：IntersectionObserver 触发 reveal 动画
- Gallery灯箱：全屏大图查看，点击关闭
- Gallery下载：天蓝胶囊DOWNLOAD按钮，fetch+blob下载

## 页面结构 (SPA)

1. **首页** — Hero(纯白+视频小人徽章) + 分类网格(5列) + 画廊预览(4列,英文+中文) + 统计(深色) + Footer
2. **Categories汇总页** (#/categories) — 面包屑 + 5列分类大卡片
3. **分类子页** — 面包屑 + 标题 + 5列内容卡片(TV Series首项featured横幅)
4. **Gallery子页** — 面包屑 + 4列图片网格 + hover标签 + 灯箱 + 下载按钮
5. **About页** — 形象照+资料 + Profile + Career Timeline + Filmography表 + Guestbook留言板

## 导航结构

- **Home** | **Categories** (dropdown: TV Series/Variety Shows/Stage Focus/Interview/Fan-made) | **Gallery** (dropdown: Period Costume古装/Casual Wear私服/Red Carpet活动红毯/HD Wallpapers高清壁纸) | **About**

## 核心交互功能

- 全局模糊搜索：右上角搜索覆盖层，模糊检索所有内容
- Gallery灯箱查看：点击图片全屏查看
- Gallery一键下载：每张图片配备DOWNLOAD按钮
- About留言板：客户端留言，动态追加
- Fan-made YouTube API：异步抓取视频，失败降级本地缓存

## 免责声明

Footer底部中英双语免责声明

## 设计禁忌

- 禁止视频小人撑满屏幕——必须max-width 320px居中
- 禁止在 #9CE5F4 背景上使用浅色/低对比度文字
- 禁止使用紫色
- 禁止Gallery子页显示外链——只直接展示图片
- 禁止渐变卡片背景（纯色 + 图片为主）
