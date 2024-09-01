import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SWDR 5',
  tagline: 'Make SWDR Great Again',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://swdr5.docs.ttsk.ngo',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/swdr5-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TTSK',
  projectName: 'swdr5-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'announcement-bar',
      content: 'Jeżeli chcesz rozwijać nowe narzędzie SWDR5 <a target="_blank" rel="noopener noreferrer" href="https://td2.info.pl/rj/zgloszenie-do-projektu-swdr5/">zapoznaj się z tym wątkiem.</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    navbar: {
      title: 'TTSK',
      logo: {
        alt: 'TTSK Logo',
        src: '/img/logo_ttsk.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'requirementsSidebar',
          position: 'left',
          label: 'Requirements',
        },
        {
          type: 'docSidebar',
          sidebarId: 'designSidebar',
          position: 'left',
          label: 'Design',
        },
        {
          type: 'docSidebar',
          sidebarId: 'implementationSidebar',
          position: 'left',
          label: 'Implementation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'userSidebar',
          position: 'left',
          label: 'User',
        },
        {
          type: 'docSidebar',
          sidebarId: 'testingSidebar',
          position: 'left',
          label: 'Testing',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectManagementSidebar',
          position: 'left',
          label: 'Project Management',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'testowy link',
              to: '/docs/Design',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://td2.info.pl/',
            },
            {
              label: 'Mattermost',
              href: 'https://chat.ttsk.ngo/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/TrainDriver2',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ttsk-ngo',
            },
          ],
        },
      ],
      copyright: `<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><span property="dct:title">SWDR 5 Docs</span> by <span property="cc:attributionName">TTSK and the community</span> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
