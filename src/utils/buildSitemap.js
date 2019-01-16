const sm = require('sitemap');
const fs = require('fs');
const dataConfig = require('../config/dataConfig');
const domainConfig = require('../config/domainConfig');

const sitemap = sm.createSitemap({
  hostname: dataConfig.siteUrl,
  cacheTime: 600000,
  urls: [
    { url: domainConfig.intro.path, changefreq: 'daily', priority: 1.0 },
    { url: domainConfig.businessInfo.path, changefreq: 'daily', priority: 0.5 },
    {
      url: domainConfig.privacyPolicy.path,
      changefreq: 'daily',
      priority: 0.5,
    },
    {
      url: domainConfig.termsOfService.path,
      changefreq: 'daily',
      priority: 0.5,
    },
    { url: domainConfig.main.path, changefreq: 'daily', priority: 1.0 },
    { url: domainConfig.about.path, changefreq: 'daily', priority: 1.0 },
    { url: domainConfig.allEars.path, changefreq: 'daily', priority: 1.0 },
    { url: domainConfig.contact.path, changefreq: 'daily', priority: 0.5 },
    { url: domainConfig.bonVoyage.path, changefreq: 'daily', priority: 1.0 },
    { url: domainConfig.signIn.path, changefreq: 'daily', priority: 0.5 },
    { url: domainConfig.signUp.path, changefreq: 'daily', priority: 0.5 },
  ],
});

console.log('Building sitemap start...');
fs.writeFileSync('public/sitemap.xml', sitemap.toString());
console.log('Complete.');
