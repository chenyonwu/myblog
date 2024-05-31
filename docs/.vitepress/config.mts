import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "皮皮伍的学习日志",
  description: "皮皮伍的学习日志",
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
            link: '/front-end/javascript/ecmascript5/index',
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
            link: '/front-end/javascript/ecmascript6/index',
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

    sidebar: {
      '/front-end/javascript/ecmascript5': [
        {
          text: 'ECMAScript 5',
          items: [
            { text: '导论', link: '/front-end/javascript/ecmascript5/index' },
            { text: '数据类型', link: '/front-end/javascript/ecmascript5/dataType' },
            { text: '标准库', link: '/front-end/javascript/ecmascript5/standardLib' },
            { text: '面向对象编程', link: '/front-end/javascript/ecmascript5/oop' },
            { text: '异步编程', link: '/front-end/javascript/ecmascript5/async' },
          ]
        }
      ],
      '/front-end/javascript/ecmascript6': [
        {
          text: 'ECMAScript 6',
          items: [
            { text: '导论', link: '/front-end/javascript/ecmascript6/index' },
            { text: 'let 和 const 命令', link: '/front-end/javascript/ecmascript6/letAndConst' },
            { text: '变量的解构赋值', link: '/front-end/javascript/ecmascript6/destructuring' },
            { text: '字符串的扩展', link: '/front-end/javascript/ecmascript6/string' },
            { text: '数值的扩展', link: '/front-end/javascript/ecmascript6/number' },
            { text: '函数的扩展', link: '/front-end/javascript/ecmascript6/function' },
            { text: '数组的扩展', link: '/front-end/javascript/ecmascript6/array' },
            { text: '对象的扩展', link: '/front-end/javascript/ecmascript6/object' },
            { text: 'Symbol 数据类型', link: '/front-end/javascript/ecmascript6/symbol' },
            { text: 'Set 和 Map 数据结构', link: '/front-end/javascript/ecmascript6/setAndMap' },
            { text: 'Proxy', link: '/front-end/javascript/ecmascript6/proxy' },
            { text: 'Reflect', link: '/front-end/javascript/ecmascript6/reflect' },
            { text: 'Promise 对象', link: '/front-end/javascript/ecmascript6/promise' },
            { text: 'Iterator 和 for...of 循环', link: '/front-end/javascript/ecmascript6/iterator' },
            { text: 'Generator 函数', link: '/front-end/javascript/ecmascript6/generator' },
            { text: 'async 函数', link: '/front-end/javascript/ecmascript6/async' },
            { text: 'Class', link: '/front-end/javascript/ecmascript6/class' },
            { text: 'Module', link: '/front-end/javascript/ecmascript6/module' },
            { text: '异步遍历器', link: '/front-end/javascript/ecmascript6/asyncIterator' },
            { text: 'ArrayBuffer', link: '/front-end/javascript/ecmascript6/arrayBuffer' },
          ]
        }
      ],
      '/front-end/javascript/dom': [
        {
          text: 'DOM',
          items: [
            { text: '导论', link: '/front-end/javascript/dom/index' },
            {
              text: 'DOM 规范',
              items: [
                { text: 'Node 接口', link: '/front-end/javascript/dom/node' },
                { text: 'NodeList 接口', link: '/front-end/javascript/dom/nodeList' },
                { text: 'HTMLCollection 接口', link: '/front-end/javascript/dom/htmlCollection' },
                { text: 'ParentNode 接口', link: '/front-end/javascript/dom/parentNode' },
                { text: 'ChildNode 接口', link: '/front-end/javascript/dom/childNode' },
                { text: 'Document 节点', link: '/front-end/javascript/dom/document' },
                { text: 'Element 节点', link: '/front-end/javascript/dom/element' },
                { text: '属性的操作', link: '/front-end/javascript/dom/attribute' },
                { text: 'Text 节点', link: '/front-end/javascript/dom/text' },
                { text: 'DocumentFrament 节点', link: '/front-end/javascript/dom/documentFragment' },
                { text: 'CSS 操作', link: '/front-end/javascript/dom/css' },
                { text: 'MutationObserver', link: '/front-end/javascript/dom/mutationObserver' },
              ]
            },
            {
              text: 'DOM 事件',
              items: [
                { text: 'EventTarget 接口', link: '/front-end/javascript/dom/eventTarget' },
                { text: '事件模型', link: '/front-end/javascript/dom/eventModel' },
                { text: 'Event 对象', link: '/front-end/javascript/dom/event' },
                { text: '鼠标事件', link: '/front-end/javascript/dom/mouseEvent' },
                { text: '键盘事件', link: '/front-end/javascript/dom/keyboardEvent' },
                { text: '进度事件', link: '/front-end/javascript/dom/progressEvent' },
                { text: '表单事件', link: '/front-end/javascript/dom/formEvent' },
                { text: '触摸事件', link: '/front-end/javascript/dom/touchEvent' },
                { text: '拖拉事件', link: '/front-end/javascript/dom/dragEvent' },
                { text: '其他常见事件', link: '/front-end/javascript/dom/otherEvent' },
                { text: 'GlobalEventHandlers 接口', link: '/front-end/javascript/dom/globalEventHandlers' },
              ]
            }
          ]
        }
      ],
      '/front-end/javascript/bom': [
        {
          text: 'BOM',
          items: [
            { text: '导论', link: '/front-end/javascript/bom/index' },
            { text: 'window 对象', link: '/front-end/javascript/bom/window' },
            { text: 'Navigator 对象和 Screen 对象', link: '/front-end/javascript/bom/navigatorAndScreen' },
            { text: 'Cookie', link: '/front-end/javascript/bom/cookie' },
            { text: 'XMLHttpRequest 对象', link: '/front-end/javascript/bom/xmlHttpRequest' },
            { text: '同源限制', link: '/front-end/javascript/bom/sameOrigin' },
            { text: 'Storage 接口', link: '/front-end/javascript/bom/storage' },
            { text: 'History 对象', link: '/front-end/javascript/bom/history' },
            { text: 'Location 对象、URL 对象和 URLSearchParams 对象', link: '/front-end/javascript/bom/locationAndUrl' },
            { text: 'Blob 对象', link: '/front-end/javascript/bom/blob' },
            { text: 'File 对象、FileList 对象和 FileReader 对象', link: '/front-end/javascript/bom/file' },
            { text: '表单和 FormData 对象', link: '/front-end/javascript/bom/formData' },
            { text: 'IndexedDB API', link: '/front-end/javascript/bom/indexedDB' },
            { text: 'Web Worker', link: '/front-end/javascript/bom/webWorker' },
          ]
        }
      ]
    },

    outline: [2, 4],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    lineNumbers: true,
    math: true,
  },
  vite: {
    server: {
      host: true,
      port: 10110,
    }
  }
})
