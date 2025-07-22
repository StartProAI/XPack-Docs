import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Docs',
  tagline: 'XPack Docs',  
  favicon: 'img/xpack-icon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.xpack.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xpack-ai', // Usually your GitHub org/user name.
  projectName: 'xpack', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:'https://github.com/StartProAI/XPack-Docs/blob/main',
          versions: {
            current: {
              label: `Canary 🚧`,
            },
          },
        },
        gtag: {
          trackingID: 'G-26DCQT45GT',
          anonymizeIP: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-26DCQT45GT',
        anonymizeIP: true,
      },
    ],
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        language: ["en", "zh"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'XPack Logo',
        src: 'img/xpack-logo.png',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          label: 'Get Started',
          position: 'right', // 右侧显示按钮
          className: 'navbar-button', // 自定义样式类名
          href: '/get_start', // 按钮链接的目标
        },
        {
          href: 'https://github.com/xpack-ai',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'xroute repository',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
