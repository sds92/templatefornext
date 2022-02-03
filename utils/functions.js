export const plitaosb3ru = (inputArr) => {
  // console.log('🚀 ~ file: functions.js ~ line 2 ~ plitaosb3ru ~ inputArr', inputArr);
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
      if (cur.title === pre.title || cur.title === pre.reverse()[0]?.title) {
        if (i === inputArr.length - 1) {
          arr.push(Array.prototype.concat(cur, pre));
          return arr;
        } else {
          return Array.prototype.concat(cur, pre);
        }
      } else {
        arr.push(pre);
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

export const belplit24ru = (inputArr, appArr) => {
  let arr = [];
  return inputArr
    .map((item) => ({
      title: item.options.find(({ key }) => key === 'Серия').value,
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
    }))
    .sort((a, b) => {
      return a.title === b.title ? 0 : a.title < b.title ? -1 : 1;
    })
    .reduce((pre, cur, i) => {
      if (cur.title === pre.title || cur.title === pre.reverse()[0]?.title) {
        if (i === inputArr.length - 1) {
          arr.push(Array.prototype.concat(cur, pre));
          return arr;
        } else {
          return Array.prototype.concat(cur, pre);
        }
      } else {
        arr.push(pre);
        return cur;
      }
    })
    .map((item) =>
      item
        .sort((a, b) => a.sizes.h - b.sizes.h || a.sizes.a - b.sizes.a || a.sizes.b - b.sizes.b)
        .reduce(
          (pre, cur) => {
            pre.sizes.push(cur.sizes);
            pre.prices.push(cur.prices);
            pre.density.push(cur.density);
            pre.connectionType.push(cur.connectionType);
            pre.priceFor.push(cur.priceFor);
            pre.show.push(cur.show);
            pre.articles.push(cur.articles);
            pre.ids.push(cur.ids);
            pre.coef.push(cur.coef);
            return pre;
          },
          {
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
