import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "程序员皮皮伍",
  description: "皮皮伍的技术博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { 
        text: 'Web 前端基础', 
        items: [
          {
            text: 'HTML5',
            link: '/front-end/html5/index',
          },
          {
            text: 'CSS3',
            link: '/front-end/css3/index',
          },
          {
            text: 'ECMAScript 5',
            link: '/front-end/javascript/es5',
          },
          {
            text: 'DOM',
            link: '/front-end/javascript/dom',
          },
          {
            text: 'BOM',
            link: '/front-end/javascript/bom'
          }
        ] 
      },
      {
        text: '深入研究 JavaScript',
        items: [
          {
            text: 'ECMAScript 6',
            link: '/front-end/javascript/es6',
          },
          {
            text: '深入理解 ES6',
            link: '/front-end/javascript/books/深入理解ES6',
          },
          {
            text: '你不知道的 JavaScript',
            link: '/front-end/javascript/books/你不知道的JavaScript',
          },
          {
            text: 'JavaScript 设计模式与开发实践',
            link: '/front-end/javascript/books/JavaScript设计模式与开发实践',
          },
          {
            text: 'JavaScript 数据结构与算法',
            link: '/front-end/javascript/books/JavaScript数据结构与算法',
          }
        ]
      },
      {
        text: 'Vue3 技术栈',
        items: [
          {
            text: 'Vue3',
            link: '/front-end/vue-stack/vue3/index',
          },
          {
            text: 'Vue-Router',
            link: '/front-end/vue-stack/vue-router/index',
          },
          {
            text: 'Pinia',
            link: '/front-end/vue-stack/pinia/index',
          }
        ]
      }
      // { text: 'Java 后端', link: '/back-end/index' },
      // { text: '计算机科学', link: '/computer-science/index' },
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: 'Web 前端基础',
        items: [
          {
            text: 'HTML5',
            link: '/front-end/html5/index',
          },
          {
            text: 'CSS3',
            link: '/front-end/css3/index',
          },
          {
            text: 'ECMAScript 5',
            link: '/front-end/javascript/es5',
          },
          {
            text: 'DOM',
            link: '/front-end/javascript/dom',
          },
          {
            text: 'BOM',
            link: '/front-end/javascript/bom'
          }
        ]
      },
      {
        text: '深入研究 JavaScript',
        items: [
          {
            text: 'ECMAScript 6',
            link: '/front-end/javascript/es6',
          },
          {
            text: '深入理解 ES6',
            link: '/front-end/javascript/深入理解JavaScript',
          },
          {
            text: '你不知道的 JavaScript',
            link: '/front-end/javascript/你不知道的JavaScript',
          },
          {
            text: 'JavaScript 设计模式与开发实践',
            link: '/front-end/javascript/JavaScript设计模式与开发实践',
          },
          {
            text: 'JavaScript 数据结构与算法',
            link: '/front-end/javascript/JavaScript数据结构与算法',
          }
        ]
      },
      {
        text: 'Vue3 技术栈',
        items: [
          {
            text: 'Vue3',
            link: '/front-end/vue-stack/vue3/index',
          },
          {
            text: 'Vue-Router',
            link: '/front-end/vue-stack/vue-router/index',
          },
          {
            text: 'Pinia',
            link: '/front-end/vue-stack/pinia/index',
          }
        ]
      }
      // {
      //   text: 'Java 后端',
      //   link: '/back-end/index',
      // },
      // {
      //   text: '计算机科学',
      //   link: '/computer-science/index',
      // }
    ],

    outline: [2, 4],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
