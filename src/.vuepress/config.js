const { description } = require('../../package')
const { removePlugin, PLUGINS } = require('@vuepress/markdown')

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
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'theme-color', content: '#cc3131' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  markdown: {
    chainMarkdown(config) {
      removePlugin(config, PLUGINS.EMOJI)
    },
  },

  theme: 'default-prefers-color-scheme',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    overrideTheme: 'dark',
    prefersTheme: 'dark',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Source Code',
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
            '',
            'what-is-programming',
            'how-do-i-learn-programming',
          ],
        },
        {
          title: 'Programming Concepts',
          path: '/concepts/',
        },
        {
          title: 'Case Styles',
          path: '/case-styles/',
        },
        {
          title: 'Naming Conventions',
          path: '/naming-conventions/',
        },
        {
          title: 'Architectures',
          path: '/architectures/',
        },
      ],
      '/concepts/': [
        {
          title: 'About',
          path: '/about/',
        },
        {
          title: 'Programming Concepts',
          collapsable: false,
          children: [
            '',
            'keywords',
            'statements',
            'variables',
            'functions',
            'conditions',
            'loops',
            'algorithms'
          ],
        },
        {
          title: 'Case Styles',
          path: '/case-styles/',
        },
        {
          title: 'Naming Conventions',
          path: '/naming-conventions/',
        },
        {
          title: 'Architectures',
          path: '/architectures/',
        },
      ],
      '/case-styles/': [
        {
          title: 'About',
          path: '/about/',
        },
        {
          title: 'Programming Concepts',
          path: '/concepts/',
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
        },
        {
          title: 'Architectures',
          path: '/architectures/',
        },
      ],
      '/naming-conventions/': [
        {
          title: 'About',
          path: '/about/',
        },
        {
          title: 'Programming Concepts',
          path: '/concepts/',
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
          ],
        },
        {
          title: 'Architectures',
          path: '/architectures/',
        },
      ],
      '/architectures/': [
        {
          title: 'About',
          path: '/about/',
        },
        {
          title: 'Programming Concepts',
          path: '/concepts/',
        },
        {
          title: 'Case Styles',
          path: '/case-styles/',
        },
        {
          title: 'Naming Conventions',
          path: '/naming-conventions/',
        },
        {
          title: 'Architectures',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            '',
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
