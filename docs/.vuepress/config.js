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
            includeLevel:[1, 2, 3, 4]
        }
    },
    themeConfig: {
        sidebarDepth: 2,

        nav: [
            { text: 'Demo', link: '/' },
            { text: 'GitHub首页', link: 'https://github.com/clouds-cat/' },
            { text: '团队首页', link: 'https://github.com/clouds-cat/' },
        ],
        sidebar: 'auto'
    },
}
