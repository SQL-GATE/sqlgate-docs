/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [{
  caption: 'User1',
  // You will need to prepend the image path with your baseUrl
  // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  image: '/img/docusaurus.svg',
  infoLink: 'https://www.facebook.com',
  pinned: true,
}, ];

const siteConfig = {
  title: 'SQLGate DOCS' /* title for your website */ ,
  tagline: 'A website for testing',
  url: 'https://docs.sqlgate.com' /* your website url */ ,
  cname: 'docs.sqlgate.com',
  baseUrl: '/' /* base url for your project */ ,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'sqlgate-docs',
  organizationName: 'chequer-io',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [{
      doc: '0101-install-uninstall',
      label: 'DOCS',
    },
    {
      href: 'https://www.sqlgate.com/product',
      label: 'PRODUCT',
    },
    {
      href: 'https://www.sqlgate.com/pricing/subscription',
      label: 'PRICING',
    },
    {
      href: 'https://support.sqlgate.com/hc',
      label: 'SUPPORT',
    },
    /*

    */
    {
      search: true,
    },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/sqlgate-logo.png',
  footerIcon: 'img/chequer-logo.png',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#08090a',
    secondaryColor: '#808080',
  },

  editUrl: 'https://github.com/chequer-io/sqlgate-docs/edit/master/docs/',

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © ' +
    new Date().getFullYear() +
    'CHEQUER Inc. All rights reserved.',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  algolia: {
    apiKey: '',
    indexName: '',
    algoliaOptions: {}, // Optional, if provided by Algolia
  },
};

module.exports = siteConfig;
