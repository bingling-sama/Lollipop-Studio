module.exports = {
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
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
            '/home',
            {
                title: '成员名单',
                path: '/guide/memberList',
                children: [
                    ['/guide/member/binglingsama', '冰凌sama'],
                    ['/guide/member/beanflame', '豆焰'],
                    ['/guide/member/cursor', 'CursoR_光标'],
                    ['/guide/member/konara', '凉宫长栎'],
                    ['/guide/member/peachskin', '桃子皮'],
                    ['/guide/member/whitenight', '白夜']
                ],
            },  
            {
                title: '项目列表',
                path: '/guide/projectList',
                children: [
                    ['/guide/project/LollipopStudio', 'Lollipop Studio 官网'],
                    ['/guide/project/BeanFlameblog', '豆焰の博客'],
                    ['/guide/project/SCPAfterTheEND', 'SCP:After The END'],
                    ['/guide/project/LollipopServer', 'Lollipop Minecraft 服务器'],
                    ['/guide/project/Gallery', 'Gallery 相册'],
                    ['/guide/project/UndergroundCityEngineering', '地下城市工程']
                ]
            },
            {
                title: '成员语录',
                path: '/guide/quotations',
                children: [
                    ['/guide/quotations/binglingQuotations', '冰凌语录'],
                    ['/guide/quotations/beanflameQuotations', '豆焰语录'],
                    ['/guide/quotations/konaraQuotations', '长栎语录']
                ]
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