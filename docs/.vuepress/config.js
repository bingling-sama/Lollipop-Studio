module.exports = {
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['script', {  src: "https://cdn.jsdelivr.net/npm/artitalk" }],
    ],
    lang: 'zh-CN',
    title: 'Lollipop Studio 官方网站',
    description: 'The Official Website of Lollipop Studio',
    themeConfig: {
        logo: '/logo-big.png',
        nav: [
            {text: '主页', link: '/'},
            {text: 'GitHub', link: 'https://github.com/bingling-sama/Lollipop-Studio'},
        ],
        sidebar: [
            '/',
            '/home.html',
            {
                title: '成员名单',
                path: '/guide/memberList.html',
                children: [
                    ['/guide/member/binglingsama.html', '冰凌sama'],
                    ['/guide/member/beanflame.html', '豆焰'],
                    ['/guide/member/cursor.html', 'CursoR_光标'],
                    ['/guide/member/konara.html', '凉宫长栎'],
                    ['/guide/member/peachskin.html', '桃子皮'],
                    ['/guide/member/whitenight.html', '白夜'],
                    ['/guide/member/faulkner.html', 'Faulkner']
                ],
            },  
            {
                title: '项目列表',
                path: '/guide/projectList.html',
                children: [
                    ['/guide/project/LollipopStudio.html', 'Lollipop Studio 官网'],
                    ['/guide/project/BeanFlameblog.html', '豆焰の博客'],
                    ['/guide/project/SCPAfterTheEND.html', 'SCP:After The END'],
                    ['/guide/project/LollipopServer.html', 'Lollipop Minecraft 服务器'],
                    ['/guide/project/Gallery.html', 'Gallery 相册'],
                    ['/guide/project/UndergroundCityEngineering.html', '地下城市工程']
                ]
            },
            {
                title: '成员语录',
                path: '/guide/quotations.html',
                children: [
                    ['/guide/quotations/binglingQuotations.html', '冰凌语录'],
                    ['/guide/quotations/beanflameQuotations.html', '豆焰语录'],
                    ['/guide/quotations/konaraQuotations.html', '长栎语录']
                ]
            },
            {
                title: '碎碎念',
                path: '/guide/Artitalk.html',
            },
        ],
    },
    markdown: {
        lineNumbers: true
    },
    smoothScroll: true,
    lastUpdateed: "上次更新",
    evergreen: true
}
