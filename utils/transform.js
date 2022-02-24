export const transform = (input) => {
  // console.log("🚀 ~ file: transform.js ~ line 2 ~ transform ~ input", input)
  let res = [];
  // here we should transform all options to obj entries
  // sort by title
  // sort by sizes or if no sizes - by price
  // group by product
  let nested = false;
  let catalog = 'standard';
  let data = [];
  let subcatigories = [];
  let categories = input
    .map((item) => {
      // specifying category
      // trying different options
      let category = '';
      let subcategory = '';
      let sizes = {};
      let imgs = [];
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
        // =======================================================
        //! pilomateriali.site
        // =======================================================

        case 'pilomateriali.site': {
          // >>>> CATEGORY
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

          // >>>> SUBCATEGORY
          if (item.options.find(({ key }) => key === 'Сорт')) {
            // subcategory = item.options.find(({ key }) => key === 'Сорт').value;
            /^AB$|^АВ$/.test(item.options.find(({ key }) => key === 'Сорт').value)
              ? (subcategory = 'Сорт AB')
              : /^A$|^А$/.test(item.options.find(({ key }) => key === 'Сорт').value)
              ? (subcategory = 'Сорт A')
              : /^B$|^В$/.test(item.options.find(({ key }) => key === 'Сорт').value)
              ? (subcategory = 'Сорт B')
              : (subcategory = 'Другие');
          }

          // >>>> SIZES
          sizes.a = parseInt(item.options.find(({ key }) => key === 'Длина')?.value.replace('мм', ''));
          sizes.b = parseInt(item.options.find(({ key }) => key === 'Ширина')?.value.replace('мм', ''));
          sizes.h = parseInt(item.options.find(({ key }) => key === 'Толщина')?.value.replace('мм', ''));

          // >>>> IMGS
          imgs = [item.path + item.images[0], item.path + item.images[1]];
          nested = true;
          break;
        }
        // =======================================================
        //! betoniebloki.store
        // =======================================================
        case 'betoniebloki.store': {
          // >>>> CATEGORY
          /D500/.test(item.title)
            ? (category = 'D500')
            : /D600/.test(item.title)
            ? (category = 'D600')
            : (category = 'Без категории');

          // >>>> SUBCATEGORY
          /В3.5|B3.5/.test(item.title)
            ? (subcategory = 'В3.5')
            : /B2.5|В2.5/.test(item.title)
            ? (subcategory = 'B2.5')
            : /В5|В5/.test(item.title)
            ? (subcategory = 'В5')
            : (subcategory = 'Другие');

          // >>>> SIZES

          tempSizes = item.title
            .match(/([0-9]+[^0-9][0-9]+[^0-9][0-9]+)/)?.[0]
            .split(/[^0-9]/)
            .map((a) => parseInt(a))
            .sort((a, b) => a - b)
            .reverse();
          sizes.a = tempSizes[0];
          sizes.b = tempSizes[1];
          sizes.h = tempSizes[2];

          // >>>> IMGS
          imgs = [item.path + item.images[0], item.path + item.images[1]];
          nested = true;
          break;
        }

        // =======================================================
        //! kronospan.site
        // =======================================================
        case 'kronospan.site': {
          // >>>> CATEGORY
          /Color|Slate Grey/.test(item.title)
            ? (category = 'Color')
            : /Metal/.test(item.title)
            ? (category = 'Metal')
            : /Bosco/.test(item.title)
            ? (category = 'Bosco Vintage')
            : /Stones/.test(item.title)
            ? (category = 'Stones')
            : /Половая доска/.test(item.title)
            ? (category = 'Половая доска')
            : (category = 'Без категории');

          // >>>> SUBCATEGORY

          // >>>> SIZES

          // >>>> IMGS
          imgs = [item.path + item.images[0], item.path + item.images[1]];
          nested = false;
          break;
        }

        // =======================================================
        //! shinglas.store
        // =======================================================

        case 'shinglas.store': {
          // >>>> CATEGORY
          try {
            category = item.options.find(({ key }) => key === 'Количество слоев').value;
          } catch (error) {
            category = 'Другие';
          }

          // >>>> SUBCATEGORY
          try {
            subcategory = [
              item.options.find(({ key }) => key === 'Коллекция').value,
              item.options.find(({ key }) => key === 'Цвет').value,
            ];
          } catch (error) {
            subcategory = ['Другие'];
          }

          // >>>> SIZES
          sizes.a = parseInt(item.options.find(({ key }) => key === 'Длина')?.value.replace('мм', ''));
          sizes.b = parseInt(item.options.find(({ key }) => key === 'Ширина')?.value.replace('мм', ''));
          sizes.h = parseInt(item.options.find(({ key }) => key === 'Толщина')?.value.replace('мм', ''));

          // >>>> IMGS
          imgs = [item.path + item.images[0], item.path + item.images[1]];
          nested = true;
          catalog = 'shinglas';
          break;
        }
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
        imgs: imgs,
        sizes: sizes,
        title: item.title,
        price: item.cost,
        priceFor: item.unit,
        show: item.visible,
        article: item.article,
        id: item.id,
        coef: item.coef,
      };
    })
    .sort((a, b) => {
      return a.category === b.category ? 0 : a.category < b.category ? -1 : 1;
    })
    .reduce((pre, cur, i) => {
      if (i === input.length - 1) {
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
          res.push(
            Array.prototype
              .concat(cur, pre)
              .sort((a, b) => a.sizes.h - b.sizes.h || a.sizes.a - b.sizes.a || a.sizes.b - b.sizes.b)
          );
          return res;
        } else {
          return Array.prototype.concat(cur, pre);
        }
      } else {
        if (pre[0]) {
          res.push(
            pre.sort((a, b) => a.sizes.h - b.sizes.h || a.sizes.a - b.sizes.a || a.sizes.b - b.sizes.b)
          );
        } else {
          res.push([pre]);
        }
        return cur;
      }
    })
    .map((item, index) => {
      return {
        category: item[0].category,
        id: index,
        items:
          catalog === 'standard'
            ? item.reduce(
                (pre, cur) => {
                  let regex = new RegExp(cur.subcategory);
                  if (!regex.test(pre)) {
                    return Array.prototype.concat(pre, cur.subcategory);
                  }
                  return pre;
                },
                [item[0].subcategory]
              )
            : item.reduce(
                (pre, cur) => {
                  try {
                    let regex = new RegExp(cur.subcategory[1]);
                    if (!regex.test(pre.find((item) => item[0] === cur.subcategory[0])[1])) {
                      pre.find((item) => item[0] === cur.subcategory[0])[1].push(cur.subcategory[1]);
                    }
                  } catch (err) {
                    pre.push([
                      cur.subcategory[0], //коллекция
                      [cur.subcategory[1]], //цвета
                    ]);
                  }
                  return pre;
                },
                [
                  [
                    item[0].subcategory[0], //коллекция
                    [item[0].subcategory[1]], //цвета
                  ],
                ]
              ),
      };
    });

  return [res, categories, nested, (data = [catalog])];
};
