/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://wwww.firemetal.vercel.app",
  generateRobotsTxt: true,
  exclude: ["server-sitemap.xml", "/galerie/*"],
  robotsTxtOptions: {
    additionalSitemaps: [`${process.env.SITE_URL}/server-sitemap.xml`],
  },
};
