const fs = require('fs');
const create = (input) => {
  const [url, theme] = input;
  const date =
    new Date().toLocaleString().replace('/', '-').replace('/', '-').replace(', ', 'T').replace(' AM', '') +
    '+03:00';

  const robots = `
  User-agent: *
  Sitemap: https://${encodeURI(url)}/sitemap.xml
  `;
  const _env = `
  NEXT_PUBLIC_SITE_URL=${url}
  NEXT_PUBLIC_THEME=${theme}

  `;
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd">
    <url>
      <loc>https://${encodeURI(url)}</loc>
      <lastmod>${date}</lastmod>
      <priority>1.0</priority>
    </url>
  </urlset>
  `;
  fs.writeFile(`/public/robots.txt`, robots, function (err) {
    if (err) return console.log(err);
    console.log('SAVE robots.txt COMPLETE');
  });
//   fs.writeFile(`/public/.env`, _env, function (err) {
//     if (err) return console.log(err);
//     console.log('SAVE .env COMPLETE');
//   });
  fs.writeFile(`/public/sitemap.xml`, sitemap, function (err) {
    if (err) return console.log(err);
    console.log('SAVE sitemap COMPLETE');
  });
};
const urls = [
  // ['plitaosb-3.ru', 'black'],
  // ['plitaosb-3.kz', 'black'],
  // ['belplit24.ru', 'black'],
  // ['fanera.site', 'black'],
  // ['csptamak.ru', 'black'],
  // ['shinglas-rus.ru', 'black'],
  // ['pilomateriali.site', 'green'],
  // ['suhiesmesi.store', 'black'],
  // ['kronospan.site', 'black'],
  // ['магма.store', 'black'],
  // ['shinglas.store', 'black'],
  // ['spcpaneli.store', 'black'],
  // ['dekopran.site', 'black'],
  // ['betoniebloki.store', 'black'],
  // ['ламинат.site', 'black'],
  // ['белтермо.com', 'black'],
];

urls.forEach((item) => {
  create(item);
});
