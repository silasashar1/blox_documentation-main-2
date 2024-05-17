const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'Vue',
  tagline: 'Vue support',
  url: 'https://getblox.ai/',
  baseUrl: '/',
  favicon: '/Whitehero.png',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  // {
  //   id: 'cli',
  //   path: 'docs/cli',
  //   routeBasePath: '/cli',
  // },
  // {
  //   id: 'plugin-sdk',
  //   path: 'docs/plugin-sdk',
  //   routeBasePath: '/plugin-sdk',
  //   versions: {
  //     current: {
  //       label: '1.x.x',
  //     },
  //   },
  // },

  // Web UI Kits
  {
    id: 'Content-Manager',
    path: 'docs/Content-Manager',
    routeBasePath: '/Content-Manager/',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'Data-set',
    path: 'docs/Data-set',
    routeBasePath: '/Data-set',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  // {
  //   id: 'react-ui-kit',
  //   path: 'docs/react-ui-kit/',
  //   routeBasePath: '/react-ui-kit',
  //   versions: {
  //     current: {
  //       label: '1.x.x',
  //     },
  //   },
  // },
  {
    id: 'Integration',
    path: 'docs/Integration',
    routeBasePath: '/Integration',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  {
    id: 'Administration',
    path: 'docs/Account',
    routeBasePath: '/Account',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  {
    id: 'faq',
    path: 'docs/faq',
    routeBasePath: '/faq',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  
  // {
  //   id: 'angular-ui-kit',
  //   path: 'docs/angular-ui-kit',
  //   routeBasePath: '/angular-ui-kit',
  //   versions: {
  //     current: {
  //       label: '1.x.x',
  //     },
  //   },
  // },


  // Web Core
  {
    id: 'Connectors-Manager',
    path: 'docs/Connectors-Manager',
    routeBasePath: '/Connectors-Manager',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'SSO',
    path: 'docs/SSO',
    routeBasePath: '/SSO',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  // React Web Core
  {
    id: 'Document-Manager',
    path: 'docs/Document-Manager',
    routeBasePath: '/Document-Manager',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Mobile Core
  // {
  //   id: 'android-core',
  //   path: 'docs/android-core',
  //   routeBasePath: '/android-core',
  //   versions: {
  //     current: {
  //       label: '1.x.x',
  //     },
  //   },
  // },
  {
    id: 'Digital-Experience-Manager',
    path: 'docs/Digital-Experience-Manager',
    routeBasePath: '/Digital-Experience-Manager',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  // {
  //   id: 'ios-core',
  //   path: 'docs/ios-core',
  //   routeBasePath: '/ios-core',
  //   versions: {
  //     current: {
  //       label: '1.x.x',
  //     },
  //   },
  // },
  {
    id: 'Audience-Manager',
    path: 'docs/Audience-Manager',
    routeBasePath: '/Audience-Manager',
    versions: {
      current: {
        label: '0.5.x',
      },
    },
  },

  // Mobile UI Kits
  // {
  //   id: 'android',
  //   path: 'docs/android',
  //   routeBasePath: '/android',
  //   versions: {
  //     current: {
  //       label: '0.14.x',
  //     },
  //   },
  // },
  // {
  //   id: 'flutter',
  //   path: 'docs/flutter',
  //   routeBasePath: '/flutter',
  //   versions: {
  //     current: {
  //       label: '0.7.x',
  //     },
  //   },
  // },
  // {
  //   id: 'ios',
  //   path: 'docs/ios',
  //   routeBasePath: '/ios',
  //   versions: {
  //     current: {
  //       label: '1.33.x',
  //     },
  //   },
  // },
  // {
  //   id: 'react-native',
  //   path: 'docs/rn-ui-kit',
  //   routeBasePath: '/react-native/e',
  //   versions: {
  //     current: {
  //       label: '1.4.x',
  //     },
  //   },
  // },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  // breadcrumbs: true,
  // editUrl: 'https://github.com/dyte-in/docs/tree/main/',
  // showLastUpdateTime: true,
  // remarkPlugins: [
  //   [require('@docusaurus/remark-plugin-npm2yarn'), {
  //     sync: true
  //   }],
  // ],
  // sidebarPath: require.resolve('./sidebars-default.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const {
  webpackPlugin
} = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [
  tailwindPlugin,
  ...docs_plugins,
  webpackPlugin,
  [
    '@docusaurus/plugin-client-redirects',
    {
      createRedirects(path) {
        // if (path.startsWith('/guides/capabilities/webhooks')) {
        //   return [
        //     path.replace('/guides/capabilities/webhooks', '/guides/webhooks'),
        //     path.replace(
        //       '/guides/capabilities/webhooks',
        //       '/guides/features/webhooks'
        //     ),
        //   ];
        // }
        // if (path.startsWith('/guides/capabilities/recording')) {
        //   return [
        //     path.replace('/guides/capabilities/recording', '/guides/recording'),
        //     path.replace(
        //       '/guides/capabilities/recording',
        //       '/guides/features/recording'
        //     ),
        //   ];
        // }
        // if (path.startsWith('/guides/capabilities/recording')) {
        //   return [
        //     path.replace('/guides/capabilities/recording', '/guides/recording'),
        //     path.replace(
        //       '/guides/capabilities/recording',
        //       '/guides/features/recording'
        //     ),
        //   ];
        // }
        // if (path.startsWith('/guides/capabilities/embed')) {
        //   return [
        //     path.replace('/guides/capabilities/embed', '/guides/embed'),
        //     path.replace(
        //       '/guides/capabilities/embed',
        //       '/guides/features/embed'
        //     ),
        //   ];
        // }
        // if (path.startsWith('/guides/capabilities/export-chat-dump')) {
        //   return [
        //     path.replace(
        //       '/guides/capabilities/export-chat-dump',
        //       '/guides/export-chat-dump'
        //     ),
        //     path.replace(
        //       '/guides/capabilities/export-chat-dump',
        //       '/guides/features/export-chat-dump'
        //     ),
        //   ];
        // }
        // if (path.startsWith('/guides/capabilities/breakoutroom')) {
        //   return [
        //     path.replace(
        //       '/guides/capabilities/breakoutroom',
        //       '/guides/breakoutroom'
        //     ),
        //     path.replace(
        //       '/guides/capabilities/breakoutroom',
        //       '/guides/features/breakoutroom'
        //     ),
        //   ];
        // }
        // /* for everything else */
        // if (path.startsWith('/guides/capabilities')) {
        //   return [path.replace('/guides/capabilities', '/guides/features')];
        // }
        // if (path === '/ui-kit') {
        //   return [
        //     '/javascript/advanced-usage',
        //     '/javascript/customize-meeting-ui',
        //     '/javascript/events',
        //     '/javascript/installation',
        //     '/javascript/quickstart',
        //     '/javascript/reference/chat-message',
        //     '/javascript/reference/connection-config',
        //     '/javascript/reference/dyte-client',
        //     '/javascript/reference/dyte-control-bar',
        //     '/javascript/reference/dyte-errors',
        //     '/javascript/reference/dyte-grid',
        //     '/javascript/reference/dyte-meeting-events',
        //     '/javascript/reference/dyte-plugin',
        //     '/javascript/reference/dyte-ui-config',
        //     '/javascript/reference/meeting',
        //     '/javascript/reference/participant',
        //     '/javascript/reference/self-participant',
        //     '/javascript/sample-app',
        //     '/javascript/usage',
        //     '/javascript/virtual-background',
        //     '/javascript/',
        //   ];
        // }
        // if (path === '/react-ui-kit') {
        //   return [
        //     '/react/advanced-usage',
        //     '/react/customize-meeting-ui',
        //     '/react/events',
        //     '/react/installation',
        //     '/react/quickstart',
        //     '/react/reference/chat-message',
        //     '/react/reference/connection-config',
        //     '/react/reference/dyte-client',
        //     '/react/reference/dyte-control-bar',
        //     '/react/reference/dyte-errors',
        //     '/react/reference/dyte-grid',
        //     '/react/reference/dyte-meeting-events',
        //     '/react/reference/dyte-plugin',
        //     '/react/reference/dyte-ui-config',
        //     '/react/reference/meeting',
        //     '/react/reference/participant',
        //     '/react/reference/self-participant',
        //     '/react/sample-app',
        //     '/react/usage',
        //     '/react/virtual-background',
        //     '/react/',
        //   ];
        // }
        return undefined; // Return a falsy value: no redirect created
      },
    },
  ],
];

const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const DataHTML = fs.readFileSync('./src/snippets/data.html', 'utf-8');
const AutomationHTML = fs.readFileSync('./src/snippets/Automation.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');
const intHTML = fs.readFileSync('./src/snippets/int.html', 'utf-8');
const account = fs.readFileSync('./src/snippets/Account.html', 'utf-8');
/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,

  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock'],
  clientModules: [require.resolve('./src/client/define-ui-kit.js')],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
        },
        googleTagManager: {
          containerId: 'GTM-MXRHJT4S',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/bloxlight.png',
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          href: '/',
          src: '/logo/new-D.png',
          srcDark: '/logo/new-w.png',
          alt: 'Vue',
          height: '40px',
          width: '101px',
        },
        items: [
          // {
          //   label: 'Guides',
          //   to: 'guides',
          //   className: 'guides-top-header',
          // },
          {
            label: 'Automation Hub',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [{
              type: 'html',
              value: AutomationHTML,
              className: 'dyte-dropdown',
            }, ],
           
          },
          {
            label: 'Customer Hub',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [{
              type: 'html',
              value: sdksHTML,
              className: 'dyte-dropdown',
            }, ],
           
          },
          {
            label: 'Data Hub',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [{
              type: 'html',
              value: DataHTML,
              className: 'dyte-dropdown',
            }, ],
           
          },
         
         
          // {
          //   label: 'Integration',
          //   type: 'dropdown',
          //   className: 'dyte-dropdown',
          //   items: [{
          //     type: 'html',
          //     value: intHTML,
          //     className: 'dyte-dropdown',
          //   }, ],
           
          // },
          {
            label: 'Administration',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [{
              type: 'html',
              value: account,
              className: 'dyte-dropdown',
            }, ],
           
          },
        
          
          // {
          //   label: 'REST API',
          //   to: '/api/',
          // },
          {
            label: 'Resources',
            type: 'dropdown',
            className: 'dyte-dropdown resources-dropdown',
            items: [{
              type: 'html',
              value: resourcesHTML,
              className: 'dyte-dropdown',
            }, ],
          },
          // {
          //   label: 'Support',
          //   to: 'https://dyte.io/contact',
          // },

          {
            type: 'search',
            position: 'right',
          },
          // {
          //   label: 'Book a demo',
          //   href: 'https://dyte.io/schedule-demo',
          //   position: 'right',
          //   className: 'navbar-book-demo',
          // },
          // {
          //   label: 'Raise A Ticket',
          //   href: 'https://dev.dyte.io/register',
          //   position: 'right',
          //   className: 'dev-portal-signup dev-portal-link',
          // },
        ],
      },
      footer: {
        // logo: {
        //   // href: '/',
        //   // src: '/logo/bloxlight.png',
        //   // srcDark: '/logo/bloxlight.png',
        //   // alt: 'Dyte Docs',
        //   // height: '36px',
        // },
        links: [
          // {
          //   title: 'Product',
          //   items: [
          //     // {
          //     //   label: 'Demo',
          //     //   href: 'https://app.dyte.io',
          //     // },
          //     {
          //       label: 'Developer Portal',
          //       href: 'https://dev.dyte.io',
          //     },
          //     {
          //       label: 'Pricing',
          //       href: 'https://dyte.io/#pricing',
          //     },
          //   ],
          // },
          // {
          //   title: 'Company',
          //   items: [{
          //       label: 'About Us',
          //       href: 'https://dyte.io',
          //     },
          //     {
          //       label: 'Join Us',
          //       href: 'https://dyte.freshteam.com/jobs',
          //     },
          //     {
          //       label: 'Privacy Policy',
          //       href: 'https://dyte.io/privacy-policy',
          //     },
          //     {
          //       label: 'Contact Us',
          //       href: 'https://dyte.io/contact',
          //     },
          //   ],
          // },
          // {
          //   title: 'Resources',
          //   items: [{
          //       label: 'Documentation',
          //       href: '/',
          //     },
          //     {
          //       label: 'Blog',
          //       href: 'https://dyte.io/blog',
          //     },
          //     {
          //       label: 'Community',
          //       href: 'https://community.dyte.io',
          //     },
          //   ],
          // },
        ],
        copyright: 'A product of MAD Street Den',
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
        magicComments: [{
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {
              start: 'highlight-start',
              end: 'highlight-end'
            },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      // algolia: {
      //   appId: 'HL0HSV62RK',
      //   apiKey: '72ebf02146698733b7114c7b36da0945',
      //   indexName: 'docs',
      //   contextualSearch: true,
      //   searchParameters: {},
      // },
    }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
