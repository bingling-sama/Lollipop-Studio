module.exports = {
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    title: 'Lollipop Studio 官方网站',
    description: 'The Official Website of Lollipop Studio',
    themeConfig: {
        logo: '/logo.png',
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
                    ['/member/binglingsama', '冰凌sama'],
                    ['/member/beanflame', '豆焰'],
                    ['/member/cursor', 'CursoR_光标'],
                    ['/member/konara', '凉宫长栎'],
                    ['/member/peachskin', '桃子皮'],
                    ['/member/whitenight', '白夜']
                ],
                collapsable: false
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