module.exports = {
  title: 'Jeferson Lopes',
  tagline: 'Escrevo para homens e para máquinas.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jefersonlopesl', // Usually your GitHub org/user name.
  projectName: 'docusaurus-2', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ínicio',
      logo: {
        alt: 'Ínicio',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/contato',
          activeBasePath: 'doc2',
          label: 'Contato',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/jefersonlopesl',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Contato',
              to: 'docs/contato',
            },
            {
              label: 'Sobre mim',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/14622854/jeferson-lopes',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/jefersonlopesl',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/jefersonlopesl',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jefersonlopesl',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jeferson Lopes, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
