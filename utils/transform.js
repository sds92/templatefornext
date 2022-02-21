const transform = (input) => {
  // console.log('🚀 ~ file: transform.js ~ line 2 ~ transform ~ input', input);
  let res = [];
  // here we should transform all options to obj entries
  // sort by title
  // sort by sizes or if no sizes - by price
  // group by product
  let temp = [];
  temp = input
    .map((item) => {
      let category = '';
      if (item.options.find(({ key }) => key === 'Производитель')) {
        category = item.options.find(({ key }) => key === 'Производитель').value;
      }
      if (item.options.find(({ key }) => key === 'Серия')) {
        category = item.options.find(({ key }) => key === 'Серия').value;
      }
      return {
        category: category,
        title: item.title,
        price: item.cost,
        priceFor: item.unit,
        show: item.visible,
        article: item.article,
        id: item.id,
        coef: item.coef,
        imgs: item.images,
        path: item.path,
      };
    })
    .sort((a, b) => {
      return a.category === b.category ? 0 : a.category < b.category ? -1 : 1;
    })
    .reduce((pre, cur, i) => {
      let preCategory = null;
      console.log('🚀 ~ file pre', i, pre);
      if (pre.category) {
        preCategory = pre.category;
      } else if (pre.reverse()[0].category) {
        preCategory = pre[0]?.category;
      }
      if (preCategory === cur.category) {
        if (i === input.length - 1) {
          return res.push(Array.prototype.concat(cur, pre));
        }
        return Array.prototype.concat(cur, pre);
      } else {
        res.push([cur])
      }
      res.push(pre.sort((a, b) => a.title === b.title ? 0 : a.title < b.title ? -1 : 1));
      console.log('🚀 ~ file res', i, res);
      return cur;
    });
    console.log('🚀 ~ file res2', res);
};

transform(
  (input = [
    {
      article: 86821,
      visible: true,
      id: '6001352c3c37c1616df69dd7',
      title: 'Плита OSB-3 (ОСП) Талион (11х1250х2500мм)',
      cost: 1572,
      club_cost: 1536,
      options: [
        {
          key: 'Производитель',
          value: 'Талион',
        },
        {
          key: 'Толщина',
          value: '11 мм',
        },
        {
          key: 'Длина',
          value: '2500 мм',
        },
        {
          key: 'Ширина',
          value: '1250 мм',
        },
        {
          key: 'Вес',
          value: '23,2 кг',
        },
      ],
      images: ['0667d805-9b5c-4cf8-87dd-3fa6eb8cff79.jpg', '47d27f3e-31ca-4a77-91a0-858049439f4e.jpg'],
      path: '/uploads/catalog/5f85ba274a9a5d34e0a45fed/categories/5fb376685225b630baf8471d/6001352c3c37c1616df69dd7/',
      unit: 'за шт.',
      coef: 1,
      description:
        'Ориентированно-стружечная плита (OSB, ОСП) — многослойный лист, образованный прессованием прямоугольной плоской щепы в условиях высокого давления и температуры, с использованием склеивающей водостойкой смолы.',
    },
    {
      article: 88795,
      visible: false,
      id: '6005282eb142d7177f664e12',
      title: 'Плита OSB-3 (ОСП) Калевала (12x1250x2500мм)',
      cost: 815,
      club_cost: 720,
      options: [
        {
          key: 'Производитель',
          value: 'Калевала',
        },
        {
          key: 'Толщина',
          value: '12 мм',
        },
        {
          key: 'Длина',
          value: '2500 мм',
        },
        {
          key: 'Ширина',
          value: '1250 мм',
        },
        {
          key: 'Вес',
          value: '17 кг',
        },
      ],
      images: ['b5b48f1e-3063-4802-9b8f-6b5b96a605b9.jpg', '76b3199c-27a7-4ac6-9c4e-ffa4e89194f6.jpg'],
      path: '/uploads/catalog/5f85ba274a9a5d34e0a45fed/categories/5fb376685225b630baf84723/6005282eb142d7177f664e12/',
      unit: 'за шт.',
      coef: 1,
      description:
        'OSB (ОСП) - ориентированно-стружечные плиты, материал, получаемый прессованием плоской древесной стружки хвойных пород неделовой древесины с использованием связующего компонента (водостойкая синтетическая смола).Особую популярность плиты ОСП приобрели для изготовления кровельных и стеновых сэндвич-панелей в каркасном домостроении. Их использование сокращает сроки строительства и одновременно позволяет произвести его с большей точностью.ОСП Калевала имеют российские сертификаты соответствия, санитарно-эпидемиологические заключения и сертификат пожарной безопасности. Изделия относятся к классу эмиссии свободного формальдегида Е1. Все показатели качества ОСП Калевала соответствуют европейскому стандарту ЕN-300. ОСП содержат до 90% древесины, доля связующего компонента составляет 10% в составе плиты, что обеспечивает экологическую безопасность материала и сохраняет эксплуатационные свойства древесины: легкость (плотность ОСП – около 650 кг/м3) и низкую теплопроводность.ОСП применяется в конструкциях, где необходим перенос нагрузки на продольные опоры – например, стропила и балки.',
    },
    {
      article: 88800,
      visible: false,
      id: '60052868b142d7177f664e39',
      title: 'Плита OSB-3 (ОСП) Калевала (9x1250x2500мм)',
      cost: 815,
      club_cost: 720,
      options: [
        {
          key: 'Производитель',
          value: 'Калевала',
        },
        {
          key: 'Толщина',
          value: '9 мм',
        },
        {
          key: 'Длина',
          value: '2500 мм',
        },
        {
          key: 'Ширина',
          value: '1250 мм',
        },
        {
          key: 'Вес',
          value: '17,5 кг',
        },
      ],
      images: ['b1fa36c7-2e1f-4f3a-9dad-b510ab671f34.jpg', 'db8237c5-c7ff-44bd-bb45-065006ae67f3.jpg'],
      path: '/uploads/catalog/5f85ba274a9a5d34e0a45fed/categories/5fb376685225b630baf84723/60052868b142d7177f664e39/',
      unit: 'за шт.',
      coef: 1,
      description:
        'OSB (ОСП) - ориентированно-стружечные плиты, материал, получаемый прессованием плоской древесной стружки хвойных пород неделовой древесины с использованием связующего компонента (водостойкая синтетическая смола).Особую популярность плиты ОСП приобрели для изготовления кровельных и стеновых сэндвич-панелей в каркасном домостроении. Их использование сокращает сроки строительства и одновременно позволяет произвести его с большей точностью.ОСП Калевала имеют российские сертификаты соответствия, санитарно-эпидемиологические заключения и сертификат пожарной безопасности. Изделия относятся к классу эмиссии свободного формальдегида Е1. Все показатели качества ОСП Калевала соответствуют европейскому стандарту ЕN-300. ОСП содержат до 90% древесины, доля связующего компонента составляет 10% в составе плиты, что обеспечивает экологическую безопасность материала и сохраняет эксплуатационные свойства древесины: легкость (плотность ОСП – около 650 кг/м3) и низкую теплопроводность.ОСП применяется в конструкциях, где необходим перенос нагрузки на продольные опоры – например, стропила и балки.',
    },
    {
      article: 94895,
      visible: false,
      id: '6005286fb142d7177f664e3e',
      title: 'Плита OSB-3 (ОСП) Калевала (15x1250x2500мм)',
      cost: 1040,
      club_cost: 1241,
      options: [
        {
          key: 'Производитель',
          value: 'Калевала',
        },
        {
          key: 'Толщина',
          value: '15 мм',
        },
        {
          key: 'Длина',
          value: '2500 мм',
        },
        {
          key: 'Ширина',
          value: '1250 мм',
        },
        {
          key: 'Вес',
          value: '31,6 кг',
        },
      ],
      images: ['5e16c250-18e6-4b0b-b63e-13c89e23450f.jpg', 'f484234e-153d-47c6-ae57-f4734dc20bcc.jpg'],
      path: '/uploads/catalog/5f85ba274a9a5d34e0a45fed/categories/5fb376685225b630baf84723/6005286fb142d7177f664e3e/',
      unit: 'за шт.',
      coef: 1,
      description:
        'OSB (ОСП) - ориентированно-стружечные плиты, материал, получаемый прессованием плоской древесной стружки хвойных пород неделовой древесины с использованием связующего компонента (водостойкая синтетическая смола).Особую популярность плиты ОСП приобрели для изготовления кровельных и стеновых сэндвич-панелей в каркасном домостроении. Их использование сокращает сроки строительства и одновременно позволяет произвести его с большей точностью.ОСП Калевала имеют российские сертификаты соответствия, санитарно-эпидемиологические заключения и сертификат пожарной безопасности. Изделия относятся к классу эмиссии свободного формальдегида Е1. Все показатели качества ОСП Калевала соответствуют европейскому стандарту ЕN-300. ОСП содержат до 90% древесины, доля связующего компонента составляет 10% в составе плиты, что обеспечивает экологическую безопасность материала и сохраняет эксплуатационные свойства древесины: легкость (плотность ОСП – около 650 кг/м3) и низкую теплопроводность.ОСП применяется в конструкциях, где необходим перенос нагрузки на продольные опоры – например, стропила и балки.',
    },
  ])
);
