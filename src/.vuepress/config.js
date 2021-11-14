const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Code Eyzi',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  dest: "docs",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/eyzi/eyzi.github.io',
      },
      {
        text: 'Website',
        link: 'https://eyzi.dev/',
      },
      {
        text: 'Blog',
        link: 'https://blog.eyzi.dev/'
      }
    ],
    sidebar: {
      '/about/': [
        {
          title: 'About',
          collapsable: false,
          children: [
            ''
          ],
        },
        {
          title: 'Case Styles',
          path: '/case-styles/',
        },
        {
          title: 'Naming Conventions',
          path: '/naming-conventions/',
        }
      ],
      '/case-styles/': [
        {
          title: 'About',
          path: '/about/',
        },
        {
          title: 'Case Styles',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            '',
            'sentence-case',
            'title-case',
            'uppercase',
            'lowercase',
            'camel-case',
            'snake-case',
            'kebab-case',
            'dotted-case',
            'directory-case',
            'mixed-case',
            'whatever-case',
          ],
        },
        {
          title: 'Naming Conventions',
          path: '/naming-conventions/',
        }
      ],
      '/naming-conventions/': [
        {
          title: 'About',
          path: '/about/',
        },
        {
          title: 'Case Styles',
          path: '/case-styles/',
        },
        {
          title: 'Naming Conventions',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            '',
            'variables',
            'functions',
            'entities',
            'files-and-folders',
          ],
        },
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
