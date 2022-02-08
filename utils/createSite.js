const fs = require('fs');
const createSite = ({ url, ym, title, productTitle, contacts, ...data }) => {
  let raw = fs.readFileSync(`./data/app.json`);
  let jsonAppData = JSON.parse(raw);
  let newId = jsonAppData.reverse()[0].id + 1;
  jsonAppData.reverse()
  
  const newSite = {
    id: newId,
    url: url,
    api: {
      ym: ym,
      email: 'https://xn--j1ano.com/sendmail',
      products: `https://xn--j1ano.com/uploads/staticsites/${url}.json`,
      serv: 'https://xn--j1ano.com/',
    },
    title: title,
    copyright: ['© 2021 Сайт создан с помощью <a href="https://roboweb.site/"><strong>RoboWeb</strong></a>'],
    productTitle: productTitle,
    contacts: contacts,
    workingHoars: {
      title: 'Время работы',
      value: ['Ежедневно: <span class="text-bold">8:00–20:00</span>'],
    },
    ...data,
  };
  jsonAppData.push(newSite);
  fs.writeFile(`./data/test.json`, JSON.stringify(jsonAppData, null, '\t'), function (err) {
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

createSite({
  url: 'shinglas-rus.ru',
  desc: 'Гибкая черепица Shinglas',
  ym: '',
  title: 'Гибкая черепица Shinglas',
  productTitle: 'Гибкая черепица',
  contacts: {
    phones: ['+8 (495) 846-73-75'],
    emails: ['shinglas-rus@yandex.ru'],
    addresses: [
      {
        title: 'Офис',
        value: 'г. Москва, Проектируемый проезд № 134, вл 4',
        iframe: 'https://api-maps.yandex.ru/frame/v1/-/CCUYiXRD-B',
      },
    ],
    socials: [
      ['Telegram', 'https://t.me/+00000000000'],
      ['Whatsapp', 'https://wa.me/+79585815196?text=Здравствуйте...'],
    ],
  },
  v: '1.4',
});