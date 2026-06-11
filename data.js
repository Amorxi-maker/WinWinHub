/* =============================================
   DATA.JS — WinWin Fan Hub Content Data
   All content based on Baidu Baike & user updates
   ============================================= */

const CONTENT = {
  'tv-series': {
    title: 'TV Series',
    subtitle: '影视剧作品',
    desc: '董思成的影视作品合集——从古装轻喜剧到奇幻大剧，每一个角色都用心诠释。',
    layout: 'featured',
    items: [
      { title: '五福临门', cover: 'images/wflm.jpg', url: 'https://www.mgtv.com/h/617394.html', intro: '角色：杨羡（领衔主演）| 2025 古装轻喜剧' },
      { title: '良陈美锦', cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80', url: 'https://www.mgtv.com/h/749276.html', intro: '角色：叶限（领衔主演）| 2026 古装宅斗' },
      { title: '子夜归', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', url: 'https://v.qq.com/x/cover/mzc002009y0nzq8/z4101m43ng6.html?ptag=bing.com', intro: '角色：蝠朝（友情出演）| 2025 古装奇幻爱情' },
      { title: '冰雪谣', cover: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&q=80', url: 'https://v.qq.com/x/cover/mzc00200ckgcb17/g41006kc47f.html', intro: '角色：司徒威涟（主演）| 2024 民国奇幻' },
      { title: '25小时恋爱', cover: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80', url: 'https://v.qq.com/x/cover/mzc0020035bn9hl/s0046k050t1.html', intro: '角色：言樾（领衔主演）| 2023 青春爱情' },
      { title: '恰逢春', cover: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80', url: '#', intro: '角色：许凤佳（主演）| 2026 古装爱情' },
      { title: '今天是太阳雨', cover: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80', url: 'https://www.mgtv.com/h/817372.html', intro: '角色：陈砚周（主演）| 2026 青春爱情' },
      { title: '明月苍茫', cover: 'https://images.unsplash.com/photo-1501612780327-4507b6c0f5f3?w=600&q=80', url: 'https://www.iqiyi.com/a_se8h2j6pn9.html', intro: '角色：莫提准（主演）| 待播 古装权谋' },
      { title: '电视剧幕后花絮：片场日常记录', cover: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80', url: 'https://www.youtube.com/results?search_query=winwin+drama+behind+the+scenes', intro: 'Youtube' }
    ]
  },
  'variety-shows': {
    title: 'Variety Shows',
    subtitle: '综艺节目',
    desc: '从《奔跑吧》到《五十公里桃花坞》，舞台之外的WinWin同样精彩。',
    layout: 'even',
    items: [
      { title: '五十公里桃花坞5', cover: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80', url: 'https://v.qq.com/x/cover/mzc002005od4txd/b4101hnrvpz.html', intro: '常驻嘉宾 | 腾讯视频' },
      { title: '风华合伙人', cover: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80', url: 'https://www.iqiyi.com/v_k86lvximww.html?vfrm=pcw_album_auto&rfr=https://www.google.com/', intro: '参演 | 2026 浙江卫视' },
      { title: '灿烂的市集', cover: 'https://images.unsplash.com/photo-1501612780327-4507b6c0f5f3?w=600&q=80', url: 'https://www.iqiyi.com/v_xqbuvw79pc.html?vfrm=pcw_album_auto&rfr=https://cn.bing.com/', intro: '参演 | 2025 爱奇艺' },
      { title: '奔跑吧9', cover: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80', url: '#', intro: '参演 | 2021 浙江卫视' },
      { title: '我们的师父', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80', url: 'https://www.mgtv.com/h/328612.html', intro: '常驻嘉宾 | 2019 湖南卫视' },
      { title: '少年威计划', cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80', url: 'https://v.youku.com/v_show/id_XNDI2OTM1NzA0OA==.html?&s=bdaa13d56dc24a85b8a5', intro: '参演 | 2019' },
      { title: '天天向上', cover: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=600&q=80', url: '#', intro: '嘉宾 | 2016/2019 湖南卫视' },
      { title: '快乐大本营', cover: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80', url: '#', intro: '嘉宾 | 2019 湖南卫视' }
    ]
  },
  'stage-focus': {
    title: 'Stage Focus',
    subtitle: '舞台直拍',
    desc: 'WayV & NCT 舞台直拍合集——中国舞、现代舞、扇子舞，每一个舞台瞬间都值得珍藏。',
    layout: 'even',
    items: [
      { title: 'WayV Phantom Concert', cover: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80', url: '#', intro: '2023 Phantom Tour' },
      { title: 'Lemon Tree 唱跳舞台', cover: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80', url: '#', intro: '风华合伙人 音乐节 | 2026' },
      { title: 'Nectar 月之迷', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80', url: '#', intro: 'WayV 中国舞直拍' },
      { title: "90's Love 直拍", cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', url: '#', intro: 'NCT U 白衣直拍' },
      { title: 'Bad Alive 直拍', cover: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80', url: '#', intro: 'WayV 4K Face Cam' },
      { title: 'Regular 理所当然', cover: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80', url: '#', intro: 'WayV 舞台直拍' },
      { title: 'Lovely 现代舞', cover: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=600&q=80', url: '#', intro: 'Ten & WinWin Choreography' },
      { title: 'Kick Back 练习室', cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80', url: '#', intro: 'WayV 练习室直拍' }
    ]
  },
  'interview': {
    title: 'Interview',
    subtitle: '采访与对话',
    desc: '杂志专访、幕后访谈、深度对话——了解舞台之外的真实WinWin。',
    layout: 'even',
    items: [
      { title: 'COSMO 专访', cover: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=600&q=80', url: '#', intro: '封面故事' },
      { title: 'GQ 对话', cover: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80', url: '#', intro: '深度访谈' },
      { title: 'VOGUE 幕后', cover: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80', url: '#', intro: '拍摄花絮' },
      { title: 'ELLE 快问快答', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', url: '#', intro: '趣味问答' },
      { title: '时尚芭莎', cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80', url: '#', intro: '杂志大片' },
      { title: '微博之夜采访', cover: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80', url: '#', intro: '红毯采访' }
    ]
  },
  'fan-made': {
    title: 'Fan-made',
    subtitle: '粉丝创作',
    desc: '来自全球粉丝的创作——剪辑、插画、应援，爱的无数种表达方式。',
    layout: 'even',
    items: [
      { title: 'Best Fan Edit 2024', cover: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80', url: '#', intro: '粉丝剪辑合集' },
      { title: 'Fan Art Collection', cover: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80', url: '#', intro: '粉丝画作' },
      { title: 'Birthday Project 2024', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', url: '#', intro: '生日应援项目' },
      { title: 'WinWin Fancam Archive', cover: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80', url: '#', intro: '直拍档案馆' },
      { title: 'Support Banner Gallery', cover: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80', url: '#', intro: '应援横幅集' },
      { title: 'Global Fan Messages', cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80', url: '#', intro: '全球粉丝留言' }
    ],
    youtubeBackup: [
      { title: '[Fancam] WinWin - Regular @NCT 127 Tour', thumbnail: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80', videoId: 'example1' },
      { title: '[Fan Edit] WinWin Moments 2024', thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80', videoId: 'example2' },
      { title: '[Stage] WayV Phantom WinWin Focus', thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80', videoId: 'example3' },
      { title: '[Compilation] WinWin Chinese Dance', thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80', videoId: 'example4' }
    ]
  },
  'guzhuang': {
    title: 'Period Costume',
    subtitle: '古装',
    desc: '从杨羡到叶限，古装造型下的WinWin如画中人。',
    images: [
      { src: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=600&q=80', label: '五福临门·杨羡' },
      { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80', label: '良陈美锦·叶限' },
      { src: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&q=80', label: '子夜归·蝠朝' },
      { src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80', label: '恰逢春·许凤佳' },
      { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', label: '明月苍茫·莫提准' },
      { src: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80', label: '冰雪谣·司徒威涟' },
      { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80', label: '古装写真' },
      { src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80', label: '古风写真' }
    ]
  },
  'sifu': {
    title: 'Casual Wear',
    subtitle: '私服',
    desc: '机场、街拍、日常——私服下的WinWin，自在随性。',
    images: [
      { src: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80', label: '机场出发' },
      { src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80', label: '日常街拍' },
      { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80', label: '度假随拍' },
      { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80', label: '品牌活动' },
      { src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80', label: '练习室' },
      { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', label: '幕后花絮' },
      { src: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=600&q=80', label: '日常穿搭' },
      { src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80', label: '私照合集' }
    ]
  },
  'hongtan': {
    title: 'Red Carpet & Events',
    subtitle: '活动红毯',
    desc: '聚光灯下的每一次亮相，都是焦点所在。',
    images: [
      { src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80', label: '微博之夜' },
      { src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80', label: 'MAMA Awards' },
      { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80', label: '品牌发布会' },
      { src: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=600&q=80', label: '时尚盛典' },
      { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80', label: '电影首映' },
      { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', label: '颁奖典礼' },
      { src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80', label: '品牌大秀' },
      { src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80', label: '慈善晚宴' }
    ]
  },
  'bizhi': {
    title: 'HD Wallpapers',
    subtitle: '高清壁纸',
    desc: '精心整理的高清壁纸，为你的屏幕增添一抹WinWin的色彩。',
    images: [
      { src: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=600&q=80', label: '桌面壁纸 #01' },
      { src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80', label: '桌面壁纸 #02' },
      { src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80', label: '桌面壁纸 #03' },
      { src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80', label: '桌面壁纸 #04' },
      { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80', label: '手机壁纸 #01' },
      { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', label: '手机壁纸 #02' },
      { src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80', label: '手机壁纸 #03' },
      { src: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80', label: '手机壁纸 #04' }
    ]
  }
};

/* About page data */
const ABOUT_DATA = {
  nameEn: 'Dong Sicheng',
  nameKo: '\ub3d9\uc0ac\uccb1',
  stageName: 'WINWIN',
  birthday: '1997.10.28',
  birthplace: '浙江温州',
  agency: 'SM Entertainment',
  group: 'NCT / WayV',
  education: '中央戏剧学院 表演系',
  height: '182cm',
  mbti: 'INFP',
  photo: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=800&q=80',
  profile: '董思成（WINWIN），1997年10月28日出生于浙江省温州市，中国男演员、歌手。2015年考入中央戏剧学院表演系，2016年作为NCT成员正式出道，2019年随小分队WayV在中国出道。凭借出众的舞蹈功底（中国舞、现代舞）和清俊外形，在舞台上留下无数经典瞬间。',
  career: [
    { year: '2015', event: '考入中央戏剧学院表演系' },
    { year: '2016.01', event: '作为NCT 127成员正式出道，发布《NCT #127》' },
    { year: '2016.11', event: '首次出演国内综艺《天天向上》，展示中国舞' },
    { year: '2018', event: '随NCT 2018发行专辑《NCT 2018 Empathy》' },
    { year: '2019.01', event: '随WayV发行出道专《The Vision》，在中国出道' },
    { year: '2019.03', event: '出演《快乐大本营》《我们的师父》' },
    { year: '2021', event: '出演《奔跑吧9》；发行WayV三辑《Kick Back》' },
    { year: '2023', event: '领衔主演网剧《25小时恋爱》，饰演言樾' },
    { year: '2024', event: '主演《冰雪谣》，饰演司徒威涟' },
    { year: '2025.01', event: '领衔主演《五福临门》，饰演杨羡，口碑热度双收' },
    { year: '2025.08', event: '参演《子夜归》，饰演蝠朝' },
    { year: '2026.02', event: '主演电影《镖人：风起大漠》，饰演大赖，票房14.48亿' },
    { year: '2026.05', event: '领衔主演《良陈美锦》，饰演叶限' },
    { year: '待播', event: '《恰逢春》《今天是太阳雨》《明月苍茫》' }
  ],
  works: [
    { type: '电影', title: '镖人：风起大漠', role: '大赖', year: '2026' },
    { type: '电视剧', title: '五福临门', role: '杨羡', year: '2025' },
    { type: '电视剧', title: '良陈美锦', role: '叶限', year: '2026' },
    { type: '电视剧', title: '子夜归', role: '蝠朝', year: '2025' },
    { type: '电视剧', title: '冰雪谣', role: '司徒威涟', year: '2024' },
    { type: '电视剧', title: '25小时恋爱', role: '言樾', year: '2023' },
    { type: '电视剧', title: '恰逢春', role: '许凤佳', year: '待播' },
    { type: '电视剧', title: '今天是太阳雨', role: '陈砚周', year: '待播' },
    { type: '电视剧', title: '明月苍茫', role: '莫提准', year: '待播' }
  ]
};

/* Category cards for home/categories page */
const CATEGORY_CARDS = [
  { key: 'tv-series', label: 'Drama', name: 'TV Series', nameZh: '影视剧', count: '8+ 影视作品', cover: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80' },
  { key: 'variety-shows', label: 'Entertainment', name: 'Variety Shows', nameZh: '综艺节目', count: '8+ 综艺节目', cover: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80' },
  { key: 'stage-focus', label: 'Performance', name: 'Stage Focus', nameZh: '舞台直拍', count: '8+ 舞台直拍', cover: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80' },
  { key: 'interview', label: 'Conversation', name: 'Interview', nameZh: '采访对话', count: '6+ 采访对话', cover: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=600&q=80' },
  { key: 'fan-made', label: 'Creation', name: 'Fan-made', nameZh: '粉丝创作', count: '6+ 粉丝创作', cover: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80' }
];

const GALLERY_CARDS = [
  { key: 'guzhuang', name: 'Period Costume', nameZh: '古装', cover: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=600&q=80' },
  { key: 'sifu', name: 'Casual Wear', nameZh: '私服', cover: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80' },
  { key: 'hongtan', name: 'Red Carpet', nameZh: '活动红毯', cover: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80' },
  { key: 'bizhi', name: 'HD Wallpapers', nameZh: '高清壁纸', cover: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80' }
];
