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

// const fs = require('fs');
// const appEN = {
//   url: '',
//   api: {
//     ym: '',
//     email: 'https://xn--j1ano.com/sendmail',
//     products: '',
//     serv: 'https://xn--j1ano.com/',
//   },
//   title: 'Trading House «CSK» Ltd.',
//   copyright: [
//     '© 2022 Powered by <a href="https://roboweb.team/" target="_blank" rel="noopener noreferrer"><strong>RoboWeb.Team</strong></a>',
//   ],
//   productTitle: 'МДВП',
//   contacts: {
//     title: 'Contacts',
//     formTitle: 'Feedback form',
//     phones: {
//       title: 'Phones',
//       value: ['+7 (925) 104-73-46', '+3 (7533) 380-48-83', '+7 (925) 007-43-91'],
//     },
//     managers: {
//       title: 'Managers',
//       value: [
//         { name: 'Ekaterina Pimchenko', pos: 'Leading Foreign Trade Manager' },
//         { name: 'Galina Lavitskaya', pos: 'Foreign Trade Manager' },
//         { name: 'Violetta Osmak', pos: 'Foreign Trade Manager Assistant' },
//       ],
//     },
//     emails: ['ekaterina.Pimchenko@td-csk.ru', 'galina.Lavickaya@td-csk.ru', 'violetta.Osmak@td-csk.ru'],
//     addresses: [
//       {
//         title: 'Офис',
//         value: 'Москва, Проектируемый проезд № 134, вл.4',
//         iframe: 'https://api-maps.yandex.ru/frame/v1/-/CCUYiXRD-B',
//       },
//     ],
//     socials: [],
//     workingHoars: {
//       title: 'Working hoars',
//       value: ['<span class="text-bold">8:00–20:00</span>'],
//     },
//     form: {
//       placeholders: {
//         name: 'Name',
//         msg: 'Message',
//         email: 'Email',
//       },
//       sendButton: 'Send',
//       errors: {
//         name: '3-50 letters',
//         msg: 'Message',
//         email: 'Enter correct email',
//       },
//       statuses: {
//         pending: "Sending a request",
//         success: "Request sent successfully. Thank you for contacting.",
//         error: "An error has occurred. Try again. If the error persists, contact the site administration",
//       },
//     },
//   },
//   menu: ['Main', 'Products', 'Gallery', 'Contacts'],
//   head: {
//     title: 'Trading House «CSK» Ltd.',
//     meta: [
//       {
//         name: 'keywords',
//         content: '',
//       },
//       {
//         name: 'description',
//         content: '',
//       },
//     ],
//   },
//   content: {
//     main: {
//       title: ['Trading House CSK', 'Center of Building Integration'],
//       subTitle: 'High quality natural products for building constructions',

//       text: ['Trading House «CSK» Ltd. is a Russian company specializing in the supply of a wide range of materials for construction and repair since 2016. Thanks to our extensive professional connections and exceptional mobility, we are where clients realize their most ambitious projects in Russia and abroad. We guarantee the quality of products, prompt delivery, availability of goods in stock and a flexible system of discounts. <br/><br/> TH «CSK» Ltd. cooperates with the largest manufacturers of wood-board materials, and also has its own production of lumber for construction and finishing. <br/><br/> Trading House «CSK» Ltd. is a professional association of experienced managers, highly qualified specialists who have  many years of experience and are well versed in the specifics of the construction materials market.'],
//       button: 'Contact us',
//     },
//     catalog: {
//       title: ['Our products'],
//       button: 'Choose',
//       categoryCard: {
//         rightTitle: 'Products',
//         button: 'Ask for prices',
//       },
//     },
//     gallery: {
//       title: ['Usage examples'],
//       text: '',
//       imgGrid: [
//         'beltermo/floor.jpg',
//         'beltermo/instal.jpg',
//         'beltermo/kombi.jpg',
//         'beltermo/multi.jpg',
//         'beltermo/room.jpg',
//         'beltermo/ultra.jpg',
//         'beltermo/universal.jpg',
//         'beltermo/top.jpg',
//         'chipboard/product.jpg',
//         'fibreboard/product.jpg',
//         'lumber/product.jpg',
//         'mdf/product.jpg',
//         'osb/product.jpg',
//         'plywood/product.jpg',
//       ],
//       imgs: [
//         [
//           'examples/example1.jpg',
//           'Internal insulation of ceilings for screeding seamless floors (laminate, parquet board)',
//         ],
//         ['examples/example2.jpg', 'Internal wall insulation'],
//         ['examples/example3.jpg', 'Building insulation'],
//         ['examples/example4.jpg', 'External insulation of roofs of frame houses'],
//         ['examples/example5.jpg', 'Insulation of external walls (wet facade) with Beltermo plates'],
//         ['examples/example6.jpg', 'Floor and ceiling insulation '],
//       ],
//     },
//   },
// };

// fs.writeFile(`./data/app.json`, JSON.stringify(appEN, null, '\t'), function (err) {
//   if (err) return console.log(err);
//   console.log('SAVE COMPLETE');
// });