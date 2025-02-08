/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://inkcitythetattoostudio.in',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/404', '/500'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/404', '/500']
        }
      ]
    }
  };
