import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://humatarayici.com',
  base: '/',
  integrations: [starlight({
    title: 'Hüma Tarayıcı',
    logo: {
      src: './src/assets/ion-logo.svg'
    },
    social: {
      github: 'https://github.com/vastsea0',
      discord: 'https://discord.gg/cfAtFzhTZT'
    },
    sidebar: [{
      label: '[home] Anasayfa',
      link: '/'
    }, {
      label: '[list] Özellikler',
      link: '/features/'
    },{
      label: '[book] Manifesto',
      link: '/manifesto/'
    }, {
      label: '[rocket] Hakkında',
      link: '/docs/'
    }, {
      label: '[box] Öğreticiler',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: '[book] Referans',
      autogenerate: {
        directory: 'reference'
      }
    }],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
    },
    customCss: [
      '@fontsource-variable/space-grotesk/index.css',
      '@fontsource/space-mono/400.css',
      '@fontsource/space-mono/700.css',
      './src/styles/theme.css'
    ],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: false,
    lastUpdated: true
  })],
  output: "static"
});