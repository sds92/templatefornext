import { INTERNALS } from 'next/dist/server/web/spec-extension/request';

export const transform = (input) => {
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
      // console.log("🚀 ~ file: transform.js ~ line 37 ~ .reduce ~ pre", pre)
      let preCategory = null;
      if (pre.category) {
        preCategory = pre.category;
      } else if (pre.reverse()[0].category) {
        preCategory = pre[0]?.category;
      }
      if (preCategory === cur.category) {
        console.log("🚀 ~ file ~ preCategory", i, preCategory)
        return Array.prototype.concat(cur, pre);
      }
      res.push(pre)
      console.log("🚀 ~ file ~ preCategory", i, res)
      return cur
    });
  // console.log('🚀 ~ file: transform.js ~ line 26 ~ temp=input.map ~ temp', temp);
};

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
