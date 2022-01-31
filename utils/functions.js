export const normalizeData = (inputArr, appArr) => {
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
    )
    .reduce((pre, cur, i) => {
      let index = null;
      let temp = pre.find((item, curI) => {
        if (item.name === cur.title.toLowerCase()) {
          index = curI;
          return true;
        }
      });
      if (temp) {
        temp.density = cur.density;
        temp.sizesA = cur.sizes;
        temp.sizes = cur.sizes.map((item) => `${item.a}x${item.b}x${item.h}мм`);
        temp.connectionType = cur.connectionType;
        temp.prices = [
          [
            cur.prices,
            'руб/м2',
            cur.prices.map((item, i) => {
              return item * cur.coef[i];
            }),
            'руб/шт',
          ],
        ];
        pre.splice(index, 1, temp);
      }
      return pre;
    }, appArr);
};
