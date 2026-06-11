# AGENTS.md — WinWin Fan Hub

## Project Overview
A Celebrity Fan Hub SPA for 董思成 (WinWin / Dong Sicheng), with dropdown navigation, hash-based routing, and category/gallery/about sub-pages. Built as a static HTML/CSS site with vanilla JavaScript, following "Sky Blue Luxury Editorial" design.

## Tech Stack
- **Template**: native-static (coze init)
- **Languages**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Fonts**: Playfair Display + Inter + Noto Serif SC (via Google Fonts .cn domain)
- **Routing**: Hash-based SPA (#/category/tv-series, #/gallery/guzhuang, #/about, #/categories)
- **Server**: Python `http.server` on port from ${DEPLOY_RUN_PORT}

## Project Structure
```
/workspace/projects/
├── index.html          # Main SPA — all pages rendered via JS
├── data.js             # All content data (CONTENT, ABOUT_DATA, CATEGORY_CARDS, GALLERY_CARDS)
├── styles/
│   └── main.css        # All styles (CSS custom properties, responsive, animations)
├── images/
│   └── 豆包.mp4        # Hero greeting video (contained badge, max-width 320px)
├── DESIGN.md           # Design specifications (colors, typography, layout, interactions)
├── AGENTS.md           # This file
└── .coze               # Build/run configuration
```

## Build & Run
- **Dev**: `python -m http.server ${DEPLOY_RUN_PORT} --bind 0.0.0.0`
- **No build step required** — pure static files

## SPA Architecture
- **Router**: `window.location.hash` based routing with `hashchange` event listener
- **Render functions**: `renderHome()`, `renderCategoriesPage()`, `renderCategoryPage(key)`, `renderGalleryPage(key)`, `renderAboutPage()`
- **Data**: Separated into `data.js` — `CONTENT` object (categories + gallery items with images arrays), `ABOUT_DATA` (profile info), `CATEGORY_CARDS` and `GALLERY_CARDS` for home page
- **Navigation**: `navigateTo(type, key)` function sets hash; dropdown menus in navbar

## Navigation Structure
- **Home** — direct link, hash = `''` or `#/`
- **Categories** (dropdown → #/categories summary page):
  - TV Series (`#/category/tv-series`) — featured layout (first item large)
  - Variety Shows (`#/category/variety-shows`)
  - Stage Focus (`#/category/stage-focus`)
  - Interview (`#/category/interview`)
  - Fan-made (`#/category/fan-made`) — includes YouTube API with fallback
- **Gallery** (dropdown, bilingual labels):
  - Period Costume 古装 (`#/gallery/guzhuang`)
  - Casual Wear 私服 (`#/gallery/sifu`)
  - Red Carpet 活动红毯 (`#/gallery/hongtan`)
  - HD Wallpapers 高清壁纸 (`#/gallery/bizhi`)
- **About** (`#/about`) — Profile, career timeline, filmography table, guestbook

## Key Design Tokens (from DESIGN.md)
- Background: `#9CE5F4` (sky blue)
- Hero background: `#FFFFFF` (pure white for video blending)
- Cards: `#FFFFFF` (white)
- Dark sections: `#061124` (deep navy for stats/footer)
- Brand accent: `#3A8BCC` (蔚蓝色)
- Heading font: Playfair Display + Noto Serif SC
- Body font: Inter + Noto Serif SC
- Border radius: 10–16px (modern, friendly)
- Content grid: 5-column layout for categories
- Gallery grid: 4-column layout with lightbox + download

## Core Features
1. **Hero Video Badge**: 豆包.mp4 in white hero section, max-width 320px, autoplay/loop/muted
2. **5-Column Grid**: Category content pages use 5-col grid (3-col on tablet, 2-col on mobile)
3. **Gallery Lightbox**: Click image → full-screen overlay with close
4. **Gallery Download**: DOWNLOAD button on each image, fetch+blob download
5. **Fuzzy Search**: Global search overlay, fuzzy-matches across all data
6. **Guestbook**: Client-side message board on About page
7. **Fan-made YouTube API**: Async fetch, fallback to local backup data
8. **Editorial Fade-Up**: Staggered hero entrance animation with blur+translateY

## Content Data Sources
- Categories content based on Baidu Baike: 董思成's actual TV series, variety shows, stage performances, interviews
- About page includes: profile, career timeline (2015-2026), filmography table
- Gallery images: categorized by 古装/私服/活动红毯/高清壁纸
- Footer includes bilingual disclaimer (CN/EN)

## Common Modifications
- **Add a new category item**: Add entry to `CONTENT['category-key'].items` array in data.js
- **Add a new gallery image**: Add entry to `CONTENT['gallery-key'].images` array in data.js
- **Add a new category/gallery**: Create entry in `CONTENT` object + add card in `CATEGORY_CARDS` or `GALLERY_CARDS` in data.js
- **Change accent color**: Update `--accent` in `:root` of main.css
- **Update About page info**: Edit `ABOUT_DATA` object in data.js
- **Change hero video**: Replace `images/豆包.mp4` file
- **Add YouTube API key**: Set `API_KEY` variable in `loadFanMadeYouTube()` function in index.html

## Footer Disclaimer
The footer contains a bilingual (Chinese + English) disclaimer stating this is a non-profit fan-made website, not affiliated with SM Entertainment.
