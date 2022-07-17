module.exports = {
    title: 'CloudsCat-OJ',
    description: 'CloudsCat-OnlineJudge 的开发与使用文档',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ],
    base: '/CloudsCat-OJ/',
    markdown: {
        lineNumbers: true ,// 代码块显示行号
        toc: {
            includeLevel:[1, 2]
        }
    },
    themeConfig: {
        sidebarDepth: 2,
        nav: [
            { text: 'Demo', link: '/' },
            { text: 'GitHub首页', link: 'https://github.com/clouds-cat/' },
            { text: '团队首页', link: 'https://github.com/clouds-cat/' },
        ],
        sidebar: [
            {
                title: '开始上手',
                collapsable: true,
                children: [
                    '/faq/',
                ]
            },
            {
                title: '部署文档',
                collapsable: true,
            },
            {
                title: '开发文档',
                collapsable: true,
                children: [
                    '/dev/',
                    '/dev/database',
                    '/dev/xiupeng',
                ]
            },
            {
                title: '使用文档',
                collapsable: true,
                children:[
                    '/use/',
                    '/use/judge',
                ]
            },
        ]
    },
}
