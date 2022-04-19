export const productsController = {
  cities: [
    ['Москва', 'square'],
    // ['СПБ', 'spb'],
    // ['Казань', 'kazan'],
    // ['Краснодар', 'krasnodar'],
    // ['Ростов', 'rostov'],
    // ['Волгоград', 'volvograd'],
    // ['Астрахань', 'astrahan'],
    // ['Крым', 'crimea'],
  ],
  copy: (arr) => {
    let res = JSON.parse(JSON.stringify(arr));
    return res;
  },
  getProductById: (products, id) => {
    return products.find((item) => item.id === parseInt(id));
  },
  getProductPositionById: (products, id) => {
    let product_position = null;
    productsController.copy(products).find((item, i) => {
      if (item.id === parseInt(id)) {
        product_position = i;
        return true;
      }
    });
    return product_position;
  },
  getInitPrices: (cities) => {
    return cities.map((item) => ({ city: item[1], value: null }));
  },
  setDesc: (products, product_id, { title, value }) => {
    let product = productsController.getProductById(products, product_id);
    if (product.desc.find((item) => item.title === title)) {
      product.desc.find((item) => item.title === title).value = value;
    } else {
      product.desc.push({ title, value });
    }
    let product_position = productsController.getProductPositionById(products, product_id);
    products.splice(product_position, 1, product);
    return products;
  },
  setTitle: (products, product_id, title) => {
    let product = productsController.getProductById(products, product_id);
    product.info.title = title;
    let product_position = productsController.getProductPositionById(products, product_id);
    products.splice(product_position, 1, product);
    return products;
  },
  setPosition: (products, product_id, position) => {
    let product = productsController.getProductById(products, product_id);
    product.info.position = parseInt(position);
    let product_position = productsController.getProductPositionById(products, product_id);
    products.splice(product_position, 1, product);
    return products;
  },
};
