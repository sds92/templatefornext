const fs = require('fs');
const createSite = ({ url, ym, title, productTitle, contacts, ...data }) => {
  const newSite = {
    url: url,
    api: {
      ym: ym,
      email: 'https://xn--j1ano.com/sendmail',
      products: `https://xn--j1ano.com/uploads/staticsites/${url}.json`,
      serv: 'https://xn--j1ano.com/',
    },
    title: title,
    copyright: [
      '© 2022 Сайт создан с помощью <a href="https://roboweb.team/"><strong>RoboWeb.Team</strong></a>',
    ],
    productTitle: productTitle,
    contacts: contacts,
    
    ...data,
  };

  fs.writeFile(`./data/${url}.json`, JSON.stringify(newSite, null, '\t'), function (err) {
    if (err) return console.log(err);
    console.log('SAVE COMPLETE');
  });
};

const updateSite = (urlToUpdate, data) => {
  let raw = fs.readFileSync(`./data/test.json`);
  let jsonAppData = JSON.parse(raw);
  let siteToUpdate = jsonAppData.find(({ url }) => url === urlToUpdate);
  siteToUpdate[Object.keys(data)[0]] = data;
};

/**
 * ********************************************
 * Заполняем инфу
 * Запускаем вручную
 * На сервере создаем файл .env с переменной NEXT_PUBLIC_SITE_URL=<наш url>
 *
 * ********************************************
 */

const data = require('./siteobjdata')

createSite(data.pilomaterialisite);
