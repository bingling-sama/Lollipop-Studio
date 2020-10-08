module.exports = {
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
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
            '/guide/projectList',
            '/guide/quotations'
        ],
    },
    markdown: {
        lineNumbers: true
    },
    smoothScroll: true,
    lastUpdateed: "上次更新",
    evergreen: true
}