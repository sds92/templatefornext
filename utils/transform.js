export const transform = (input) => {
// console.log("🚀 ~ file: transform.js ~ line 2 ~ transform ~ input", input)
  let res = [];
  // here we should transform all options to obj entries
  // sort by title
  // sort by sizes or if no sizes - by price
  // group by product
  let temp = [];
  input
    .map((item) => {
      // specifying category
      // trying different options
      let category = '';
      // if (item.options.find(({ key }) => key === 'Производитель')) {
      //   category = item.options.find(({ key }) => key === 'Производитель').value;
      // }
      // if (item.options.find(({ key }) => key === 'Серия')) {
      //   category = item.options.find(({ key }) => key === 'Серия').value;
      // }
      // if (item.options.find(({ key }) => key === 'Сорт')) {
      //   category = item.options.find(({ key }) => key === 'Сорт').value;
      // }
      // if (item.options.find(({ key }) => key === 'Тип')) {
      //   category = item.options.find(({ key }) => key === 'Тип').value;
      // }
      switch (process.env.NEXT_PUBLIC_SITE_URL) {
        case 'pilomateriali.site':
          item.title.includes('Брус стро')
        ? category = 'Брус стороганый'
        : item.title.includes('Евровагонка из хвои')
        ? category = 'Евровагонка из хвои'
        : category = 'aaa'
          break;
      
        default:
          break;
      }
      // specifying sizes
      // 1st - try from options
      // 2nd - try from title
      let sizes = {};
      let tempSizes = '';

      tempSizes = item.title
        .match(/([0-9]+[^0-9][0-9]+[^0-9][0-9]+)/)?.[0]
        .split(/[^0-9]/)
        .map((a) => parseInt(a))
        .sort((a, b) => a - b)
        .reverse();

      if (tempSizes) {
        sizes.a = tempSizes[0];
        sizes.b = tempSizes[1];
        sizes.h = tempSizes[2];
      } else {
        sizes.a = parseInt(item.options.find(({ key }) => key === 'Длина')?.value.replace('мм', ''));
        sizes.b = parseInt(item.options.find(({ key }) => key === 'Ширина')?.value.replace('мм', ''));
        sizes.h = parseInt(item.options.find(({ key }) => key === 'Толщина')?.value.replace('мм', ''));
      }
      sizes.m = parseInt(item.options.find(({ key }) => key === 'Вес')?.value.replace(/кг|мг/, ''));

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
        sizes: sizes,
      };
    })
    .sort((a, b) => {
      return a.category === b.category ? 0 : a.category < b.category ? -1 : 1;
    })
    .reduce((pre, cur, i) => {
      let preCategory = null;
      // console.log("🚀 ~ pre",i, pre)

      if (pre.category) {
        preCategory = pre.category;
      } else if (pre[0].category) {
        preCategory = pre[0]?.category;
      }
      console.log("🚀 ~ preCategory",i, preCategory)
      if (preCategory === cur.category) {
        if (i === input.length - 1) {
          return res.push(Array.prototype.concat(cur, pre));
        }
        return Array.prototype.concat(cur, pre);
      } else {
        res.push([cur]);
        // return cur
      }
      res.push(pre.sort((a, b) => a.sizes.h - b.sizes.h || a.sizes.a - b.sizes.a || a.sizes.b - b.sizes.b));
      return cur;
    });
    // res = temp
    return res
};