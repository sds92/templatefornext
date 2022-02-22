export const transform = (input) => {
  // console.log("🚀 ~ file: transform.js ~ line 2 ~ transform ~ input", input)
  let res = [];
  // here we should transform all options to obj entries
  // sort by title
  // sort by sizes or if no sizes - by price
  // group by product
  let temp = [];
  let categories = input
    .map((item) => {
      // specifying category
      // trying different options
      let category = '';
      let subcategory = '';
      let sizes = {};
      let tempSizes = '';
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
          // set category
          /Брус стро/.test(item.title)
            ? (category = 'Брус строганный')
            : /Евровагонка из хвои/.test(item.title)
            ? (category = 'Евровагонка')
            : /Имитация бруса/.test(item.title)
            ? (category = 'Имитация бруса')
            : /Панель штиль|Панель Штиль/.test(item.title)
            ? (category = 'Панель штиль')
            : /Половая доска/.test(item.title)
            ? (category = 'Половая доска')
            : (category = 'Без категории');
          // set subcategory
          if (item.options.find(({ key }) => key === 'Сорт')) {
            subcategory = item.options.find(({ key }) => key === 'Сорт').value;
          }
          // set sizes
          sizes.a = parseInt(item.options.find(({ key }) => key === 'Длина')?.value.replace('мм', ''));
          sizes.b = parseInt(item.options.find(({ key }) => key === 'Ширина')?.value.replace('мм', ''));
          sizes.h = parseInt(item.options.find(({ key }) => key === 'Толщина')?.value.replace('мм', ''));
          break;

        default:
          break;
      }
      // specifying sizes
      // 1st - try from options
      // 2nd - try from title

      // tempSizes = item.title
      //   .match(/([0-9]+[^0-9][0-9]+[^0-9][0-9]+)/)?.[0]
      //   .split(/[^0-9]/)
      //   .map((a) => parseInt(a))
      //   .sort((a, b) => a - b)
      //   .reverse();

      // if (tempSizes) {
      //   sizes.a = tempSizes[0];
      //   sizes.b = tempSizes[1];
      //   sizes.h = tempSizes[2];
      // } else {
      //   sizes.a = parseInt(item.options.find(({ key }) => key === 'Длина')?.value.replace('мм', ''));
      //   sizes.b = parseInt(item.options.find(({ key }) => key === 'Ширина')?.value.replace('мм', ''));
      //   sizes.h = parseInt(item.options.find(({ key }) => key === 'Толщина')?.value.replace('мм', ''));
      // }
      // sizes.m = parseInt(item.options.find(({ key }) => key === 'Вес')?.value.replace(/кг|мг/, ''));

      return {
        subcategory: subcategory,
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
      if (i === input.length - 1) {
        // console.log("🚀 ~ file: functions.js ~ line 31 ~ .reduce ~ arr", arr)
        res.push(Array.prototype.concat(cur, pre));
        return res;
      }
      let preCategory = null;
      if (pre.category) {
        preCategory = pre.category;
      }
      if (pre[0]?.category) {
        preCategory = pre[0]?.category;
      }
      if (cur.category === preCategory) {
        if (i === input.length + 1) {
          res.push(Array.prototype.concat(cur, pre));
          return res;
        } else {
          return Array.prototype.concat(cur, pre);
        }
      } else {
        if (pre[0]) {
          res.push(pre);
        } else {
          res.push([pre]);
        }
        return cur;
      }
    });
  // res = temp
  return res;
};
