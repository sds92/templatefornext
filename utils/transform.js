import { INTERNALS } from 'next/dist/server/web/spec-extension/request';


const transform = (input) => {
  console.log('🚀 ~ file: transform.js ~ line 2 ~ transform ~ input', input);
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
      if (pre.category) {
        preCategory = pre.category;
      } else if (pre.reverse()[0].category) {
        preCategory = pre[0]?.category;
      }
      if (preCategory === cur.category) {
        if (i === input.length - 1) {
          return res.push(Array.prototype.concat(cur, pre))
        }
        return Array.prototype.concat(cur, pre);
      }
      res.push(pre)
      return cur
    });
};

transform(input = [{
  article: 86818,
  visible: true,
  id: '600526f6b142d7177f664d97',
  title: 'Плита OSB-3 (ОСП) Талион (18х1250х2500мм)',
  cost: 1300,
  club_cost: 1577,
  options: [ [Object], [Object], [Object], [Object], [Object] ],
  images: [
    'faa996b5-ff8b-4fd1-9f23-078a2cfe4ffc.jpg',
    '433ea715-2637-4dad-85a6-42fe060778df.jpg'
  ],
  path: '/uploads/catalog/5f85ba274a9a5d34e0a45fed/categories/5fb376685225b630baf8471d/600526f6b142d7177f664d97/',
  unit: 'за шт.',
  coef: 1,
  description: 'Ориентированно-стружечная плита (OSB, ОСП) — многослойный лист, образованный прессованием прямоугольной плоской щепы в условиях высокого давления и температуры, с использованием склеивающей водостойкой смолы.'
},
{
  article: 86820,
  visible: true,
  id: '6005270cb142d7177f664dab',
  title: 'Плита OSB-3 (ОСП) Талион (9х1250х2500мм)',
  cost: 670,
  club_cost: 764,
  options: [ [Object], [Object], [Object], [Object], [Object] ],
  images: [
    '17a02bb0-7878-4210-affa-75ac50e9830d.jpg',
    '9874002b-9b19-4b85-b82c-986ee925a97c.jpg'
  ],
  path: '/uploads/catalog/5f85ba274a9a5d34e0a45fed/categories/5fb376685225b630baf8471d/6005270cb142d7177f664dab/',
  unit: 'за шт.',
  coef: 1,
  description: 'Ориентированно-стружечная плита (OSB, ОСП) — многослойный лист, образованный прессованием прямоугольной плоской щепы в условиях высокого давления и температуры, с использованием склеивающей водостойкой смолы.'
},
{
  article: 88795,
  visible: false,
  id: '6005282eb142d7177f664e12',
  title: 'Плита OSB-3 (ОСП) Калевала (12x1250x2500мм)',
  cost: 845,
  club_cost: 922,
  options: [ [Object], [Object], [Object], [Object], [Object] ],
  images: [
    'b5b48f1e-3063-4802-9b8f-6b5b96a605b9.jpg',
    '76b3199c-27a7-4ac6-9c4e-ffa4e89194f6.jpg'
  ],
  path: '/uploads/catalog/5f85ba274a9a5d34e0a45fed/categories/5fb376685225b630baf84723/6005282eb142d7177f664e12/',
  unit: 'за шт.',
  coef: 1,
  description: 'OSB (ОСП) - ориентированно-стружечные плиты, материал, получаемый прессованием плоской древесной стружки хвойных пород неделовой древесины с использованием связующего компонента (водостойкая синтетическая смола).Особую популярность плиты ОСП приобрели для изготовления кровельных и стеновых сэндвич-панелей в каркасном домостроении. Их использование сокращает сроки строительства и одновременно позволяет произвести его с большей точностью.ОСП Калевала имеют российские сертификаты соответствия, санитарно-эпидемиологические заключения и сертификат пожарной безопасности. Изделия относятся к классу эмиссии свободного формальдегида Е1. Все показатели качества ОСП Калевала соответствуют европейскому стандарту ЕN-300. ОСП содержат до 90% древесины, доля связующего компонента составляет 10% в составе плиты, что обеспечивает экологическую безопасность материала и сохраняет эксплуатационные свойства древесины: легкость (плотность ОСП – около 650 кг/м3) и низкую теплопроводность.ОСП применяется в конструкциях, где необходим перенос нагрузки на продольные опоры – например, стропила и балки.'
},
{
  article: 88800,
  visible: false,
  id: '60052868b142d7177f664e39',
  title: 'Плита OSB-3 (ОСП) Калевала (9x1250x2500мм)',
  cost: 670,
  club_cost: 720,
  options: [ [Object], [Object], [Object], [Object], [Object] ],
  images: [
    'b1fa36c7-2e1f-4f3a-9dad-b510ab671f34.jpg',
    'db8237c5-c7ff-44bd-bb45-065006ae67f3.jpg'
  ],
  path: '/uploads/catalog/5f85ba274a9a5d34e0a45fed/categories/5fb376685225b630baf84723/60052868b142d7177f664e39/',
  unit: 'за шт.',
  coef: 1,
  description: 'OSB (ОСП) - ориентированно-стружечные плиты, материал, получаемый прессованием плоской древесной стружки хвойных пород неделовой древесины с использованием связующего компонента (водостойкая синтетическая смола).Особую популярность плиты ОСП приобрели для изготовления кровельных и стеновых сэндвич-панелей в каркасном домостроении. Их использование сокращает сроки строительства и одновременно позволяет произвести его с большей точностью.ОСП Калевала имеют российские сертификаты соответствия, санитарно-эпидемиологические заключения и сертификат пожарной безопасности. Изделия относятся к классу эмиссии свободного формальдегида Е1. Все показатели качества ОСП Калевала соответствуют европейскому стандарту ЕN-300. ОСП содержат до 90% древесины, доля связующего компонента составляет 10% в составе плиты, что обеспечивает экологическую безопасность материала и сохраняет эксплуатационные свойства древесины: легкость (плотность ОСП – около 650 кг/м3) и низкую теплопроводность.ОСП применяется в конструкциях, где необходим перенос нагрузки на продольные опоры – например, стропила и балки.'
},
{
  article: 94895,
  visible: false,
  id: '6005286fb142d7177f664e3e',
  title: 'Плита OSB-3 (ОСП) Калевала (15x1250x2500мм)',
  cost: 1090,
  club_cost: 1241,
  options: [ [Object], [Object], [Object], [Object], [Object] ],
  images: [
    '5e16c250-18e6-4b0b-b63e-13c89e23450f.jpg',
    'f484234e-153d-47c6-ae57-f4734dc20bcc.jpg'
  ],
  path: '/uploads/catalog/5f85ba274a9a5d34e0a45fed/categories/5fb376685225b630baf84723/6005286fb142d7177f664e3e/',
  unit: 'за шт.',
  coef: 1,
  description: 'OSB (ОСП) - ориентированно-стружечные плиты, материал, получаемый прессованием плоской древесной стружки хвойных пород неделовой древесины с использованием связующего компонента (водостойкая синтетическая смола).Особую популярность плиты ОСП приобрели для изготовления кровельных и стеновых сэндвич-панелей в каркасном домостроении. Их использование сокращает сроки строительства и одновременно позволяет произвести его с большей точностью.ОСП Калевала имеют российские сертификаты соответствия, санитарно-эпидемиологические заключения и сертификат пожарной безопасности. Изделия относятся к классу эмиссии свободного формальдегида Е1. Все показатели качества ОСП Калевала соответствуют европейскому стандарту ЕN-300. ОСП содержат до 90% древесины, доля связующего компонента составляет 10% в составе плиты, что обеспечивает экологическую безопасность материала и сохраняет эксплуатационные свойства древесины: легкость (плотность ОСП – около 650 кг/м3) и низкую теплопроводность.ОСП применяется в конструкциях, где необходим перенос нагрузки на продольные опоры – например, стропила и балки.'
},
{
  article: 94896,
  visible: false,
  id: '6005283db142d7177f664e1e',
  title: 'Плита OSB-3 (ОСП) Калевала (18x1250x2500мм)',
  cost: 1300,
  club_cost: 1486,
  options: [ [Object], [Object], [Object], [Object], [Object] ],
  images: [
    'a7d44152-3412-48bc-9601-bf146f3dcb41.jpg',
    'd8b8ff34-4cbc-4f5a-9811-0c89043c73db.jpg'
  ],
  path: '/uploads/catalog/5f85ba274a9a5d34e0a45fed/categories/5fb376685225b630baf84723/6005283db142d7177f664e1e/',
  unit: 'за шт.',
  coef: 1,
  description: 'OSB (ОСП) - ориентированно-стружечные плиты, материал, получаемый прессованием плоской древесной стружки хвойных пород неделовой древесины с использованием связующего компонента (водостойкая синтетическая смола).Особую популярность плиты ОСП приобрели для изготовления кровельных и стеновых сэндвич-панелей в каркасном домостроении. Их использование сокращает сроки строительства и одновременно позволяет произвести его с большей точностью.ОСП Калевала имеют российские сертификаты соответствия, санитарно-эпидемиологические заключения и сертификат пожарной безопасности. Изделия относятся к классу эмиссии свободного формальдегида Е1. Все показатели качества ОСП Калевала соответствуют европейскому стандарту ЕN-300. ОСП содержат до 90% древесины, доля связующего компонента составляет 10% в составе плиты, что обеспечивает экологическую безопасность материала и сохраняет эксплуатационные свойства древесины: легкость (плотность ОСП – около 650 кг/м3) и низкую теплопроводность.ОСП применяется в конструкциях, где необходим перенос нагрузки на продольные опоры – например, стропила и балки.'
}])

export const plitaosb3ru = (inputArr) => {
  let arr = [];
  return inputArr
    .map((item) => ({
      title: item.options.find(({ key }) => key === 'Производитель').value,
      infos: item.title,
      // sizes: {
      //   a: parseInt(item.options.find(({ key }) => key === 'Длина').value.replace(' мм', '')),
      //   b: parseInt(item.options.find(({ key }) => key === 'Ширина').value.replace(' мм', '')),
      //   h: parseInt(item.options.find(({ key }) => key === 'Толщина').value.replace(' мм', '')),
      // },
      prices: item.cost,
      priceFor: item.unit,
      show: item.visible,
      articles: item.article,
      ids: item.id,
      coef: item.coef,
      imgs: item.images,
      paths: item.path,
    }))
    .sort((a, b) => {
      return a.title === b.title ? 0 : a.title < b.title ? -1 : 1;
    })
    .reduce((pre, cur, i) => {
      let preTitle = null;
      if (pre.title) {
        preTitle = pre.title;
      }
      if (pre[0]?.title) {
        preTitle = pre[0]?.title;
      }
      if (cur.title === preTitle) {
        if (i === inputArr.length - 1) {
          arr.push(Array.prototype.concat(cur, pre));
          return arr;
        } else {
          return Array.prototype.concat(cur, pre);
        }
      } else {
        if (pre[0]) {
          arr.push(pre);
        } else {
          arr.push([pre]);
        }
        return cur;
      }
    })
    .map((item) =>
      item
        // .sort((a, b) => a.sizes.h - b.sizes.h || a.sizes.a - b.sizes.a || a.sizes.b - b.sizes.b)
        .reduce(
          (pre, cur) => {
            // pre.sizes.push(cur.sizes);
            pre.infos.push(cur.infos);
            pre.prices.push(cur.prices);
            pre.priceFor.push(cur.priceFor);
            pre.show.push(cur.show);
            pre.articles.push(cur.articles);
            pre.ids.push(cur.ids);
            pre.coef.push(cur.coef);
            pre.imgs.push(cur.imgs);
            pre.paths.push(cur.paths);
            return pre;
          },
          {
            title: item[0].title,
            // sizes: [],
            infos: [],
            prices: [],
            priceFor: [],
            show: [],
            articles: [],
            ids: [],
            coef: [],
            imgs: [],
            paths: [],
          }
        )
    );
  // return inputArr.map((inputArrItem) => {
  //   let tmpSizes = inputArrItem.sizes.map((tmpSizesItem) => {
  //     return tmpSizesItem[0]?.slice(0, tmpSizesItem[0].indexOf('мм')).split(/х|x/);
  //   });
  //   let connectionTypes = inputArrItem.sizes.map((tmpSizesItem) => {
  //     return tmpSizesItem[0]?.slice(tmpSizesItem[0].indexOf('(') + 1, tmpSizesItem[0].indexOf(')'));
  //   });
  //   let tmpSizes2 = tmpSizes.map((tmpSizes2Item) => ({
  //     a: parseInt(tmpSizes2Item[0].replace(' ', '')),
  //     b: parseInt(tmpSizes2Item[1].replace(' ', '')),
  //     h: parseInt(tmpSizes2Item[2].replace(' ', '')),
  //   }));
  //   inputArrItem.sizes = tmpSizes2;
  //   inputArrItem.connectionTypes = connectionTypes;
  //   return inputArrItem;
  // });
};
export const belplit24ru = (inputArr) => {
  // console.log("🚀 ~ file: functions.js ~ line 83 ~ belplit24ru ~ inputArr", inputArr)
  let arr = [];
  return inputArr
    .map((item) => ({
      title: item.options.find(({ key }) => key === 'Серия').value,
      infos: item.title,
      sizes: {
        a: parseInt(item.options.find(({ key }) => key === 'Длина').value.replace(' мм', '')),
        b: parseInt(item.options.find(({ key }) => key === 'Ширина').value.replace(' мм', '')),
        h: parseInt(item.options.find(({ key }) => key === 'Толщина').value.replace(' мм', '')),
      },
      connectionType: item.options.find(({ key }) => key === 'Вид кромки').value,
      prices: item.cost,
      priceFor: item.unit,
      density: item.options.find(({ key }) => key === 'Плотность').value,
      show: item.visible,
      articles: item.article,
      ids: item.id,
      coef: item.coef,
      imgs: item.images,
      paths: item.path,
    }))
    .sort((a, b) => {
      return a.title === b.title ? 0 : a.title < b.title ? -1 : 1;
    })
    .reduce((pre, cur, i) => {
      let preTitle = null;
      if (pre.title) {
        preTitle = pre.title;
      }
      if (pre[0]?.title) {
        preTitle = pre[0]?.title;
      }
      if (cur.title === preTitle) {
        if (i === inputArr.length - 1) {
          arr.push(Array.prototype.concat(cur, pre));
          return arr;
        } else {
          return Array.prototype.concat(cur, pre);
        }
      } else {
        if (pre[0]) {
          arr.push(pre);
        } else {
          arr.push([pre]);
        }
        return cur;
      }
    })
    .map((item) =>
      item
        .sort((a, b) => a.sizes.h - b.sizes.h || a.sizes.a - b.sizes.a || a.sizes.b - b.sizes.b)
        .reduce(
          (pre, cur) => {
            pre.infos.push(cur.infos);
            pre.sizes.push(cur.sizes);
            pre.prices.push(cur.prices);
            pre.density.push(cur.density);
            pre.connectionType.push(cur.connectionType);
            pre.priceFor.push(cur.priceFor);
            pre.show.push(cur.show);
            pre.articles.push(cur.articles);
            pre.ids.push(cur.ids);
            pre.coef.push(cur.coef);
            pre.imgs.push(cur.imgs);
            pre.paths.push(cur.paths);
            return pre;
          },
          {
            infos: [],
            title: item[0].title,
            sizes: [],
            prices: [],
            density: [],
            connectionType: [],
            priceFor: [],
            show: [],
            articles: [],
            ids: [],
            coef: [],
            imgs: [],
            paths: [],
          }
        )
    );
  // .reduce((pre, cur, i) => {
  //   let index = null;
  //   let temp = pre.find((item, curI) => {
  //     if (item.name === cur.title.toLowerCase()) {
  //       index = curI;
  //       return true;
  //     }
  //   });
  //   if (temp) {
  //     temp.density = cur.density;
  //     temp.sizesA = cur.sizes;
  //     temp.sizes = cur.sizes.map((item) => `${item.a}x${item.b}x${item.h}мм`);
  //     temp.connectionType = cur.connectionType;
  //     temp.prices = [
  //       [
  //         cur.prices,
  //         'руб/м2',
  //         cur.prices.map((item, i) => {
  //           return item * cur.coef[i];
  //         }),
  //         'руб/шт',
  //       ],
  //     ];
  //     pre.splice(index, 1, temp);
  //   }
  //   return pre;
  // }, appArr);
};

export const normalizeData2 = (inputArr) => {
  return inputArr.map((inputArrItem) => {
    let tmpSizes = inputArrItem.sizes.map((tmpSizesItem) => {
      return tmpSizesItem[0]?.slice(0, tmpSizesItem[0].indexOf('мм')).split(/х|x/);
    });
    let connectionTypes = inputArrItem.sizes.map((tmpSizesItem) => {
      return tmpSizesItem[0]?.slice(tmpSizesItem[0].indexOf('(') + 1, tmpSizesItem[0].indexOf(')'));
    });
    let tmpSizes2 = tmpSizes.map((tmpSizes2Item) => ({
      a: parseInt(tmpSizes2Item[0].replace(' ', '')),
      b: parseInt(tmpSizes2Item[1].replace(' ', '')),
      h: parseInt(tmpSizes2Item[2].replace(' ', '')),
    }));
    inputArrItem.sizes = tmpSizes2;
    inputArrItem.connectionTypes = connectionTypes;
    return inputArrItem;
  });
};
