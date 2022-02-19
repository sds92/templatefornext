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
    workingHoars: {
      title: 'Время работы',
      value: ['Ежедневно: <span class="font-bold">8:00–20:00</span>'],
    },
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
 * На сервере создаем файл файл .env с переменной NEXT_PUBLIC_SITE_URL=<наш url>
 *
 * ********************************************
 */

createSite({
  url: 'pilomateriali.site',
  desc: 'Пиломатериалы',
  ym: '',
  title: 'Пиломатериалы',
  productTitle: 'Пиломатериалы',
  api: {
    email: 'https://xn--j1ano.com/sendmail',
    products: 'https://xn--j1ano.com/uploads/staticsites/plitaosb-3.ru.json',
    serv: 'https://xn--j1ano.com/',
  },
  contacts: {
    phones: ['+00000000000'],
    emails: ['test@test.ru'],
    addresses: [
      {
        title: 'Офис',
        value: 'г. Москва, Проектируемый проезд № 134, вл 4',
        iframe: 'https://api-maps.yandex.ru/frame/v1/-/CCUYiXRD-B',
      },
    ],
    socials: [
      ['Telegram', 'https://t.me/+00000000000'],
      ['Whatsapp', 'https://wa.me/+00000000000?text=Здравствуйте...'],
    ],
  },
  content: {
    head: {
      title: 'Купить пиломатериал в Москве и МО',
      meta: [
        {
          name: 'keywords',
          content:
            'купить, ламинированная, шпунтованная, древесно стружечная, плита, влагостойкие, древесные, плиты, древесная плита, древесную плиту купить в москве, плита из древесного волокна, купить, цена, москва, мо, интернет, магазин, недорого, дешево, с доставкой',
        },
        {
          name: 'description',
          content:
            'Влагостойкие, ламинированные, шпунтованные древесные плиты. Едва ли какая-то стройка обходится без этих строительных материалов, а поскольку разновидностей очень много: влагостойкие, ламинированные, шпунтованные и прочие древесные плиты, стоит подробней рассмотреть все имеющиеся типы, отличительные черты и области применения.',
        },
      ],
    },
    main: {
      title: ['<div class="text-6xl">Пиломатериалы</div>'],
      subTitle: 'Высокое качество по доступной цене',
      price: 'от 770 руб/шт',
      text: 'В основном используется в качестве отделочного материала для внешней облицовки зданий, но также подходит для дизайна внутренних интерьеров, обустройства бань, саун и беседок. Он имеет оптимальную ширину, поэтому в точности имитирует брус, при этом стоит недорого.',
      img: 'images/main.png',
    },
    catalog: {
      title: ['Размеры и цены <span class="uppercase text-bp_green_2">пиломатериала<span>'],
      subTitle: 'У нас представлены товары разных размеров',
    },
    about: {
      title: ['Пиломатериалы'],
      subTitle: [
        'Пиломатериал - натуральный материал, на замену, которому, пока не пришли синтетические материалы. <br/> Пиломатериал может быть хвойных (сосна, пихта, ель, кедр, лиственница) или лиственных пород (клен, береза, осина, дуб, тополь). В зависимости от распила, используемой древесины и размеров бревен, получаются разные по показателям изделия, которые применяют для различных конструкций и частей здания.',
      ],
      text: '',
      animatedStats: [],
    },
    order: {
      title: ['Купить цементно-стружечную плиту — не проблема. Звоните нам!'],
      subTitle: 'Доставка по Москве и Московской обл.',
    },
    advantages: {
      title: ['Преимущества', 'пиломатериала'],
      items: [
        [
          'Высокая несущая способность',
          'Первый плюс пиломатериала в том, что при высокой несущей способности сам он имеет относительно легкий вес, что дает возможность возводить крепкие, и, вмете с тем, легкие конструкции. Примером тому служат деревянные дома, которые делаются на минимальном фундаменте.',
        ],
        [
          'Быстрота и легкость монтажа',
          'Другое преимущество пиломатериала — это быстрота и легкость монтажа. В этом пиломатериалу нет конкурентов. Никакой грязи, никакой техники, простота крепления и максимальная скорость. К тому же, если вы поставили в коттедже деревянные перекрытия, то можете смело приступать к продолжению работ, в отличие от бетона, после трудоемкой заливки которого еще примерно месяц нужно подождать.',
        ],
        [
          'Экологичность',
          'Экологическая чистота, то есть, пиломатериалы являются природным и естественным материалом, который не может нанести вред здоровью человеку.',
        ],
        [
          'Универсальность',
          'Пиломатериалы могут использоваться практически для любых конструкций. В отличие от металлов, они имеют множество возможностей и вариантов для использования.',
        ],
        [
          'Способность "дышать"',
          'Благодаря этому свойству пиломатериалы отлично впитывают лишнюю влагу при ее избыточном скоплении в доме, а затем, при понижении температуры, отдают ее обратно.',
        ],
        [
          'Простота обработки',
          'Пиломатериалы поддаются любым видам обработки, от простой шлифовки до сложных художественных работ. Кроме этого, пиломатериалы дают простор для творчества и фантазии.',
        ],
        [
          'Тепло и звукоизоляция',
          'Это свойство достигается за счет того, что древесина имеет пористую структуру.',
        ],
      ],
      title2: ['Применение', 'пиломатериала'],
      items2: [
        [
          'Отборный сорт',
          'Такой материал не имеет выраженных недочетов, на нем не будет трещин. Допустимо лишь малое количество сучков: два на один метр изделия. Используется для изготовления мебели премиум-класса и для отделки салона автомобилей.',
        ],
        [
          'Первый сорт',
          'Здесь больше возможное количество сучков и трещин, однако, полотно не должно иметь трухлявости, гнили и плесени. Применяется в строительстве.',
        ],
        [
          'Второй сорт',
          'Допустимы глубокие трещины и незначительные червоточины, но исключены трухлявость и гниль. Востребован в строительстве и производстве мебели.',
        ],
        [
          'Третий сорт',
          'Есть незначительное количество гнили, сквозных трещин и червоточин по всей поверхности древесины. Такой пиломатериал нашел применение для сооружения навесов, поддонов и транспортировочных ящиков.',
        ],
        [
          'Четвертый сорт',
          'Сюда относится древесину самого низкого качества, которая может быть использована для возведения конструкций и предметов, не требующих прочности и долговечности.',
        ],
      ],
    },
    gallery: {
      title: ['Примеры использования', 'пиломатериала'],
      text: 'Пиломатериал применяется в самых разных областях строительства, для самых разных целей.',
      imgs: [
        ['images/example1.jpg', 'Бани'],
        ['images/example2.jpg', 'Каркасное домостроение'],
        ['images/example3.jpg', 'Внутренние перегородки'],
        ['images/example4.jpg', 'Установка полов'],
        ['images/example5.jpg', 'Сооружение крыши'],
        ['images/example6.jpg', 'Создания опалубки'],
      ],
    },
  },
  v: '1.4',
});
